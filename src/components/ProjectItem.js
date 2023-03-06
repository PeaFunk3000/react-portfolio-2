import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectItem({project}) {
  const navigate = useNavigate();

  return (
    <div className="projectItem" onClick={() => {navigate(`/project/${project.id}`)}}>
      <div style={{backgroundImage: `url(${project.image})`}} className="bgImage"/>
      <h1 className="projectTitle">{project.name}</h1>
    </div>
  );
}
