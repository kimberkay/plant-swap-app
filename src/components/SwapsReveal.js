import React, { useState } from 'react';
import { useQuery } from 'react-query';

const fetchSwaps = async () => {
  const res = await fetch('https://localhost:5001/api/swaps/');
  return res.json();
}


const SwapsReveal = () => {
  const { data, status } = useQuery('swaps', fetchSwaps);
  console.log(data)

  return (
    <React.Fragment>
      <h2>Try These Plant Swaps!</h2>
     
      { status === 'loading' && (<div>Loading...</div>)};

      { status === 'error' && (<div>Error fetching data</div>)};
 
      { status === 'success' && (
        
        <ul>
          { data.filter(e=>e.ingredientToSwap === "chicken" && e.cuisineType === "Japanese")
            .map(data => ( 
          <li key={data.swapId}>
            <p>{data.swapId}</p>
            <h3>{data.swapOne}</h3>
            <p>{data.swapOnePrep}</p>
          </li>    
        ))};
        </ul>
      )} 
    </React.Fragment> 
  )
}  


export default SwapsReveal;

