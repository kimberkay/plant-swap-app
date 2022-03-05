import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Header from './Header';
import Modal from './Modal'
import SelectIngredientForm from './SelectIngredientForm';
import SwapsReveal from './SwapsReveal';

const queryClient = new QueryClient()

function App() {
  const [showModal, setShowModal]= useState(false)
  
const handleClick = () => {
  return setShowModal;
}



  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {/* {showModal && (
        <Modal>
          <SelectIngredientForm />
        </Modal>
      )}
      <div>
        <button onClick={()=> setShowModal(true)}>Enter Ingredient to Swap</button>
      </div> */}
      <SwapsReveal />
    </QueryClientProvider>
  )
}

export default App;
