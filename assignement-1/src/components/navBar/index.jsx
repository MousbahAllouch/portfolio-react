import React from 'react'
import "./index.css"
import Home from "../../pages/home";
import Contact from "../../pages/contact";
import {Link} from 'react-router-dom'
export default function NavBar() {
  return (
    <div className="navbar">


      {/* <div>
      <Link to="home">
        Mousbah Allouch
      </Link>
      </div>


      <div>
        <Link to="home">
          Home
        </Link>
        <Link to="projects">
          Projects
        </Link>
        <Link to="about">
          About
        </Link>
        <Link to="contact">
          Contact US
        </Link>
      </div>

      
      <div>IMAGE</div> */}
      <div className='navbar-name'>Mousbah Allouch</div>
      <div className="navbar-middle">
      <Link to="" className='navbar-middle-link'>
          Home
        </Link>
        <Link to="projects" className='navbar-middle-link'>
          Projects
        </Link>
        <Link to="about" className='navbar-middle-link'>
          About
        </Link>
        <Link to="contact" className='navbar-middle-link'>
          Contact US
        </Link>
      </div>
      <div className="navbar-github">github</div>
      

    </div>
  )
}
