import React from 'react'
import { useState } from 'react'
import Search from './Search';
import Swaps from './Swaps';

// styles
import './Home.css'

export default function Home(props) {
  const [showModal, setShowModal] = useState([])
  const [userSelection, setUserSelection] =  useState([])
  

  
  // const addSwaps = (swap) => {
  //   setSwaps(prevSwaps => {
  //     return[...prevSwaps, swap]
  //   })
  // }

  return (
    <React.Fragment>
      <Search  />
      <Swaps userSelection = {[ingredient, cuisine]}/>
    </React.Fragment>  
  )
}