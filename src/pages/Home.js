import React from 'react';
import prof from "../imgs/prof.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faReact, faBootstrap, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import "../styles/Home.css"



function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Tom</h2>
        <div className="prompt"> 
        <p>A Junior Front-End Developer.</p>
        <img id="headshot" src={prof}></img>
        </div>
      </div>
    <div className="skills">
      <h1>Skills</h1>
      <div className="list">
        <div className="item">
          <h2>Front-End</h2>
          <div className="skillIcons">
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faBootstrap} />
          <FontAwesomeIcon icon={faNodeJs} />
          </div>
          <span>ReactJS, Bootstrap, nodeJS, jQuery</span>
          </div>
          <div className="item">
          <h2>Languages</h2>
          <div className="skillIcons">
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3} />
          <FontAwesomeIcon icon={faJs} />
          </div>
          <span>HTML, CSS, JavaScript</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home