import { observable, makeObservable } from 'mobx'
 
export class MenuItem {
 
    constructor(id, name, img, price, description, category, vegan, gluten) {
            this.id = id;
            this.img = img;
            this.name = name;
            this.price = price;
            this.description = description;
            this.category = category;
            this.vegan = vegan;
            this.gluten = gluten;
 
         makeObservable(this, {
            id: observable,
            img: observable,
            name: observable,
            price: observable,
            description: observable,
            category: observable,
            vegan: observable,
            gluten: observable,
        })
    }
}