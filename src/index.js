import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react'
import {Menu} from './stores/menu/Menu'
import {MenuItem} from './stores/menu/MenuItem'
import { Info } from './stores/info/Info';
const imgURL = 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
const imgBurger = 'https://images.pexels.com/photos/2282528/pexels-photo-2282528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
const imgRestaurant = 'https://images.pexels.com/photos/5022475/pexels-photo-5022475.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
let info = new Info("1", "Drby Bar", imgRestaurant, "koko koko koko", "04-2223434", "11:00 - 23:00" ,"logo" ,"Tel Aviv hrtzal 56" , "drbybar@gmail.com")

let menu = new Menu()
let menuitem1 = new MenuItem("1","Pizza", imgURL ,50,"The best","food", true,true)
let menuitem2 = new MenuItem("2","Burger",imgBurger,50,"The best","food", true,false)
let menuitem3 = new MenuItem("3","Sushi",imgURL,50,"The best","food", true,false)
let menuitem4 = new MenuItem("4","Humos",imgURL,50,"The best","food", true,false)
let menuitem5 = new MenuItem("5","Coca Cola",imgURL,50,"The best","food", true,false)

menu.addMenuItem(menuitem1)
menu.addMenuItem(menuitem2)
menu.addMenuItem(menuitem3)
menu.addMenuItem(menuitem4)
menu.addMenuItem(menuitem5)



const stores = {
  menu : menu,
  info : info
}

ReactDOM.render(<Provider {...stores}>
  <App />
</Provider>, document.getElementById('root')
);

reportWebVitals();
