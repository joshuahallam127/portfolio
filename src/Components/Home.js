import React from 'react';
import './Home.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { BsPerson, BsCodeSlash, BsEnvelope } from 'react-icons/bs';

const Home = () => {
  return (
    <div className='homepage'>
      <Nav />
      <div className='homepage-body'>
        <h1>Hello there!</h1>
        <h1>I'm <b>JOSHUA HALLAM</b></h1>
        <h1>Full Stack Engineer (not designer)</h1>
        <div className='page-buttons'>
          <Link className='page-button' to='/portfolio/about'><BsPerson /> About</Link>
          <Link className='page-button' to='/portfolio/projects'><BsCodeSlash /> Projects</Link>
          <Link className='page-button' to='/portfolio/contact'><BsEnvelope /> Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;