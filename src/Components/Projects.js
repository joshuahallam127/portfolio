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
          title='The Trading Simulator'
          description='Choose any US stock and simulate trading it over the time interval you choose using real historical data!'
        />
        <Project
          title='Unix Terminal Clone'
          description='A clone of the Unix terminal allowing you to create files, directories, and navigate through
          the file system, whilst switching users and changing permissions.'
        />
        <Project 
          title='Pacman Game'
          description='A clone of the classic Pacman game but with wizards and gremlins as well as extra
          features such as map creation and teleportation!'
        />
        <Project 
          title='Assembly Interpreter'
          description='An interpreter for a custom assembly language that takes in a binary file representing the
          assembly code and then acts as a virtual machine to execute the code.'
        />
      </div>
    </div>
  )
}

const ProjectPage = ( {active, setCurrProject, project }) => {
  const title = project.toUpperCase();

  const data = {
    'THE TRADING SIMULATOR': {
      description: 'The trading simulator allows you to choose any publicly listed US stock, \
      download its past data, and then practice your trading skills by buying and selling the stock with \
      the ability to fast forward time to increase your learning speed. To download and trade with any \
      stock data, the frontend takes in user input and sends it to my flask backend, which then queries \
      the Alpha Vantage API to download the stock data, and then cleans it, sorts it, and stores it in my \
      MySQL database for later use in the simulator.',

      videoLink: 'https://github.com/joshuahallam127/trading-simulator/assets/104524708/e4329a0b-f29f-43cb-adc5-5e465a31dd06',

      githubLink: 'https://github.com/joshuahallam127/trading-simulator',

      websiteLink: 'https://joshuahallam127.github.io/trading-simulator'
    },

    'UNIX TERMINAL CLONE': {
      description: 'The virtual machine simulates a linux terminal, allowing you to run the following \
      commands: pwd, cd, mkdir, touch, cp, mv, rm, rmdir, chmod, chown, adduser, deluser, su, ls. The virtual \
      machine keeps track of directory structure, users, their permissions and file permissions.',

      videoLink: 'https://github.com/joshuahallam127/Unix-Terminal-Clone/assets/104524708/edfc6973-e080-44f5-831a-9ce9004a218c',

      githubLink: 'https://github.com/joshuahallam127/Unix-Terminal-Clone'
    },

    'PACMAN GAME': {
      description: 'Parody of the classic Pacman game. In this version, the player is a wizard, and there are \
      some extra features such as map creation and teleportation!',

      videoLink: 'https://github.com/joshuahallam127/Pacman-ish-Game-plus-Extensions/assets/104524708/6753d142-8c8f-4bf4-a313-635d71aae954',

      githubLink: 'https://github.com/joshuahallam127/Pacman-ish-Game-plus-Extensions'
    },

    'ASSEMBLY INTERPRETER': {
      description: 'An interpreter for a custom assembly language that takes in a binary file representing \
      the assembly code and then acts as a virtual machine to execute the code.',
    }
  }

  return (
    <div className={`page project-detail ${active ? 'active' : ''}`}>
      <button onClick={() => setCurrProject('')}>Back</button>
      <h1>{title}</h1>
      <p>{data[title]?.description}</p>
      <a href={data[title]?.githubLink} target="_blank" rel="noopener noreferrer">
        View GitHub Repo
      </a>
      <video controls width="600" height="400">
          <source src={data[title]?.videoLink} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
    </div>
  )

}


const Projects = () => {
  const [currProject, setCurrProject] = useState('');

  return (
    <div className='projectspage'>
      <Nav />
      <div className='twopages'>
        {/* <div style={{width: '100vw', backgroundColor: 'red'}}></div> */}
        <ProjectsPage active={currProject === ''} setCurrProject={setCurrProject}/>
        <ProjectPage active={currProject !== ''} project={currProject} setCurrProject={setCurrProject} />
      </div>
    </div>
  )
}

export default Projects;