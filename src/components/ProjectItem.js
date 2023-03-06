import React from "react";

export default function ProjectItem({project}) {
  return (
    <div className="projectItem">
      <div style={{backgroundImage: `url(${project.image})`}} className="bgImage"/>
      <h1>{project.name}</h1>
    </div>
  );
}
