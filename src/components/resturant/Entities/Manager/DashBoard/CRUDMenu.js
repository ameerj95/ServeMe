import React from "react";
import { observer, inject } from "mobx-react";
import Add from "./Add";
import "../../../../../styles/NavBar.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UpdateItems from "./UpdateItems";
// import TableEditable from "./TableEditable

const CRUDMenu = inject("menu")(
  observer((props) => {
    return (
      <div>
        {/* <TableEditable/> */}
        <UpdateItems />
      </div>
    );
  })
);

export default CRUDMenu;
