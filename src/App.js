import Navbar from './components/customer/Navbar/Navbar'
import './App.css';
import { observer, inject } from 'mobx-react'
import MockupComp from './components/MockupComp/MockupComp';
import { BrowserRouter as Router, Route } from 'react-router-dom';




  // import socketClient  from "socket.io-client";
  // const SERVER = "http://localhost:5000";

  function App() {
    //var socket = socketClient(SERVER);
    return (
      <Router>
        <div className="App">
          <Navbar />
          <h1>start</h1>
          <Route path="/table/:tableNum" exact render={({ match }) => <MockupComp match={match} />} />
        </div>
      </Router>
    );
  }

  export default inject("menu")(observer(App))
