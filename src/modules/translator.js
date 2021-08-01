// const axios = require('axios')

// const translator = function () {
//     const getMenuItemsValues=async()=>{
//         let res = await axios.get("http://localhost:5000/Menu/MenuItemsIDS")
//         menuObject = await this.getMenuItemsValues()
//         return menuObject
//     }
//     const translator_values = (order) => {
//         switch (order.order_type) {
//             case 0:
//                 return `Pick up a ${order.item_id}`
//             case 1:
//                 return `Pick up a ${order.item_id}`
//             case 2:
//                 return `Give the Bill status=${order.status}`
//             case 3:
//                 return `Give Utensils : ${order.note}`
//             case 4:
//                 return `Give Napkins  status=${order.status}`
//             case 5:
//                 return `Give a Baby chair status=${order.status}`
//             case 6:
//                 return `Clear the table status=${order.status}`
//             case 7:
//                 return `Give Sauces status=${order.status}`
//             case 8:
//                 return `Take payment status=${order.status}`
//             case 9:
//                 return `Table number ${order.table_num} are reporting a problem status=${order.status}`
//             default:
//                 return `Table number ${order.table_num} requested a waiter's assistance status=${order.status}`
//         }

//     }

//     const translateWaiterOrder = (order) => {

//         return ("hi")
//         // return (translator_values(order))
//     }




//     //==============================================================================
//     return {
//         translateWaiterOrder: translateWaiterOrder
//     }
// }

// module.exports = translator


