// import * as React from "react";
// import * as CSS from "csstype";

// type Return = [React.FC<RevealWrapperProps>]

// interface RevealWrapperProps {
//     children: React.ReactElement;
// }

// const createRevealWrapper = (
//     gradientSize: number,
//     lightColor: CSS.ColorProperty
// ): React.FC<RevealWrapperProps> => {
//     const RevealWrapper: React.FC<RevealWrapperProps> = ({ children }) => {

//         const [background, setBackground] = React.useState();
//         const ref = React.useRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>;
//         const listener = React.useCallback(
//             (e: MouseEvent): void => {
//                 const rect = ref.current && ref.current.getBoundingClientRect();
//                 if (ref.current && rect) {
//                     const x = e.pageX - rect.left - window.scrollX;
//                     const y = e.pageY - rect.top - window.scrollY;
//                     const gradient = `radial-gradient(circle ${gradientSize}px at ${x}px ${y}px, ${lightColor}, rgba(255,255,255,0))`;
//                     setBackground(gradient);
//                 }
//             },
//             [ref]
//         );

//         React.useEffect(
//             (): (() => void) => {
//                 document.addEventListener("mousemove", listener);
//                 return (): void => {
//                     document.removeEventListener("mousemove", listener);
//                 };
//             },
//             [listener]
//         );


//         return (
//             <div ref={ref} style={{ background, margin: 1, padding: 1 }}>
//                 {React.cloneElement(children)}
//             </div>
//         );
//     };

//     return RevealWrapper;
// };

// export function useReveal(
//     gradientSize = 80,
//     lightColor: CSS.ColorProperty = "rgba(160, 160, 160, 1)"
// ): Return {
//     const RevealWrapper = createRevealWrapper(gradientSize, lightColor);
//     return [RevealWrapper];
// }