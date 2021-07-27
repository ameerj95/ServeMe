import { observable, action, makeObservable } from 'mobx'
// import axios from "axios"
// import MenuItems from './MenuItems'

export class Orders {

    constructor() {
        this.list = []
        this.length = 0
        this.index = 0
       
        makeObservable(this, {
            index : observable,
            list: observable,
            length: observable,
            addOrder : action,
          })
    }

    addOrder = (order) =>{
        this.list.push(order)
    }
    // UpdateorderData = async (id) => {
    //     const user = this.user.find(f => f.id == id);
    //     this.list.order=
        
    //     const result = await axios.put(`${API_PATH}/updateorder/${id}`, {})
    //     return result;
    // }


}