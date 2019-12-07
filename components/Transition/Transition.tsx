import * as React from "react";
import { StyledContainer } from "./Transition.styled";
import { CSSTransition } from "react-transition-group";
import { TransitionProps } from "./Transition.type";

const Transition: React.FC<TransitionProps> = React.forwardRef<HTMLDivElement, TransitionProps>(
    (
        {
            type = "fade",
            wrapper = true,
            appear = true,
            timeout = 250,
            visible,
            custom,
            children,
            ...rest
        },
        ref
    ) => {
        const [wrapperHeight, setWrapperHeight] = React.useState(0);

        return (
            <CSSTransition
                in={visible}
                appear={appear}
                timeout={timeout}
                classNames={type}
                {...rest}
            >
                <StyledContainer
                    forwardRef={ref}
                    visible={visible}
                    type={type}
                    wrapper={wrapper}
                    wrapperHeight={wrapperHeight}
                    setWrapperHeight={setWrapperHeight}
                    custom={custom}
                >
                    {children}
                </StyledContainer>
            </CSSTransition>
        );
    }
);

export default Transition;