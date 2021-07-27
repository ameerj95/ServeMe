import { observable, action, makeObservable, runInAction } from 'mobx'
// import axios from "axios"
// import MenuItems from './MenuItems'

export class Table {

    constructor() {
        this.tableNum = 0
        this.cart = []
       
        makeObservable(this, {
            tableNum : observable,
            cart: observable,
            addMenuItem : action,
            setTable:action,
          })
    }

    addMenuItem = (menuItem) =>{
        this.cart.push(menuItem)
    }

    setTable = (tableNum)=>{
        this.tableNum = tableNum
    }


}