import * as React from "react";

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
