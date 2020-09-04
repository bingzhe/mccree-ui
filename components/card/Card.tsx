import * as React from "react";
import classNames from "classnames";
import { tuple } from "../utils/type";
import { ConfigContext } from "../config-provider";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import { hasChild, pickChild } from "../utils/collection";

const { useContext } = React;

const CardTypes = tuple("primary", "secondary", "success", "warning", "error", "info");
export type CardType = typeof CardTypes[number];
const VariantTypes = tuple("contained", "outlined");
export type VariantType = typeof VariantTypes[number];

interface CardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    variant?: VariantType;
    type?: CardType;
    shadow?: boolean;
    width?: string;
    hoverable?: boolean;
}

type CardFC = React.FC<CardProps> & {
    Content: typeof CardContent;
    Footer: typeof CardFooter;
    Actions: typeof CardFooter;
};

const Card: CardFC = (props) => {
    const {
        variant,
        type,
        shadow,
        width,
        style: styleProp,
        hoverable,
        className,
        children,
        ...restProps
    } = props;

    const [withoutFooterChildren, footerChildren] = pickChild(children, CardFooter);
    const hasContent = hasChild(withoutFooterChildren, CardContent);

    const { getPrefixCls } = useContext(ConfigContext);
    const prefixCls = getPrefixCls("card");

    const classes = classNames(prefixCls, className, {
        [`${prefixCls}-${variant}`]: variant,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-shadow`]: shadow,
        [`${prefixCls}-hoverable`]: hoverable
    });

    const style = {
        ...styleProp,
        width: width
    };

    console.log("classes", classes);

    return (
        <div className={classes} style={style} {...restProps}>
            {hasContent ? (
                withoutFooterChildren
            ) : (
                <CardContent>{withoutFooterChildren}</CardContent>
            )}
            {footerChildren}
        </div>
    );
};

Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Actions = CardFooter;
Card.displayName = "MR_Card";

export default Card;
