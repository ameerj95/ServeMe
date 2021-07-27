import React from 'react';
import { useState } from 'react';
import MenuItems from '../MenuItems'
import { observer, inject } from 'mobx-react'

function Drinks(props) {

    
    const [modalShow, setModalShow] = useState(false);
    return (
      <div className="container-fluid bg-light vh-100"> 
         <h5>Choose a dish :</h5>     
           {props.menu.list.filter(item => item.category === 2).map((item, index) => 
           <MenuItems key={index} item={item} />)}
        </div>
    )
}

export default inject("menu")(observer(Drinks))
