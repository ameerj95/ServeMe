import React from "react";
import { observer, inject } from "mobx-react";
import Add from "./Add";
import "../../../../../styles/NavBar.css";
import UpdateItems from "./UpdateItems";


const CRUDMenu = inject("menu")(
  observer((props) => {
    return (
      <div>
        
        <UpdateItems />
      </div>
    );
  })
);

export default CRUDMenu;
