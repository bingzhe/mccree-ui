import * as React from "react";
import Input, { InputProps } from "./Input";
import Icon from "../icon/index";

export interface InputPasswordProp extends InputProps {
    hideToggle?: boolean;
}

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProp>(
    (props, ref: React.Ref<HTMLInputElement | null>) => {
        const { hideToggle, children, ...restProps } = props;

        const inputRef = React.useRef<HTMLInputElement>(null);
        const [visible, setVisible] = React.useState<boolean>(false);

        React.useImperativeHandle(ref, () => inputRef.current);

        const handleIconClick = () => {
            setVisible((v) => !v);

            if (inputRef?.current) {
                inputRef.current.focus();
            }
        };

        const inputProps = {
            ...restProps,
            ref: inputRef,
            iconClickable: true,
            onIconClick: handleIconClick,
            type: visible ? "text" : "password"
        };

        const iconNode = !visible ? <Icon name="eye" /> : <Icon name="eye-invisible" />;

        return (
            <Input suffix={iconNode} {...inputProps}>
                [children]
            </Input>
        );
    }
);

export default InputPassword;
