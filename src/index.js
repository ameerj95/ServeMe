import React from "react";
import ReactDOM from "react-dom";
import { Order } from "./stores/orders/Order";
import { Orders } from "./stores/orders/Orders";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react'
import { Menu } from './stores/menu/Menu'
import { MenuItem } from './stores/menu/MenuItem'
import { Info } from './stores/info/Info';
import { Table } from './stores/table/Table'
import { ClientSocket } from "./stores/clientSocket/ClientSocket";
import { FoodOrders } from "./stores/orders/FoodOrders";

const stores = {}
const clientsocket = new ClientSocket(window.location.pathname.split('/')[1])
stores.clientsocket = clientsocket

//for customers create only these stores
if (clientsocket.usertype == "table") {
  let table = new Table(parseInt(window.location.pathname.split('/')[2]))
  console.log(table)
  table.fetchCart()
  let menu = new Menu()
  menu.getMenuItems()
  stores.table = table
  stores.menu = menu
}
//for resturant entity create these entities
else {
  let orders = new Orders();
  let foodOrders = new FoodOrders()
  foodOrders.updateFoodOrders()
  // let order1 = new Order("1", "order1", "today", "pending", 1);
  // let order2 = new Order("2", "order2", "today", "pending", 1);
  // let order3 = new Order("3", "order3", "today", "pending", 1);
  // let order4 = new Order("4", "order4", "today", "pending", 1);
  // let order5 = new Order("5", "order5", "today", "pending", 1);
  // orders.addOrder(order1)
  // orders.addOrder(order2)
  // orders.addOrder(order3)
  // orders.addOrder(order4)
  // orders.addOrder(order5)
  stores.orders = orders
  stores.foodorders =foodOrders 
}
const imgRestaurant = 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
let info = new Info("1", "Drby Bar", imgRestaurant, "koko koko koko", "04-2223434", "11:00 - 23:00", "logo", "Tel Aviv hrtzal 56", "drbybar@gmail.com")
stores.info = info

//change url adress to main page.
window.history.pushState("", "", '/');

//initate sockets per user type
if (clientsocket.usertype == "table") {
  stores.clientsocket.socket.on("customer", data => {
      if (data.tableNum == stores.table.tableNum) {
        console.log("in app.js ",data)
        stores.table.updateCart(data.tableOrder)
      }
    });
}
if (clientsocket.usertype == "kitchen") {
  stores.clientsocket.socket.on("kitchen", data => {
        console.log("in kitchen ",data)
        stores.foodorders.updateFoodOrders()
      }
    );
}

ReactDOM.render(
  <Provider {...stores}> <App /> </Provider>, document.getElementById("root")
);
reportWebVitals();
