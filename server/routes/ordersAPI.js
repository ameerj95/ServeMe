const express = require('express')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const router = express.Router()

router.get('/order/:tableNum', async function (req, res) {
    const orderID = await getOrderId(req.params.tableNum)
    const order = await getTableOrder(orderID)
    res.send(order)
})

const getOrderId = async (tableNum) =>{
    const status = await sequelize.query(`SELECT id from order_table 
    where table_id=${tableNum}`)
    return status[0][0].id
}

const getTableOrder = async (order_id)=>{
    const table_order = await sequelize.query(`SELECT *
    FROM order_item
    LEFT JOIN menu_items ON order_item.menu_item_id = menu_items.id
    LEFT JOIN order_table ON order_item.order_id = order_table.id
    where order_id = ${order_id}`)
    console.log(table_order)
    return table_order[0]
}

module.exports = router