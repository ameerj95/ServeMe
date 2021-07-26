
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Manager from "./components/resturant/Entities/Manager/Manager";

function App() {
  return (
    <Router>
      <div className="App">
        <Manager />
     
        
      </div>
    </Router>
  );
}

export default App;
