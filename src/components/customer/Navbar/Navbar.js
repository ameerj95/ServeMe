// import './bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Menu from '../container/Menu/Menu'
import './Navbar.css'
import Home from '../container/Home/Home'
function NavBarLinks() {
  return (

    <div id="main-links">
      <Router>

        
        <div className="m-4 d-grid gap-2 row mt-2">
          <Button className=" col-sx-1" variant="light"><Link className="links-customer" to="/">Logo</Link></Button>
          <Button className=" col-sx-1" variant="light"><Link className="links-customer" to="/menu">Menu</Link></Button>
          <Button className=" col-sx-1" variant="light"><Link className="links-customer" to="/service">Service</Link></Button>
          <Button className=" col-sx-1" variant="light"><Link className="links-customer" to="/cart">Cart</Link></Button>
        </div>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/menu" render={() => <Menu />} />
        {/* <Route path="/service" exact render={() => <Service />}/>
          <Route path="/cart" exact render={() =>  <Cart />}/> */}
      </Router>
    </div>
  )
}

export default NavBarLinks;