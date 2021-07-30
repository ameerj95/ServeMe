const express = require('express')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const router = express.Router()
const Waiter = require('../classes/Waiter')()
const Manager = require('../classes/Manager')()

//get all wait orders
router.get('/Orders', async function (req, res) {
    const orders = await Waiter.getAllActiveWaiterOrders()
    res.send(orders)
})

module.exports = router