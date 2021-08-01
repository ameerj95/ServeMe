import React, { useState } from "react";

import { observer, inject } from "mobx-react";
import {
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
  TableContainer,
} from "@material-ui/core";
import UpdatePop from "./UpdatePop";

import Button from "@material-ui/core/Button";
const Item = (props) => {
   const [open, setOpen] = useState(false);
  // const [modalShow, setModalShow] = useState(false);



  const updateItem = () => {

    setOpen(true);
  };

  return (
    <div>
      <TableContainer>
        <Table>
          
          <TableBody>
            {props.menu.list.map((item) => (
              <TableRow
                key={item.name}
                onClick={() => setOpen(true)}
              >
           

                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.id}</TableCell>
                <TableCell align="right">{item.img}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.description}</TableCell>
                <TableCell align="right">{item.category}</TableCell>
                <TableCell align="right">{item.vegan}</TableCell>
                <TableCell align="right">{item.gluten}</TableCell>
                <TableCell align="right">
                  <Button>Delete</Button>
                  {/* <button className="btn btn-lg btn-outline-danger ml-4">
                      Delete
                    </button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {open && <UpdatePop item={props.menu.list} />}
    </div>
  );
};

// export default Item;
export default inject("menu")(observer(Item));
