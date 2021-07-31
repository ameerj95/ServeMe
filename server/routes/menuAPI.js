const express = require('express')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const router = express.Router()
//=================================================================
const configdata = require('../../configData.json')
//=================================================================
router.get('/MenuItems', async function (req, res) {
    let menuItems = await sequelize.query(`SELECT * FROM menu_items`)
    res.send(menuItems[0]) 
})
//=================================================================
router.get('/MenuItemsIDS', async function (req, res) {
    let menuItems = await sequelize.query(`select id,name from menu_items`)
    const menuObject = {}
    for(element of menuItems[0]){
        menuObject[element.id] = element.name
    };
    res.send(menuObject) 
})

//=================================================================
router.post('/MenuItems', async function (req, res) {
    let newMenuItem = req.body
    await sequelize.query(`INSERT INTO menu_items(name,price,description,img,
        category,is_vegan,is_gluten_free,station)
    VALUES('${newMenuItem.name}',${newMenuItem.price},'${newMenuItem.description}',
    '${newMenuItem.img}',${newMenuItem.category},${newMenuItem.is_vegan},
    ${newMenuItem.is_gluten_free},${newMenuItem.station})`)
    res.send("added")
})
//=================================================================
//remember to recive ID (DO NOT SEND WITHOUT ID)
router.put('/MenuItems', async function (req, res) {
    let updatedMenuItem = req.body
    sequelize
            .query(`UPDATE menu_items
            SET name = '${updatedMenuItem.name}',
            price=${updatedMenuItem.price},
            description='${updatedMenuItem.description}',
            img='${updatedMenuItem.img}',
            category=${updatedMenuItem.category},
            is_vegan=${updatedMenuItem.is_vegan},
            is_gluten_free=${updatedMenuItem.is_gluten_free},
            station=${updatedMenuItem.station}
            WHERE id = ${updatedMenuItem.id}`)
            .then(function ([result]) {
                res.send("updated")
            })

})
//=================================================================
//remember to recive ID (DO NOT SEND WITHOUT ID)
router.delete('/MenuItems', async function (req, res) {
    let id = req.body.id
    sequelize
            .query(`DELETE from menu_items
            WHERE id = ${id}`)
            .then(function ([result]) {
                res.send("deleted")
            })
})
module.exports = router