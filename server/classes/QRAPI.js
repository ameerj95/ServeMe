const configdata = require('../../configData.json')
exports = module.exports = function(tableNum){
    const table_qr = {}
    for(let i=1 ; i<tableNum+1 ; i++ ){
        console.log("in loop ",i)
        table_qr[i] = (`http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${configdata.CLIENT_URL}/?tablenum=${i}`)
    }
    return table_qr
  } 