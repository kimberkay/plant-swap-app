import { useState } from 'react'


export default function SelectIngredientForm({addUserSelection}) {
  const [ingredient, setIngredient] = useState('chicken')
  const [cuisine, setCuisine]= useState('Italian')
  
  console.log(3)

  

  const handleSubmit = (e) => {
    e.preventDefault()
    const swaps = [ingredient, cuisine]
    addUserSelection(swaps)
  
    
    console.log(swaps)
    console.log(addUserSelection(swaps))
    console.log(addUserSelection(swaps))
    console.log(4)
  }

  


   

 
  
  return (
    <form className="select-ingredient-form" onSubmit={handleSubmit}>
      <label>
        <span>Select Ingredient to Swap:</span>
        <select onChange={(e) => setIngredient(e.target.value)}>
          <option value="chicken">chicken</option>
          <option value="beef">beef</option>
          <option value="milk">milk</option>
          <option value="cheese">cheese</option>
          <option value="eggs">eggs</option>
        </select>
      </label>
      <label>
        <span>Select the Cuisine Type of Your Recipe:</span>
        <select onChange={(e) => setCuisine(e.target.value)}>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Thai">Thai</option>
          <option value="Chinese">Chinese</option>
          <option value="AmericanComfort">American Comfort</option>
          <option value="BakedGoods">baked goods</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  )
}