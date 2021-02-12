import React from 'react';
import './Projects.scss';

const Projects = () => {
  return (
    <div className='project-container'>
      <div className='project-container__title'>nasze projekty</div>
      <div className='project-container__content'>
        <div className='test'>
          <div className='project-container__content__projects versionA'></div>
          <div className='project-container__content__projects versionB'></div>
        </div>
        <div className='test'>
          <div className='project-container__content__projects versionB'></div>
          <div className='project-container__content__projects versionA'></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
