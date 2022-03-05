import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return(
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
        <h1>Plant Swap</h1>
        </Link>
      </nav>
    </div>
  )
}