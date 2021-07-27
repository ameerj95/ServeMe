import React from "react";
import ReactDOM from "react-dom";
import { Order } from "./stores/orders/Order";
import { Orders } from "./stores/orders/Orders";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react'
import {Menu} from './stores/menu/Menu'
import {MenuItem} from './stores/menu/MenuItem'
import { Info } from './stores/info/Info';
import {Table} from './stores/table/Table'
import { ClientSocket } from "./stores/clientSocket/ClientSocket";



const imgCoca = 'https://images.pexels.com/photos/4397824/pexels-photo-4397824.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
const imgURL = 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
const imgBurger = 'https://images.pexels.com/photos/2282528/pexels-photo-2282528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
const imgRestaurant = 'https://images.pexels.com/photos/5022475/pexels-photo-5022475.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
let info = new Info("1", "Drby Bar", imgRestaurant, "koko koko koko", "04-2223434", "11:00 - 23:00" ,"logo" ,"Tel Aviv hrtzal 56" , "drbybar@gmail.com")

let menu = new Menu()
menu.getMenuItems()
// let menuitem1 = new MenuItem("1","Pizza", imgURL ,70,"The best",1, true,true)
// let menuitem2 = new MenuItem("2","Burger",imgBurger,50,"The best",1, true,false)
// let menuitem3 = new MenuItem("3","Sushi",imgURL,50,"The best",0, true,false)
// let menuitem4 = new MenuItem("4","Fuze tea",imgCoca,50,"The best",2, true,false)
// let menuitem5 = new MenuItem("5","Coca Cola",imgCoca,50,"The best",2, true,false)
// menu.addMenuItem(menuitem1);
// menu.addMenuItem(menuitem2);
// menu.addMenuItem(menuitem3);
// menu.addMenuItem(menuitem4);
// menu.addMenuItem(menuitem5);

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

let table = new Table()

const clientsocket = new ClientSocket()


const stores = {
  menu : menu,
  info : info,
  table:table,
  orders: orders,
  clientsocket:clientsocket,
}


ReactDOM.render(
  <Provider {...stores}> <App/> </Provider>,document.getElementById("root")
);

reportWebVitals();
