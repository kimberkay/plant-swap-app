import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Details.css'

export default function Details() {
  const { id } = useParams()
  const url = 'https://localhost:5001/api/swaps/' + id
  const { error, isPending, data } = useFetch(url)



  return (
    <React.Fragment>
      <div className="details">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <React.Fragment>
          <h3 className="details-in-out">Out with the <em>{data.ingredientToSwap}</em></h3>
          <h3 className="details-in-out">Try these instead...</h3>
          <br></br>
          <h3>{data.swapOne}</h3>
          <p>About - {data.swapOneAbout}</p>
          <p>Prep - {data.swapOnePrep}</p>
          <p>Notes - {data.swapOneFlavorNotes}</p>
          <br></br>
          <h3>{data.swapOne}</h3>
          <p>About - {data.swapOneAbout}</p>
          <p>Prep - {data.swapOnePrep}</p>
          <p>Notes - {data.swapOneFlavorNotes}</p>
          <br></br>
          <h3>{data.swapOne}</h3>
          <p>About - {data.swapOneAbout}</p>
          <p>Prep - {data.swapOnePrep}</p>
          <p>Notes - {data.swapOneFlavorNotes}</p>

        </React.Fragment>)}
      </div>
    </React.Fragment>
  )
}