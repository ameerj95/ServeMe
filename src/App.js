import Navbar from './components/customer/Navbar/Navbar'
import './App.css';
import { observer, inject } from 'mobx-react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Middleware from './components/middleware/Middleware';
import Kitchen from './components/resturant/Entities/Kitchen';

//=========================================================================
function App(props) {
  //TODO LISTENER for each entity type (make dict)
  //listener for the table
  // const socket = props.clientsocket.socket
  // socket.on("customer", data => {
  //   if (data.tableNum == props.table.tableNum) {
  //     //alert("IN HERE")
  //     console.log("in app.js ",data)
  //     props.table.updateCart(data.tableOrder)
  //   }
  // });
  // socket.on("resturant", data => {
  //   //TOAST MSG THAT ITS BEEN ORDERED
  //   if (data.tableNum == props.table.tableNum) {
  //     console.log("RECIVIED ORDER")
  //     console.log(data.msg)
  //   }
  // });
  //=========================================================================
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* {props.clientsocket.usertype == "table" ? <Navbar/> : <Kitchen/>} */}
      </div>
    </Router>
  );
}
export default inject("clientsocket")(observer(App))
