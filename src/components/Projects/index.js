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
    },
    {
      title: "Daily Schedule Planner",
      fileName: "daily-scheduler.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
    },
    {
      title: "Ecommerce Backend",
      fileName: "ecomm-backend.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
    },
    {
      title: "Employee Tracker",
      fileName: "employee_tracker.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
    },
    {
      title: "Javascript Fundamentals Quiz",
      fileName: "javascript_quiz.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
    },
    {
      title: "My Medication List",
      fileName: "my-med-list.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
    },
    {
      title: "Quick Notes",
      fileName: "quick-notes.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
    },
    {
      title: "Readme Generator",
      fileName: "readme-generator.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
    },
    {
      title: "Secure Password Generator",
      fileName: "secure-password-gen.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
    },
    {
      title: "Social Network Backend",
      fileName: "social-network-backend.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
    },
    {
      title: "Team Profile Generator",
      fileName: "team_profile_generator.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
    },
    {
      title: "Text Editor",
      fileName: "text-editor.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
    },
    {
      title: "Stay Dry Weather Dashboard",
      fileName: "weather-dashboard.png",
      languages: ["Javascript", "CSS"],
      description: "testing",
      repo: "github.com",
    },
  ]);

  const toggleModal = (project) => {
    setProjectSelected({ project });
    setShowModal(!showModal);
  };

  if (pageSelected === "projects") {
    return (
      <section>
        <h1>Projects</h1>
        {showModal && (
          <Modal onClose={toggleModal} projectSelected={projectSelected} />
        )}
        <div>
          {projects.map((project) => (
            <div key={project.title}>
              <h3>{project.title}</h3>
              <img
                alt={project.title}
                src={
                  require(`../../assets/projects/${project.fileName}`).default
                }
                className="img-thumbnail mx-1"
                onClick={() => toggleModal(project)}
              />
              {/* <h4>{project.languages}</h4> */}
            </div>
          ))}
        </div>
      </section>
    );
  }
  return;
}

export default Projects;
