import { FlattenSimpleInterpolation } from "../styles/styled";

export type TransitionType = "fade" | "zoom" | "slide" | "collapse" | "grow" | "custom"

export interface StyledContainerProps {
    children: React.ReactElement;
    forwardRef: React.Ref<HTMLDivElement>;
    type?: TransitionType;
    visible?: boolean;
    wrapper?: boolean;
    wrapperHeight: number;
    setWrapperHeight: React.Dispatch<number>;
    custom?: FlattenSimpleInterpolation;
}