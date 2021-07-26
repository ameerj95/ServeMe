import { observable, makeObservable } from 'mobx'

export class Info {

    constructor(id, name, img, description, phoneNumber, workHours ,logo ,loction , email) {
            this.id = id;
            this.img = img;
            this.name = name;
            this.phoneNumber = phoneNumber;
            this.description = description;
            this.workHours = workHours;
            this.logo = logo;
            this.loction = loction;
            this.email = email;


         makeObservable(this, {
            id: observable,
            img: observable,
            name: observable,
            email: observable,
            description: observable,
            phoneNumber: observable,
            loction: observable,
            workHours: observable,
            logo : observable,
        })
    }
}