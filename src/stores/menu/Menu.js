import { observable, action, makeObservable, runInAction } from 'mobx'


export class Menu {

    constructor() {
        this.list = []
        this.length = 0
        this.index = 0
       
        makeObservable(this, {
            index : observable,
            list: observable,
            length: observable,
            addMenuItem : action,
          })
    }

    addMenuItem = (menuItem) =>{
        this.list.push(menuItem) 
    }
    
}