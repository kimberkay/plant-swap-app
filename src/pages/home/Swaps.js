import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useState } from 'react'
import Search from './Search'
import './Swaps.css'



export default function Swaps(swapFilter) {
  const { data, isPending, error } = useFetch('https://localhost:5001/api/swaps/')
  const [addSelection, setAddSelection] = useState([])
  const [swaps, setSwaps] = useState([])
  const [showSwaps, setShowSwaps] = useState([])

  
  const addUserSelection = (swapFilter) => { 
    setAddSelection(swapFilter)
    return swapFilter;  
  }

  const swap = (addSelection) => {
    console.log(data, "this data")
    setSwaps(
    data.filter(e=>e.ingredientToSwap === addSelection[0] && e.cuisineType === addSelection[1])
        .map(swap => ( 
        <li key={swap.swapId}>
          <h3>{swap.swapOne}</h3>
          <h3>{swap.swapTwo}</h3>
          <h3>{swap.swapThree}</h3>
        </li>  
       )))}
  
  const swapList = ( swap ) => {
    setShowSwaps(prevSwaps => {
      return [...prevSwaps, swap]
    })
  }



  

  return (
    <React.Fragment>
      <Search addUserSelection={addUserSelection} />
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      { data && swap}
      {/* {data && data.filter(e=>e.ingredientToSwap === addSelection[0] && e.cuisineType === addSelection[1])
        .map(swap => ( 
        <li key={swap.swapId}>
          <h3>{swap.swapOne}</h3>
          <h3>{swap.swapTwo}</h3>
          <h3>{swap.swapThree}</h3>
        </li>  
         
      ))} */}
      {console.log(addSelection)}
    </React.Fragment>
  )
}