import { observable, makeObservable } from "mobx";

export class  TableServiceOrder  {
  constructor(id, item_id, date, table_num,status) {
    this.id = id;
    this.item_id = item_id;
    this.date = date; 
    this.table_num = table_num;
    this.status = status;
    
 
    makeObservable(this, {
      id : observable,
      item_id : observable,
      date : observable,
      table_num : observable,
      status : observable,
    });
  }
}

 
