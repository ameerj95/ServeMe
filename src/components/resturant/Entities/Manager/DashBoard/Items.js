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
    console.log(props.menu);

    return (
      <div>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell style={{ width: 161 }}>Id</TableCell>
                <TableCell style={{ width: 161 }}>Image</TableCell>
                <TableCell style={{ width: 161 }}>Price</TableCell>
                <TableCell style={{ width: 161 }}>Description</TableCell>
                <TableCell style={{ width: 161 }}>Category</TableCell>
                <TableCell style={{ width: 161 }}>Vegan</TableCell>
                <TableCell style={{ width: 161 }}>Gluten</TableCell>
                <TableCell style={{ width: 161 }}>Actions</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        {props.menu.list.map((c) => (
          <Item key={c._id} item={c} />
        ))}
      </div>
    );
  })
);

export default Items;
