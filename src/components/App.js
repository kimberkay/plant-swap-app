import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Header from './Header';
// import UserInterface from './UserInterface';
import SwapsReveal from './SwapsReveal';

const queryClient = new QueryClient()

function App() {
  let [page, setPage] = useState('userInterface');

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <SwapsReveal /> 
    </QueryClientProvider>
  )
}

export default App;
