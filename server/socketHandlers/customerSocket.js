const CustomerModule = require('../classes/Customer.js')()
//==================================================================================================
const action_map = {
    "0":CustomerModule.addToCart,
    "1":CustomerModule.removeItemFromCart,
}
//==================================================================================================
exports = module.exports = function(socket,io){
    socket.on('customerServer', data => {
        console.log("in customerServer")
        action_map[data.action_type](data,io)
    });
  } 
//==================================================================================================