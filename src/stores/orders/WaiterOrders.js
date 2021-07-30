import { observable, action, makeObservable, runInAction } from 'mobx'
import axios from "axios"

import { Order } from './Order'

export class WaiterOrders {

  constructor() {
    this.list = []
    this.length = 0
    this.index = 0

    makeObservable(this, {
      index: observable,
      list: observable,
      length: observable,
      addOrder: action,
      updateFoodOrders: action,
      emptyTheList: action,
      fetchAllOrders:action,
      fetchFoodOrders:action,
      fetchBarOrders:action
    })
  }

  addOrder = (order) => {
    this.list.push(order)
  }
  emptyTheList = () => {
    this.list = [];
  };

  updateFoodOrders = async (orders) =>{
    this.emptyTheList()
    this.insertOrderIntoList(orders)
  }

  fetchAllOrders = async () => {
    //TOODO: fetch waiter from API
    let res = await axios.get(`http://localhost:5000/WaiterOrder/Orders`);
    this.emptyTheList();
    res.data.forEach((item) => {
      runInAction(() => {
        this.list.push(new Order(item.id, item.order_items, item.date, item.table_num, item.status));
      });
    });
  };


  insertOrderIntoList = (orders)=>{
    orders.forEach((item) => {
      runInAction(() => {
        this.list.push(new Order(item.id, "item.order_items", item.date, item.table_num, item.status));
      });
    });
  }




}