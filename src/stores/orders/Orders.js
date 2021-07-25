import { observable, action, makeObservable, runInAction } from 'mobx'
// import axios from "axios"
// import MenuItems from './MenuItems'

export class Orders {

    constructor() {
        this.list = []
        this.length = 0
        this.index = 0
       
        makeObservable(this, {
            index : observable,
            list: observable,
            length: observable,
            addOrder : action,
          })
    }

    addOrder = (order) =>{
        this.list.push(order)
    }


}