import React from 'react'
import { Row } from 'react-bootstrap'
import './Details.css'

export default function Details({swap, reset}) {
  

  return (
  
        <React.Fragment >
          <Row className="wrapper">
          <h2 className="swap-header">{swap.swapOne}</h2>
          {console.log(swap)}
          <h3 className="details-label">About</h3>
          <p>{swap.swapOneAbout}</p>
          <h3 className="details-label">Prep</h3>
          <p>{swap.swapOnePrep}</p>
          <h3 className="details-label">Cuisine Type Tips</h3>
          <p>{swap.swapOneFlavorNotes}</p>
          <div className="spacer"></div>
          {reset}
          </Row>
          <div className="spacer"></div>
          <Row className="wrapper">
          <h2 className="swap-header">{swap.swapTwo}</h2>
          {console.log(swap)}
          <h3 className="details-label">About</h3>
          <p>{swap.swapTwoAbout}</p>
          <h3 className="details-label">Prep</h3>
          <p>{swap.swapTwoPrep}</p>
          <h3 className="details-label">Cuisine Type Tips</h3>
          <p>{swap.swapTwoFlavorNotes}</p>
          <div className="spacer"></div>
          {reset}
          </Row>
          <div className="spacer"></div>
          <Row className="wrapper">
          <h2 className="swap-header">{swap.swapThree}</h2>
          {console.log(swap)}
          <h3 className="details-label">About</h3>
          <p>{swap.swapThreeAbout}</p>
          <h3 className="details-label">Prep</h3>
          <p>{swap.swapThreePrep}</p>
          <h3 className="details-label">Cuisine Type Tips</h3>
          <p>{swap.swapThreeFlavorNotes}</p>
          <div className="spacer"></div>
          {reset}
          </Row>
          <div className="spacer"></div>      
        </React.Fragment>
  )
}
