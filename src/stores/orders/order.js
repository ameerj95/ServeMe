import { observable, makeObservable } from 'mobx'

export class order {

    constructor() {
        this.name = name
        makeObservable(this, {
            name: observable,
        })
    }
}