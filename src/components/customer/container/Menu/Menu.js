import { Button, Col, Row, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Appetizers from "./Appetizers/Appetizers";
import Drinks from "./Drinks/Drinks";
import Desserts from "./Desserts/Desserts";
import Main from "./Main/Main";
import './Menu.css'
function Menu() {
  return (
    <Router>
    
       
        <Row >
          <Col xs={3}> <button id="btn-Appetizers" type="button" className="btn btn-outline-light"> <Link className="colorText" to="/appetizers"> Appetizers </Link></button></Col>
          <Col xs={3}> <button id="btn-Main" type="button" className="btn btn-outline-light"> <Link className="colorText" to="/main"> Main </Link></button></Col>
          <Col xs={3}> <button id="btn-Drinks" type="button" className="btn btn-outline-light"> <Link className="colorText" to="/drinks"> Drinks </Link></button></Col>
          <Col xs={3}> <button id="btn-Desserts" type="button" className="btn btn-outline-light"> <Link className="colorText" to="/desserts"> Desserts </Link></button></Col>
        </Row>
        <hr/>
      <Route exact path="/appetizers" render={() => <Appetizers />} />
      <Route exact path="/drinks" render={() => <Drinks />} />
      <Route path="/desserts" exact render={() => <Desserts />} />
      <Route path="/main" exact render={() => <Main />} />
    </Router>
  );
}

export default Menu;
