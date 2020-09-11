import { SizeType } from "../config-provider/SizeContext";

type DirectionType = "horizontal" | "vertical";

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: SizeType | number;
    direction?: DirectionType;
}

export const defaultProps = {
    size: "small" as SizeType | number,
    direction: "horizontal" as DirectionType
};
