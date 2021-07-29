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

  addNewItem = async (client) => {
    axios
      .post(`http://localhost:5000/Menu/MenuItems`)
      .then(async (response) => {
        console.log("res", response.data);
        await this.getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  emptyTheList = () => {
    this.list = [];
  };
}
