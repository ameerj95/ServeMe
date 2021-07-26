const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')

router.get('/generate/:tableNum', async function (req, res) {
    const tables_qr = require('../classes/QRAPI')(parseInt(req.params.tableNum))
    console.log(tables_qr)
    Object.keys(tables_qr).forEach(async (table) => {
        await sequelize.query(`INSERT INTO qr_table(table_num,qr_code)
        VALUES (${table},'${tables_qr[table]}')`)})
        let qr_tables = await sequelize.query(`SELECT * FROM qr_table`)
        res.send(qr_tables[0])
    })

//TODO get qr_table


module.exports = router