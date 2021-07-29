const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');
const Manager = require('../classes/Manager.js')()


const WaiterModule = function () {
    const completeWaiterOrder = async(order)=>{
        await sequelize.query(`UPDATE order_waiter
        SET status = 2
        WHERE id=${order.id};`)
        emitToWaiter(io)
        Manager.emitToManagerActiveWaiterOrders()
    }
    const startWaiterOrder = async(order)=>{
        await sequelize.query(`UPDATE order_waiter
        SET status = 1
        WHERE id=${order.id};`)
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
        console.log("in waiter ")
        var ActiveOrders = await getAllActiveWaiterOrders()
        io.sockets.emit("waiter", { orders: ActiveOrders, type: 1 })
    }
    //==============================================================================
    const createWaiterOrder = async(order)=>{
        await sequelize.query(`INSERT INTO order_waiter(table_num,order_id,order_type,date,status)
        VALUES (${order.tableNum},${order.order_id},${order.order_type},'${moment().format()},1')`)
    }
    //==============================================================================
    return {
        createWaiterOrder : createWaiterOrder,
        emitToWaiter: emitToWaiter,
        completeWaiterOrder:completeWaiterOrder,
        startWaiterOrder:startWaiterOrder,
        getAllActiveWaiterOrders,getAllActiveWaiterOrders
    }
}

module.exports = WaiterModule


