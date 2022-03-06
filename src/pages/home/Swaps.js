import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useState } from 'react'
import Search from './Search'


import './Swaps.css'



export default function Swaps() {
  const { data, isPending, error } = useFetch('https://localhost:5001/api/swaps/')
  
  

  return (
    <React.Fragment>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && data.filter(e=>e.ingredientToSwap === userSelection[0] && e.cuisineType === userSelection[1])
        .map(swap => ( 
        <li key={swap.swapId}>
          <h3>{swap.swapOne}</h3>
          <p>{swap.swapOneAbout}</p>
          <h3>{swap.swapTwo}</h3>
          <p>{swap.swapTwoAbout}</p>
          <h3>{swap.swapThree}</h3>
          <p>{swap.swapThreeAbout}</p>
        </li>    
      ))}
    </React.Fragment>
  )
}