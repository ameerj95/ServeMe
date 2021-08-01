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
      <Container fluid >
        <Row className="mt-3">
          <Col className="menu-option">
            <Button variant="light">
              <Link className="links" to="/appetizers">
                Appetizers
              </Link>
            </Button>
          </Col>
          <Col className="menu-option ml-1">
            <Button variant="light">
              <Link className="links" to="/main">
                Main
              </Link>
            </Button>
          </Col>
          <Col className="menu-option">
            <Button variant="light">
              <Link className="links" to="/drinks">
                Drinks
              </Link>
            </Button>
          </Col>
          <Col className="menu-option">
            <Button variant="light">
              <Link className="links" to="/desserts">
                Desserts
              </Link>
            </Button>
          </Col>
        </Row>
        <hr></hr>
      </Container>
      
      <Route exact path="/appetizers" render={() => <Appetizers />} />
      <Route exact path="/drinks" render={() => <Drinks />} />
      <Route path="/desserts" exact render={() => <Desserts />} />
      <Route path="/main" exact render={() => <Main />} />
    </Router>
  );
}

export default Menu;
