
import React from 'react'

export default function SwapList({ swaps }) {

 


 
  return(
    <React.Fragment>
     { console.log(swaps) }
    <div className="swap-list">
    
      {swaps.map((swap, index) => (
        <div> 
          <li key={index} className="card">
          <h3>{swap.swapOne}</h3>
          <h3>{swap.swapTwo}</h3>
          <h3>{swap.swapThree}</h3>
          </li>
        </div>
      ))}
      {console.log(swaps)}
    </div>
    </React.Fragment>
    
  //key is invalid...does it need to be a string?  must be unique?
    
  )
}