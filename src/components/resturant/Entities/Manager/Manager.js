import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QR from "../../QR/QR";
// import Orders from "../../Orders/Orders";

import Bar from "../Bar";
import Kitchen from "../Kitchen";
import WaiterTemp from "../WaiterTemp";
import Add from "./DashBoard/Add";
import CRUDMenu from "./DashBoard/CRUDMenu";

// import Items from "./DashBoard/Items";
import NavbarManager from "./NavbarManager";

function Manager() {
  return (
    <Router>
       <NavbarManager />
      <div>
       
        <Route path="/actions" exact render={() => <CRUDMenu />} />

        <Route path="/waiter" exact render={() => <WaiterTemp />} />
        <Route path="/kitchen" exact render={() => <Kitchen />} />
        <Route path="/bar" exact render={() => <Bar />} />
        <Route path="/add" exact render={() => <Add />} />
        <Route path="/qr" exact render={() => <QR/>} />
      </div>
    </Router>
  );
}

export default Manager;
