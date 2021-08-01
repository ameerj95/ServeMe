import React, { useState } from "react";
import Item from "./Item";
import TableHead from "@material-ui/core/TableHead";
import {
  TableRow,
  TableCell,
  TableContainer,
  Table,
  TableBody,
} from "@material-ui/core";
import { observer, inject } from "mobx-react";

const Items = inject("menu")(
  observer((props) => {
    let data = props.menu.list;
    const addMenuItem = function (data) {
      props.menu.addMenuItem(data);
    };
    addMenuItem(data);

    return (
      <div>
           <TableContainer   >
      <Table stickyHeader>
      <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Vegan</TableCell>
              <TableCell align="right">Gluten</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
           <TableRow>
            <TableCell>...</TableCell>
        </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        {props.menu.item.map((c) => (
          
          <Item key={c._id} item={props.menu.list} />
        ))}
      </div>
    );
  })
);



export default Items;
