import { observable, makeObservable } from 'mobx'

export class MenuItem {

    constructor(name) {
        this.name = name

        makeObservable(this, {
            name: observable,
        })
    }
}