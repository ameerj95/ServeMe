const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');

const ManagerModule = function () {
    //===============================================================
    const getAllActiveFoodOrders = async () => {
        const activeOrders = await sequelize.query(`SELECT * from order_table
    WHERE status!=3`)
        //console.log(activeOrders)
        return activeOrders[0]
    }
    //===============================================================
    const getAllActiveWaiterOrders = async () => {
        const activeOrders = await sequelize.query(`SELECT * from order_waiter
        WHERE status!=3`)
        //console.log(activeOrders)
        return activeOrders[0]
    }
    //==============================================================================
    const populateManagerActiveOrders = async (orders) => {
        for (order of orders) {
            order_items = await getOrderItemsManager(order.id)
            order["order_items"] = order_items
        }
        return orders
    }
    
    //==============================================================================
    const getOrderItemsManager = async (order_id) => {
        const orderItems = await sequelize.query(`SELECT name,order_item.order_id,order_item.status FROM order_item
        LEFT JOIN menu_items on menu_items.id = order_item.menu_item_id
        LEFT JOIN order_table on order_table.id = order_item.order_id
        WHERE order_id = ${order_id}`)
        return orderItems[0]
    }

    //==============================================================================
    const emitToManagerActiveFoodOrders = async (io) => {
        console.log("in manager active food order")
        var ActiveOrders = await getAllActiveFoodOrders()
        const orders = await populateManagerActiveOrders(ActiveOrders)
        io.sockets.emit("manager", { orders: orders, type: 0 })
    }
    //==============================================================================
    const emitToManagerActiveWaiterOrders = async (io) => {
        console.log("in manager active waiter order")
        var ActiveOrders = await getAllActiveWaiterOrders()
        io.sockets.emit("manager", { orders: ActiveOrders, type: 1 })
    }

    const getAllActiveOrdersManager = async () =>{
        var ActiveOrders = await getAllActiveFoodOrders()
        const orders = await populateManagerActiveOrders(ActiveOrders)
        return orders
    }

    //==============================================================================
    return {
        emitToManagerActiveFoodOrders: emitToManagerActiveFoodOrders,
        emitToManagerActiveWaiterOrders: emitToManagerActiveWaiterOrders,
        getAllActiveOrdersManager:getAllActiveOrdersManager
    }
}

module.exports = ManagerModule


