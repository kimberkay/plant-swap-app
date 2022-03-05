import React from 'react'
import Search from './Search';
import Swaps from './Swaps';

// styles
import './Home.css'

export default function Home() {
  return (
    <React.Fragment>
      <Search />
      <Swaps />
    </React.Fragment>  
  )
}