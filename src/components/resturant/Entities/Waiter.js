import React, { useEffect, useState } from "react";
import "../../../styles/table.css";
import { observer, inject } from "mobx-react";
const API_HOST = "http://localhost:3000";
const INVENTORY_API_URL = `${API_HOST}/MOCKDATA`;
function Waiter (props) {
   

  const data = props.orders.list;
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
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.table}</td>
              <td>{item.order}</td>
              <td>{item.status}</td>
              <td>{item.data}</td>
              
           
           </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default inject("orders")(observer(Waiter));
// key={item.id}