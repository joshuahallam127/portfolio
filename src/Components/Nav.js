import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='navbar'>
      <div>
        <a href="https://www.linkedin.com/in/joshua-hallam-b4516b258/" target="_blank" rel="noopener noreferrer">
          <img className='nav-icon' src="/portfolio/linkedin-icon.png" alt="LinkedIn"/>
        </a>
        <a href="https://github.com/joshuahallam127" target="_blank" rel="noopener noreferrer">
          <img className='icon' src="/portfolio/github-icon.png" alt="Github"/>
        </a>
      </div>
      <div className='nav-links'>
        <Link className='nav-link' to='/portfolio'>Home</Link>
        <Link className='nav-link' to='/portfolio/about'>About</Link>
        <Link className='nav-link' to='/portfolio/projects'>Projects</Link>
        <Link className='nav-link' to='/portfolio/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Nav;