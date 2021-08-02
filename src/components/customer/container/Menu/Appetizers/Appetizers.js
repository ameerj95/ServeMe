import React from 'react';
import MenuItems from '../MenuItems'
import { observer, inject } from 'mobx-react'
import '../ItemsInMenu.css'
function Appetizers(props) {

    return (
      <div className="container-fluid pl-0 pr-0 bgColor"> 
         <h5 className='d-flex justify-content-center textColor'>Appetizers</h5>     
           {props.menu.list.filter(item => item.category === 0).map((item, index) => 
           <MenuItems key={index} item={item} />)}
        </div>
    )
}

export default inject("menu")(observer(Appetizers))
