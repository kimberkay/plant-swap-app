import { Link } from 'react-router-dom'
import React from 'react'
import { Row } from 'react-bootstrap'
import './SwapsList.css'

export default function SwapList({ swaps, details }) {

 
  return(
    <React.Fragment>
      <Row>
      {swaps.map((swap) => (
        <div key={swap.swapId} className="list-wrapper">
          <h3>Swap: <em>{swap.ingredientToSwap}</em></h3>
          <h3>Cuisine Type: <em>{swap.cuisineType}</em></h3>
          <h3>Plant Swaps:</h3>
          <h3>{swap.swapOne}</h3>
          <div>{swap.swapOneAbout.substring(0,50)}...</div>
          <h3>{swap.swapTwo}</h3>
          <div>{swap.swapTwoAbout.substring(0,50)}...</div>
          <h3>{swap.swapThree}</h3>
          <div>{swap.swapThreeAbout.substring(0,50)}...</div>
          <p></p>
          <Link to={`/details/${swap.swapId}`}>Learn More</Link>
        </div>
      ))}   
    </Row>
    <div className="spacer"></div>
    </React.Fragment>  
  )
}