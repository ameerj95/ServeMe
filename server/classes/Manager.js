const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');

export const ManagerModule = function () {
//==============================================================================
    const emitToManagerFoodOrders = async (order, io) => {
        var result = await getAllActiveOrders()
        const orders = await populateManagerActiveOrders(result)
        io.sockets.emit("manager", { orders: orders, type:0 })
    }
//==============================================================================
    const populateManagerActiveOrders = async (orders) => {
        console.log("in populate ", orders)
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
    return {
        emitToManager: emitToManagerFoodOrders,
    }
}


