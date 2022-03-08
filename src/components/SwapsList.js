import { useState } from 'react'

export default function SwapList({ swaps }) {
  const [addSwaps, setAddSwaps] = useState([])

  const makeList =(swap)=>{
    setAddSwaps(prevSwap => {
      return [...prevSwap, swap]
    })
  }


  console.log( { swaps }, "you are here")
  return(
    <div className="swap-list">
      {swaps.map(swap => (
        <div key={swap.SwapId} className="card">
          <h3>{swap.swapOne}</h3>
          <h3>{swap.swapTwo}</h3>
          <h3>{swap.swapThree}</h3>
        </div>
      ))}
    </div>
  )
}