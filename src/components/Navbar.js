// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logoImage from '../assets/logo3.png';
const Navbar = () => {
  return (
    <nav className='portfolio-navbar'>
      <div className='logo-container'>
        <img src={logoImage} alt='Portfolio Logo' />
      </div>
      <div>
        <ul className='nav-links'>
          <li><Link to="/background"><span>My Background</span></Link></li>


          <li>
            <a href="https://github.com/anyoshe" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/eliud-anyoka-7ab011168" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li><Link to="/about"><span>Contact</span></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


