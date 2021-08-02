import React, { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import Button from "@material-ui/core/Button";
import "./Actions.css";
import Select from "react-select";

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
  const options = [
    { label: "Appietizers", value: "0" },
    { label: "Main", value: "1" },
    { label: "Drinks", value: "2 " },
    { label: "Desert", value: "3 " },
  ];
  const option = [
    { label: "false", value: "0" },
    { label: "true", value: "1" },
  ];
  const AddItem = () => {
    props.menu.addMenuItem(input);
  };
  return (
    <div className="addSection">
      <h1>Add Item</h1>
      <br></br>
      <h4>Name</h4>
      <input
        className="addInputTextField"
        value={input.name}
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <br></br>
      <h4>Id</h4>
      <input
        className="addInputTextField"
        value={input.id}
        name="id"
        type="Number"
        placeholder="Id"
        onChange={handleChange}
      />
      <br></br>
      <h4>Image</h4>
      <input
        className="addInputTextField"
        value={input.img}
        name="img"
        typr="Url"
        placeholder="Image"
        onChange={handleChange}
      />
      <br></br>
      <h4>Price</h4>
      <input
        className="addInputTextField"
        value={input.price}
        name="price"
        placeholder="Price"
        onChange={handleChange}
      />
      ₪<br></br>
      <h4>Category</h4>
      <select
        className="addInputTextField"
        onChange={handleChange}
        Value={input.category}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <br></br>
      <h4>Vegan</h4>
      <select
        name="vegan"
        className="addInputTextField"
        onChange={handleChange}
        Value={input.Vegan}
      >
        {option.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <br></br>
      <h4>Gluten : </h4>
      <select
        name="gluten"
        className="addInputTextField"
        onChange={handleChange}
        Value={input.gluten}
      >
        {option.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <br></br>
      <h4> Description : </h4>
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
