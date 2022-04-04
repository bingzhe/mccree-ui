export interface BaseButtonProps {
    /**
     * @zh 按钮类型：主要按钮、次级按钮、虚框按钮、文字按钮、线性按钮
     */
    type?: "primary" | "secondary" | "dashed" | "text" | "outline";

    /**
     * @zh 按钮状态，优先级高于按钮类型
     */
    status?: "default" | "success" | "danger" | "warning";

    /**
     * @zh 按钮尺寸
     */
    size?: "mini" | "small" | "default" | "large";

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
}
