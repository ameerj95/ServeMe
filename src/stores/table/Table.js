import axios from 'axios'
import { observable, action, makeObservable, runInAction } from 'mobx'
// import axios from "axios"
// import MenuItems from './MenuItems'

export class Table {

    constructor(tableNum) {
        this.tableNum = tableNum
        this.cart = []
       
        makeObservable(this, {
            tableNum : observable,
            cart: observable,
            addMenuItem : action,
            setTable:action,
            updateCart:action,
            fetchCart:action,
          })
    }

    addMenuItem = (menuItem) =>{
        this.cart.push(menuItem)
    }

    updateCart = (order) =>{
        this.cart = order
    }

    setTable = (tableNum)=>{
        this.tableNum = tableNum
    }

    fetchCart = async()=>{
        const cart = await axios.get(`http://localhost:5000/Orders/order/${this.tableNum}`)
        this.cart = cart.data
    }


}