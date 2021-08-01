const express = require('express')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const router = express.Router()
var actions = require('../actionsConstants');

//=================================================================
const configdata = require('../../configData.json')
//=================================================================
router.get('/test01', async function (req, res) {
    // console.log(actions.STATIONS); // 'some value'
    console.log("ResturantManager")
    const tableOrder = await getTableOrder(3)

    const result = filterMenuItemsByStation(tableOrder,actions.STATIONS.KITCHEN)
    res.send(result)
})
const getTableOrder = async (order_id)=>{
    const table_order = await sequelize.query(`SELECT *
    FROM order_item , order_item.id as id
    LEFT JOIN menu_items ON order_item.menu_item_id = menu_items.id
    LEFT JOIN order_table ON order_item.order_id = order_table.id
    where order_id = ${order_id}`)
    return table_order[0]
}
const filterMenuItemsByStation=(data,type)=>{
    return data.filter(item => item.station == type )
}
module.exports = router