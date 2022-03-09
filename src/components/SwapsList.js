
import React from 'react'

export default function SwapList({ swaps }) {

 


 
  return(
    <React.Fragment>
     { console.log(swaps) }
    <div className="swap-list">
    
      {swaps.map((swap, index) => (
        <div key={swap.swapId} className="card">
          <h3>Swap: <em>{swap.ingredientToSwap}</em></h3>
          <h3>Cuisine Type: <em>{swap.cuisineType}</em></h3>
          <h3>Plant Swaps:</h3>
          <h3>{swap.swapOne}</h3>
          <h3>{swap.swapTwo}</h3>
          <h3>{swap.swapThree}</h3>
        </div>
      ))}
      {console.log(swaps)}
    </div>
    </React.Fragment>  
  )
}