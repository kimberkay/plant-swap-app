import { useState } from 'react'


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
    <form className="select-ingredient-form" onSubmit={handleSubmit}>
      <label>
        <span>Select Ingredient to Swap:</span>
        <select onChange={(e) => setIngredient(e.target.value)}>
          <option value="chicken">chicken</option>
          <option value="beef">beef</option>
          <option value="bacon">chicken</option>
          <option value="eggs">milk</option>
          <option value="milk">cheese</option>
          <option value="cheese">eggs</option>
        </select>
      </label>
      <label>
        <span>Select the Cuisine Type of Your Recipe:</span>
        <select onChange={(e) => setCuisine(e.target.value)}>
          <option value="italian">Italian</option>
          <option value="thai">Japanese</option>
          <option value="japanese">Thai</option>
          <option value="indian">Chinese</option>
          <option value="mexican">American Comfort</option>
          <option value="american">baked goods</option>
          <option value="chinese">baked goods</option>
          <option value="baked-goods">baked goods</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  )
}