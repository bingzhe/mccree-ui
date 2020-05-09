import * as React from "react";
import Icon from "../index";
// import styled from "styled-components";

// const IconListWrapper = styled.ul`
//     &:after{
//         content: '';
//         display: block;
//         clear: both;
//     }
// `;


// const IconWrapper = styled.li`
//     float: left;
//     height: 100px;
//     width: 130px;
//     text-align: center;
//     background-color: #fff;
//     color: #555;
//     border-radius: 4px;
//     font-size: 36px;
//     padding: 10px 0 0;
//     box-sizing: border-box;

//     &:hover {
//         color: #fff;
//         background: #1F74FF;

//         svg {
//             transform: scale(1.4);
//         }
//     }

//     svg {
//         margin: 12px 0 8px;
//         font-size: 36px;
//         transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
//         will-change: transform;
//     }
// `;

// const IconName = styled.span`
//     display: block;
//     font-family: 'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;
//     white-space: nowrap;
//     text-align: center;
//     transform: scale(.83);
//     font-size: 14px;
// `;

// const IconList = [
//     "step-backward",
//     "step-forward",
//     "backward",
//     "forward",
//     "fast-backward",
//     "fast-forward",
//     "down",
//     "up",
//     "left",
//     "right",
//     "caret-down",
//     "caret-up",
//     "caret-left",
//     "caret-right",
//     "question",
//     "question-circle",
//     "close",
//     "close-circle",
//     "loading",
//     "loading-3-quarters",
//     "reload",
//     "smile",
//     "alipay",
//     "wechat",
//     "qq"
// ];

// const IconExample: React.FunctionComponent = () => {
//     return (
//         <div>
//             <h1>Icons</h1>
//             <IconListWrapper>
//                 {
//                     IconList.map(icon => <IconWrapper key={icon}>
//                         <Icon name={icon} />
//                         <IconName>{icon}</IconName>
//                     </IconWrapper>)
//                 }
//             </IconListWrapper>
//             <h1>旋转</h1>
//             <IconListWrapper>
//                 <IconWrapper>
//                     <Icon name="loading" spin={true} />
//                     <IconName>loading</IconName>
//                 </IconWrapper>
//                 <IconWrapper>
//                     <Icon name="reload" spin={true} />
//                     <IconName>loading</IconName>
//                 </IconWrapper>
//                 <IconWrapper>
//                     <Icon name="qq" spin={true} />
//                     <IconName>loading</IconName>
//                 </IconWrapper>
//                 <IconWrapper>
//                     <Icon name="qq" rotate={90} />
//                     <IconName>90°</IconName>
//                 </IconWrapper>
//                 <IconWrapper>
//                     <Icon name="qq" rotate={180} />
//                     <IconName>180°</IconName>
//                 </IconWrapper>
//                 <IconWrapper>
//                     <Icon name="qq" rotate={270} />
//                     <IconName>270°</IconName>
//                 </IconWrapper>
//             </IconListWrapper>
//         </div>
//     );
// };

// export default IconExample;
const IconExample: React.FunctionComponent = () => {
    return (
        <div>


            <Icon name="loading" />


            <Icon name="reload" />


            <Icon name="qq" />



        </div>
    );
};

export default IconExample;