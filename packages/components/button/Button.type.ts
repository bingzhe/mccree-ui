import { ReactNode, CSSProperties } from "react";
export interface BaseButtonProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    /**
     * @zh 按钮类型：主要按钮、次级按钮、虚框按钮、文字按钮、线性按钮
     */
    type?: "default" | "primary" | "secondary" | "dashed" | "text" | "outline";
    /**
     * @zh 按钮状态，优先级高于按钮类型
     */
    status?: "default" | "success" | "danger" | "warning";
    /**
     * @zh 按钮尺寸
     */
    size?: "small" | "default" | "large";
    /**
     * @zh 按钮形状，`circle` - 圆形， `round` - 全圆角， `square` - 长方形
     * @defaultValue square
     */
    shape?: "circle" | "round" | "square";
    /**
     * @zh 添加跳转链接，设置此属性，button表现跟a标签一致
     */
    href?: string;
    /**
     * @zh a 链接的 target 属性，href 存在时生效
     */
    target?: string;
    /**
     * @zh 是否禁用
     */
    disabled?: boolean;
    /**
     * @zh 按钮是否是加载状态
     */
    loading?: boolean;
    /**
     * @zh 按钮宽度随容器自适应。
     */
    block?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    /**
     * @zh 点击按钮的回调
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
}

export type AnchorButtonProps = {
    href: string;
    target?: string;
} & BaseButtonProps &
    Omit<React.AnchorHTMLAttributes<any>, "type" | "onClick">;

export type NativeButtonProps = {
    /**
     * @zh 按钮原生的 html type 类型
     * @defaultValue button
     */
    htmlType?: "button" | "submit" | "reset";
} & BaseButtonProps &
    Omit<React.ButtonHTMLAttributes<any>, "type" | "onClick">;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
