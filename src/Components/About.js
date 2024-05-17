import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"

import Avatar from '../images/Avatar.jpeg';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Joshua Castaneda</b> and I am from sunny Southern California. I'm a husband and father of two boys. 
            <br></br>
            <br></br>
            I bring decade of work experience in the Aviation Industry specialzing in customer service, quality assurance, and project planning. 
            This diverse background has honed my communication, leadership, and teamwork abilities. 
            <br></br>
            <br></br>
            I've grown a passion for <b>Software Architecture</b> as I'm most interested in high-level design and strategic planning of software systems. My previous experience as a project planner has showed me the importance of planning and execution of large scale projects. Additionally it has taught be the importance of efficient workflows, teamwork, and the challenge of orchestrating complex systems. Which in turn, has made me passionate for the planning, design, implementation, and optimization software systems and business processes.  
            <br></br>
            <br></br>
            As my ultimate goal to become a Software Architect I currently seeking an opportunity for an internship as a <b>Software Developer</b> to gain experience to assist in my ultimate goal. I'd love to join a team who can share my passions and assist in my Professional growth
            <br></br>
            <br></br>
            I'm currently a student at Cal State University Fullerton and set to graduate spring 2025 with a <b>B.S. in Computer Science</b>.
          </p>
        </div>

        <div>
          <Tilt>
            <img className='Avatar' src={Avatar} alt="" />
      
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Npm' />
        <Skills skill='MySQL'/>
        <Skills skill='Java'/>
        
      </div>
    </>
  )
}

export default About