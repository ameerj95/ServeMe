const express = require('express')
// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('mysql://root:@localhost/sql_crm')
const router = express.Router()

router.get('/MenuItems', function (req, res) {
    res.send("in MenuItems")
})

module.exports = router