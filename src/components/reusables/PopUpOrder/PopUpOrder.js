import React from "react";
import { observer, inject } from "mobx-react";
import Modal from "react-bootstrap/Modal";
import { Col, Row, Container, Button } from "react-bootstrap";
import "./PopUpOrder.css";
import { MdDelete } from "react-icons/md";
const status = {
  0: "not started",
  1: "in progress",
  2: "completed"
}


const PopUpOrder = (props) => {
  function beganPrep(event) {
    console.log("in began prep")
    console.log((event.target.id))
    props.clientsocket.socket.emit('kitchen', { item_id: parseInt(event.target.id), action_type: 0 });
    ;
  }

  const finshedMeal = (event) => {
    console.log("in began prep")
    console.log((event.target.id))
    props.clientsocket.socket.emit('kitchen', { item_id: parseInt(event.target.id), action_type: 1  });
    ;
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <h4 className="Table-Show-Order">
            Table :
            <Button onClick={console.log("hi")} className="d-flex align-self-center">
              {" "}
              Finish
            </Button>
          </h4>
        </Modal.Header>
        <Row>
          <Col xs={2}>#</Col>
          <Col xs={3}>Main</Col>
          <Col xs={3}>Status</Col>
          <Col xs={2}> In Progress</Col>
          <Col xs={2}>Completed</Col>
        </Row>
        <Modal.Body>
          {props.item.map((ordered_item, index) => (
            <Container fluid key={index}>
              <Row>
                <Col xs={1}>
                  <h5>{index + 1}</h5>
                </Col>
                <Col xs={4}>
                  <h5>{ordered_item.name}</h5>
                </Col>
                <Col xs={4}>
                  <h5>{status[ordered_item.status]}</h5>
                </Col>
                <Col xs={1}>
                  <input
                    checked ={ordered_item.status}
                    type="checkbox"
                    id={ordered_item.id}
                    itemID={ordered_item.id}
                    className="checkbox"
                    onChange={beganPrep}
                  />
                </Col>
                <Col xs={1}>
                  <input
                    checked ={ordered_item.status>1}
                    type="checkbox"
                    id={ordered_item.id}
                    itemID={ordered_item.id}
                    className="vehicle1"
                    onChange={finshedMeal}
                  />
                </Col>
              </Row>
              <hr />
            </Container>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default inject("clientsocket")(observer(PopUpOrder));
