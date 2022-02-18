import { useEffect } from "react";
import axios from "axios";

const NextButton =(props)=>{

    const { ships , setShips} = props;
    useEffect(()=>
    axios.get('https://swapi.dev/api/starships/')
    .then(response=> {
    console.log(response.data.next)
   const newUrl= response.data.next
    axios.get(`${newUrl}`)
    .then(response=>{
console.log(response.data.results)
const newShips = response.data.results
setShips(prevState=>[...newShips, ...prevState])
console.log(newShips)

    })
    
    })
    ,[])
    const handleClick= ()=>{
     
        console.log(ships)
    }

    return(
        <div>
            <button onClick={handleClick}>Next ships</button>
        </div>
    )
}
export default NextButton