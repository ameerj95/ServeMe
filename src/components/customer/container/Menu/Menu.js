import { observer, inject } from 'mobx-react'
import MenuItems from './MenuItems'

function Menu(props) {

    
    return (
        <div className="container-fluid bg-light vh-100"> 
         <h5>Choose a dish :</h5>     
           {props.menu.list.map((item, index) => 
           <MenuItems key={index} item={item} />)}
        </div>
    )
}

export default inject("menu")(observer(Menu))