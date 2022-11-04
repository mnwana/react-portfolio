import React, { useState } from "react";
import Modal from "../Modal";

function Projects(props) {
  const { pageSelected } = props;
  const [projectSelected, setProjectSelected] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [projects] = useState([
    {
      title: "Astrosounds",
      fileName: "astrosounds.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
liveDeploy: "github.com",
    },
    {
      title: "Daily Schedule Planner",
      fileName: "daily-scheduler.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
liveDeploy: "github.com",
    },
    {
      title: "Ecommerce Backend",
      fileName: "ecomm-backend.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
liveDeploy: "github.com",
    },
    {
      title: "Employee Tracker",
      fileName: "employee_tracker.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
liveDeploy: "github.com",
    },
    {
      title: "Javascript Quiz",
      fileName: "javascript_quiz.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
liveDeploy: "github.com",
    },
    {
      title: "My Medication List",
      fileName: "my-med-list.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
liveDeploy: "github.com",
    },
    {
      title: "Quick Notes",
      fileName: "quick-notes.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
liveDeploy: "github.com",
    },
    {
      title: "Readme Generator",
      fileName: "readme-generator.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
liveDeploy: "github.com",
    },
    {
      title: "Secure Password Gen",
      fileName: "secure-password-gen.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
liveDeploy: "github.com",
    },
    {
      title: "Social Network Backend",
      fileName: "social-network-backend.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
liveDeploy: "github.com",
    },
    {
      title: "Team Profile Generator",
      fileName: "team_profile_generator.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
liveDeploy: "github.com",
    },
    {
      title: "Text Editor",
      fileName: "text-editor.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
liveDeploy: "github.com",
    },
    {
      title: "Weather Dashboard",
      fileName: "weather-dashboard.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
liveDeploy: "github.com",
    },
  ]);

  const toggleModal = (project) => {
    setProjectSelected( project );
    setShowModal(!showModal);
  };

  if (pageSelected === "projects") {
    return (
      <section >
        <h1>Projects</h1>
        {/* <Modal showModal={showModal} projectSelected = {projectSelected} toggleModal={toggleModal}></Modal> */}

        {showModal && (
        <Modal onClose={toggleModal} projectSelected={projectSelected} />
      )}
        <div className="row">
          {/* add 2 featured projects with gif, description and url in card*/}
          {projects.map((project) => (
            <div className="col-md-3 card m-md-2 bg-secondary text-center" key={project.title}>
              <div className="thumbnail ">
                <h3 className="card-title bg-primary text-light mx-0 p-0 text-center">{project.title}</h3>
                <img
                  alt={project.title}
                  src={
                    require(`../../assets/projects/${project.fileName}`).default
                  }
                  className="img-thumbnail rounded mx-1"
                  onClick={() => toggleModal(project)}
                />
                <p className="card-subtitle">{project.languages}</p>
                {/* <h4>{project.languages}</h4> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  return;
}

export default Projects;
