import React from "react";
import { observer, inject } from 'mobx-react'
import Modal from 'react-bootstrap/Modal'
import { Button, Badge } from 'react-bootstrap'
import { useState } from 'react';
import './PopUpItems.css'

const PopUpItems = (props) => {


    const [name, setName] = useState(props.item.name)
    const [description, setDescription] = useState(props.item.description)
  
    return (
        <Modal  {...props} centered aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={`${props.item.img}`} className="img-item inline-block" />
                <div>Description : {description}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default inject("menu")(observer(PopUpItems))

