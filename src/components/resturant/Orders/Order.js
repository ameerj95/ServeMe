import React, { useState } from "react";
import "../../../styles/table.css";
import { observer, inject } from "mobx-react";

function Order(props) {
  const data = props.orders.list;
  console.log(data + " dfghjkl");
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Table</th>
            <th>Order</th>
            <th>status</th>
            <th>Data</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id} </td>
              <td>{item.table}</td>
              <td
                onClick={() => {
                  console.log("AHMAD DREGAT");
                }}
              >
                {item.order}
              </td>
              <td>{item.status}</td>
              <td>{item.data}</td>
              <td>
                <React.Fragment>
                  <button className={"btn-success"}>Save</button>
                  <button className={"btn-secondary"} style={{ marginLeft: 8 }}>
                    Delete
                  </button>
                </React.Fragment>

                <button className={"btn-primary"}>Editd</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default inject("orders")(observer(Order));
// key={item.id}
