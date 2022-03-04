import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Header from './Header';
// import SelectIngredients from '.SelectIngredients'
import SwapsReveal from './SwapsReveal';

const queryClient = new QueryClient()

function App() {
  const [selectIngredients, setSelectIngredients ] = useState(true);
  // const [swapsReveal, setSwapsReveal] = useState(false)




  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {/* <SelectIngredients /> */}
      <SwapsReveal />
      

        
     
      
      
    </QueryClientProvider>
  )
}

export default App;
