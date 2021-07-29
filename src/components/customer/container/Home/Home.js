import { observer, inject } from "mobx-react";
import "./Home.css";
import { Image } from "react-bootstrap";
function Home(props) {

  return (
    <div className="home">
      <div className="first">
        <div className="name-restaurant">welcome to a digital restaurant app</div>
      </div>
      <div className="tow">
        <div className="namee-restaurant">Our App</div>
        <p className="par-restaurant">Enjoy the digital service
         from today you do not have to wait for the waiter
        , you can place the order through ServeMe</p>
      </div>
      <div className="thr"></div>
      <img src={`${props.info.img}`} className="img-home"/>
      {/* <div className="name">{props.info.name}</div> */}
      {/* <div >{props.info.description}</div> */}
    </div>
  );
}
 
export default inject("info")(observer(Home));
