import { observable, action, makeObservable, runInAction } from 'mobx'
// import axios from "axios"
// import MenuItems from './MenuItems'

export class Table {

    constructor() {
        this.tableNum = 0
        this.listOrder = []
       
        makeObservable(this, {
            tableNum : observable,
            listOrder: observable,
            addMenuItem : action,
            setTable:action,
          })
    }

    addMenuItem = (menuItem) =>{
        this.listOrder.push(menuItem)
    }

    setTable = (tableNum)=>{
        this.tableNum = tableNum
    }


}