const express = require('express')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const router = express.Router()
const Kitchen = require('../classes/Kitchen')()
const Bar = require('../classes/Bar')()
const Manager = require('../classes/Manager')()

//get all food orders
router.get('/KitchenOrders', async function (req, res) {
    const orders = await Kitchen.getAllActivePopulateFoodOrders()
    res.send(orders)
})
//get all bar orders
router.get('/BarOrders', async function (req, res) {
    const orders = await Bar.getAllActivePopulateBarOrders()
    res.send(orders)
})
//get all food orders
router.get('/Orders', async function (req, res) {
    const orders = await Manager.getAllActiveOrdersManager()
    res.send(orders)
})

module.exports = router