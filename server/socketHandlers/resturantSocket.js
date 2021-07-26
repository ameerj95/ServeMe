exports = module.exports = function(socket){
    socket.on('resturant', msg => {
        console.log("in resturant")
        console.log(msg)
    });
  } 