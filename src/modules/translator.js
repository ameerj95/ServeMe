const moment = require('moment')
const translator = function () {
    const translateTime=(time)=>{
       return moment(time).format('h:mm:ss a');
    }



    const statusTranslator=(status)=>{
        const statuses={
            0:"Not Started",
            1:"In Progress",
            2:"Completed"
        }
        return statuses[status]
    }

    //==============================================================================
    return {
        translateTime: translateTime,
        statusTranslator:statusTranslator
    }
}

module.exports = translator


