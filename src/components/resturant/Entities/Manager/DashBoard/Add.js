import React, { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
const imgURL =
  "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

function Add(props) {
  const [newItem, setNewItem] = useState({});
  useEffect(() => {
    // setNewItem({
    //   id: "1",
    //   name: "Pizza",
    //   img: imgURL,
    //   price: 50,
    //   description: "The best",
    //   category: "food",
    //   vegan: true,
    //   gluten: true,
    // });

  }, []);
  console.log(newItem);
  const handleChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.id]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.img]: e.target.value,
      [e.target.price]: e.target.value,
      [e.target.description]: e.target.value,
      [e.target.category]: e.target.value,
      [e.target.vegan]: e.target.value,
      [e.target.gluten]: e.target.value,
    });
  };
  const handleSubmit = () => {
    // console.log(newItem);
    // props.menu.AddNewItem(newItem);
    props.menu.addMenuItem(newItem);
  };

  return (
    <div className="dividingLine">
      <h3>Add Item</h3>
      <span> Name :</span> <br></br>
      <input
        name="Name"
        placeholder="Item Name" onChange={handleChange}
      ></input>
      <br></br>
      <span>Id :</span>
      <br></br>
      <input name="id" placeholder="id" onChange={handleChange}></input>
      <br></br>
      <span>Img :</span>
      <br></br>
      <input name="img" placeholder="img" onChange={handleChange}></input>
      <br></br>
      <span> Price :</span>
      <br></br>
      <input
        name="price"
        placeholder="price" onChange={handleChange}
      ></input>
      <br></br>
      <span> Description : </span>
      <br></br>
      <input
        name="description"
        placeholder="description" onChange={handleChange}
      ></input>
      <br></br>
      <span> Category :</span>
      <br></br>
      <input
        name="category"
        placeholder="category" onChange={handleChange}
      ></input>
      <br></br>
      <span> Vegan : </span>
      <br></br>
      <input
        name="vegan"
        placeholder="vegan" onChange={handleChange}
      ></input>
      <br></br>
      <span> Gluten :</span>
      <br></br>
      <input
        name="gluten"
        placeholder="gluten" onChange={handleChange}
      ></input>
      <br></br>
      <button className onClick={handleSubmit}> Add new Item</button>
    </div>
  );
}

export default inject("menu")(observer(Add));
