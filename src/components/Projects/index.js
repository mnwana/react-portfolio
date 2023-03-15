import React, { useState } from "react";
import ModalComponent from "../Modal";
import Card from "react-bootstrap/Card";
import { projectOpenClickEvent } from "../../utils/ga4";

function Projects(props) {
  const [projectSelected, setProjectSelected] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [projects] = useState([
    {
      title: "Paw Shop",
      fileName: "paw-shop.png",
      languages: [
        "React",
        "GraphQL",
        "MongoDB and Mongoose ODM",
        "Bootstrap",
        "CSS",
        "JWT",
        "Luxon",
        "Git",
      ],
      description:
        "This application allows NYC residents to exchange pet products they no longer need.",
      repo: "https://github.com/mnwana/paw-shop/tree/main",
      deployment: "https://pawshop.herokuapp.com/",
    },
    {
      title: "Astrosounds",
      fileName: "astrosounds.png",
      languages: [
        "HTML",
        "CSS",
        "Javascript / jQuery",
        "AztroAPI",
        "TextProbe API",
        "Spotify Scraper API",
      ],
      description:
        "This applications provides Spotify playlist recommendations based on the user's daily horoscope.",
      repo: "https://www.github.com/noah35becker/astrosounds",
      deployment: "https://noah35becker.github.io/astrosounds/",
    },
    {
      title: "Weather Dashboard",
      fileName: "weather-dashboard.png",
      languages: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "MomentJS",
        "Open Weather API",
      ],
      description:
        "A weather app to find out the forecast for a given location.",
      repo: "https://github.com/mnwana/weather-dashboard",
      deployment: "https://mnwana.github.io/weather-dashboard/",
    },
    {
      title: "My Medication List",
      fileName: "my-med-list.png",
      languages: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "MomentJS",
        "Express",
        "Handlebars",
        "MySQL",
      ],
      description:
        "My Meds is a site built to help patients and health care providers manage medication lists.",
      repo: "https://github.com/mnwana/mymedlist",
      deployment: "https://mymedlistv2.herokuapp.com/",
    },
    {
      title: "Ecommerce Backend",
      fileName: "ecomm-backend.png",
      languages: ["Javascript", "Express", "Handlebars", "MySQL"],
      description:
        "This is a backened application for an online ecommerce site that provides products that have associated categories and tags. The provided API allows a user to interact with the database, reading and writing data.",
      repo: "https://github.com/mnwana/ecomm-site",
    },
    {
      title: "Employee Tracker",
      fileName: "employee_tracker.png",
      languages: ["Javascript", "MySQL", "Inquirer"],
      description:
        "A command-line application that allows a user to interact with an employee database using the Inquirer package.",
      repo: "https://github.com/mnwana/employee-tracker",
    },
    {
      title: "Javascript Quiz",
      fileName: "javascript_quiz.png",
      languages: ["Javascript", "HTML", "CSS"],
      description: "A quiz tool for studying Javascript concepts.",
      repo: "https://github.com/mnwana/code-quiz",
      deployment: "https://mnwana.github.io/code-quiz/",
    },
    {
      title: "Readme Generator",
      fileName: "readme-generator.png",
      languages: ["Javascript", "MySQL", "Inquirer"],
      description:
        "A command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package",
      repo: "https://github.com/mnwana/readme-generator",
    },
    {
      title: "Social Network Backend",
      fileName: "social-network-backend.png",
      languages: ["Javascript", "MongoDB", "Express"],
      description:
        "This is a backened application for an online social network site that users to sign up for an account, post their thoughts, add friends, and react to other's posts. The provided API allows a user to interact with the MongoDB database, reading and writing data.",
      repo: "https://github.com/mnwana/social-network",
    },
  ]);

  const toggleModal = (project) => {
    setProjectSelected(project);
    setShowModal(!showModal);
  };

  return (
    <section className="text-center mb-4">
      <h1 className="pageTitle mx-auto">Projects</h1>
      {showModal && (
        <ModalComponent
          onClose={toggleModal}
          projectSelected={projectSelected}
          show={showModal}
        />
      )}
      <div className="row mx-auto justify-content-center">
        {/* add 2 featured projects with gif, description and url in card*/}
        {projects.map((project) => (
          <Card style={{ width: "24rem" }} key={project.title} className="m-2">
            <Card.Title>{project.title}</Card.Title>
            <Card.Img
              alt={project.title}
              src={require(`../../assets/projects/${project.fileName}`).default}
              onClick={() => {
                toggleModal(project);
                projectOpenClickEvent(project.title);
              }}
            />
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
