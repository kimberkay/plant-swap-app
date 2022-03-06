import React from 'react'
import { useState } from 'react'
import Search from './Search';
import Swaps from './Swaps';

// styles
import './Home.css'

export default function Home( {handleSubmit} ) {
  const [showModal, setShowModal] = useState([])
  const []
  
  
  
  const addSwaps = (swap) => {
    setSwaps(prevSwaps => {
      return[...prevSwaps, swap]
    })
  }

  return (
    <React.Fragment>
      <Search handleSubmit  />
      <Swaps />
    </React.Fragment>  
  )
}