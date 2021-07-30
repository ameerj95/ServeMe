
const SocketListeners = function () {

    const createTableSocket = (stores) => {
        console.log("listening in customer")
        stores.clientsocket.socket.on("customer", data => {
            if (data.tableNum == stores.table.tableNum) {
                console.log("customer recivied data (updated cart)", data)
                stores.table.updateCart(data.tableOrder)
            }
        });
    }

    const createkitchenSocket = (stores) => {
        console.log("listening in kitchen")
        stores.clientsocket.socket.on("kitchen", data => {
            console.log("in kitchen client ", data)
            stores.foodorders.updateFoodOrders(data)
        }
        );
    }

    const createBarSocket = (stores) => {
        console.log("listening in bar")
        stores.clientsocket.socket.on("bar", data => {
            console.log("in bar client ", data)
            stores.foodorders.updateFoodOrders(data)
        }
        );
    }

    const createWaiterSocket = (stores) => {
        console.log("listening in waiter")
        stores.clientsocket.socket.on("waiter", data => {
            console.log("in waiter client ", data)
            stores.waiterorder.updateWaiterOrders(data.orders)

        }
        );
    }

    const createManagerSocket = (stores) => {
        console.log("listening in Manager")
        stores.foodorders.fetchAllOrders()
        stores.clientsocket.socket.on("manager", data => {
            console.log("in Manager client ", data)
            stores.foodorders.updateFoodOrders(data)
        }
        );
    }

    const createSocket = (stores) => {
        const funct = socketListenerUsers[stores.clientsocket.usertype]
        if(funct!=undefined)
        {socketListenerUsers[stores.clientsocket.usertype](stores)}
    }

    const socketListenerUsers = {
        "table": createTableSocket,
        "kitchen": createkitchenSocket,
        "bar": createBarSocket,
        "waiter": createWaiterSocket,
        "manager": createManagerSocket
    }




    //==============================================================================
    return {
        createSocket: createSocket,
    }
}

module.exports = SocketListeners


