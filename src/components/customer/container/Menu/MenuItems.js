import React from 'react';
import { useState } from 'react';
import PopUpItems from '../../../reusables/PopUpItems/PopUpItems';
import {Badge} from 'react-bootstrap'
import { BsInfoCircleFill } from "react-icons/bs";
import { observer, inject } from 'mobx-react'
import './MenuItems.css'


function MenuItems(props) {

    function addToCart() {
        const extracted_tableNum = props.table.tableNum
        props.clientsocket.socket.emit('customerServer', { tableNum: extracted_tableNum,item_id:props.item.id ,action_type:0 });

    }
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
     
           <PopUpItems show={modalShow}
                item={props.item}
                onHide={() => setModalShow(false)}
            />
            <div className="container-fluid mb-5 mt-5 card-item" >
                    <img src={`${props.item.img}`} className="img-item"/>
                    <h4 className='d-flex justify-content-center'>{props.item.name}</h4>
                    <div>Price : {props.item.price} ₪</div>
                    <div onClick={() => setModalShow(true)}><BsInfoCircleFill className="icon-info"/></div>
                    <div className="in">
                    {(props.item.vegan) ? <Badge className=" pill bg-warning"> Vegan</Badge> : ""} {" "}
                    {(props.item.gluten) ? <Badge className=" pill bg-info" > gluten</Badge> : ""}
                    </div>
                    <button className="button-17" id="btnAddToCart" role="button" onClick={addToCart}>Add to cart</button>
            </div>
        </>
    )
}

export default inject("clientsocket","table")(observer(MenuItems))