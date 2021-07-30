const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');
const moment = require('moment')
const Waiter = require('../classes/Waiter.js')()

//===============================================================
const action_map = {
    "0":Waiter.startWaiterOrder,
    "1":Waiter.completeWaiterOrder,
}
//===============================================================
//in this socket we want to recive the following
//input -> action
exports = module.exports = function(socket,io){
    socket.on('waiterServer', data => {
        console.log("in waiterServer")
        action_map[data.action_type](data,io)
    });
  } 
//===============================================================