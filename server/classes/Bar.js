const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');
const Waiter = require('../classes/Waiter.js')()


const BarModule = function () {
    //===============================================================
    const pickUpOrderItem = async (order, io) => {
        await sequelize.query(`UPDATE order_item
        SET status = 1
        WHERE id=${order.id};`)
        emitToBar(io)
        Waiter.createWaiterOrder(order)
        Waiter.emitToWaiter(io)

        emitToManager(result, io)

    }
    //===============================================================
    const beginOrderItem = async (order, io) => {
        await sequelize.query(`UPDATE order_item
    SET status = 1
    WHERE id=${order.id};`)
        var result = await getAllActiveOrders()
        const orders = await populateActiveOrders(result, 2)
        io.sockets.emit("Bar", orders)
        emitToManager(result, io)

    }

    //===============================================================
    const emitToBar = async (io) => {
        var result = await getAllActiveOrders()
        const orders = await populateActiveOrders(result, 1)
        io.sockets.emit("Bar", orders)
    }

    //===============================================================
    const populateActiveOrders = async (orders, station) => {
        console.log("in populate ", orders)
        for (order of orders) {
            order_items = await getOrderItems(order.id, station)
            order["order_items"] = order_items
        }
        return orders
    }

    //===============================================================
    const getAllActiveOrders = async () => {
        const activeOrders = await sequelize.query(`SELECT * from order_table
    WHERE status!=3`)
        //console.log(activeOrders)
        return activeOrders[0]
    }
    //===============================================================
    const getOrderItems = async (order_id, station) => {
        const orderItems = await sequelize.query(`SELECT name,order_item.order_id,order_item.status FROM order_item
    LEFT JOIN menu_items on menu_items.id = order_item.menu_item_id
    LEFT JOIN order_table on order_table.id = order_item.order_id
    WHERE order_id = ${order_id} AND station =${station}`)
        return orderItems[0]
    }

    return {
        emitToBar: emitToBar,
        pickUpOrderItem,pickUpOrderItem,
        beginOrderItem:beginOrderItem
    }
}

module.exports = BarModule

