import { observable, action, makeObservable, runInAction } from 'mobx'
import axios from "axios"

import { TableServiceOrder } from './TableServiceOrder'

export class WaiterOrders {

  constructor() {
    this.tables = {}
    this.length = 0
    this.menuObject = {}
    this.getMenuItemsValues()
    makeObservable(this, {
      tables: observable,
      menuObject: observable,
      length: observable,
      updateWaiterOrders: action,
      emptyThetables: action,
      fetchAllOrders: action,
      getMenuItemsValues: action,
      translator_values:action,
  
    })
  }

  emptyThetables = () => {
    this.tables = {};
  };

  updateWaiterOrders = async (orders) => {
    this.emptyThetables()
    this.tables = orders
  }

  fetchAllOrders = async () => {
    let res = await axios.get(`http://localhost:5000/WaiterOrder/Orders`);
    this.emptyThetables();
    console.log(res.data)
    this.tables = res.data
  };



  insertOrderIntotables = (orders) => {
    orders.forEach((item) => {
      runInAction(() => {
        this.list.push(new TableServiceOrder(item.id, item.item_id, item.date, item.table_num, item.status));
      });
    });
  }

  getMenuItemsValues = async () => {
    let res = await axios.get("http://localhost:5000/Menu/MenuItemsIDS")
    this.menuObject = res.data
  }

  statusColors = {
    0:'blue',
    1:'yellow',
    2:'green'

  }

  translator_values = (order) => {
    switch (order.order_type) {
      case 0:
        return (<p style={{backgroundColor: this.statusColors[order.status]}}>Pick up a {this.menuObject[order.item_id]}</p>)
      case 1:
        return (<p style={{backgroundColor: this.statusColors[order.status]}}>Pick up a {this.menuObject[order.item_id]}</p>)
      case 2:
        return (<p style={{backgroundColor: this.statusColors[order.status]}}>Give the Bill status={order.status}</p>)
      case 3:
        return (<p style={{backgroundColor: this.statusColors[order.status]}}>Give Utensils : ${order.note}</p>)
      case 4:
        return (<p style={{backgroundColor: this.statusColors[order.status]}}>Give Napkins  status=${order.status}</p>)
      case 5:
        return (<p style={{backgroundColor: this.statusColors[order.status]}}>Give a Baby chair status=${order.status}</p>)
      case 6:
        return (<p style={{backgroundColor: this.statusColors[order.status]}}>Clear the table status=${order.status}</p>)
      case 7:
        return (<p style={{backgroundColor: this.statusColors[order.status]}}>Give Sauces status=${order.status}</p>)
      case 8:
        return (<p style={{backgroundColor: this.statusColors[order.status]}}>Take payment status=${order.status}</p>)
      case 9:
        return (<p style={{backgroundColor: this.statusColors[order.status]}}>Table number ${order.table_num} are reporting a problem status=${order.status}</p>)
      default:
        return (<p style={{backgroundColor: this.statusColors[order.status]}}>Table number ${order.table_num} requested a waiter's assistance status=${order.status}</p>)
    }

  }


}