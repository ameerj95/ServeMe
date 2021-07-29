import Navbar from './components/customer/Navbar/Navbar'
import Kitchen from './components/resturant/Entities/Kitchen';
import Manager from "./components/resturant/Entities/Manager/Manager";
import "./App.css";
import { observer, inject } from "mobx-react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Waiter from "./components/resturant/Entities/Waiter";

//=========================================================================
function App(props) {

  return (
    <Router>
      <div className="App">
        {/* <Waiter /> */}
        {/* <Manager /> */}
        {props.clientsocket.usertype === "table" ? <Navbar /> : <Kitchen />}
        {/* <Route path="/table/:tableNum" exact render={({ match }) => <Middleware match={match} to="/menu" />} /> */}
        {/* <Route path="/table/:tableNum" exact render={({ match }) => <MockupComp match={match} />} />
        <Route path="/resturantMock" exact render={() => <MockupResturant  />} /> */}
      </div>
    </Router>
  );
}
export default inject("clientsocket")(observer(App));
