import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techTags = technologies.map((tech, idx) => (
    <span key={idx}>{tech}</span>
  ));

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{techTags}</div>
    </div>
  );
}

export default ProjectItem;
