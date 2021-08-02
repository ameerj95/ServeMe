import React, { useState } from "react";

import { observer, inject } from "mobx-react";
import {
  TableRow,
  TableBody,
  TableCell,
  Table,
  TableContainer,
} from "@material-ui/core";
import UpdatePop from "./UpdatePop";
import "../../../../../styles/table.css";

import Button from "@material-ui/core/Button";
const Item = (props) => {
  const [open, setOpen] = useState(false);
  // const [modalShow, setModalShow] = useState(false);
  console.log(props);
  let data = props.menu.list;
  const updateItem = (data) => {
    setOpen(true);
  };
  const deleteItem = (event) => {
    // console.log(JSON.parse(JSON.stringify(props.table.cart)));
    // console.log(event.currentTarget.id)
    const extracted_tableNum = props.menu.props.clientsocket.socket.emit(
      "customerServer",
      {
        tableNum: extracted_tableNum,
        id: event.currentTarget.id,
        action_type: 1,
      }
    );
  };

  return (
    <div>
      <TableContainer>
        <Table classname=" tableitems">
          {data.map((item) => (
            <TableRow
              key={item.name}
              onClick={() => updateItem()}
              item={props.list}
            >
              <TableCell style={{ width: 240 }}>{item.name}</TableCell>
              <TableCell style={{ width: 161 }}>{item.id}</TableCell>
              <TableCell style={{ width: 161 }}>
                <div>
                  <img className="ItemImg" src={`${item.img}`} />
                </div>
              </TableCell>
              <TableCell style={{ width: 161 }}>{item.price}</TableCell>
              <TableCell style={{ width: 161 }}>{item.description}</TableCell>
              <TableCell style={{ width: 161 }}>{item.category}</TableCell>
              <TableCell style={{ width: 161 }}>{item.vegan}</TableCell>
              <TableCell style={{ width: 180 }}>{item.gluten}</TableCell>
              <TableCell>
                <a
                  className="svg-inline--fa.fa-play.fa-w-14 "
                  onClick={deleteItem}
                >
                  Delete
                </a>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>

      {open && <UpdatePop item={props.item} />}
    </div>
  );
};

// export default Item;
export default inject("menu")(observer(Item));
