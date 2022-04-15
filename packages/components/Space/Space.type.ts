import { CSSProperties, ReactNode } from "react";

export type SpaceSize = "small" | "default" | "large" | number;
export interface SpaceProps {
    style?: CSSProperties;
    className?: string;
    /**
     * @zh 对齐方式
     */
    align?: "start" | "end" | "center" | "baseline";
    /**
     * @zh 间距方向
     * @defaultValue horizontal
     */
    direction?: "horizontal" | "vertical";
    /**
     * @zh 尺寸
     * @defaultValue default
     */
    size?: SpaceSize;
    /**
     * @zh 换行。
     */
    wrap?: boolean;
    split?: ReactNode;
    children?: ReactNode;
}
