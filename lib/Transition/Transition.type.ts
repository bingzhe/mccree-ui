import { FlattenSimpleInterpolation } from "../styles/styled";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";


export type TransitionType = "fade" | "zoom" | "slide" | "collapse" | "grow" | "custom"

export interface TransitionProps extends Omit<CSSTransitionProps, "in"> {
    children: React.ReactElement;
    type?: TransitionType;
    visible?: boolean;
    wrapper?: boolean;
    custom?: FlattenSimpleInterpolation;
}

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