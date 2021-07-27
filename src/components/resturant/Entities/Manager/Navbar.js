import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../../../../styles/NavBar.css";
import Orders from "../../Orders/Orders"
import CRUDMenu from "../Manager/DashBoard/CRUDMenu"
import Waiter from "../Waiter";
import Bar from "../Bar";
import  kitchen from "../Kitchen";
export default function Navbar() {
  return (
  
    <Router>
      <div className="NavBar">
        <Link to="/" className="navBar-element">
          <span>LOGO</span>
        </Link>

        <Link to="/orders" className="navBar-element">
          <span> Orders </span>
        </Link>

        <Link to="/actions" className="navBar-element">
          <span>Actions </span>
        </Link>
        <Link to="/waiter" className="navBar-element">
          <span>Waiter </span>
        </Link>
        <Link to="/kitchen" className="navBar-element">
          <span>Kitchen </span>
        </Link>
        <Link to="/bar" className="navBar-element">
          <span>Bar </span>
        </Link>
    
      
        <Route path="/" />
        <Route path="/orders" exact render={() => <Orders />}/>


        <Route path="/actions" exact  render={() => <CRUDMenu  />}/>
        <Route path="/waiter" exact  render={() => <Waiter  />}/>
        <Route path="/kitchen" exact  render={() => <kitchen  />}/>
        <Route path="/bar" exact  render={() => <Bar  />}/>
      </div>
      </Router>

  );
}
