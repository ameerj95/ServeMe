import React, { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import Button from "@material-ui/core/Button";
import "./Actions.css";
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
      <h4>name</h4>
      <br></br>
      <input
        className="addInputTextField"
        value={props.name}
        name="name"
        onChange={handleChange}
      />

      <br></br>
      <h4>id</h4>
      <br></br>
      <input
        className="addInputTextField"
        value={props.id}
        name="id"
        onChange={handleChange}
      />

      <br></br>
      <h4 className="addInputTextField" className="addInputTextField">
        img
      </h4>
      <br></br>
      <input
        className="addInputTextField"
        value={props.img}
        name="img"
        onChange={handleChange}
      />

      <br></br>
      <h4 className="addInputTextField">price</h4>
      <br></br>
      <input
        className="addInputTextField"
        value={props.price}
        name="price"
        onChange={handleChange}
      />

      <br></br>
      <h4>category</h4>
      <br></br>
      <input
        className="addInputTextField"
        value={props.category}
        name="category"
        onChange={handleChange}
      />

      <br></br>
      <h4>vegan</h4>
      <br></br>
      <input
        className="addInputTextField"
        name="vegan"
        value={props.vegan}
        onChange={handleChange}
      />

      <br></br>
      <h4>gluten : </h4>
      <br></br>
      <input
        className="addInputTextField"
        value={props.gluten}
        name="gluten"
        onChange={handleChange}
      />

      <br></br>
      <h4 className="addInputTextField" className="addInputTextField">
        {" "}
        Description :{" "}
      </h4>
      <br></br>
      <textarea
        rows="4"
        cols="50"
        className="addInputTextField"
        value={props.description}
        name="description"
        form="usrform"
        placeholder="description"
        onChange={handleChange}
      ></textarea>
      <br></br>
      <button className="btn btn-lg btn-outline-danger ml-4" onClick={AddItem}>
        Add New Item
      </button>
    </div>
  );
}

export default inject("menu")(observer(Add));
