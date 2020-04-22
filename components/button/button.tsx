import * as React from "react";
// import * as PropTypes from "prop-types";
// import "./style/index";

import { Omit, tuple } from "../_util/type";


// import { theme } from "../themes/base";

const ButtonTypes = tuple("primary", "success", "warning", "danger");
export type ButtonType = typeof ButtonTypes[number];
const ButtonSizes = tuple("large", "medium", "small");
export type ButtonSize = typeof ButtonSizes[number];
const ButtonHTMLTypes = tuple("submit", "button", "reset");
export type ButtonHTMLType = typeof ButtonHTMLTypes[number]

export interface BaseButtonProps {
    type?: ButtonType;
    // styleType: ButtonType;
    size: ButtonSize;
    plain?: boolean;
    disabled?: boolean;
    className?: string;
    // icon?: string;
    loading?: boolean | { delay?: number };
}

export type AnchorButtonProps = {
    href: string;
    target?: string;
    onClick: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<any>, "type" | "onClick">;

export type NativeButtonProps = {
    htmlType?: ButtonHTMLType;
    onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, "type" | "onClick">;

export type ButtonProps = Partial<AnchorButtonProps | NativeButtonProps>;

// interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
//     type?: ButtonType;
//     size?: ButtonSize;
//     plain?: boolean;
//     disabled?: boolean;
//     className?: string;
//     icon?: string;
//     loading?: boolean | { delay?: number };
// }


const Button: React.FC<ButtonProps> = ({ ...props }) => {
    const {
        // className,
        // loading,
        // type = "primary",
        // size = "medium",
        children,
        // ...restProps
    } = props;

    const [loading, setLoading] = React.useState(props.loading);

    let delayTimeout: number;


    React.useEffect(() => {
        if (props.loading && typeof props.loading !== "boolean") {
            clearTimeout(delayTimeout);
        }
        if (props.loading && typeof props.loading !== "boolean" && props.loading.delay) {
            delayTimeout = window.setTimeout(() => {
                setLoading(props.loading);
            }, props.loading.delay);
        } else if (props.loading !== loading) {
            setLoading(props.loading);
        }
    }, [props.loading]);

    const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
        const { onClick } = props;
        if (loading) return;
        onClick && onClick(e);
    };

    // const { htmlType, ...otherProps } = restProps as NativeButtonProps;

    return (
        <React.Fragment>
            <button
                // className={className}
                // size={size}
                // styleType={type}
                // type={htmlType}
                onClick={handleClick}
                // {...otherProps}
                // {...(omit(otherProps, ["loading"]) as NativeButtonProps)}
            >
                {children}
            </button>
        </React.Fragment>

    );
};

Button.defaultProps = {
    // type: "primary",
    size: "medium",
    disabled: false,
    loading: false,
};

// Button.propTypes = {
// type: PropTypes.oneOf(ButtonTypes),
// size: PropTypes.oneOf(ButtonSizes),
// disabled: PropTypes.bool,
// loading: PropTypes.bool,
// icon: PropTypes.string,
// plain: PropTypes.bool,
// className: PropTypes.string
// };

export default Button;