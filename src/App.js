import Navbar from "./components/customer/Navbar/Navbar";
import Kitchen from "./components/resturant/Entities/Kitchen";
import Manager from "./components/resturant/Entities/Manager/Manager";
import "./App.css";
import { observer, inject } from "mobx-react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import WaiterTemp from "./components/resturant/Entities/WaiterTemp";
import CRUDMenu from "./components/resturant/Entities/Manager/DashBoard/CRUDMenu";
import Add from "./components/resturant/Entities/Manager/DashBoard/Add";

//=========================================================================
function App(props) {
  const userType = props.clientsocket.usertype;
 
  return (
    <Router>
      {(() => {
        switch (userType) {
          case "table":
            return <Navbar />;
          case "kitchen":
            return <Kitchen />;
          case "bar":
            return <Kitchen />;
          case "waiter":
            return <WaiterTemp />;
          case "manager":
            return <Manager />;
          case "actions":
            return <CRUDMenu />;
          case "add":
            return <Add />;
          default:
            return <div>Redirect to a proper page please.</div>;
        }
      })()}
    </Router>
  );
}
export default inject("clientsocket")(observer(App));
