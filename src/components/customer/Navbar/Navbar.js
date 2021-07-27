// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row, Container } from 'react-bootstrap'
// import './bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Menu from '../container/Menu/Menu'
import './Navbar.css'
import Home from '../container/Home/Home'
function NavBarLinks() {
  return (

    <div id="main-links">
      <Router>
        <Container>
          <Row>
            <Col><Button variant="light"><Link className="links-customer" to="/">Logo</Link></Button></Col>
            <Col><Button variant="light"><Link className="links-customer" to="/menu">Menu</Link></Button></Col>
            <Col><Button variant="light"><Link className="links-customer" to="/service">Service</Link></Button></Col>
            <Col><Button variant="light"><Link className="links-customer" to="/cart">Cart</Link></Button></Col>
          </Row>
        </Container>
        <hr></hr>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/menu" render={() => <Menu />} />
      </Router>
    </div>
  )
}

export default NavBarLinks;