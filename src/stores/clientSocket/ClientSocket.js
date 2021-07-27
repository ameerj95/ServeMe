import { observable, action, makeObservable, runInAction } from 'mobx'
import socketIOClient from "socket.io-client";

export class ClientSocket {

    constructor(table) {
        this.table = table
        this.socket = socketIOClient.connect('http://127.0.0.1:5000',{'forceNew':true });

        makeObservable(this, {
            table : observable,
            socket:observable,
          })
    }
}