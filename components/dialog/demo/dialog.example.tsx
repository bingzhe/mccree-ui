// import React, { useState } from "react";
// import Dialog, { alert, confirm, modal } from "../dialog";

// export default function () {
//     const [x, setX] = useState(false);
//     const [y, setY] = useState(false);

//     const openModal = () => {
//         const close = modal(<h1>你好 <button onClick={() => close()}>close</button></h1>);
//     };

//     return (
//         <div>
//             <h1>demo1</h1>
//             <button onClick={() => setX(!x)}>click</button>
//             <Dialog
//                 visible={x}
//                 buttons={
//                     [
//                         <button onClick={() => { setX(false) }}>1</button>,
//                         <button onClick={() => { setX(false) }}>2</button>
//                     ]
//                 }
//                 onClose={() => { setX(false) }}
//             >
//                 <div>hi</div>
//             </Dialog>

//             <h1>demo2</h1>
//             <button onClick={() => setY(!y)}>click</button>
//             <Dialog
//                 visible={y}
//                 buttons={
//                     [
//                         <button onClick={() => { setY(false) }}>1</button>,
//                         <button onClick={() => { setY(false) }}>2</button>
//                     ]
//                 }
//                 onClose={() => { setY(false) }}
//                 onBackdropClick={false}
//             >
//                 <div>hi</div>
//             </Dialog>

//             <h1>demo3</h1>
//             <button onClick={() => { alert("1") }}>alert</button>
//             <button onClick={() => {
//                 confirm("2", () => {
//                     console.log("你点击了yes");
//                 }, () => {
//                     console.log("你点击了no");
//                 });
//             }}>confirm</button>

//             <h1>demo4</h1>
//             <button onClick={openModal}>modal</button>
//         </div>
//     );
// }
