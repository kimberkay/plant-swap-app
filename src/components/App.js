import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Header from './Header';
// import SelectIngredients from '.SelectIngredients'
import SwapsReveal from './SwapsReveal';

const queryClient = new QueryClient()

function App() {
  const [SelectIngredients, setSelectIngredients ] = useState(true);


  const handleClick = () => {
    return setSelectIngredients(false);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {/* <SelectIngredients /> */}
      <SwapsReveal />
      <button onClick={()=> handleClick()}>show swaps</button>

        
     
      
      
    </QueryClientProvider>
  )
}

export default App;
