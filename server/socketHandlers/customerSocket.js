const 
CustomerModule = require('../classes/Customer.js')()
//==================================================================================================
const action_map = {
    "0":CustomerModule.addToCart,
    "1":CustomerModule.removeItemFromCart,
    "2":CustomerModule.requestService
}
//==================================================================================================
exports = module.exports = function(socket,io){
    socket.on('customerServer', data => {
        console.log("aaaaaaaaaaaaa")
        action_map[data.action_type](data,io)
    });
  } 
//==================================================================================================