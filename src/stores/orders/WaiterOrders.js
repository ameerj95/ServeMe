import { observable, action, makeObservable, runInAction } from 'mobx'
import axios from "axios"

import {TableServiceOrder} from './TableServiceOrder'

export class WaiterOrders {

  constructor() {
    this.tables = {}
    this.length = 0

    makeObservable(this, {
      tables: observable,
      length: observable,
      updateWaiterOrders: action,
      emptyThetables: action,
      fetchAllOrders:action,
    })
  }

  emptyThetables = () => {
    this.tables = {};
  };

  updateWaiterOrders = async (orders) =>{
    console.log("IN HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
    this.emptyThetables()
    console.log("gello")
    this.tables = orders
  }

  fetchAllOrders = async () => {
    let res = await axios.get(`http://localhost:5000/WaiterOrder/Orders`);
    this.emptyThetables();
    console.log(res.data)
    this.tables = res.data
  };



  insertOrderIntotables = (orders)=>{
    orders.forEach((item) => {
      runInAction(() => {
        this.list.push(new TableServiceOrder(item.id, item.item_id, item.date, item.table_num, item.status));
      });
    });
  }





}