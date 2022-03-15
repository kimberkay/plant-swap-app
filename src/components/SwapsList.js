import { Link } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import { Row } from 'react-bootstrap'
import Details from './Details'
import './SwapsList.css'

export default function SwapList({ swaps }) {
const [showDetails, setShowDetails] = useState(false)
const [showList, setShowList] = useState(true)
const [ currentSwap, setCurrentSwap] = useState({})

 
const viewDetails = (swap) => {
  setShowDetails(true)
  setShowList(false)
  setCurrentSwap(swap)
}

const resetList = () => {
  setShowDetails(false)
  setShowList(true)
}
  
  return(
    <React.Fragment>
      <Row>
      {showList && 
      swaps.map((swap) => (
        <div key={swap.swapId}>
          <div className="list-wrapper">
          <h3>Ingredient to Swap: {swap.ingredientToSwap}</h3>
          <h3>Cuisine Type:{swap.cuisineType}</h3>
          <h2 className="swap-header">Your Plant Swaps:</h2>
          <h3>{swap.swapOne}</h3>
          <div>{swap.swapOneAbout.substring(0,50)}...</div>
          <h3>{swap.swapTwo}</h3>
          <div>{swap.swapTwoAbout.substring(0,50)}...</div>
          <h3>{swap.swapThree}</h3>
          <div>{swap.swapThreeAbout.substring(0,50)}...</div>
          <button className="button" onClick={()=> {viewDetails(swap)}}>Learn More</button>
          </div>
        </div>
      )) 
      }
    </Row>
    <div>{showDetails && 
                <Details swap={currentSwap} 
                button={<button className="button" onClick={()=> {resetList()}}>Go Back to List</button>}/>}
    </div>
    <div className="spacer"></div>
    </React.Fragment>  
  )
}