import React from "react";
import { observer, inject } from 'mobx-react'
import Modal from 'react-bootstrap/Modal'
import { Button, Badge } from 'react-bootstrap'
import { useState } from 'react';
import './PopUpItems.css'

const PopUpItems = (props) => {


    const [name, setName] = useState(props.item.name)
    const [price, setPrice] = useState(props.item.price)
    const [vegan, setVegan] = useState(props.item.vegan)
    const [gluten, setGluten] = useState(props.item.gluten)
    const [description, setDescription] = useState(props.item.description)
    const [comment, setComment] = useState("")


    function updateClient() {
        console.log("update");
        // props.menu.updateClient(props.client._id, inputName,inputsurName,inputCountry)
        // props.onHide()
    }

    // function handleChange(e) {
    //     let name = e.target.name
    //         name === "name" ? setInputName(e.target.value)
    //         : name==="surname"?setInputsurName(e.target.value)
    //         :setInputCountry(e.target.value)
    // }

    return (
        <Modal  {...props} centered aria-labelledby="contained-modal-title-vcenter">


            <Modal.Header>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={`${props.item.img}`} className="img-item inline-block" />
                <div>Description : {description}</div>
                <div>Price : {price} $</div>
                {(vegan) ? <Badge className="pill bg-warning"> Vegan</Badge> : ""} {" "}
                {(gluten) ? <Badge className="pill bg-info" > gluten</Badge> : ""}
                <div>
                    <input placeholder='if you want to change ...' className="mt-3"/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="warning" onClick={updateClient}>Order</Button>
            </Modal.Footer>

        </Modal>
    );
};

export default inject("menu")(observer(PopUpItems))

