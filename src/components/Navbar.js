import { Link } from 'react-router-dom'
import { PlantSwapHeader } from '../img/plant-swap-header.png'
import './Navbar.css'

export default function Navbar() {
  return(
    <div className="navbar">
      {/* <img className="headerPic" src={PlantSwapHeader} alt="illustrated pic of veggies around a wood-grain sign" />  */}
      <nav>
       <Link to="/about">About</Link>
        {/* <img className="headerPic" src={PlantSwapHeader} alt="illustrated pic of veggies around a wood-grain sign" />  */}
      </nav>
    </div>
  )
}