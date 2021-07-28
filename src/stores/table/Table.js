import { observable, action, makeObservable, runInAction ,computed} from 'mobx'
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
            // total : computed,
          })
    }

    addMenuItem = (menuItem) =>{
        this.listOrder.push(menuItem)
    }

    setTable = (tableNum)=>{
        this.tableNum = tableNum
    }


}