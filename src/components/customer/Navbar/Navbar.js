import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row, Container } from 'react-bootstrap'
import { GiShoppingCart, GiHand } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bi";
import { ImHome } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Service from '../container/Service/Service';
import Menu from '../container/Menu/Menu'
import Home from '../container/Home/Home'
import Cart from '../container/Cart/Cart'
import './Navbar.css'
import { observer, inject } from "mobx-react";

function NavBarLinks(props) {

  let countCartItems = props.table.cart.length

  return (
    <div>


      <Container fluid className='pr-0 mt-2 text-info'>
        <Row>
          <Col sx={3}><button id="btn-home" type="button" className="btn btn-outline-light"><Link to="/"><ImHome className="colorIcons" /></Link></button></Col>
          <Col xs={3}><button id="btn-menuNav" type="button" className="btn btn-outline-light"> <Link to="/menu"><BiFoodMenu className="colorIcons" /></Link></button></Col>
          <Col xs={3}><button id="btn-cart" type="button" className="btn btn-outline-light"> <Link to="/cart"><FaShoppingCart className="colorIcons"/>
          {countCartItems ? (<span className="countCart position-absolute translate-middle badge rounded-pill bg-danger text-light">{countCartItems} </span>) : ("")}
          </Link></button></Col>
          <Col xs={3}><button id="btn-hand" type="button" className="btn btn-outline-light"> <Link to="/service"><GiHand  className="colorIcons" /></Link></button></Col>
        </Row>
        <hr id="hr" />


      </Container>







      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/menu" render={() => <Menu />} />
      <Route path="/service" exact render={() => <Service />} />
      <Route path="/cart" exact render={() => <Cart />} />
    </div>
  )
}
export default inject("table")(observer(NavBarLinks));
