const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');
const Waiter = require('../classes/Waiter.js')()
const Manager = require('../classes/Manager.js')()


const KitchenModule = function () {
    //===============================================================
    const pickUpOrderItem = async (item, io) => {
        // console.log('\x1b[36m%s\x1b[0m',item)
        await sequelize.query(`UPDATE order_item
        SET status = 2
        WHERE id=${item.item_id};`)

        emitToKitchen(io)
        Waiter.createWaiterOrder({...item,action_type:0})
        Waiter.emitToWaiter(io)
        Manager.emitToManagerActiveFoodOrders(io)

    }
    //===============================================================
    const beginOrderItem = async (item, io) => {
        await sequelize.query(`UPDATE order_item
        SET status = 1
        WHERE id=${item.item_id};`)
        emitToKitchen(io)
        // Manager.emitToManagerActiveFoodOrders(io)

    }
    //===============================================================
    const getAllActivePopulateFoodOrders = async () => {
        console.log("in get all active orders")
        var result = await getAllActiveOrders()
        console.log(result)
        const orders = await populateActiveOrders(result, 1)
        return orders
    }
    //===============================================================
    const emitToKitchen = async (io) => {
        var result = await getAllActiveOrders()
        const orders = await populateActiveOrders(result, 1)
        console.log("in emit to kitchen")

        io.sockets.emit("kitchen", orders)
    }

    //===============================================================
    const populateActiveOrders = async (orders, station) => {

        await Promise.all(orders.map(async (order) => {
            const order_items = await getOrderItems(order.id, station)
            order["order_items"] = (!order_items ? [] : order_items)
        }));
        const filtered_orders = orders.filter(order => order.order_items.length > 0);

        return filtered_orders

        // console.log("in populate ", orders)
        // for (order of orders) {
        //     order_items = await getOrderItems(order.id, station)
        //     order["order_items"] = (!order_items ? [] : order_items)
        // }
        // const filtered_orders = orders.filter(order => order.order_items.length > 0);
        // return filtered_orders
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
        console.log(order_id,station,"=========================")
        const orderItems = await sequelize.query(`SELECT name,order_item.order_id,order_item.id,order_item.status FROM order_item
    LEFT JOIN menu_items on menu_items.id = order_item.menu_item_id
    LEFT JOIN order_table on order_table.id = order_item.order_id
    WHERE order_id = ${order_id} AND station =${station} AND order_table.status=1`)
        return orderItems[0]
    }

    //================================================================ 
    return {
        emitToKitchen: emitToKitchen,
        pickUpOrderItem, pickUpOrderItem,
        beginOrderItem: beginOrderItem,
        getAllActivePopulateFoodOrders: getAllActivePopulateFoodOrders
    }
}

module.exports = KitchenModule

