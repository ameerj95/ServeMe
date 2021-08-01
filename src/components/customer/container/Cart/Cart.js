import React from 'react';
import { observer, inject } from 'mobx-react'
import './Cart.css'
import { MdDelete } from 'react-icons/md';
import { Button, Col, Row, Container } from 'react-bootstrap'

function Cart(props) {

    const fireOrder = () => {
        const extracted_tableNum = props.table.tableNum
        props.clientsocket.socket.emit('resturant', { tableNum: extracted_tableNum, action_type: 0 });
    }

    const deleteItem = () => {
        console.log("delete");
    }
    return (
        <>

            <h5 className='title d-flex justify-content-center mt-3 mb-3'>Your Order</h5>
            <Row>
                <Col xs={2}><h5>#</h5></Col>
                <Col xs={4}><h5>Items</h5></Col>
                <Col xs={2}><h5>Price</h5></Col>
                <Col xs={4}><h5>Delete</h5></Col>
            </Row>
            <hr />
            {props.table.cart.map((item, index) => {

                return (
                    <Container fluid key={index}>
                        <Row>
                            <Col xs={1}> <h5>{index + 1}</h5></Col>
                            <Col xs={5}> <h5>{item.name}</h5></Col>
                            <Col xs={3}><h5>{item.price} ₪</h5></Col>
                            <Col xs={3}><MdDelete className='delete-cart' onClick={deleteItem} /></Col>
                        </Row>
                        <hr />
                    </Container>
                )
            })}
            <Row >
                
                <Col className='d-flex justify-content-center'><h4>Total : {props.table.getTotal()} ₪</h4></Col>
            </Row>

            <button id="fire" className="btn btn-outline-danger justify-content-center" onClick={fireOrder}>ORDER</button>
        </>
    )
}
export default inject("clientsocket", "table")(observer(Cart))
