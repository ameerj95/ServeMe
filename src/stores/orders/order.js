import { observable, makeObservable } from "mobx";

export class  Order  {
  constructor(id, order, date,status, table) {
    this.id = id;
    this.order = order;
    this.date = date;
    this.table = table;
    this.status = status

    makeObservable(this, {
      id: observable,
      order: observable,
      date: observable,
      table: observable,
    });
  }
}

 
