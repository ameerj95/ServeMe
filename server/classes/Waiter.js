const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');
const Manager = require('../classes/Manager.js')()
const moment = require('moment')

const WaiterModule = function () {
    const completeWaiterOrder = async (order,io) => {
        await sequelize.query(`UPDATE order_waiter
        SET status = 2
        WHERE id=${order.id};`)
        emitToWaiter(io)
        Manager.emitToManagerActiveWaiterOrders()
    }
    const startWaiterOrder = async (order,io) => {
        await sequelize.query(`UPDATE order_waiter
        SET status = 1
        WHERE id=${order.id};`)
        emitToWaiter(io)
        Manager.emitToManagerActiveWaiterOrders()
    }
    //===============================================================
    const getAllActiveWaiterOrders = async () => {
        const activeOrders = await sequelize.query(`SELECT * from order_waiter
        WHERE status!=3`)
        return activeOrders[0]
    }
    //==============================================================================
    const emitToWaiter = async (io) => {
        console.log("in waiter SERVER")
        var ActiveOrders = await GroupedWaiterOrders()
        io.sockets.emit("waiter", { orders: ActiveOrders, type: 1 })
    }
    //==============================================================================
    const createWaiterOrder = async (order) => {
        const waiterOrder = await getOrderDetails(order.item_id)
        await sequelize.query(`INSERT INTO order_waiter(table_num,order_id,order_type,date,status,item_id)
        VALUES (${waiterOrder.table_num},${waiterOrder.order_id},${order.action_type},'${moment().format()}',0,${waiterOrder.menu_item_id})`)
    }
    //==============================================================================
    const getOrderDetails = async (item_id) => {
        const order = await sequelize.query(`SELECT name,order_item.id,order_item.menu_item_id as menu_item_id,order_item.order_id as order_id,order_item.status,order_table.table_num,order_table.id as order_id FROM order_item
        LEFT JOIN menu_items on menu_items.id = order_item.menu_item_id
        LEFT JOIN order_table on order_table.id = order_item.order_id
        WHERE order_item.id = ${item_id} `)
        return order[0][0]
    }

    //==============================================================================
    const GroupedWaiterOrders = async () => {
        const tables_orders = {}
        const tables_total = await getTableNums()
        for (let i = 1; i < tables_total; i++) {
            tables_orders[i] = await getTableOrder(i)
        }
        console.log(tables_orders)
        return(tables_orders)
    }
    //==============================================================================
    const getTableOrder = async (table_num) => {
        const tableOrder = await sequelize.query(`SELECT * from order_waiter
                 WHERE status!=3 AND table_num=${table_num}`)
        return tableOrder[0]
    }
    const getTableNums = async () => {
        const tables_total = await sequelize.query(`SELECT count(table_num) from qr_table`)
        return tables_total[0][0]['count(table_num)']
    }
    //==============================================================================
    return {
        createWaiterOrder: createWaiterOrder,
        emitToWaiter: emitToWaiter,
        completeWaiterOrder: completeWaiterOrder,
        startWaiterOrder: startWaiterOrder,
        getAllActiveWaiterOrders, getAllActiveWaiterOrders,
        GroupedWaiterOrders: GroupedWaiterOrders
    }
}

module.exports = WaiterModule


