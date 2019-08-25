import { deepMerge } from "../utils";
import * as CSS from "csstype";

export interface Transitions {
    default?: CSS.TransitionProperty;
    button?: CSS.TransitionProperty;
    input?: CSS.TransitionProperty;
    checkbox?: CSS.TransitionProperty;
    toggle?: CSS.TransitionProperty;
    radio?: CSS.TransitionProperty;
    navigation?: CSS.TransitionProperty;
    drawer?: CSS.TransitionProperty;
}

export const createBaseTransition = (
    type: string[],
    duration = 250,
    cubicBezier = "0.76, 0.24, 0.23, 0.94"
): CSS.TransitionProperty => {
    return type.map((v): CSS.SingleTransition => `${v} ${duration}ms cubic-bezier(${cubicBezier}) 0ms`).join(",");
};

const baseTransition = createBaseTransition(["all"]);

function createTransition(transitions: Transitions) {
    const defaultTransitions: Transitions = {
        default: baseTransition,
        button: createBaseTransition(
            ["background-color", "color", "border-color", "box-shadow", "padding"],
            250
        ),
        input: createBaseTransition(["background-color", "color", "border-color"], 250),
        checkbox: baseTransition,
        toggle: baseTransition,
        radio: baseTransition,
        navigation: baseTransition,
        drawer: createBaseTransition(["box-shadow"], 250)
    };
    return deepMerge(transitions, defaultTransitions);
}


export default createTransition;