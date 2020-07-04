import * as React from "react";
import { warning } from "./warning";

export interface UseControlledProps {
    /**
     * props 存在该属性时是受控组件
     */
    controlled: any;
    /**
     * default value
     */
    default: any;
    name: string;
    state?: string;
}

export function useControlled(props: UseControlledProps): [any, (value?: any) => void] {
    const { controlled, default: defaultProp, name, state = "value" } = props;

    const { current: isControlled } = React.useRef(controlled !== undefined);
    const [valueState, setValueState] = React.useState(defaultProp);
    const value = isControlled ? controlled : valueState;

    if (process.env.NODE_ENV !== "production") {
        React.useEffect(() => {
            if (isControlled !== (controlled !== undefined)) {
                warning(
                    false,
                    name,
                    [
                        `a component is changing the ${
                            isControlled ? "" : "un"
                        }controlled ${state} state of ${name} to be ${
                            isControlled ? "un" : ""
                        }controlled.`,
                        "Elements should not switch from uncontrolled to controlled (or vice versa).",
                        `Decide between using a controlled or uncontrolled ${name} ` +
                            "element for the lifetime of the component.",
                        "The nature of the state is determined during the first render, it's considered controlled if the value is not `undefined`.",
                        "More info: https://fb.me/react-controlled-components"
                    ].join("\n")
                );
            }
        }, [isControlled]);

        const { current: defaultValue } = React.useRef(defaultProp);

        React.useEffect(() => {
            if (defaultValue !== defaultProp) {
                warning(
                    false,
                    name,
                    [
                        `a component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` +
                            `To suppress this warning opt to use a controlled ${name}.`
                    ].join("\n")
                );
            }
        }, [JSON.stringify(defaultProp)]);
    }

    const setValueIfUnControlled = React.useCallback((newValue) => {
        if (!isControlled) {
            setValueState(newValue);
        }
    }, []);

    return [value, setValueIfUnControlled];
}
