
import './App.css';
import GetAllships from './components/sw';
import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [ships, setShips] = useState([])
  

  return (
    <div className="App">
      <img src='https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/b2a5e0c2-fd7e-488b-bb85-3fb550535aca'   />
      
      <GetAllships/>
    </div>
  );
}

export default App;
