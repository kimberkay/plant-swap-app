import { Link } from 'react-router-dom'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Logo from '../img/plant-swap-logo.png'
import './Header.css'

export default function Header() {
  return(
    <React.Fragment>
      <Row>
      <div className="header-wrapper">
        <img className="logo" src={Logo} alt="white veggies with a small pink heart being tossed in a pot, evokes love in cooking" />
      </div>
      </Row>
      <div className="spacer"></div>
    </React.Fragment>

  );
}
