import { useEffect, useState } from "react";
import axios from "axios";

const NextButton =(props)=>{

    const { ships , setShips} = props;
    const [newShip, setNewShip]= useState([])
    useEffect(()=>
    axios.get('https://swapi.dev/api/starships/')
    .then(response=> {
    console.log(response.data.next)
   const newUrl= response.data.next
    axios.get(`${newUrl}`)
    .then(response=>{
console.log(response.data.results)
const newShips = response.data.results
setNewShip(response.data.results)
    })
    
    })
    ,[])
    const handleClick= ()=>{
     console.log(newShip)
     setShips(prevState=>[...newShip, ...prevState])
       
    }

    return(
        <div>
            <button onClick={handleClick}>Next ships</button>
        </div>
    )
}
export default NextButton