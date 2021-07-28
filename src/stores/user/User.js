import { observable, action, makeObservable, runInAction } from 'mobx'
import axios from "axios"
import Client from './Client'

export class User {

    constructor() {
        this.list = []
        this.length = 0
        this.index = 0
       
        makeObservable(this, {
            index : observable,
            list: observable,
            length: observable,
            addClient: action,
            updatePersonalInfo: action,
            updateOwnership: action, 
            updateEmailType: action,
            updateSale: action,
            saleStatus:action,
            increaseIndex:action,
            decreaseIndex:action,
            updateListOfUser:action,
            emptyTheList:action
          })
    }

    increaseIndex = () =>{
        this.index += 1
        this.updateListOfUser()
    }

    decreaseIndex = () =>{
        if(this.index > 0){
            this.index -= 1
            this.updateListOfUser()
        }
    }

    emptyTheList = () => {
        this.list = []
    }

    increaseLength=()=>{
        console.log("blop")
        this.length++;
    }

    saleStatus = (first ,last) =>{
        let res = (this.list.filter(client => client.first === first && client.last === last))
        return res[0] ? res[0].sold : undefined
    } 

    updateListOfUser = async () => {
        let res = await axios.get(`http://localhost:3001/User/?offset=${20*this.index}`)
        this.emptyTheList()
        res.data.forEach(client => {
            runInAction(()=>{
                this.list.push(new Client(client))
            })
        });
    }
    printList = () => {console.log(this.list)}

    addClient = async (newClient) => {

        await axios.post("http://localhost:3001/User", newClient)
        this.updateListOfUser()
    }

    updatePersonalInfo = async (id,newInfo) => {
        await axios.put("http://localhost:3001/User/personalInfo", {id,newInfo})
        this.updateListOfUser()
    }

    updateOwnership = async (first,last,owner) => {
        await axios.put("http://localhost:3001/User/ownership", {first,last ,owner})
        this.updateListOfUser()
    }

    updateEmailType = async (first,last,emailType) => {

        await axios.put("http://localhost:3001/User/emailType", {first,last ,emailType})
        this.updateListOfUser()
    }

    updateSale = async (first,last) => {
        await axios.put("http://localhost:3001/User/sale", {first,last ,sold:true})
        this.updateListOfUser()
    }

}