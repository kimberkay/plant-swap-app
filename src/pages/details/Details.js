import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { Row } from 'react-bootstrap'
import './Details.css'

export default function Details() {
  const { id } = useParams()
  const url = 'http://localhost:5000/api/swaps/' + id
  const { error, isPending, data } = useFetch(url)
  console.log(useFetch(url))
  console.log(data)
  console.log(url)
  console.log(id)



  return (
    <React.Fragment >
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <React.Fragment >
          <Row className="wrapper">
          <h3><em>{data.swapOne}</em></h3>
          {data.swapOneAbout}
          {data.swapOnePrep}
          {data.swapOneFlavorNotes}
          </Row>
          <Row className="wrapper">
          <h3>{data.swapTwo}</h3>
          <Row className="col">
            <em>About</em>
            <em>Prep</em>
            <em>Notes</em>
          </Row>
          <Row className="col-6">
          <p>About {data.swapTwoAbout}</p>
          <p>Prep{data.swapTwoPrep}</p>
          <p>Notes{data.swapTwoFlavorNotes}</p>
          </Row>
          </Row>
          <Row className="wrapper">
          <h3>{data.swapThree}</h3>
          <p>About - {data.swapThreeAbout}</p>
          <p>Prep - {data.swapThreePrep}</p>
          <p>Notes - {data.swapThreeFlavorNotes}</p>
          </Row>
        </React.Fragment>)}  
    </React.Fragment>
  )
}
