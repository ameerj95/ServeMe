import React from "react";
import { observer, inject } from "mobx-react";
import Modal from "react-bootstrap/Modal";
import { Col, Row, Container, Button } from "react-bootstrap";

const PopUpOrder = (props) => {
  function deleteItem() {
    console.log("goodforyou");
  }

  // consthandleFinish=()=>{
  // console.log("finishorder!!");
  // };
  return(
  <>
  {/* // <Modal{...props}size="lg" aria-labelledby="contained-modal-title-vcenter"centered>
  // <Modal.Header>
  // <h4className="Table-Show-Order">
  // Table:
  // <ButtononClick={handleFinish}className="d-flexalign-self-center">{""}
  // Finish</Button> */}
  {/* // </h4> */}
  {/* // </Modal.Header>
  // <Row>
  // <Colxs={2}>#</Col>
  // <Colxs={3}>Main</Col>
  // <Colxs={3}>Status</Col>
  // <Colxs={2}>InProgress</Col>

  // props.item.map((ordered_item,index)=>(
  // <Containerfluidkey={index}>
  // <Row>
  // <Colxs={1}>
  // <h5>{index+1}</h5></Colxs={4}>
  // <h5>{ordered_item.name}</h5></Col><Colxs={4}>
  // <h5>pending</h5></Col><Colxs={1}>
  // <inputtype="checkbox"
  // id="vehicle1"
  // className="checkbox"
  // onChange={
  // {deleteItem}
  // }
  // /></Col><Colxs={1}>
  // <inputtype="checkbox"
  // id="vehicle1"
  // className="vehicle1"
  // onChange={
  // {deleteItem}
  // }/></Col><
  // /Row><
  // hr/>
  // <
  // /Container>
  // ))
  // }<
  // /Modal.Body><
  // Modal.Footer>
  // <
  // Buttonvariant="secondary"
  // onClick={props.onHide}>
  // Close<
  // /Button></
  // Modal.Footer><
  // /Modal> */}
  </>
  );
};

export default inject("orders")(observer(PopUpOrder));
