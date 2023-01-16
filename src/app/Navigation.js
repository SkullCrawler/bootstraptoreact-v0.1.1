import React, {Component} from 'react';
import { useNavigate, Link} from 'react-router-dom';

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
	        <Link to='/posts' className="nav-link " data-value="posts">Posts</Link>
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
// Deprecated since version 0.1.0
// import { Link } from 'react-scroll';
// import {Nav} from 'react-bootstrap';
// import {Navbar} from 'react-bootstrap'


// export default class Navigation extends Component{

// render() {

//  return(
//     <div className="Navigation">
//         <Navbar bg='mywhite' variant='light' sticky='top' expand='sm'>
//              <Navbar.Brand className='logo'>
//                  RayTech
//              </Navbar.Brand>
//              <Navbar.Toggle />
//              <Navbar.Collapse>
//                 <Nav className="mr-auto">
//                     <li className="nav-item">
//                         <Link
//                             href="#about"
//                             to="about"
//                             activeClass="active"
//                             className="nav-link"
//                             spy={true}
//                             smooth={true}
//                             offset={-70}
//                             duration={500}>
//                             About
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link
//                             href="#portfolio"
//                             to="portfolio"
//                             activeClass="active"
//                             className="nav-link"
//                             spy={true}
//                             smooth={true}
//                             offset={-70}
//                             duration={500}>
//                             Portfolio
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link
//                             href="#blog"
//                             to="blog"
//                             activeClass="active"
//                             className="nav-link"
//                             spy={true}
//                             smooth={true}
//                             offset={-70}
//                             duration={500}>
//                             Blog
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link
//                             href="#team"
//                             to="team"
//                             activeClass="active"
//                             className="nav-link"
//                             spy={true}
//                             smooth={true}
//                             offset={-70}
//                             duration={500}>
//                             Team
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link
//                             href="#Contact"
//                             to="contact"
//                             activeClass="active"
//                             className="nav-link"
//                             spy={true}
//                             smooth={true}
//                             offset={-70}
//                             duration={500}>
//                             Contact
//                         </Link>
//                     </li>
//                 </Nav>
//             </Navbar.Collapse>

//         </Navbar>
//     </div>
// )
//  }}