import React, { useState } from 'react';
import './Projects.css';
import Nav from './Nav';


const ProjectsPage = ({ active, setCurrProject }) => {
  const Project = ({ title, description }) => {
    return (
      <div className='project-box' >
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={() => setCurrProject(title)}>Click me!</button>
      </div>
    )
  }

  return (
    <div className={`projects-body page ${active ? 'active' : ''}`}>
      <h1>PROJECTS</h1>
      <div className='projects'>
        <Project
          title='Portfolio'
          description='This is my portfolio website! I built it using React JS, HTML, and CSS.'
        />
        <Project
          title='The Trading Simulator'
          description='Choose any US stock and simulate trading it over the time interval you choose using real historical data!'
        />
        <Project
          title='Unix Terminal VM'
          description='This is a todo app that I built using React. It uses local storage to save the todos.'
        />
      </div>
    </div>
  )
}

const ProjectPage = ( {active, onClick, project }) => {
  return (
    <div className={`page project-detail ${active ? 'active' : ''}`}>
      <h1 style={{color: 'lightblue'}}>Hello there!</h1>
    </div>
  )

}


const Projects = () => {
  const [currProject, setCurrProject] = useState('');

  return (
    <div className='projectspage'>
      <Nav />
      <div className='twopages'>
        <ProjectsPage active={currProject === ''} setCurrProject={setCurrProject}/>
        <ProjectPage active={currProject !== ''} project={currProject} />
      </div>
    </div>
    
  )
}

export default Projects;