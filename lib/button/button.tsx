import * as React from 'react';
import './style/index';

interface Props {
    size?: 'small' | 'medium' | 'large';
    type?: 'default' | 'primary' | 'danger';
    disabled?: boolean;
    className?: string;
}

const Button: React.FunctionComponent<Props> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        <button
            // className={className}
            className="rui-button"
            {...restProps}
        >
            {children}
        </button>
    );
};

export default Button;