import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useState } from 'react'
import Search from './Search'
import './Swaps.css'



export default function Swaps(swaps) {
  const { data, isPending, error } = useFetch('https://localhost:5001/api/swaps/')
  const [addSelection, setAddSelection] = useState({})

  
  

  const addUserSelection = (swaps) => { 
    setAddSelection(swaps)
    return swaps;
    console.log("here i am");
  }

 

  console.log(addUserSelection, "you made it");
  console.log(1)
  
  

  

  return (
    <React.Fragment>
      <Search addUserSelection={addUserSelection} />
      console.log(2);
      console.log(addUserSelection)
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {console.log(addSelection, data)}
        {data && data.filter(e=>e.ingredientToSwap === {addSelection} && e.cuisineType === {addSelection})
        .map(swap => ( 
        <li key={swap.swapId}>
          <h3>{swap.swapOne}</h3>
          
          <h3>{swap.swapTwo}</h3>
          
          <h3>{swap.swapThree}</h3>
         
        </li>  
         
      ))}
      {console.log(addSelection)}
    </React.Fragment>
  )
}