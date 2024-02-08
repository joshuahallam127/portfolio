import './App.css';
import React, { useState } from 'react';

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
    <div className='app-container'>
      <div className='app-body'>
        <h1>JOSHUA HALLAM</h1>
        <h2>Full Stack Developer (not designer)</h2>
        <div>
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
        <div className='content'>
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
              </div>
              <div className='project'>
                <div className='project-heading'>
                  <h4>Linux Virtual Machine (school assignment)</h4>
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
                      <source src="https://private-user-images.githubusercontent.com/104524708/303412318-3fe5298d-3968-4a17-9695-d1bb2b32f86b.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDc0MTI4MTksIm5iZiI6MTcwNzQxMjUxOSwicGF0aCI6Ii8xMDQ1MjQ3MDgvMzAzNDEyMzE4LTNmZTUyOThkLTM5NjgtNGExNy05Njk1LWQxYmIyYjMyZjg2Yi5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwOFQxNzE1MTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iOGM3NDMyNmJmYjMzMjI2ODM5NTQ4OGRkZjA1NWE0OWU0ZDk0MWYyNjMyNmMzMTAyMzFhMzc4ZmI2MzQxNjU1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.upSiom-HvML9nFR-6_Lo3Rw89uqdyY0ciLAfk8pVP-w" type="video/mp4" />
                      {/* Provide multiple source elements for cross-browser compatibility */}
                      {/* <source src="path_to_your_video.webm" type="video/webm" /> */}
                      {/* <source src="path_to_your_video.ogg" type="video/ogg" /> */}
                      Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className='project'>
                <div className='project-heading'>
                  <h4>Pacman Game (school assignment)</h4>
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
                      <source src="https://private-user-images.githubusercontent.com/104524708/303422123-4377584d-6351-449a-9a3e-6915c22d21ed.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDc0MTI3NzIsIm5iZiI6MTcwNzQxMjQ3MiwicGF0aCI6Ii8xMDQ1MjQ3MDgvMzAzNDIyMTIzLTQzNzc1ODRkLTYzNTEtNDQ5YS05YTNlLTY5MTVjMjJkMjFlZC5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwOFQxNzE0MzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lNGExNjkzY2U5NTBlM2VhNjNjY2VlMzllNDcyMjVlOGQ0YzQ4ZDU2MWY3NDk4YWUwODg0ZTk2ZDI3MmM5MjFiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.dKbr4KSbWezTAjbfQpIhp9mdamRhoYb9aBqe2huLmxk" type="video/mp4" />
                      {/* Provide multiple source elements for cross-browser compatibility */}
                      {/* <source src="path_to_your_video.webm" type="video/webm" /> */}
                      {/* <source src="path_to_your_video.ogg" type="video/ogg" /> */}
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
              {/* <p>Email: joshuahallam127@gmail.com</p>
              <p>Phone: 0499 444 003</p> */}
            </div>
          } 
        </div>
      </div>
    </div>
  );
}

export default App;
