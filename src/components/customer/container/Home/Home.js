import { observer, inject } from "mobx-react";
import { Button, Col, Row, Container } from 'react-bootstrap'
import {FaTwitterSquare, FaPhoneSquareAlt, FaFacebookSquare, FaInstagramSquare, FaSnapchatSquare, HiOutlineMail } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { GiClockwork} from 'react-icons/gi';


import "./Home.css";

function Home(props) {

  return (
    <div className="home">
      <div className="bg-first">
        <div className="welcome">Welcome to {props.info.name} a digital restaurant</div>
        <button id="btn-menu" className=' btn-lg'>Menu</button>
      </div>
      <img src={`${props.info.img}`} width='375px' height="200px" />
      <div className="tow">
        <div className="our">Our App</div>
        <p className="par-our">Enjoy the digital service
          from today you do not have to wait for the waiter
          , you can place the order through ServeMe</p>
      </div>

      <div className="img-qr">
        <div className="allLines" id="line1"></div>
        <div className="allLines" id="line2"></div>
        <div className="allLines" id="line3"></div>
        <div className="allLines" id="line4"></div>
        <div className="allLines" id="line5"></div>
        <div className="allLines" id="line6"></div>
        <div className="allLines" id="line7"></div>
      </div>

      <div className="first">
        <div id="first-time">First time at ServeMe ?</div>
        <div id="p-first-time">Basically, what you want is great food,
          quickly and anytime! So with one click,
          you can see the restaurants near you from over 7,000
          restaurants that work with us,
          and enjoy millions of special offers and simple,
          secure payment.</div>
      </div>
      <div className="footer">
        <Container fluid >
          {/* <Row >
        <Col className="icons"><FaFacebookSquare/></Col>
        <Col className="icons"><FaInstagramSquare/></Col>
        <Col className="icons"><FaTwitterSquare/></Col>
        </Row> */}
          <Row >
            <Col xs={7} className="icons mt-2"><MdEmail />{' '}{props.info.email}</Col>
            <Col className="icons mt-2"><FaFacebookSquare/>{' '}Facebook</Col>
          </Row>
          <Row >
            <Col xs={7} className="icons"><FaPhoneSquareAlt />{' '}{props.info.phoneNumber}</Col>
            <Col className="icons"><FaInstagramSquare/>{' '}Instagram</Col>
          </Row>
          <Row >
            <Col xs={7} className="icons"><MdLocationOn />{' '}{props.info.loction}</Col>
            <Col className="icons"><FaSnapchatSquare/>{' '}Snapchat</Col>
          </Row>
          <Row >
            <Col xs={7} className="icons"><GiClockwork />{' '}{props.info.workHours}</Col>
            <Col className="icons"><FaTwitterSquare/>{' '}Twitter</Col>
          </Row>
          <Row >
            <Col xs={7} className="icons mt-2">Accessibility statement</Col>
            <Col className="icons mt-2">Terms&conditions</Col>
          </Row>
          <Row  >
            <Col className="icons mb-1 mt-1 ml-4">©️ ServeMe 2021 by Amir/Yones/Ahmad </Col>
          </Row>
        </Container>

      </div>
      {/* <div className="tt"></div>
      <div className="name">{props.info.name}</div>
      <div className="bg-dark" >{props.info.description}</div> */}
    </div>
  );
}

export default inject("info")(observer(Home));
