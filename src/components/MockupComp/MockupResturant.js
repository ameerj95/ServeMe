// import React from 'react';
// import socketIOClient from "socket.io-client";
// import { observer, inject } from 'mobx-react';
// // import configData from '../../../configData.json';

// const socket = socketIOClient.connect('http://127.0.0.1:5000',{'forceNew':true });
// const MockupResturant = (props) => {

//     socket.on("kitchen", data => {
//             console.log("IN resturant");
//             alert("HI")
//             console.log(data)
//     });

//     return (
//         <div>
//             <h1>kitchen</h1>
//         </div>
//     );
// };

// export default inject('table')(observer(MockupResturant));