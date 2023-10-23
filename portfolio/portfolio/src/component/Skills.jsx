import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactjs from "../assets/react.png";
import java from "../assets/java.png";
import sql from "../assets/sql.jpg";
import git from "../assets/git.jpg";
import mongodb from "../assets/mongodb.jpg";
import nodejs from "../assets/nodejs-logo.png";
import expressjs from "../assets/expressjs.png";
import SkillCard from "./SkillCard";
const Skills = () => {
  return (
    <div className="skills-container outer-wrapper">
      <h1 className="section-bar">My Skills</h1>
      <div className="skills-wrapper wrapper" style={{ minHeight: "400px" }}>
        <SkillCard src={html} alt="html-logo" width="100px" />
        <SkillCard src={css} alt="css-logo" width="100px" />
        <SkillCard src={javascript} alt="javascript-logo" width="100px" />
        <SkillCard src={reactjs} alt="reactjs-logo" width="100px" />
        <SkillCard src={java} alt="java-logo" width="100px" />
        <SkillCard src={sql} alt="sql-logo" width="100px" />
        <SkillCard src={git} alt="git-logo" width="100px" />
        <SkillCard src={nodejs} alt="nodejs-logo" width="100px" />
        <SkillCard src={expressjs} alt="expressjs-logo" width="100px" />
        <SkillCard src={mongodb} alt="mongodb-logo" width="100px" />
      </div>
    </div>
  );
};

export default Skills;
