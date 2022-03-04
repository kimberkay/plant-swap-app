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
     
      { status === 'loading' && (<div>Loading...</div>)}

      { status === 'error' && (<div>Error fetching data</div>)}
 
      { status === 'success' && (
        
        
        <ul>
          { data.filter(e=>e.ingredientToSwap === "chicken" && e.cuisineType === "Japanese")
            .map(data => ( 
          <li key={data.swapId}>
            <p>Out with the {data.ingredientToSwap}...</p>
            <p>Give these a go...</p>
            <h3>{data.swapOne}</h3>
            <p>{data.swapOneAbout}</p>
            <h3>{data.swapTwo}</h3>
            <p>{data.swapTwoAbout}</p>
            <h3>{data.swapThree}</h3>
            <p>{data.swapThreeAbout}</p>
          </li>    
        ))}
        </ul>
      )} 
    </React.Fragment> 
  )
}  


export default SwapsReveal;

