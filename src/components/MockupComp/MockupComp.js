// import React from 'react';
// import socketIOClient from "socket.io-client";
// import { observer, inject } from 'mobx-react';
// // import configData from '../../../configData.json';

// const socket = socketIOClient.connect('http://127.0.0.1:5000',{'forceNew':true });
// const MockupComp = (props) => {

//     //change mockup to client front page.
//     console.log(props.match.params.tableNum)
//     if (props.table.tableNum == 0) {
//         props.table.setTable(parseInt(props.match.params.tableNum))
//     }
//     //this is how we listen to a certain socket namespace
//     socket.on("customer", data => {
//         console.log(data,props.table.tableNum);
//         if (data.tableNum == props.table.tableNum) {
//             console.log(data);
//             alert("HI")
//         }
//     });
//     //namespaces is the "channels" where events happens

//     const emitToServer = () => {
//         console.log("in emit to server")
//         //socket.emit('customer', "from mockcomponent");
//         //notes we can send anything
//         const extracted_tableNum = props.table.tableNum
//         socket.emit('customer', { hi: 1, tableNum: extracted_tableNum, item: { id: 2 }, action_type: 0 });
//         //this is the way we send to our socket anything we want
//     }

//     const emitToResturant = () =>{
//         const extracted_tableNum = props.table.tableNum
//         console.log("in emit to resturant")
//         socket.emit('resturant', { tableNum: extracted_tableNum, action_type:1 });
//     }

//     return (
//         <div>
//             <h1>helloooooo</h1>
//             <button onClick={emitToServer}>Add to cart!</button>
//             <button onClick={emitToResturant}>emit to Resturant</button>
//         </div>
//     );
// };

// export default inject('table')(observer(MockupComp));