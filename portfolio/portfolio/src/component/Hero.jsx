import React from "react";
import hero from "../assets/Hero.png";
import { useNavigate } from "react-router-dom";
import {BsDownload} from 'react-icons/bs';

const Hero = () => {

  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/ResumeF.pdf'; // Update the path based on the file location inside the public folder
    link.download = 'Resume.pdf';
    link.click();
  };

  // const handleContact = () =>{
  //      navigate('/contact');
  // };
  
  return (
    <div className="outer-wrapper">
      <div className="wrapper">
        <div className="hero">
          <div className="left">
            <h5>Hi There</h5>
            <h1>
              I'm <span>Mihir Kumar </span>{" "}
            </h1>
            <p>I am a Web Developer</p>
            <div className="hero-btn">
              <div className="resume btn-red" onClick={handleDownload}>
                {" "}
                Resume <BsDownload />
              </div>
              {/* <div className="btn btn-blue" onClick={handleContact}>Contact Me</div> */}
            </div>
          </div>
          <div className="right">
            <img
              style={{ width: "100%", borderRadius: "100%" }}
              src={hero}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


