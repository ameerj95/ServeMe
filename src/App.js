import Navbar from './components/customer/Navbar/Navbar'
import './App.css';
import { observer, inject } from 'mobx-react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Kitchen from './components/resturant/Entities/Kitchen';

//=========================================================================
function App(props) {

  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        {props.clientsocket.usertype == "table" ? <Navbar/> : <Kitchen/>}
      </div>
    </Router>
  );
}
export default inject("clientsocket")(observer(App))
