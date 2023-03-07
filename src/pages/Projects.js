import React from 'react'
import ProjectItem from '../components/ProjectItem';
import projects from '../projects.json' 
import "../styles/Projects.css"

export default function Projects() {
  
  return (
    <div className='projectList'>
        {projects.map((project) => (
          <ProjectItem
            project={project}
          />
        ))}
      </div>
  )
};