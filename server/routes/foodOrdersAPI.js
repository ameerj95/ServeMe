const express = require('express')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const router = express.Router()
const Kitchen = require('../classes/Kitchen')()

//get all food orders
router.get('/KitchenOrders', async function (req, res) {
    const orders = await Kitchen.getAllActivePopulateFoodOrders()
    
    res.send(orders)
})


module.exports = router