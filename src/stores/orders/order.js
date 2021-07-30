import { observable, makeObservable } from "mobx";

export class  Order  {
  constructor(id, order_items, date, table,status) {
    this.id = id;
    this.order_items = order_items;
    this.date = date; 
    this.table = table;
    this.status = status;
    
 
    makeObservable(this, {
      id: observable,
      order_items: observable,
      date: observable,
      table: observable,
    });
  }
}

 
