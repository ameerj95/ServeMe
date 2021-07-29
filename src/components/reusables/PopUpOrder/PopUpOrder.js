import React from "react";
import { observer, inject } from "mobx-react";
import Modal from "react-bootstrap/Modal";
import { Col, Row, Container, Button } from "react-bootstrap";
import "./PopUpOrder.css";
import { MdDelete } from "react-icons/md";

const PopUpOrder = (props) => {
  function deleteItem() {
    console.log("good for you");
  }

  const handleFinish = () => {
    console.log("finish order!!");
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
            <Button onClick={handleFinish} className="d-flex align-self-center">
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
                  <h5>pending</h5>
                </Col>
                <Col xs={1}>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    className="checkbox"
                    onChange={{ deleteItem }}
                  />
                </Col>
                <Col xs={1}>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    className="vehicle1"
                    onChange={{ deleteItem }}
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

export default inject("orders")(observer(PopUpOrder));
