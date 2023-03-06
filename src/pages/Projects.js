import React from 'react'
import ProjectItem from '../components/ProjectItem';
import projects from '../projects.json' 
import "../styles/Projects.css"

function Projects() {
  
  return (
    <div className='projectList'>
        {projects.map((project) => (
          <ProjectItem
            project={project}
          />
        ))}
      </div>
  )
}

export default Projects 