import * as React from "react";
import { isFragment } from "react-is";

export const hasChild = (children: React.ReactNode | undefined, child: React.ElementType) => {
    const types = React.Children.map(children, (item) => {
        if (!React.isValidElement(item)) return null;
        return item.type;
    });

    return (types || []).includes(child);
};

export const pickChild = (
    children: React.ReactNode | undefined,
    targetChild: React.ElementType
) => {
    let target: React.ReactNode[] = [];
    const withoutTargetChildren = React.Children.map(children, (item) => {
        if (!React.isValidElement(item)) return item;
        if (item.type === targetChild) {
            target.push(item);
            return null;
        }
        return item;
    });
    const targetChildren = target.length >= 0 ? target : undefined;
    return [withoutTargetChildren, targetChildren];
};

export const childToArray = (
    children: React.ReactNode,
    option: { keepEmpty?: boolean } = {}
): React.ReactElement[] => {
    let ret: React.ReactElement[] = [];

    React.Children.forEach(children, (child: any) => {
        if ((child === undefined || child === null) && !option.keepEmpty) {
            return;
        }

        if (Array.isArray(child)) {
            ret = ret.concat(childToArray(child));
        } else if (isFragment(child) && child.props) {
            ret = ret.concat(childToArray((child.props as any).children, option));
        } else {
            ret.push(child);
        }
    });

    return ret;
};
