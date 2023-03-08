import React from "react";
import { useParams } from "react-router-dom";
import projects from "../projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import "../styles/ProjectDisplay.css";

export default function ProjectDisplay() {
  const { id } = useParams();
  const project = projects[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img className="img-fluid" src={process.env.PUBLIC_URL + project.image}></img>
      <h1>Skills</h1>
      <div className="languages">
        {project.languages.map((item) => (
        <h2>{item}</h2>
      ))}</div>
      <h1>Links</h1>
      <div className="deployment">
      <a href={project.github} target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
      {project.url && <a href={project.url} target="_blank"><FontAwesomeIcon icon={faComputer} /></a>}
      </div>
    </div>
  );
};
