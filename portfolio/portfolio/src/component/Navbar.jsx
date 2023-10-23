import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
const Navbar = () => {
  const openEmail = () => {
    var email = "mailto:mihirkumar1199@gmail.com";
    window.location.href = email;
  };

  const scrollToSkills = () => {
    scroll.scrollTo(1200); // Adjust the scroll position to the skills section
  };

  const scrollToProjects = () => {
    scroll.scrollTo(1700); // Adjust the scroll position to the skills section
  };

  const scrollToAbout = () => {
    scroll.scrollTo(600); // Adjust the scroll position to the skills section
  };

  return (
    <div className="outer-wrapper">
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid navbar wrapper">
          <Link to="/">
            <div className="logo">
              {"</"}
              <span className="logo-text">Mihir</span>
              {">"}
            </div>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              class="navbar-toggler-icon "
              style={{ backgroundColor: "white", color: "white" }}
            ></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarText">
            <ul class="navbar-nav   me-auto mb-2 mb-lg-0 text-light" style={{marginLeft:'2rem'}}>
              <li class="nav-item m-2 " style={{ cursor: "pointer" }}>
                <Link to="/" style={{textDecoration:"none" , color:"white"}}>
                  Home
                </Link>
              </li>
              <li class="nav-item m-2 " style={{ cursor: "pointer" }}>
                <ScrollLink to="about" smooth={true} onClick={scrollToAbout}>
                  About
                </ScrollLink>
              </li>
              <li class="nav-item m-2 " style={{ cursor: "pointer" }}>
                <ScrollLink to="skills" smooth={true} onClick={scrollToSkills}>
                  Skills
                </ScrollLink>
              </li>
              <li class="nav-item m-2 " style={{ cursor: "pointer" }}>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  onClick={scrollToProjects}
                >
                  Projects
                </ScrollLink>
              </li>
            </ul>
            <div className="nav-text nav-btn" onClick={openEmail}>
              Let's Talk
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
