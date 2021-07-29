import React from "react";
import "../../../styles/table.css";
import { observer, inject } from "mobx-react";

function Waiter(props) {
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
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.table}</td>
              <td>{item.order}</td>
              <td>{item.status}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default inject("orders")(observer(Waiter));
// key={item.id}
