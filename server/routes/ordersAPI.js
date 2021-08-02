const express = require("express");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/servemedb");
const router = express.Router();
// const moment = require("moment");
const moment = require("moment-timezone");
const Waiter = require("../classes/Waiter")();

router.get("/order/:tableNum", async function (req, res) {
  console.log("tablenum?-----------------------------------------");
  const status = await getOrderStatus(req.params.tableNum);
  if (!status) {
    await createNewOrder(req.params.tableNum);
  }
  const orderID = await getOrderId(req.params.tableNum);
  const order = await getTableOrder(orderID);
  res.send(order);
});

router.get("/order/:tableNum", async function (req, res) {
  const status = await getOrderStatus(req.params.tableNum);
  if (!status == 1) {
    await createNewOrder(req.params.tableNum);
  }
  const orderID = await getOrderId(req.params.tableNum);
  const order = await getTableOrder(orderID);
  res.send(order);
});

const getOrderId = async (tableNum) => {
  const status = await sequelize.query(`SELECT id from order_table 
    where table_num=${tableNum} AND status=1`);
  return status[0][0].id;
};

const getTableOrder = async (order_id) => {
  const table_order = await sequelize.query(`SELECT * , order_item.id as id
    FROM order_item 
    LEFT JOIN menu_items ON order_item.menu_item_id = menu_items.id
    LEFT JOIN order_table ON order_item.order_id = order_table.id
    where order_id = ${order_id} AND order_table.status=1`);
  return table_order[0];
};
//===============================================================
const getOrderStatus = async (tableNum) => {
  const status = await sequelize.query(`SELECT * from order_table 
    where table_num=${tableNum}`);
  return status[0][0];
};
//===============================================================
const createNewOrder = async (tableNum) => {
  await sequelize
    .query(
      `INSERT INTO order_table(date,table_num,status)
    VALUES ('${moment().tz('Asia/Jerusalem').format()}','${tableNum}',${1})`
    )
    .then(function ([result]) {
      console.log("done");
    });
};
//===============================================================
router.get("/waiterOrders", async function (req, res) {
  const order = Waiter.getAllActiveWaiterOrders;
  res.send(order);
});
//===============================================================
module.exports = router;
