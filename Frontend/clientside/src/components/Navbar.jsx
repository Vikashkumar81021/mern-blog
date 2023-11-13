import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import navpng from '../images/navpng.png'
 function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">
    <img className='images' src={navpng} alt="img" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-to active home" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-to about" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-to contact" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-to login" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-to register" to="/register">Register</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
