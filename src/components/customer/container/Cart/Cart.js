import React from 'react';
import { observer, inject } from 'mobx-react'
import './Cart.css'
import { MdDelete } from 'react-icons/md';
import { Button, Col, Row, Container } from 'react-bootstrap'

function Cart(props) {


    function deleteItem() {
        
    }
    
    return (
        <>
            <Row>
                <Col xs={2}><h5>#</h5></Col>
                <Col xs={4}><h5>Items</h5></Col>
                <Col xs={2}><h5>Price</h5></Col>
                <Col xs={4}><h5>Delete</h5></Col>
            </Row>
            <hr />
            {props.menu.list.map((item, index) => {

                return (
                    <Container fluid key={index}>
                        <Row>
                        <Col xs={1}> <h5>{index+1}</h5></Col>
                            <Col xs={5}> <h5>{item.name}</h5></Col>
                            <Col xs={3}><h5>{item.price}</h5></Col>
                            <Col xs={3}><MdDelete className='delete-cart' onClick={deleteItem}/></Col>
                        </Row>
                        <hr />
                    </Container>
                )
            })}
        </>
    )
}
export default inject("menu")(observer(Cart))
