import React from 'react';
import './Projects.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Project = ({ title, description, image, link }) => {
  return (
    <div className='project-box'>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <a href={link
      } target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  )
}

const Projects = () => {
  return (
    <div className='projectspage'>
      <Nav />
      <div className='projects-body'>
        <h1>PROJECTS</h1>
        <div className='projects'>
        </div>
        <div className='projects'>
          <Project
            title='Portfolio'
            description='This is my portfolio website! I built it using React, React Router, and CSS. I also used React Icons for the icons you see.'
            image='/portfolio/portfolio.png'
            link=''
          />
          <Project
            title='Weather App'
            description='This is a weather app that I built using React. It uses the OpenWeatherMap API to get the weather data.'
            image='/portfolio/weather-app.png'
            link=''
          />
          <Project
            title='Todo App'
            description='This is a todo app that I built using React. It uses local storage to save the todos.'
            image='/portfolio/todo-app.png'
            link=''
          />
        </div>
      </div>
    </div>
  )
}

export default Projects;