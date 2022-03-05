import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Header from './Header';
// import SelectIngredientForm from './SelectIngredientForm'
import SwapsReveal from './SwapsReveal';

const queryClient = new QueryClient()





function App() {
// const [userSelection, setUserSelection] = useState([])

// const ingredientSelection = (userSelection) => {
//   setUserSelection
// }


  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {/* <SelectIngredientForm /> */}
      <SwapsReveal />
    </QueryClientProvider>
  )
}

export default App;
