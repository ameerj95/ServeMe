
const SocketListeners = function () {

    const createTableSocket = (stores, toast) => {
        console.log("listening in customer")
        console.log(toast)
        stores.clientsocket.socket.on("customer", data => {
            if (data.tableNum == stores.table.tableNum) {
                console.log(data)
                console.log("customer recivied data (updated cart)", data)
                stores.table.updateCart(data.tableOrder)
                if (data.action_type == 0) {
                    toast.info('🛒 A new Item been added to Cart!', {
                        className: 'toastAdd',
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                else {
                    toast.info('❌ Item been removed', {
                        className: 'toastDelete',
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            }
        });
        stores.clientsocket.socket.on("cart", data => {
            if (data.tableNum == stores.table.tableNum) {

                toast.info('🍽️ An Order has been Fired!', {
                    className: 'toastOrder',
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.log("IN CART UPDATED")
            }
        });
        stores.clientsocket.socket.on("Cart", data => {
            if (data.tableNum == stores.table.tableNum) {
                console.log("IN CUSTOMER CART", data)
            }
        });
    }

    const createkitchenSocket = (stores, toast) => {
        console.log("listening in kitchen")
        stores.clientsocket.socket.on("kitchen", data => {

            console.log("in kitchen client ", data)
            stores.foodorders.updateFoodOrders(data)
            toast.info('🥡 A new Order has been made', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        );
        stores.clientsocket.socket.on("resturant", data => {
            stores.foodorders.fetchAllOrders()
        }
        );

    }

    const createBarSocket = (stores, toast) => {
        console.log("listening in bar")
        stores.clientsocket.socket.on("bar", data => {
            stores.foodorders.updateFoodOrders(data)
            toast.info('🥡 A new Order has been made', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        );
        stores.clientsocket.socket.on("resturant", data => {
            stores.foodorders.fetchAllOrders()
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

    const createSocket = (stores, toast) => {
        const funct = socketListenerUsers[stores.clientsocket.usertype]
        if (funct != undefined) { socketListenerUsers[stores.clientsocket.usertype](stores, toast) }
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


