import { useEffect, useState } from "react";
import axios from "axios";

const NextButton =(props)=>{

    const { ships , setShips} = props;
    const [newShip, setNewShip]= useState([])
    const [showButton, setShowButton]= useState(true)

    // gets new page set url then gets new ships into state
    useEffect(()=>
    axios.get('https://swapi.dev/api/starships/')
    .then(response=> {
    console.log(response.data.next)
   const newUrl= response.data.next
    axios.get(`${newUrl}`)
    .then(response=>{
console.log(response.data.results)

setNewShip(response.data.results)
    })
    
    })
    ,[])
    // button adds newships to state and hides button after click with a boleen
    const handleClick= ()=>{
     console.log(newShip)
     setShips(prevState=>[...newShip, ...prevState])
     setShowButton(false)
    }

    return(
        <div>
            {/* after click button is hide */}
            {showButton && <button onClick={handleClick}>Next ships</button>}
        </div>
    )
}
export default NextButton