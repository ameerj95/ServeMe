import React from "react";
import "../../../styles/table.css";
import { observer, inject } from "mobx-react";

function Kitchen(props) {
  
  const data = props.foodorders.list;
  console.log(data);
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
export default inject("foodorders")(observer(Kitchen));

