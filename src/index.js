import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "mobx-react";
import { Info } from "./stores/info/Info";
import { ClientSocket } from "./stores/clientSocket/ClientSocket";
import { ToastContainer, toast } from 'react-toastify';
import bellSound from './sounds/bell.mp3';



const socketListeners = require("../src/modules/socketListeners")();
let stores = {};
const storeInitalizer = require("../src/modules/userStores")();
const clientsocket = new ClientSocket(window.location.pathname.split("/")[1]);
stores.clientsocket = clientsocket;


stores = storeInitalizer.startStores(stores)

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
socketListeners.createSocket(stores,toast);

ReactDOM.render(
  <Provider {...stores}>
    {" "}
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
