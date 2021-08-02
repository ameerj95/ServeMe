const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');
// const moment = require('moment')
const moment = require("moment-timezone");
const Kitchen = require('../classes/Kitchen.js')()

//===============================================================
const action_map = {
    "0":Kitchen.beginOrderItem,
    "1":Kitchen.pickUpOrderItem
}
//===============================================================
//in this socket we want to recive the following
//input -> action
exports = module.exports = function(socket,io){
    socket.on('kitchen', data => {
        console.log("in kitchenServer")
        console.log(data)
        action_map[data.action_type](data,io)
    });
  } 

