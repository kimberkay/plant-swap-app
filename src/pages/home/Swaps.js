import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useState } from 'react'
import Search from './Search'
import SwapsList from '../../components/SwapsList'
import './Swaps.css'



export default function Swaps({swap}) {
  const { data, isPending, error } = useFetch('https://localhost:5001/api/swaps/')
  const [swaps, setSwaps] = useState([])

  const addSwap = (swap) => {
    setSwaps(prevSwaps=> {
      return [...prevSwaps, swap]
    })
  }


  return (
    <React.Fragment>
      <div className="card"></div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <Search data={data} addSwap={addSwap} />}
      <SwapsList swaps={swaps} /> 
    </React.Fragment>
  )
}