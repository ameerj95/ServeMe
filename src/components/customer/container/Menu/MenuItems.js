import React from 'react';
import { useState } from 'react';
import PopUpItems from '../../../reusables/PopUpItems/PopUpItems';
import { Card, Button ,Badge} from 'react-bootstrap'
import { BsInfoCircleFill } from "react-icons/bs";

import './MenuItems.css'
function MenuItems(props) {

    function addToCart() {
        // const extracted_tableNum = props.table.tableNum
        // socket.emit('customerServer', { tableNum: extracted_tableNum,item_id:props.item.id ,action_type:0 });

    }
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <PopUpItems show={modalShow}
                item={props.item}
                onHide={() => setModalShow(false)}
            />

            <div className="container-fluid  mt-5 card-item" onClick={() => setModalShow(true)}>
                    <img src={`${props.item.img}`} className="img-item"/>
                    <h4>{props.item.name}</h4>
                    <div>Price : {props.item.price} $</div>
                    <div><BsInfoCircleFill className="icon-info"/></div>
                    <div className="in">
                    {(props.item.vegan) ? <Badge className=" pill bg-warning"> Vegan</Badge> : ""} {" "}
                    {(props.item.gluten) ? <Badge className=" pill bg-info" > gluten</Badge> : ""}
                    </div>
                    <Button variant="warning" onClick={addToCart}>Order</Button>
            </div>
        </>
    )
}

export default MenuItems;