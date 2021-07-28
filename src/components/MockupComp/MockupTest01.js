import React from 'react';
import socketIOClient from "socket.io-client";
import { observer, inject } from 'mobx-react';
// import configData from '../../../configData.json';

const MockupComp = (props) => {
    const socket = props.clientSocket.socket
    //change mockup to client front page.
    if (props.table.tableNum == 0) {
        props.table.setTable(parseInt(props.match.params.tableNum))
    }
    //this is how we listen to a certain socket namespace
    socket.on("customer", data => {
        console.log(data)
        if (data.tableNum == props.table.tableNum) {
            alert("data")
        }
    });

    const addburger = () =>{
        const extracted_tableNum = props.table.tableNum
        console.log("in addburger")
        socket.emit('customer', { tableNum: extracted_tableNum,item_id:2 ,action_type:1 });
    }
    const addCola = () =>{
        const extracted_tableNum = props.table.tableNum
        console.log("in addCola")
        socket.emit('customer', { tableNum: extracted_tableNum,item_id:3 ,action_type:1 });
    }
    const addPizza = () =>{
        const extracted_tableNum = props.table.tableNum
        console.log("in addburger")
        socket.emit('customer', { tableNum: extracted_tableNum,item_id:1 ,action_type:1 });
    }

    const orderAll = () =>{
        const extracted_tableNum = props.table.tableNum
        console.log("in orderAll")
        socket.emit('resturant', { tableNum: extracted_tableNum,item_id:1});
    }

    return (
        <div>
            <h1>helloooooo</h1>
            <button onClick={addburger}>Add Hamburger to cart!</button>
            <button onClick={addCola}>Add Cola to cart!</button>
            <button onClick={addPizza}>Add Pizza to cart!</button>
            <button onClick={orderAll}>Order ALL</button>
        </div>
    );
};

export default inject('table','clientSocket')(observer(MockupComp));