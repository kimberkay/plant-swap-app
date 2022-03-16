// import React from 'react'
// import { useHistory } from "react-router-dom"
// import { useParams } from 'react-router-dom'
// import { useFetch } from '../../hooks/useFetch'
// import { Row } from 'react-bootstrap'
// import './Details.css'

// export default function Details() {
//   const { id } = useParams()
//   const url = 'http://localhost:5000/api/swaps/' + id
//   const { error, isPending, data } = useFetch(url)
//   // const { prevPage, setPrevPage} = useHistory([])
//   console.log(useFetch(url))
  

//   //  function handleClick() {
//   //   const history=useHistory()
//   //   history.push("/")
//   //  }




//   return (
//     <React.Fragment >
//       {error && <p className="error">{error}</p>}
//       {isPending && <p className="loading">Loading...</p>}
//       {data && (
//         <React.Fragment >
//           <Row className="wrapper">
//           <h2 className="swap-header">{data.swapOne}</h2>
//           {data.swapOneAbout}
//           {data.swapOnePrep}
//           {data.swapOneFlavorNotes}
          
//           </Row>
//           <div className="spacer"></div>
//           <Row className="wrapper">
//           <h2 className="swap-header">{data.swapTwo}</h2>
//           <Row className="col">
//             <em>About</em>
//             <em>Prep</em>
//             <em>Notes</em>
//           </Row>
//           <div className="spacer"></div>
//           <Row>
//           <p>About {data.swapTwoAbout}</p>
//           <p>Prep{data.swapTwoPrep}</p>
//           <p>Notes{data.swapTwoFlavorNotes}</p>
//           </Row>
//           </Row>
//           <div className="spacer"></div>
//           <Row className="wrapper">
//           <h2 className="swap-header">{data.swapThree}</h2>
//           <p>About - {data.swapThreeAbout}</p>
//           <p>Prep - {data.swapThreePrep}</p>
//           <p>Notes - {data.swapThreeFlavorNotes}</p>
//           </Row>
//         </React.Fragment>)} 
//         {/* <button type="button" onClick={handleClick}>Back to Search</button> */}
  
//     </React.Fragment>
//   )
// }
