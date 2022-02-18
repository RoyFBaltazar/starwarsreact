import axios from "axios";
import { useEffect, useState } from "react";
import NextButton from "./nextButton";

const GetAllships =()=>{

const [ships, setShips] = useState([])
  
useEffect(()=>
axios.get('https://swapi.dev/api/starships/')
.then(response=> {
console.log(response.data.results)
setShips(response.data.results)


})
,[])
    return(
    <div>
<h1>ships</h1>
<NextButton ships={ships} setShips={setShips}/>
{ships.map(ships=>{return(<div className="shipsList" key={ships.name}>
   <h3>Name: {ships.name}</h3>
    <li>cost: {ships.cost_in_credits}</li>
    <li>model: {ships.model}</li>
    <li>crew: {ships.crew}</li>
    
    
    
    
    </div>)})}
    </div>)
}
export default GetAllships;