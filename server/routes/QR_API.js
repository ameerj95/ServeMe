const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/servemedb");
const configdata = require("../../configData.json");

router.get("/generate/:tableNum", async function (req, res) {
  const tables_qr = require("../classes/QRAPI")(parseInt(req.params.tableNum));
  Object.keys(tables_qr).forEach(async (table) => {
    const res = await sequelize.query(`SELECT table_num from qr_table
        WHERE table_num=${table}`);
    if (!res[0][0]) {
      await sequelize.query(`INSERT INTO qr_table(table_num,qr_code)
        VALUES (${table},'${tables_qr[table]}')`);
    }
  });
  let qr_tables = await sequelize.query(`SELECT * FROM qr_table`);
  res.send(qr_tables[0]);
});

router.get("/generatestaff", async function (req, res) {
  const staff_qr = {
    kitchen: {
      qr: `http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${configdata.CLIENT_URL}/kitchen`,
      url: `${configdata.CLIENT_URL}/kitchen`,
    },
    manager: {
      qr: `http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${configdata.CLIENT_URL}/manager`,
      url: `${configdata.CLIENT_URL}/manager`,
    },
    bar: {
      qr: `http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${configdata.CLIENT_URL}/bar`,
      url: `${configdata.CLIENT_URL}/bar`,
    },
    waiter: {
      qr: `http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${configdata.CLIENT_URL}/waiter`,
      url: `${configdata.CLIENT_URL}/waiter`,
    },
  };
  res.send(staff_qr);
});
//TODO get qr_table

module.exports = router;
