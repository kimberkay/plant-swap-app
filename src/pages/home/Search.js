import { useState } from 'react'
import { Row, Col, FormControl } from 'react-bootstrap'

import './Search.css'


export default function SelectIngredientForm({ data, addSwap }) {
  const [ingredient, setIngredient] = useState('chicken')
  const [cuisine, setCuisine]= useState('Italian')  

  const handleSubmit = (e) => {
    e.preventDefault()
    const swap = data.filter(e=>e.ingredientToSwap === ingredient && e.cuisineType === cuisine)[0]  
    console.log(swap)
    addSwap(swap)  
  }
  
  return (
    <Row className="wrapper">
        <form onSubmit={handleSubmit}>
          <label>
          <span className="select-label">Select Ingredient to Swap:  </span>
            <select onChange={(e) => setIngredient(e.target.value)}>
              <option value="chicken">chicken</option>
              <option value="beef">beef</option>
              <option value="bacon">bacon</option>
              <option value="eggs">eggs</option>
              <option value="milk">milk</option>
              <option value="cheese">cheese</option>
          </select>
          </label>
          <p></p>
          <label>
            <span className="select-label">Select the Cuisine Type of Your Recipe:  </span>
            <select onChange={(e) => setCuisine(e.target.value)}>
              <option value="Italian">Italian</option>
              <option value="Thai">Thai</option>
              <option value="Japanese">Japanese</option>
              <option value="Indian">Indian</option>
              <option value="Mexican">Mexican</option>
              <option value="american">American</option>
              <option value="chinese">Chinese</option>
              <option value="baked-goods">Baked Goods</option>
            </select>
          </label>
          <p></p>
          <button className="button">Get Swaps</button>
        </form>
      </Row>
  )
}