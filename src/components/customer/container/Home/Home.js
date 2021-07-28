import { observer, inject } from "mobx-react";
import "./Home.css";
import { Image } from "react-bootstrap";
function Home(props) {
  return (
    <div className="">
      <div>Welcome..... </div>

      {/* <img src={`${props.info.img}`} className="img-home"/> */}
      <Image className="Home" src={`${props.info.img}'/100px250'`} fluid />
      <div className="top-left">Top Left</div>
      <div id="name">{props.info.name}</div>
    </div>
  );
}

export default inject("info")(observer(Home));
