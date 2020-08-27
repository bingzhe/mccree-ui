import { CSSTransitionProps } from "react-transition-group/CSSTransition";

export type TransitionType = "fade" | "zoom" | "slide" | "collapse" | "grow";

export interface TransitionProps extends Omit<CSSTransitionProps, "in"> {
    children: React.ReactElement;
    type?: TransitionType;
    visible?: boolean;
    wrapper?: boolean;
}
