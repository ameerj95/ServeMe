import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Orders from "../../Orders/Orders";

import Bar from "../Bar";
import Kitchen from "../Kitchen";
import Waiter from "../Waiter";
import Add from "./DashBoard/Add";
import CRUDMenu from "./DashBoard/CRUDMenu";
import Navbar from "./Navbar";

function Manager() {
  return (
    <Router>
      <div>
        <Navbar>
          
          <div> </div>
        </Navbar>

        <Route path="/" />
        <Route path="/orders" exact render={() => <Orders />} />
        <Route path="/actions" exact render={() => <CRUDMenu />} />
        <Route path="/waiter" exact render={() => <Waiter />} />
        <Route path="/kitchen" exact render={() => <Kitchen />} />
        <Route path="/bar" exact render={() => <Bar />} />
        <Route path="/add" exact render={() => <Add />} />
      </div>
    </Router>
  );
}

export default Manager;
