import React from 'react';
import './About.css';
import Nav from './Nav';
import { CgCPlusPlus,  } from 'react-icons/cg';
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaHtml5,
  FaCss3,
  FaPython,
  FaJava,
  FaDatabase
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

const Skill = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    "C++": <CgCPlusPlus />,
    React: <FaReact />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Python: <FaPython />,
    Java: <FaJava />,
    SQL: <FaDatabase />,
  }
  return (
    <div className='skillbox'>
      <div className='skill'>{icon[skill]}</div>
      <h6>{skill}</h6>
    </div>
  )
}

const About = () => {

  return (
    <div className='aboutpage'>
      <Nav />
      <div className='about-body'>
        <h1>ABOUT ME</h1>
        <h2>INTRODUCTION</h2>
        <p>Hello, I'm Josh! I'm a Full Stack Engineer with a passion for solving complex problems to create
          software that has a positive impact on people's lives! I'm an extremely motivated hard worker that 
          loves learning of any kind. In my free time I'm either playing the piano or chess, hanging out with
          friends, or working on personal projects to develop my skills. 
        </p>
        <h2 style={{marginTop:'10vh'}}>SKILLS</h2>
        <div className='skills'>
          <Skill skill='Python' />
          <Skill skill='Java' />
          <Skill skill='SQL' />
          <Skill skill='C++' />
          <Skill skill='Javascript' />
          <Skill skill='React' />
          <Skill skill='HTML' />
          <Skill skill='CSS' />
          <Skill skill='Git' />
          <Skill skill='Github' />
          {/* <Skill skill='C' /> */}
        </div>

      </div>
    </div>

  )
}

export default About;