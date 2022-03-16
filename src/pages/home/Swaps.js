import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useState } from 'react'
import Search from './Search'
import SwapsList from '../../components/SwapsList'
import './Swaps.css'



export default function Swaps({swap}) {
  const { data, isPending, error } = useFetch('http://localhost:5000/api/swaps/')
  const [swaps, setSwaps] = useState([])

  const addSwap = (swap) => {
    setSwaps(prevSwaps=> {
      return [...prevSwaps, swap]
    })
  }


  return (
    <React.Fragment>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <Search  data={data} addSwap={addSwap} />}
      <div className="spacer"></div>
      <SwapsList swaps={swaps} /> 
    </React.Fragment>
  )
}