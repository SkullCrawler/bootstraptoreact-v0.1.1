import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top ">
	  <Link to='/' className="navbar-brand">Home</Link>
	  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span className="navbar-toggler-icon"></span>
	  </button>

	  <div className="collapse navbar-collapse " id="navbarSupportedContent">
	    <ul className="navbar-nav mr-4">
	      
	      <li className="nav-item">
	        <Link to='/about' className="nav-link" data-value="about">About</Link>
	      </li>
	      <li className="nav-item">
	        <Link to='/portfolio' className="nav-link " data-value="portfolio">Portfolio</Link>
	      </li>
	      <li className="nav-item">
	        <Link to='/blog' className="nav-link " data-value="blog">Blog</Link>
	      </li>
	      <li className="nav-item">
	        <Link to='/team' className="nav-link " data-value="team">Team</Link>
	      </li>
	      <li className="nav-item">
	        <Link to='/contact' className="nav-link " data-value="contact">Contact</Link>
	      </li>
	    </ul>
	    
	  </div>
    </nav>
  )
}