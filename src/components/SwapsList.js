import { Link } from 'react-router-dom'
import React from 'react'
import './SwapsList.css'

export default function SwapList({ swaps, details }) {

 
  return(
    <React.Fragment>
      {swaps.map((swap) => (
        <div key={swap.swapId} className="list-wrapper">
          <h3>Swap: <em>{swap.ingredientToSwap}</em></h3>
          <h3>Cuisine Type: <em>{swap.cuisineType}</em></h3>
          <h3>Plant Swaps:</h3>
          <h3>{swap.swapOne}</h3>
          <div>{swap.swapOneAbout.substring(0,100)}</div>
          <h3>{swap.swapTwo}</h3>
          <h3>{swap.swapThree}</h3>
          <p></p>
          <Link to={`/details/${swap.swapId}`}>Learn More</Link>
        </div>
      ))}  
    </React.Fragment>  
  )
}