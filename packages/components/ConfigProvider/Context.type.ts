import { ReactNode } from "react";
import { ButtonProps } from "../Button";
import { SpaceProps } from "../Space";

export type ComponentConfig = {
    Button?: ButtonProps;
    Space?: SpaceProps;
};

export interface ConfigProviderProps {
    /**
     * @zh 全局配置组件的默认参数
     */
    componentConfig?: ComponentConfig;
    /**
     * @zh 全局组件类名前缀
     * @defaultValue 'mccree'
     */
    prefixCls?: string;
    getPrefixCls?: (componentName: string, customPrefix?: string) => string;
    /**
     * @zh 配置组件默认尺寸，只对支持`size`属性的组件有效
     * @defaultValue 'default'
     */
    size?: "small" | "default" | "large";
    children?: ReactNode;
}
