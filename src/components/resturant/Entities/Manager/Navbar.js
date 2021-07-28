import { Button } from "bootstrap";
import React from "react";

import { Link } from "react-router-dom";
import "../../../../styles/NavBar.css";

export default function Navbar() {
  return (
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
      <Link to="/add" className="navBar-element">
            <span> Add </span>
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
    </div>
  );
}
