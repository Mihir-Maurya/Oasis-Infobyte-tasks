import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";


const Footer = () => {
  const openEmail = () => {
    var email = "mailto:mihirkumar1199@gmail.com";
    window.location.href = email;
  };
  return (
    <div className="footer-container outer-wrapper">
      <div className="wrapper footer-wrapper">
        <div className="contact footer-contact">
          <BsFillTelephoneFill />
          <span className="footer-span">+91 9304351513</span>
        </div>
        <div
          className="mail footer-contact"
          style={{ cursor: "pointer" }}
          onClick={openEmail}
        >
          <AiOutlineMail />
          <span className="footer-span">mihirkumar1199@gmail.com</span>
        </div>
        <div className="footer-social-links">
          <Link to="https://github.com/Mihir-Maurya">
            <FaGithub />
          </Link>

          <Link to="https://www.linkedin.com/in/mihir-kumar-0a7929174/">
            <BsLinkedin />
          </Link>

          <Link to="https://leetcode.com/mihirMaurya/">
            <SiLeetcode />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
