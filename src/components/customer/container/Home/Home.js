import { observer, inject } from "mobx-react";
import "./Home.css";

function Home(props) {

  return (
    <div className="home">
      <div className="bg-first">
        <div className="welcome">welcome to a digital restaurant app</div>
      </div>

      <div className="tow">
        <div className="our">Our App</div>
        <p className="par-our">Enjoy the digital service
          from today you do not have to wait for the waiter
          , you can place the order through ServeMe</p>
      </div>

      <img src={`${props.info.img}`} width='375px' />
      <div className="ll">
        <div id="first-time">First time at ServeMe ?</div>
        <div id="p-first-time">Basically, what you want is great food,
          quickly and anytime! So with one click,
          you can see the restaurants near you from over 7,000
          restaurants that work with us,
          and enjoy millions of special offers and simple,
          secure payment.</div>
      </div>

      <div className="tt"></div>
      <div className="name">{props.info.name}</div>
      <div className="bg-dark" >{props.info.description}</div>
    </div>
  );
}

export default inject("info")(observer(Home));
