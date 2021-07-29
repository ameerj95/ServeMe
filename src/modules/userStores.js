
import { Menu } from './stores/menu/Menu'
import { MenuItem } from './stores/menu/MenuItem'
import { Info } from './stores/info/Info';
import { Table } from './stores/table/Table'
import { ClientSocket } from "./stores/clientSocket/ClientSocket";
import { FoodOrders } from "./stores/orders/FoodOrders";
const userStores = function () {
    const stores = {}
    const clientsocket = new ClientSocket(window.location.pathname.split('/')[1])
    this.stores.clientsocket = clientsocket
    const userStoresInit = {
        "table":customerStores,
        "kitchen":kitchenStores,
        "bar":barStores,
        "waiter":waiterStores,
        "manager":managerStores
    }
    // (this.stores.clientsocket.usertype)
    const customerStores = () => {
        let table = new Table(parseInt(window.location.pathname.split('/')[2]))
        console.log(table)
        table.fetchCart()
        let menu = new Menu()
        menu.getMenuItems()
        this.stores.table = table
        this.stores.menu = menu
    }
    const kitchenStores = () =>{
        let orders = new Orders();
        let foodOrders = new FoodOrders()
        stores.orders = orders
        stores.foodorders =foodOrders 
        stores.foodorders.fetchFoodOrders()

    }
    const barStores = () =>{
        let orders = new Orders();
        let foodOrders = new FoodOrders()
        stores.orders = orders
        stores.foodorders =foodOrders 
        stores.foodorders.fetchBarOrders()

    }

    const waiterStores = () =>{
        let orders = new Orders();
        let foodOrders = new FoodOrders()
        stores.orders = orders
        stores.foodorders =foodOrders 
        stores.foodorders.fetchBarOrders()
    }

    const managerStores = () =>{

    }


    //==============================================================================
    return {
        createSocket: createSocket,
    }
}

module.exports = userStores


