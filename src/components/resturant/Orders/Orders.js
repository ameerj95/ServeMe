// import { observer } from "mobx";
import { inject,observer } from "mobx-react";
import React from "react";
import Order from "./Order";

function Orders(props) {
  return (
    <div>
      <h1> Orders </h1>
      <Order/>
     
    </div>
  );
}


export default inject("orders")(observer(Orders));
// {props.orders.list.map((order, i) =>  <Order key={i} Order={order} 