import { Button, Col, Row, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Appetizers from "./Appetizers/Appetizers";
import Drinks from "./Drinks/Drinks";
import Desserts from "./Desserts/Desserts";
import Main from "./Main/Main";
function Menu() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col className="menu-option">
            <Button variant="light">
              <Link className="links-customer" to="/appetizers">
                Appetizers
              </Link>
            </Button>
          </Col>
          <Col className="menu-option">
            <Button variant="light">
              <Link className="links-customer" to="/main">
                Main
              </Link>
            </Button>
          </Col>
          <Col className="menu-option">
            <Button variant="light">
              <Link className="links-customer" to="/drinks">
                Drinks
              </Link>
            </Button>
          </Col>
          <Col className="menu-option">
            <Button variant="light">
              <Link className="links-customer" to="/desserts">
                Desserts
              </Link>
            </Button>
          </Col>
        </Row>
        <hr></hr>
      </Container>
      <hr></hr>
      <Route exact path="/appetizers" render={() => <Appetizers />} />
      <Route exact path="/drinks" render={() => <Drinks />} />
      <Route path="/desserts" exact render={() => <Desserts />} />
      <Route path="/main" exact render={() => <Main />} />
    </Router>
  );
}

export default Menu;
