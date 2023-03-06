import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../styles/Home.css"


function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Greetings, My Name is Tom</h2>
        <div className="prompt"> 
        <p>A self-proclaimed designer-maker!</p>
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
    <div className="skills">
      <h1>Skills</h1>
      <ol className="list">
        <li className="item">
          <h2>Front-End</h2>
          <span>ReactJS, Bootstrap, nodeJS, jQuery</span>
          </li>
          <li className="item">
          <h2>Languages</h2>
          <span>HTML, CSS, JavaScript</span>
        </li>
      </ol>
    </div>
    </div>
  )
}

export default Home