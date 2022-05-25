import { ReactNode, CSSProperties, HTMLProps } from "react";

export interface BaseButtonProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    /**
     * @zh 按钮形式：默认按钮、虚框按钮、文字按钮、线性按钮
     */
    variant?: "default" | "dashed" | "text" | "outline";
    /**
     * @zh 按钮主题
     */
    theme?: "default" | "primary" | "success" | "danger" | "warning";
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
     * @zh a 链接的原生属性，href 存在时生效
     */
    anchorProps?: HTMLProps<HTMLAnchorElement>;
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
    /**
     * @zh 是否是幽灵按钮
     */
    ghost?: boolean;
    /**
     * @zh 按钮图标
     */
    icon?: ReactNode;
    /**
     * @zh 点击按钮的回调
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
}

export type AnchorButtonProps = {
    href: string;
    target?: string;
    anchorProps?: HTMLProps<HTMLAnchorElement>;
} & BaseButtonProps &
    Omit<React.AnchorHTMLAttributes<any>, "onClick" | "className">;

export type NativeButtonProps = BaseButtonProps &
    Omit<React.ButtonHTMLAttributes<any>, "onClick" | "className">;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
