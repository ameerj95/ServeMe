import React, { useState } from "react";
import "../../../../../styles/table.css";
import { observer, inject } from "mobx-react";
import { MDBDataTableV5, MDBDataTable } from "mdbreact";

function UpdateItems(props) {
  const data = props.menu.list;
  const [img, setimg] = useState("");
  const [name, setname] = useState("");
  const [price, setprice] = useState(Number);
  const [description, setdescription] = useState("");
  const [id, setid] = useState(Number);
  const [category, setcategory] = useState([""]);
  const [vegan, setvegan] = useState(Boolean);
  const [gluten, setgluten] = useState(Boolean);

  // const handleSubmit = () => {
  //     console.log(formValues)
  // }
  const handleInputName = (event) => {
    setname({ name: event.target.value });
  };

  const handleInputimg = (event) => {
    setimg({ img: event.target.value });
  };
  const handleInputid = (event) => {
    setid({ id: event.target.value });
  };
  const handleInputprice = (event) => {
    setprice({ price: event.target.value });
  };
  const handleInputdescription = (event) => {
    setdescription({ description: event.target.value });
  };
  const handleInputcategory = (event) => {
    setcategory({ category: event.target.value });
  };
  const handleInputvegan = (event) => {
    setvegan({ vegan: event.target.value });
  };
  const handleInputgluten = (event) => {
    setgluten({ gluten: event.target.value });
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Vegat</th>
            <th>Gluten</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>
                <div>
                  <img className="ItemImg" src={`${item.img}`} onChange={handleInputimg}/>
                </div>
              </td>
              <td>
                <input
                  type="text"
                  value={item.id}
                  onChange={handleInputid}
                  className="ItemInput"
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  value={item.name}
                  onChange={handleInputName}
                  className="ItemInput"
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  value={item.price}
                  onChange={handleInputprice}
                  className="ItemInput"
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  value={item.description}
                  onChange={handleInputdescription}
                  className="ItemInput"
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  value={item.category}
                  onChange={handleInputcategory}
                  className="ItemInput"
                ></input>
              </td>
              <td>
                {}
                <input
                  type="text"
                  value={item.vegan}
                  onChange={handleInputvegan}
                  className="ItemInput"
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  value={item.gluten}
                  onChange={handleInputgluten}
                  className="ItemInput"
                ></input>
              </td>

              <td>
                <button className="mt-1" variant="primary">
                  save
                </button>

                <button className="mt-1" variant="primary">
                  Edit
                </button>
                <button className="mt-1" variant="primary">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <>
        <MDBDataTableV5 />
      </>
    </div>
  );
}
export default inject("menu")(observer(UpdateItems));
// key={item.id}
