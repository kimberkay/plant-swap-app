import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { Row } from 'react-bootstrap'
import './Details.css'

export default function Details() {
  const { id } = useParams()
  const url = 'https://localhost:5001/api/swaps/' + id
  const { error, isPending, data } = useFetch(url)



  return (
    <React.Fragment >
      <Row className="wrapper">
      <div className="details">
      <h3>Out with the <em>{data.ingredientToSwap}</em></h3>
          <h3>Try these instead...</h3>
          <br></br>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <React.Fragment >
          <Row className="wrapper">
          <h3>{data.swapOne}</h3>
          <p>About - {data.swapOneAbout}</p>
          <p>Prep - {data.swapOnePrep}</p>
          <p>Notes - {data.swapOneFlavorNotes}</p>
          </Row>
          <Row className="wrapper">
          <h3>{data.swapTwo}</h3>ß
          <p>About - {data.swapTwoAbout}</p>
          <p>Prep - {data.swapTwoPrep}</p>
          <p>Notes - {data.swapTwoFlavorNotes}</p>
          </Row>
          <Row className="wrapper">
          <h3>{data.swapThree}</h3>
          <p>About - {data.swapThreeAbout}</p>
          <p>Prep - {data.swapThreePrep}</p>
          <p>Notes - {data.swapThreeFlavorNotes}</p>
          </Row>

        </React.Fragment>)}

      </div>
      </Row>
    </React.Fragment>
  )
      }
