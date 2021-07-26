import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react'
import {Menu} from './stores/menu/Menu'
import {MenuItem} from './stores/menu/MenuItem'
import {Table} from './stores/table/Table'

let menu = new Menu()
let menuitem1 = new MenuItem('object1')
let menuitem2 = new MenuItem('object2')
let menuitem3 = new MenuItem('object3')
let menuitem4 = new MenuItem('object4')
let menuitem5 = new MenuItem('object5')

menu.addMenuItem(menuitem1)
menu.addMenuItem(menuitem2)
menu.addMenuItem(menuitem3)
menu.addMenuItem(menuitem4)
menu.addMenuItem(menuitem5)


let table = new Table()






const stores = {
  menu : menu,
  table:table
}

ReactDOM.render(<Provider {...stores}>
  <App />
</Provider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
