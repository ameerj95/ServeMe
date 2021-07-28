import React from "react";
import { observer, inject } from 'mobx-react'
import Modal from 'react-bootstrap/Modal'
import { Button, Col, Row, Container } from 'react-bootstrap'
import { useState } from 'react';
import './PopUpOption.css'


const PopUpItems = (props) => {

    const [utensils, setUtensils] = useState({ "plate": 0, "fork": 0, "knife": 0, "spoon": 0, "straw": 0 });

    function handleBtn(e) {
        let name = e.target.name;
        let value = e.target.value;
        const lietUtensils = { ...utensils }
        if (value === "minus") {
            if (lietUtensils[name] !== 0) {
                lietUtensils[name] = lietUtensils[name] - 1
            }
        }
        else {
            lietUtensils[name] = lietUtensils[name] + 1
        }
        setUtensils(lietUtensils)
    }

    function handleOrder() {
        console.log("good for you");
        
    }

return (
    <Modal  {...props} centered aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header>
            <Modal.Title>Utensils</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container fluid>
                <Row>
                    <Col xs={7} className="name-item">Plate</Col>
                    <Col xs={5}><Button name='plate' value="minus" onClick={handleBtn}>-</Button><span className="mr-2 ml-2">{utensils.plate}</span><Button name='plate' value="pluss" onClick={handleBtn}>+</Button> </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={7} className="name-item">Fork</Col>
                    <Col xs={5}><Button name='fork' value="minus" onClick={handleBtn}>-</Button><span className="mr-2 ml-2">{utensils.fork}</span><Button name='fork' value="pluss" onClick={handleBtn}>+</Button> </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={7} className="name-item">Knife</Col>
                    <Col xs={5}><Button name='knife' value="minus" onClick={handleBtn}>-</Button><span className="mr-2 ml-2">{utensils.knife}</span><Button name='knife' value="pluss" onClick={handleBtn}>+</Button> </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={7} className="name-item">Spoon</Col>
                    <Col xs={5}><Button name='spoon' value="minus" onClick={handleBtn}>-</Button><span className="mr-2 ml-2">{utensils.spoon}</span><Button name='spoon' value="pluss" onClick={handleBtn}>+</Button> </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={7} className="name-item">Straw</Col>
                    <Col xs={5}><Button name='straw' value="minus" onClick={handleBtn}>-</Button><span className="mr-2 ml-2">{utensils.straw}</span><Button name='straw' value="pluss" onClick={handleBtn}>+</Button> </Col>
                </Row>
                <hr />
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide} > Close</Button>
            <Button variant="secondary" onClick={handleOrder}>Order </Button>
        </Modal.Footer>
    </Modal>
);
};

export default inject("menu")(observer(PopUpItems))

