import React, { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
import { data } from "jquery";
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
    console.log(newItem);
  };

  return (
    <div className="addSection">
      <h3>Add Item</h3>
      <span className="addInputTextField"> Name :</span> <br></br>
      <input
        name="Name"
        placeholder="Item Name"
        onChange={handleChange}
      ></input>
      <br></br>
      <span className="addInputTextField">Id :</span>
      <br></br>
      <input
        type="number"
        name="id"
        placeholder="id"
        onChange={handleChange}
      ></input>
      <br></br>
      <span className="addInputTextField">Img :</span>
      <br></br>
      <input
        type="url"
        name="img"
        placeholder="img"
        onChange={handleChange}
      ></input>
      <br></br>
      <span className="addInputTextField"> Price :</span>
      <br></br>
      <input name="price" placeholder="price" onChange={handleChange}></input>
      <br></br>
      <span className="addInputTextField"> Category :</span>
      <br></br>
      <input
        name="category"
        placeholder="category"
        onChange={handleChange}
      ></input>
      <br></br>
      <span className="addInputTextField"> Vegan : </span>
      <br></br>
      <input
        name="vegan"
        placeholder="vegan"
        onChange={handleChange}
        list="vegan"
        autocomplete="off"
      ></input>
      <datalist id="vegan">
        <option>False</option>
        <option>True</option>
      </datalist>
      <br></br>
      <span className="addInputTextField"> Gluten :</span>
      <br></br>
      <input
        type="text"
        name="gluten"
        placeholder="gluten"
        onChange={handleChange}
        list="gluten"
        autocomplete="off"
      />
      <datalist id="gluten">
        <option>False</option>
        <option>True</option>
      </datalist>
      <br></br>
      <span className="addInputTextField"> Description : </span>
      <br></br>
      <textarea
        rows="4"
        cols="50"
        name="description"
        form="usrform"
        placeholder="description"
        onChange={handleChange}
      ></textarea>
      <br></br>
      <button className onClick={handleSubmit}>
        Add new Item
      </button>
    </div>
  );
}

export default inject("menu")(observer(Add));
