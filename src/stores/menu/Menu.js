import { observable, action, makeObservable, runInAction } from "mobx";
import axios from "axios";
import { MenuItem } from "./MenuItem";

export class Menu {
  constructor() {
    this.list = [];
    this.length = 0;
    this.index = 0;

    makeObservable(this, {
      index: observable,
      list: observable,
      length: observable,
      getMenuItems: action,
      emptyTheList: action,
      addMenuItem: action,
      // addItem: action,
      updateItem:action,
    });
  }

  getMenuItems = async () => {
    let res = await axios.get(`http://localhost:5000/Menu/MenuItems`);
    this.emptyTheList();
    res.data.forEach((item) => {
      runInAction(() => {
        this.list.push(
          new MenuItem(
            item.id,
            item.name,
            item.img,
            item.price,
            item.description,
            item.category,
            item.is_vegan,
            item.is_gluten_free
          )
        );
      });
    });
  };
  addMenuItem = (menuItem) => {
    this.list.push(menuItem);
  };

  // addItem = async (newItem) => {
  //   await axios.post("http://localhost:5000/Menu/MenuItems", newItem);
  //   this.getMenuItems();
  // };

  // addItem(data) {
  //   data.forEach((item) => {
  //     this.list.push(
  //       new MenuItem(
  //         item.id,
  //         item.name,
  //         item.img,
  //         item.price,
  //         item.description,
  //         item.category,
  //         item.is_vegan,
  //         item.is_gluten_free
  //       )
  //     );
  //   });
  // }
  updateItem = (id,name,img,price,description,category,is_vegan,is_gluten_freey) => {
    let find = this.list.find((i) => i.id === id);
    console.log(id);
    console.log(find);
    if (find) {
      find.name = name;
      find.id = id;
      find.img = img;
      find.price = price;
      find.description = description;
      find.category = category;
      find.vegan = is_vegan;
      find.gluten = is_gluten_freey;
    }
  };
  

  emptyTheList = () => {
    this.list = [];
  };
}
