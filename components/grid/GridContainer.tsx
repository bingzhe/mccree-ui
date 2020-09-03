import * as React from "react";
import classNames from "classnames";
import ResponsiveObserve, { Breakpoint, ScreenMap, responsiveArray } from "./responsiveObserve";
import { tuple } from "../utils/type";
import { ConfigContext } from "../config-provider";
import { GridContext } from "./GridContext";

const { useState, useEffect, useCallback, useContext } = React;

const ContainerAligns = tuple("top", "middle", "bottom", "stretch");
const ContainerJustify = tuple("start", "end", "center", "space-around", "space-between");

export type Gutter = number | Partial<Record<Breakpoint, number>>;
export interface GridContainerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    gutter?: Gutter | [Gutter, Gutter];
    align?: typeof ContainerAligns[number];
    justify?: typeof ContainerJustify[number];
}

const GridContainer: React.FC<GridContainerProps> = (props) => {
    const {
        gutter: gutterProp,
        align,
        justify,
        className,
        style: styleProp,
        children,
        ...restProps
    } = props;

    const [screens, setScreens] = useState<ScreenMap>({
        xs: true,
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true
    });

    useEffect(() => {
        const token = ResponsiveObserve.subscribe((screens) => {
            if (
                (!Array.isArray(gutterProp) && typeof gutterProp === "object") ||
                (Array.isArray(gutterProp) &&
                    (typeof gutterProp[0] === "object" || typeof gutterProp[1] === "object"))
            ) {
                setScreens(screens);
            }
            console.log(screens);
        });
        return () => {
            ResponsiveObserve.unsubscribe(token);
        };
    }, [gutterProp]);

    const getGutter = useCallback(() => {
        const results: [number, number] = [0, 0];
        const normalizedGutter = Array.isArray(gutterProp) ? gutterProp : [gutterProp, 0];
        normalizedGutter.forEach((g, index) => {
            if (typeof g === "object") {
                // eslint-disable-next-line @typescript-eslint/prefer-for-of
                for (let i = 0; i < responsiveArray.length; i++) {
                    const breakpoint = responsiveArray[i];

                    if (screens[breakpoint] && g[breakpoint] !== undefined) {
                        results[index] = g[breakpoint] as number;
                        break;
                    }
                }
            } else {
                results[index] = g || 0;
            }
        });

        return results;
    }, [gutterProp, screens]);

    const { getPrefixCls } = useContext(ConfigContext);
    const prefixCls = getPrefixCls("grid-container");
    const gutter = getGutter();
    const classes = classNames(prefixCls, className, {
        [`${prefixCls}-${justify}`]: justify,
        [`${prefixCls}-${align}`]: align
    });

    const style = {
        ...(gutter[0] > 0 ? { marginLeft: gutter[0] / -2, marginRight: gutter[0] / -2 } : {}),
        ...(gutter[1] > 0 ? { marginTop: gutter[1] / -2, marginBottom: gutter[1] / 2 } : {}),
        ...styleProp
    };

    // console.log("gutter", gutter);
    // console.log("classes", classes);
    // console.log("style", style);
    return (
        <GridContext.Provider value={{ gutter }}>
            <div className={classes} style={style} {...restProps}>
                {children}
            </div>
        </GridContext.Provider>
    );
};

export default GridContainer;
