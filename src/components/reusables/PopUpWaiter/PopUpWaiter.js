import React from "react";
import { observer, inject } from "mobx-react";
import Modal from "react-bootstrap/Modal";
import { Col, Row, Container, Button } from "react-bootstrap";

const PopUpWaiter = (props) => {
  function deleteItem() {
    console.log("goodforyou");
  }

  const handleFinish = () => {
    console.log("finishorder!!");
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
            Table:
            <Button onClick={handleFinish} className="d-flexalign-self-center">
              {" "}
              Finish
            </Button>
          </h4>
        </Modal.Header>
        <Row>
          <Col xs={2}>#</Col>
          <Col xs={3}>Main</Col>
          <Col xs={3}>Status</Col>
          <Col xs={2}>InProgress</Col>
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
                  <h5>{ordered_item.status}</h5>
                </Col>
                <Col xs={1}>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    className="checkbox"
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

export default inject("orders")(observer(PopUpWaiter));
