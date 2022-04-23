import * as React from "react";
import classNames from "classnames";
import { ConfigContext } from "../config-provider";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import { hasChild, pickChild } from "../utils/collection";
import { CardFC, defaultProps } from "./Card.type";

const { useContext } = React;

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
Card.defaultProps = defaultProps;

export default Card;
