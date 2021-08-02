import React, { useState } from "react";

import { observer, inject } from "mobx-react";
import { TableRow, TableCell, Table, TableContainer } from "@material-ui/core";
import UpdatePop from "./UpdatePop";
import "../../../../../styles/table.css";
// import Button from "@material-ui/core/Button";

const Item = (props) => {
  const [open, setOpen] = useState(false);
  const url ='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vhv.rs%2Fviewpic%2FhRxbRim_whopper-hamburger-cheeseburger-big-king-veggie-burger-burger%2F&psig=AOvVaw328vzvmNGsh4dWjABYTejI&ust=1628006324110000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDvw63akvICFQAAAAAdAAAAABAJ'

  let item = props.item;

  const updateItem = (data) => {
    setOpen(true);
  };

  const deleteItem = (event) => {
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
          <TableRow
            key={item.id}
            onClick={() => updateItem()}
            i
            tem={props.list}
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
              <button
                className="svg-inline--fa.fa-play.fa-w-14 "
                onClick={deleteItem}
              >
                Delete
              </button>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>

      {open && <UpdatePop item={props.item} />}
    </div>
  );
};

// export default Item;
export default inject("menu")(observer(Item));
