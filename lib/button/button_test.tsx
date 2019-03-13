// import * as React from 'react';
// import * as PropTypes from 'prop-types';
// import { tuple } from "../_util/type";

// const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger');
// export type ButtonType = (typeof ButtonTypes)[number];
// const ButtonShapes = tuple('circle', 'circle-outline', 'round');
// export type ButtonShape = (typeof ButtonShapes)[number];
// const ButtonSizes = tuple('large', 'default', 'small');
// export type ButtonSize = (typeof ButtonSizes)[number];
// const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
// export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];

// export interface ButtonProps {
//     type?: ButtonType;
//     shape?: ButtonShape;
//     size?: ButtonSize;
//     icon?: string;
//     loading?: boolean | { delay?: number };
//     className?: string;
//     ghost?: boolean;
// }

// class Button extends React.Component<ButtonProps>{

//     constructor(props: ButtonProps) {
//         super(props);
//         this.state = {
//             loading: props.loading
//         }
//     }

//     static propTypes = {
//         type: PropTypes.string,
//         shape: PropTypes.oneOf(ButtonShapes),
//         size: PropTypes.oneOf(ButtonSizes),
//         htmlType: PropTypes.oneOf(ButtonHTMLTypes),
//         className: PropTypes.string,
//         icon: PropTypes.string,
//         loading: PropTypes.oneOf([PropTypes.bool, PropTypes.object]),
//     };

//     renderButton = () => {
//         const {
//             type,
//         } = this.props;
//     }
// }

// export default Button;