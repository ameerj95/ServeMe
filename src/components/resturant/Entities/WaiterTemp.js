import React, { useEffect, useState, useRef } from "react";
import "../../../styles/table.css";
import { observer, inject } from "mobx-react";
import {translator} from '../../../modules/translator'

function WaiterTemp(props) {

  const data = props.waiterorder.tables;
  console.log(JSON.parse(JSON.stringify(data)));

  const takeTask = (event) =>{
    console.log("in began takeTask")
    console.log((event.target.id))
    props.clientsocket.socket.emit('waiterServer', { id: parseInt(event.target.id), action_type: 0 });
    ;
  }

  const finshTask = (event) =>{
    console.log("in began finshTask")
    console.log((event.target.id))
    props.clientsocket.socket.emit('waiterServer', { id: parseInt(event.target.id), action_type: 1 });
    ;
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
                  <div>{props.waiterorder.translator_values(order)}</div>
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
