const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/servemedb", {
  logging: false,
});
const actions = require("../actionsConstants");
const Manager = require("../classes/Manager.js")();
// const moment = require("moment");
const moment = require("moment-timezone");

const WaiterModule = function () {
  const completeWaiterOrder = async (order, io) => {
    await sequelize.query(`UPDATE order_waiter
        SET status = 2
        WHERE id=${order.id};`);
    console.log("in completed");
    console.log(
      "==============================================================================================="
    );
    console.log(order);
    emitToWaiter(io);
    // Manager.emitToManagerActiveWaiterOrders()
  };
  const startWaiterOrder = async (order, io) => {
    await sequelize.query(`UPDATE order_waiter
        SET status = 1
        WHERE id=${order.id};`);
    emitToWaiter(io);
    // Manager.emitToManagerActiveWaiterOrders()
  };
  //===============================================================
  const getAllActiveWaiterOrders = async () => {
    console.log("hello-------------------------------------------------------");
    const activeOrders = await sequelize.query(`SELECT * from order_waiter
        WHERE status=1`);
    return activeOrders[0];
  };
  //==============================================================================
  const emitToWaiter = async (io) => {
    console.log("in waiter SERVER");
    var ActiveOrders = await GroupedWaiterOrders();
    io.sockets.emit("waiter", { orders: ActiveOrders, type: 1 });
  };
  //==============================================================================
  const createWaiterOrder = async (order) => {
    const waiterOrder = await getOrderDetails(order.item_id);
    await sequelize.query(`INSERT INTO order_waiter(table_num,order_id,order_type,date,status,item_id)
        VALUES (${waiterOrder.table_num},${waiterOrder.order_id},${
      order.action_type
    },'${moment().tz("Asia/Jerusalem").format()}',0,${
      waiterOrder.menu_item_id
    })`);
  };
  //==============================================================================
  const createWaiterServOrder = async (order) => {
    const order_id = await getOrderId(order.tableNum);
    console.log(
      "==================================================================="
    );
    console.log(order.order_type);
    // console.log(`INSERT INTO order_waiter(table_num,order_id,order_type,date,status,item_id)
    // //     VALUES (${order.tableNum},${order_id},${order.action_type},'${moment().format()}',0,${0})`)
    await sequelize.query(`INSERT INTO order_waiter(table_num,order_id,order_type,date,status,item_id)
            VALUES (${order.tableNum},${order_id},${
      order.order_type
    },'${moment().tz("Asia/Jerusalem").format()}',0,0)`);
  };
  //==============================================================================
  const getOrderDetails = async (item_id) => {
    const order =
      await sequelize.query(`SELECT name,order_item.id,order_item.menu_item_id as menu_item_id,order_item.order_id as order_id,order_item.status,order_table.table_num,order_table.id as order_id FROM order_item
        LEFT JOIN menu_items on menu_items.id = order_item.menu_item_id
        LEFT JOIN order_table on order_table.id = order_item.order_id
        WHERE order_item.id = ${item_id} AND order_table.status =1 `);
    return order[0][0];
  };

  //==============================================================================
  const GroupedWaiterOrders = async () => {
    const tables_orders = {};
    console.log("hihihihihihihihihihihihihihi");
    const tables_total = await getTableNums();
    for (let i = 1; i < tables_total + 1; i++) {
      console.log(i);
      const order_id = await getOrderId(i);
      tables_orders[i] = !order_id ? [] : await getTableOrder(order_id);
    }
    console.log(tables_orders);
    return tables_orders;
  };
  //==============================================================================
  const getOrderId = async (tableNum) => {
    const status = await sequelize.query(`SELECT id from order_table 
        where table_num=${tableNum} AND status=1`);
    return !status[0][0] ? undefined : status[0][0].id;
  };
  //==============================================================================
  const getTableOrder = async (order_id) => {
    const tableOrder = await sequelize.query(`SELECT * from order_waiter
                 WHERE order_id=${order_id}`);
    return tableOrder[0];
  };
  const getTableNums = async () => {
    const tables_total = await sequelize.query(
      `SELECT count(table_num) from qr_table`
    );
    return tables_total[0][0]["count(table_num)"];
  };
  const finshTableOrder = async (order, io) => {
    console.log(order);
    console.log("IN FINSH TABLE ORDER");
    await sequelize.query(`UPDATE order_table
            SET status = 2
            WHERE table_num=${order.id}`);
    emitToWaiter(io);
    e;
  };
  //==============================================================================
  return {
    createWaiterOrder: createWaiterOrder,
    emitToWaiter: emitToWaiter,
    completeWaiterOrder: completeWaiterOrder,
    startWaiterOrder: startWaiterOrder,
    getAllActiveWaiterOrders,
    getAllActiveWaiterOrders,
    GroupedWaiterOrders: GroupedWaiterOrders,
    createWaiterServOrder: createWaiterServOrder,
    finshTableOrder: finshTableOrder,
  };
};

module.exports = WaiterModule;
