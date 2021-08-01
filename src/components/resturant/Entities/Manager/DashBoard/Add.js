import React, { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import Button from "@material-ui/core/Button";
import "./Actions.css"
const imgURL =
  "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

function Add(props) {
  const [input, setInput] = useState({
    id: "",
    name: "",
    img: "",
    price: 0,
    description: "",
    category: "",
    vegan: false,
    gluten: false,
  });

  function handleChange(e) {
    const value = e.target.value;
    setInput({
      ...input,
      [e.target.id]: value,
      [e.target.name]: value,
      [e.target.img]: value,
      [e.target.price]: value,
      [e.target.description]: value,
      [e.target.category]: value,
      [e.target.vegan]: value,
      [e.target.gluten]: value,
    });
  }

  const AddItem = () => {
    props.menu.addItem(input);
  };
  return (
    <div className="addSection">
      <h1>Add Item</h1>

      <br></br>
      <span>name</span>
      <br></br>
      <input value={props.name} name="name" onChange={handleChange} />

      <br></br>
      <span>id</span>
      <br></br>
      <input value={props.id} name="id" onChange={handleChange} />

      <br></br>
      <span className="addInputTextField">img</span>
      <br></br>
      <input value={props.img} name="img" onChange={handleChange} />

      <br></br>
      <span className="addInputTextField">price</span>
      <br></br>
      <input value={props.price} name="price" onChange={handleChange} />

      <br></br>
      <span className="addInputTextField">category</span>
      <br></br>
      <input value={props.category} name="category" onChange={handleChange} />

      <br></br>
      <span className="addInputTextField">vegan</span>
      <br></br>
      <input name="vegan" value={props.vegan} onChange={handleChange} />

      <br></br>
      <span className="addInputTextField">gluten : </span>
      <br></br>
      <input value={props.gluten} name="gluten" onChange={handleChange} />

      <br></br>
      <span className="addInputTextField"> Description : </span>
      <br></br>
      <textarea
        rows="4"
        cols="50"
        value={props.description}
        name="description"
        form="usrform"
        placeholder="description"
        onChange={handleChange}
      ></textarea>
        <br></br>
      <Button onClick={AddItem}>Add New Item</Button>
    </div>
  );
}

export default inject("menu")(observer(Add));
