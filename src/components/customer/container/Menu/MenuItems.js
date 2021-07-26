import React from 'react';
import { useState } from 'react';
import PopUpItems from '../../../reusables/PopUpItems/PopUpItems';
import { Card, Button } from 'react-bootstrap'
import './MenuItems.css'
function MenuItems(props) {

    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <PopUpItems show={modalShow}
                item={props.item}
                onHide={() => setModalShow(false)}
            />

          
            <Card className="text-center mb-3 card-item" onClick={() => setModalShow(true)}>
               
                <Card.Body>
                  <Card.Title>{props.item.name}</Card.Title>
                    <img src={`${props.item.img}`} className="img-item inline-block"/>
                    <Button className='mt-1' variant="primary">Detilas</Button>
                </Card.Body>

            </Card>
        </>
    )
}

export default MenuItems;