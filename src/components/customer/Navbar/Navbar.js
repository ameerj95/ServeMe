import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row, Container } from 'react-bootstrap'
import { GiShoppingCart, GiHand } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bi";
import { ImHome } from "react-icons/im";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Service from '../container/Service/Service';
import Menu from '../container/Menu/Menu'
import Home from '../container/Home/Home'
import Cart from '../container/Cart/Cart'
import './Navbar.css'

function NavBarLinks() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col><Link to="/"><ImHome className="links-customer" /></Link></Col>
          <Col><Link to="/menu"><BiFoodMenu className="links-customer" /></Link></Col>
          <Col><Link to="/cart"><GiShoppingCart className="links-customer" /></Link></Col>
          <Col><Link to="/service"><GiHand className="links-customer" /></Link></Col>
        </Row>
        <hr></hr>
      </Container>
      <hr></hr>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/menu" render={() => <Menu />} />
      <Route path="/service" exact render={() => <Service />} />
      <Route path="/cart" exact render={() => <Cart />} />
    </div>
  )
}

export default NavBarLinks