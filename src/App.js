import './App.css';
import React, { useState } from 'react';

const HeadingBanner = () => (
  <div className='app-header'>
    <img className='icon' src='/trading-simulator/trading-logo.jpg'/>
    <div>
      <a href="https://github.com/joshuahallam127" target="_blank" rel="noopener noreferrer">
        <img className='icon' src="/github-icon.png" alt="Github"/>
      </a>
      <a href="https://www.linkedin.com/in/joshua-hallam-b4516b258/" target="_blank" rel="noopener noreferrer">
        <img className='icon' src="/linkedin-icon.png" alt="LinkedIn"/>
      </a>
    </div>
  </div>
)

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
                  <h4>Trading Simulator</h4>
                  <h4>React, Javascript, HTML, CSS, Python, Flask, SQL</h4>
                </div>
                <p>Trading Simulator allows you to choose any publicly listed US stock, download its past data and then
                  practice your trading skills by buying and selling the stock with the ability to fast forward time to increase
                  your learning speed. The website is built with React, Flask, and MySQL. The website is hosted on Github Pages,
                  the backend is hosted on Render, and the MySQL is hosted on Aiven. 
                </p>
                <a href="https://joshuahallam127.github.io/trading-simulator" target="_blank" rel="noopener noreferrer" >
                  View Site
                </a>
              </div>
              <div className='project'>
                <h4>Weather App</h4>
                <p>Weather App is a web application that uses the OpenWeatherMap API to get weather data. The app is built with React and hosted on GitHub Pages. The code is hosted on GitHub.</p>
                <a href="https://joshuahallam127.github.io/weather-app" target="_blank" rel="noopener noreferrer">
                  View Site
                </a>
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
