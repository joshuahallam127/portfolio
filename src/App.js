import './App.css';
import React, { useState } from 'react';
import Nav from './Components/Nav';

function App() {
  const [onProjects, setOnProjects] = useState(true);
  const [onAbout, setOnAbout] = useState(false);
  const [onContact, setOnContact] = useState(false);

  const handleProjectsClick = () => {
    setOnProjects(true);
    setOnAbout(false);
    setOnContact(false);
  }

  const handleAboutClick = () => {
    setOnProjects(false);
    setOnAbout(true);
    setOnContact(false);
  }

  const handleContactClick = () => {  
    setOnProjects(false);
    setOnAbout(false);
    setOnContact(true);
  }

  return (
    <div>
      <Nav />
      <div className='homepage'>
        <h1>JOSHUA HALLAM</h1>
      </div>
    </div>

  )

  return (
    <div className='app-container'>
      <div className='app'>
        <div className='app-header'>
          <a href="https://www.linkedin.com/in/joshua-hallam-b4516b258/" target="_blank" rel="noopener noreferrer">
            <img className='icon' src="/portfolio/linkedin-icon.png" alt="LinkedIn"/>
          </a>
          <h1>JOSHUA HALLAM</h1>
          <a href="https://github.com/joshuahallam127" target="_blank" rel="noopener noreferrer">
            <img className='icon' src="/portfolio/github-icon.png" alt="Github"/>
          </a>
        </div>
        <h2>Full Stack Developer (not designer)</h2>
        <div className>
          <div className='choice-buttons'>
            <button 
              onClick={handleProjectsClick} 
              style={{backgroundColor: onProjects ? 'rgb(200, 200, 200)' : 'rgb(16, 16, 16)',
                      color: onProjects ? 'rgb(16, 16, 16)' : 'rgb(224, 224, 224)'}}>Projects</button>
            <button 
              onClick={handleAboutClick} 
              style={{backgroundColor: onAbout ? 'rgb(200, 200, 200)' : 'rgb(16, 16, 16)',
                      color: onAbout ? 'rgb(16, 16, 16)' : 'rgb(224, 224, 224)'}}>About</button>
            <button 
              onClick={handleContactClick} 
              style={{backgroundColor: onContact ? 'rgb(200, 200, 200)' : 'rgb(16, 16, 16)',
                      color: onContact ? 'rgb(16, 16, 16)' : 'rgb(224, 224, 224)'}}>Contact</button>
          </div>
        </div>
        <div>
          {onProjects && 
            <div>
              <h3>Projects</h3>
              <div className='project'>
                <div className='project-heading'>
                  <h4>The Trading Simulator</h4>
                  <h4>React, JavaScript, Python, Flask, SQL, HTML, CSS</h4>
                </div>
                <p>The Trading Simulator allows you to choose any publicly listed US stock, download its past data and then
                  practice your trading skills by buying and selling the stock with the ability to fast forward time to increase
                  your learning speed. To download and trade with
                  any stock data, the frontend takes in user input and sends it to my flask backend, which then queries the 
                  Alpha Vantage API to download the stock data, and then cleans it, sorts it, and stores it in my MySQL database
                  for later use in the simulator. 
                </p>
                <div className='links'>
                  <a href="https://joshuahallam127.github.io/trading-simulator" target="_blank" rel="noopener noreferrer" >
                    View Site
                  </a>
                  <a href="https://github.com/joshuahallam127/trading-simulator" target="_blank" rel="noopener noreferrer" >
                    Frontend Code
                  </a>
                  <a href="https://github.com/joshuahallam127/backend-trading-simulator" target="_blank" rel="noopener noreferrer" >
                    Backend Code
                  </a>
                </div>
                <div>
                  <video controls width="600" height="400">
                      <source src="https://github.com/joshuahallam127/trading-simulator/assets/104524708/e4329a0b-f29f-43cb-adc5-5e465a31dd06" type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className='project'>
                <div className='project-heading'>
                  <h4>Linux Virtual Machine</h4>
                  <h4>Python</h4>
                </div>
                <p>The virtual machine simulates a linux terminal, allowing you to run the following commands:
                  pwd, cd, mkdir, touch, cp, mv, rm, rmdir, chmod, chown, adduser, deluser, su, ls. The virtual machine
                  keeps track of directory structure, users, their permissions and file permissions.
                </p>
                <a href="https://github.com/joshuahallam127/Unix-Terminal-Clone" target="_blank" rel="noopener noreferrer">
                  View GitHub Repo
                </a>
                <div>
                  <video controls width="600" height="400">
                      <source src="https://github.com/joshuahallam127/Unix-Terminal-Clone/assets/104524708/edfc6973-e080-44f5-831a-9ce9004a218c" type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className='project'>
                <div className='project-heading'>
                  <h4>Pacman Game</h4>
                  <h4>Java, Gradle, OOP, JUnit</h4>
                </div>
                <p>
                  Parody of the classic Pacman game. In this version, the player is a wizard, and there are some extra features
                  such as being able to create your own maps, break walls, and use teleporters.
                </p>
                <a href="https://github.com/joshuahallam127/Pacman-ish-Game-plus-Extensions" target="_blank" rel="noopener noreferrer">
                  View GitHub Repo
                </a>
                <div>
                  <video controls width="600" height="400">
                      <source src="https://github.com/joshuahallam127/Pacman-ish-Game-plus-Extensions/assets/104524708/6753d142-8c8f-4bf4-a313-635d71aae954" type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          }
          {onAbout &&
            <div>
              <h3>About</h3>
              <p>I am a full stack developer (backend preference) with a passion for solving problems to create useful products. 
                I am currently studying Bachelor of Advanced Computing (honours) at the University of Sydney and have experience in
                Python, C, Java, SQL, JavaScript, React, Git, HTML, and CSS. In my free time I enjoy working on projects, but also love hanging out
                with my friends, playing chess, and learning new piano pieces. I am currently looking for a part-time position as a software developer
                to further my skills and gain experience in the industry, with the hope of moving into a full-time role once I finish my
                studies.</p>
            </div>
          }
          {onContact &&
            <div>
              <h3>Contact</h3>
              <p>Email: joshuahallam127@gmail.com</p>
              <p>Phone: 0499 444 003</p>
              <a href="https://www.linkedin.com/in/joshua-hallam-b4516b258/" target="_blank" rel="noopener noreferrer">
                <p>LinkedIn</p>
              </a>
            </div>
          } 
        </div>
      </div>
    </div>
  );
}

export default App;
