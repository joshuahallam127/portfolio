import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { BsPerson, BsCodeSlash, BsEnvelope, BsHouse } from 'react-icons/bs';

const Nav = () => {
  return (
    <div className='navbar'>
      <div>
        <a href="https://www.linkedin.com/in/joshua-hallam-b4516b258/" target="_blank" rel="noopener noreferrer">
          <img className='nav-icon' src="/portfolio/linkedin-icon.png" alt="LinkedIn"/>
        </a>
        <a href="https://github.com/joshuahallam127" target="_blank" rel="noopener noreferrer">
          <img className='nav-icon' src="/portfolio/github-icon.png" alt="Github"/>
        </a>
      </div>
      <div className='nav-links'>
        <Link className='nav-link' to='/portfolio'><BsHouse /> Home</Link>
        <Link className='nav-link' to='/portfolio/about'><BsPerson /> About</Link>
        <Link className='nav-link' to='/portfolio/projects'><BsCodeSlash /> Projects</Link>
        <Link className='nav-link' to='/portfolio/contact'><BsEnvelope /> Contact</Link>
      </div>
    </div>
  )
}

export default Nav;