export interface BaseButtonProps {
    /**
     * 按钮类型：主要按钮、次级按钮、虚框按钮、文字按钮、线性按钮
     */
    type?: "primary" | "secondary" | "dashed" | "text" | "outline";

    /**
     * 按钮状态
     */
    status?: "default" | "success" | "danger" | "warning";
}
