import React from 'react';
import './Home.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Nav />
      <div className='homepage'>
        <h1>JOSHUA HALLAM</h1>
      </div>
    </div>
  )
}

export default Home;