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
      {data && <h1>{data.swapOne}</h1>}
      </div>
      <h1>Your Swaps</h1>
    </React.Fragment>
  )
}