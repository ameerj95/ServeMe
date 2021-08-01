import React, { useState, useEffect } from "react";
import "../../../../../styles/table.css";
import { observer, inject } from "mobx-react";
import { MDBDataTableV5, MDBDataTable } from "mdbreact";

function UpdateItems(props) {
  const [item, setItem] = useState({
    id: "",
    name: "",
    img: "",
    price: 0,
    description: "",
    category: "",
    vegan: false,
    gluten: false,
  });
  const data = props.menu.lis;

  console.log(data);

  const handleChange = (event) => {
    const myArr = event.target.value.split(" ");
    setItem({
      ...item,
      id: myArr[0],
      name: myArr[1],
      img: myArr[2],
      price: myArr[3],
      description: myArr[4],
      category: myArr[5],
      vegan: myArr[6],
      gluten: myArr[7],
    });
  };

  return (
    <div className="container">
      <div>Items</div>
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
                  <img
                    className="ItemImg"
                    src={`${item.img}`}
                    onChange={handleChange}
                  />
                </div>
              </td>
              <td>
                <input
                  type="text"
                  value={item.id}
                  onChange={handleChange}
                  className="ItemInput"
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  value={item.name}
                  onChange={handleChange}
                  className="ItemInput"
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  value={item.price}
                  onChange={handleChange}
                  className="ItemInput"
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  value={item.description}
                  onChange={handleChange}
                  className="ItemInput"
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  value={item.category}
                  onChange={handleChange}
                  className="ItemInput"
                ></input>
              </td>
              <td>
                {}
                <input
                  type="text"
                  value={item.vegan}
                  onChange={handleChange}
                  className="ItemInput"
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  value={item.gluten}
                  onChange={handleChange}
                  className="ItemInput"
                ></input>
              </td>

              <td>
                <button className="mt-1" variant="primary">
                  Edit
                </button>
                <button className="mt-1" variant="primary">
                  save
                </button>
                <button className="mt-1" variant="primary">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <>{/* <MDBDataTableV5 /> */}</>
    </div>
  );
}
export default inject("menu")(observer(UpdateItems));
// key={item.id}
