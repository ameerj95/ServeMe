import { observable, makeObservable } from 'mobx'

export class order {

    constructor(name) {
        this.name = name

        makeObservable(this, {
            name: observable,
        })
    }
}