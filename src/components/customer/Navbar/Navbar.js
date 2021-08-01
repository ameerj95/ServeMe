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
import { observer, inject } from "mobx-react";

function NavBarLinks(props) {

  let countCartItems = props.table.cart.length
  
  return (
    <div>


      <Container fluid className='pr-0 mt-2'>
        <Row>
          <Col><Link to="/"><ImHome className="links-customer" /></Link></Col>
          <Col><Link to="/menu"><BiFoodMenu className="links-customer" /></Link></Col>
          <Col><Link to="/cart"><GiShoppingCart className="links-customer" />
          {countCartItems ? 
          (<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-light">{countCartItems} </span>) : ("")}</Link></Col>
          <Col><Link to="/service"><GiHand className="links-customer" /></Link></Col>
        </Row>
      </Container>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/menu" render={() => <Menu />} />
      <Route path="/service" exact render={() => <Service />} />
      <Route path="/cart" exact render={() => <Cart />} />
    </div>
  )
}
export default inject("table")(observer(NavBarLinks));
