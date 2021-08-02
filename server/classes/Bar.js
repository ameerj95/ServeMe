const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');
const Waiter = require('../classes/Waiter.js')()


const BarModule = function () {
    //===============================================================
    const pickUpOrderItem = async (order, io) => {
        await sequelize.query(`UPDATE order_item
        SET status = 2
        WHERE id=${order.item_id};`)
        emitToBar(io)
        Waiter.createWaiterOrder(order)
        Waiter.emitToWaiter(io)
        emitToManager(result, io)

    }
    //===============================================================
    const beginOrderItem = async (order, io) => {
        await sequelize.query(`UPDATE order_item
    SET status = 1
    WHERE id=${order.item_id};`)
        var result = await getAllActiveOrders()
        const orders = await populateActiveOrders(result, 2)
        io.sockets.emit("bar", orders)
        emitToManager(result, io)

    }

    //===============================================================
    const emitToBar = async (io) => {
        console.log("in here BAR ===================")
        var result = await getAllActiveOrders()
        const orders = await populateActiveOrders(result,2)
        console.log("=====================================",orders)
        io.sockets.emit("bar", orders)
    }

    //===============================================================
    const populateActiveOrders = async (orders, station) => {

        await Promise.all(orders.map(async (order) => {
            const order_items = await getOrderItems(order.id, station)
            order["order_items"] = (!order_items ? [] : order_items)
          }));
        const filtered_orders = orders.filter(order => order.order_items.length > 0);

        return filtered_orders
    }

    //===============================================================
    const getAllActiveOrders = async () => {
        const activeOrders = await sequelize.query(`SELECT * from order_table
    WHERE status=1`)
        //console.log(activeOrders)
        return activeOrders[0]
    }
    //===============================================================
    const getOrderItems = async (order_id, station) => {
        const orderItems = await sequelize.query(`SELECT name,order_item.order_id,order_item.id,order_item.status FROM order_item
    LEFT JOIN menu_items on menu_items.id = order_item.menu_item_id
    LEFT JOIN order_table on order_table.id = order_item.order_id
    WHERE order_id = ${order_id} AND station =${station}`)
        return orderItems[0]
    }
    //===============================================================
    const getAllActivePopulateBarOrders = async () => {
        var result = await getAllActiveOrders()
        const orders = await populateActiveOrders(result, 2)
        return orders
    }
    //===============================================================
    return {
        emitToBar: emitToBar,
        pickUpOrderItem, pickUpOrderItem,
        beginOrderItem: beginOrderItem,
        getAllActivePopulateBarOrders:getAllActivePopulateBarOrders
    }
}

module.exports = BarModule

