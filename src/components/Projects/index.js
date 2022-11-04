import React, { useState } from "react";

function Projects(props) {
  const {pageSelected} = props;

  const [projects] = useState([
    {
      title: "Testing",
      fileName: "testing.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
    },
  ]);
  if(pageSelected === 'projects'){
  return (
    <section>
      <h1>Projects</h1>
      <div>{/* add modal here */}</div>
      <div>
        {projects.map((project) => (
          <div>
            <h3>{project.title}</h3>
            <img
              // src={require(`../../assets/projects/${project.fileName}`).default}
              alt={project.title}
              key={project.title}
            />
            <h4>{project.languages}</h4>
          </div>
        ))}
      </div>
    </section>
  );}
  return;
}

export default Projects;
