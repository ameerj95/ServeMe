const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');
const moment = require('moment')
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
    socket.on('kitchenServer', data => {
        console.log("in kitchenServer")
        action_map[data.action](data,io)
    });
  } 

