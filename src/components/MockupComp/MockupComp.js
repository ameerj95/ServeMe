import React from 'react';
import socketIOClient from "socket.io-client";
const socket = socketIOClient.connect('http://127.0.0.1:5000');
const MockupComp = () => {

    //this is how we listen to a certain socket namespace
    socket.on("customer", data => {
      console.log(data);
    });
    //namespaces is the "channels" where events happens

    const emitToServer = () => {
        console.log("in emittoserver")
        //socket.emit('customer', "from mockcomponent");
        //notes we can send anything
        socket.emit('customer', {hi:1});
        //this is the way we send to our socket anything we want

    }
    return (
        <div>
            <h1>helloooooo</h1>
            <button onClick={emitToServer}>Click me to emit!</button>
        </div>
    );
};

export default MockupComp;