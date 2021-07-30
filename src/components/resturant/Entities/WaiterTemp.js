import React, { useEffect, useState, useRef } from "react";
import "../../../styles/table.css";
import { observer, inject } from "mobx-react";

function WaiterTemp(props) {

  const data = props.waiterorder.tables;
  console.log(JSON.parse(JSON.stringify(data)));

  const takeTask = (event) =>{
    console.log("in began takeTask")
    console.log((event.target.id))
    props.clientsocket.socket.emit('waiterServer', { id: parseInt(event.target.id), action_type: 0 });
    ;
  }

  const finshTask = () =>{

  }

  return (
    <div>
      <h1>Waiter</h1>
      <ul>
        {Object.keys(data).map(table => 
          <div>
            <h1>Table {table}</h1>
            {
              data[table].map(order => 
                <li id={order.id}>
                  <div>{`order: ${order.table_num} ${order.item_id} , STATUS:${order.status}`}</div>
                  <button id={order.id} onClick={takeTask}>take task</button>
                  <button id={order.id} onClick={finshTask}>finsh task</button>
                  </li>
              )
            }
          </div>
        )
        }
      </ul>
    </div>

  );
}
export default inject("waiterorder", "clientsocket")(observer(WaiterTemp));
