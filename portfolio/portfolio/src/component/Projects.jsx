import React from "react";
import movie from "../assets/movie.png";
import ecommerce from "../assets/ecommerce.png";
import microsoft from "../assets/microsoft_home.png";
import taskmanager from "../assets/task_manager.png";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="projects-container outer-wrapper">
      <h1 className="section-bar">My Projects</h1>
      <div className="projects-wrapper wrapper">
        <Link to="https://github.com/Mihir-Maurya/task-manager-fullstack">
          <div className="project-card">
            <img
              src={taskmanager}
              alt="task-manager"
              style={{ width: "100%", height: "100%", display: "inline-block" }}
            />
            <h5 className="project-name">Task Manager</h5>
          </div>
        </Link>
        <Link to="https://jocular-selkie-37d689.netlify.app/">
          <div className="project-card">
            <img
              src={ecommerce}
              alt="hmtl-logo"
              style={{ width: "100%", height: "100%", display: "inline-block" }}
            />
            <h5 className="project-name">Stylehub</h5>
          </div>
        </Link>

        <Link to="https://sparkly-bubblegum-56c8c6.netlify.app/">
          <div className="project-card">
            <img
              src={movie}
              alt="hmtl-logo"
              style={{ width: "100%", height: "100%", display: "inline-block" }}
            />
            <h5 className="project-name">Trending Movies</h5>
          </div>
        </Link>

        <Link to="https://inquisitive-cat-4e2a47.netlify.app/">
          <div className="project-card">
            <img
              src={microsoft}
              alt="hmtl-logo"
              style={{ width: "100%", height: "100%", display: "inline-block" }}
            />
            <h5 className="project-name">Microsoft home page</h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
