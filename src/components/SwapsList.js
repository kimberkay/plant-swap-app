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
          <h2 className="swap-header"><span className="your-swaps">Your Plant Swaps</span></h2>  
          <h3>Ingredient to Swap: {swap.ingredientToSwap}</h3>
          <h3>Cuisine Type:{swap.cuisineType}</h3>
          <h4 className="swap-header">{swap.swapOne}</h4>
          <div>{swap.swapOneAbout.substring(0,50)}...</div>
          <h4 className="swap-header">{swap.swapTwo}</h4>
          <div>{swap.swapTwoAbout.substring(0,50)}...</div>
          <h4 className="swap-header">{swap.swapThree}</h4>
          <div>{swap.swapThreeAbout.substring(0,50)}...</div>
          <div className="spacer"></div>
          <button className="small-button" onClick={()=> {viewDetails(swap)}}>
            <span>Learn More</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
            </svg></button>
            </div>
        </div>
      )) 
      }
    </Row>
    <div>{showDetails && 
                <Details swap={currentSwap} 
                reset={<h3 className="reset-link" onClick={()=> {resetList()}}>Back To List</h3>}/>}
    </div>
    <div className="spacer"></div>
    </React.Fragment>  
  )
}