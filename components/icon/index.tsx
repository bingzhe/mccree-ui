// import * as React from "react";
// import styled, { css } from "styled-components";


// import { loadingCircle } from "../themes/animations";
// import "./importIcons";

// const SpinStyle = css<IconProps>`
//     animation: ${loadingCircle} 1s infinite linear;
// `;

// const rotateStyle = css<IconProps>`
//     transform: rotate(${props => props.rotate}deg);
// `;

// const StyleSvg = styled.svg<IconProps>`
//     width: 1em;
//     height: 1em;
//     vertical-align: -0.15em;
//     fill: currentColor;
//     overflow: hidden;

//     ${props => props.spin && SpinStyle}
//     ${props => props.rotate && rotateStyle}
// `;

// export interface IconProps extends React.SVGAttributes<SVGElement> {
//     name: string;
//     spin?: boolean;
//     rotate?: number;
// }

// const Icon: React.FunctionComponent<IconProps> = (props) => {
//     const { className, name, ...restProps } = props;

//     return (
//         <StyleSvg
//             className={className}
//             name={name}
//             {...restProps}
//         >
//             <use xlinkHref={`#${name}`} />
//         </StyleSvg>
//     );
// };

// export default Icon;