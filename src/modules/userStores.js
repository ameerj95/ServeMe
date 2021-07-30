
const {Menu} = require("../stores/menu/Menu")
const {Table} = require("../stores/table/Table")
const { WaiterOrders }  = require  ( "../stores/orders/WaiterOrders")
const { FoodOrders }  = require  ( "../stores/orders/FoodOrders")
const {Orders} = require("../stores/orders/Orders")
const { ClientSocket } = require ("../stores/clientSocket/ClientSocket")

const userStores = function () {


    // (stores.clientsocket.usertype)
    const customerStores = (stores) => {
        let table = new Table(parseInt(window.location.pathname.split('/')[2]))
        console.log(table)
        table.fetchCart()
        let menu = new Menu()
        menu.getMenuItems()
        stores.table = table
        stores.menu = menu
    }
    const kitchenStores = (stores) =>{
        let orders = new Orders();
        let foodOrders = new FoodOrders()
        stores.orders = orders
        stores.foodorders =foodOrders 
        stores.foodorders.fetchFoodOrders()

    }
    const barStores = (stores) =>{
        let orders = new Orders();
        let foodOrders = new FoodOrders()
        stores.orders = orders
        stores.foodorders =foodOrders 
        stores.foodorders.fetchBarOrders()

    }

    const waiterStores = (stores) =>{
        let orders = new Orders();
        let waiterorder = new WaiterOrders()
        stores.orders = orders
        stores.waiterorder =waiterorder 
        stores.waiterorder.fetchBarOrders()
    }

    const managerStores = (stores) =>{

    }
    const userStoresInit = {
        "table":customerStores,
        "kitchen":kitchenStores,
        "bar":barStores,
        "waiter":waiterStores,
        "manager":managerStores
    }

    const startStores = (stores)=>{
        let clientsocket = new ClientSocket(window.location.pathname.split('/')[1])
        console.log(clientsocket)
        stores.clientsocket = clientsocket
        console.log(stores)
        userStoresInit[stores.clientsocket.usertype](stores)
        return stores
    }


    //==============================================================================
    return {
        startStores:startStores
    }
}

module.exports = userStores


