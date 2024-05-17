import React from 'react';
import ProjectBox from './ProjectBox';
import ReadyUpImage from '../images/ReadyUp.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={ReadyUpImage} projectName="ReadyUp" />
        
      </div>

    </div>
  )
}

export default Projects