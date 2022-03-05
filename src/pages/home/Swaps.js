import { useFetch } from '../../hooks/useFetch'
import { useState } from 'react'
import { Search } from './Search'


import './Swaps.css'



export default function Swaps() {
  const { data, isPending, error } = useFetch('https://localhost:5001/api/swaps/')
  
  

  return (
      <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && data.filter(e=>e.ingredientToSwap ==="chicken" && e.cuisineType === "Italian")
        .map(swap => ( 
        <li key={swap.swapId}>
          <p>Out with the {swap.ingredientToSwap}...</p>
          <p>Give these a go...</p>
          <h3>{swap.swapOne}</h3>
          <p>{swap.swapOneAbout}</p>
          <h3>{swap.swapTwo}</h3>
          <p>{swap.swapTwoAbout}</p>
          <h3>{swap.swapThree}</h3>
          <p>{swap.swapThreeAbout}</p>
        </li>    
      ))}
    </div>
  )
}