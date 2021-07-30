import React from "react";
import ReactDOM from "react-dom";
import { Order } from "./stores/orders/Order";
import { Orders } from "./stores/orders/Orders";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "mobx-react";
import { Menu } from "./stores/menu/Menu";
import { MenuItem } from "./stores/menu/MenuItem";
import { Info } from "./stores/info/Info";
import { Table } from "./stores/table/Table";
import { ClientSocket } from "./stores/clientSocket/ClientSocket";
import { FoodOrders } from "./stores/orders/FoodOrders";
const socketListeners = require("../src/modules/socketListeners")();
let stores = {};
const storeInitalizer = require("../src/modules/userStores")();
const clientsocket = new ClientSocket(window.location.pathname.split("/")[1]);
stores.clientsocket = clientsocket;

stores = storeInitalizer.startStores(stores);

stores.clientsocket.socket.emit("kitchenserver", "hi");
//for customers create only these stores
// if (clientsocket.usertype == "table") {
//   let table = new Table(parseInt(window.location.pathname.split("/")[2]));
//   console.log(table);
//   table.fetchCart();
//   let menu = new Menu();
//   menu.getMenuItems();
//   stores.table = table;
//   stores.menu = menu;
// }
// //for resturant entity create these entities
// else {
//   let orders = new Orders();
//   let foodOrders = new FoodOrders();
//   stores.orders = orders;
//   stores.foodorders = foodOrders;
// }
const imgRestaurant =
  "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
let info = new Info(
  "1",
  "Drby Bar",
  imgRestaurant,
  "koko koko koko",
  "04-2223434",
  "11:00 - 23:00",
  "logo",
  "Tel Aviv hrtzal 56",
  "drbybar@gmail.com"
);
stores.info = info;

//change url adress to main page.
window.history.pushState("", "", "/");

//initate sockets per user type
socketListeners.createSocket(stores);

ReactDOM.render(
  <Provider {...stores}>
    {" "}
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
