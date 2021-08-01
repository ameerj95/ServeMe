import React from "react";
import { observer, inject } from "mobx-react";
import "../../../../../styles/NavBar.css";
// import UpdateItems from "./UpdateItems";
import UpdatePop from "./UpdatePop";
import Items from "./Items";

const CRUDMenu = inject("menu")(
  observer((props) => {
    return (
      <div>
        <Items />
        {/* <UpdateItems /> */}
        {/* <UpdatePop /> */}
      </div>
    );
  })
);

export default CRUDMenu;
