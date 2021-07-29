import React from "react";
import { observer, inject } from "mobx-react";
import Modal from "react-bootstrap/Modal";
import { Col, Row, Container } from "react-bootstrap";
import "./PopUpOrder.css";
import { MdDelete } from "react-icons/md";

const PopUpItems = (props) => {
  function deleteItem() {
    console.log("good for you");
  }

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div class="modal-dialog modal-lg"></div>

        <Modal.Header>
          <Modal.Title> Table : 3</Modal.Title>
        </Modal.Header>
        <Row>
          <Col xs={2}>#</Col>
          <Col xs={3}>Main</Col>
          <Col xs={3}>Status</Col>
          <Col xs={2}>Finish</Col>
          <Col xs={2}>Complate</Col>
        </Row>
        <Modal.Body>
          <Container fluid key={Math.random(10)}>
            <Row>
            <Col xs={1}>
                {" "}
                <h5>1</h5>
              </Col>
              <Col xs={4}>
                {" "}
                <h5>Burger</h5>
              </Col>
              <Col xs={4}>
                {" "}
                <h5>pending</h5>
              </Col>
              <Col xs={1}>
                <MdDelete className="delete-cart" onClick={deleteItem} />
              </Col>
              <Col xs={1}>
                <MdDelete className="delete-cart" onClick={deleteItem} />
              </Col>
            </Row>
            <hr />
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default inject("orders")(observer(PopUpItems));
