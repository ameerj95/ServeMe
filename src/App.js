import Navbar from './components/customer/Navbar/Navbar'
import './App.css';
import { observer, inject } from 'mobx-react'


function App(props) {

  return (
    <div className="App">
     <Navbar />
     
    </div>
  );
}

export default inject("menu")(observer(App))
