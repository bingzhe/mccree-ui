import { CSSProperties, ReactNode } from "react";

import { SizeType } from "../../../components/config-provider/SizeContext";

type DirectionType = "horizontal" | "vertical";

// export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
//     size?: SizeType | number;
//     direction?: DirectionType;
// }

export const defaultProps = {
    size: "small" as SizeType | number,
    direction: "horizontal" as DirectionType
};

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
    size?: "small" | "default" | "large";
    /**
     * @zh 换行。
     */
    wrap?: boolean;
    split?: ReactNode;
    children?: ReactNode;
}
