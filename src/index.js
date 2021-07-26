import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "mobx-react";
import { Menu } from "./stores/menu/Menu";
import { MenuItem } from "./stores/menu/MenuItem";
import { Order } from "./stores/orders/Order";
import { Orders } from "./stores/orders/Orders";

let menu = new Menu();
let menuitem1 = new MenuItem("object1");
let menuitem2 = new MenuItem("object2");
let menuitem3 = new MenuItem("object3");
let menuitem4 = new MenuItem("object4");
let menuitem5 = new MenuItem("object5");

menu.addMenuItem(menuitem1);
menu.addMenuItem(menuitem2);
menu.addMenuItem(menuitem3);
menu.addMenuItem(menuitem4);
menu.addMenuItem(menuitem5);

let orders = new Orders();
let order1 = new Order("1","order1","today","pending" ,1 );
let order2= new Order("2","order2","today","pending" ,1 );
let order3 = new Order("3","order3","today","pending" ,1 );
let order4 = new Order("4","order4","today","pending" ,1 );
let order5 = new Order("5","order5","today","pending" ,1 );


orders.addOrder(order1)
orders.addOrder(order2)
orders.addOrder(order3)
orders.addOrder(order4)
orders.addOrder(order5)





const stores = {
  menu: menu,
  orders: orders
};
ReactDOM.render(
  <Provider {...stores}> <App/> </Provider>,document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
