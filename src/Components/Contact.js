import React from 'react';
import './Contact.css';
import Nav from './Nav';

const Contact = () => {
  return (
    <div className='contactpage'>
      <Nav />
      <div className='contact-body'>
        <h1>Contact Me!</h1>
        <h2>Email: joshua.hallam127@gmail.com</h2>
        <h2>Phone: 0499444003</h2>
      </div>
    </div>
  )
}

export default Contact;