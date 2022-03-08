import { useState } from 'react'
import React from 'react'

export default function SwapList({ swaps }) {
 
  return(
    <React.Fragment>
    <div className="swap-list">
      {swaps.map(swap => (
        <div key={swap.SwapId} className="card">
          <h3>{swap.swapOne}</h3>
          <h3>{swap.swapTwo}</h3>
          <h3>{swap.swapThree}</h3>
        </div>
      ))}
    </div>
    </React.Fragment>
    

    
  )
}