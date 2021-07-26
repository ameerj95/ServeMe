exports = module.exports = function(socket){
    socket.on('customer', msg => {
        console.log(msg)
    });
  } 