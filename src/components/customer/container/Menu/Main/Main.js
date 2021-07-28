import React from 'react';
// import { useState } from 'react';
import MenuItems from '../MenuItems'
import { observer, inject } from 'mobx-react'

function Main(props) {

    
    // const [modalShow, setModalShow] = useState(false);
    return (
      <div className="container-fluid pl-0 pr-0"> 
         <h5>Choose a dish :</h5>     
           {props.menu.list.filter(item => item.category === 1).map((item, index) => 
           <MenuItems key={index} item={item} />)}
        </div>
    )
}

export default inject("menu")(observer(Main))
