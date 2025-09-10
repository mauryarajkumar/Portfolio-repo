import React from "react";
import "./about.css";
import imageabout from "./image/profile.png";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
function About({ setActiveSection }) {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* <div className="about-image">
          <img src={imageabout} alt="Profile" />
        </div> */}
        <div className="about-content">
          <h2>About Me</h2>
          <div className="about-image">
            <img src={imageabout} alt="Profile" />
          </div>
          <p>
            Hello! I'm a passionate{" "}
            <span className="highlight">MernStack Developer </span>
            with experience in building interactive and responsive web
            applications. I love solving problems, learning new technologies,
            and working on exciting projects. My goal is to create seamless user
            experiences using the latest web technologies. When I'm not coding,
            I enjoy exploring tech trends and working on open-source projects.
          </p>
          {/* <p>
            My goal is to create seamless user experiences using the latest web
            technologies. When I'm not coding, I enjoy exploring tech trends and
            working on open-source projects.
          </p> */}

          {/* Social Media Links */}
          <div className="social-links">
            <h3>Get Touch With Me:</h3>
            <a
              href="https://linkedin.com/in/mauryarajkumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://github.com/mauryarajkumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            <a
              href="https://twitter.com/mauryarajku"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com/share/19jNSXv4M3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon" />
            </a>
            <a
              href="https://www.threads.net/@mauryarajkumar_557"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaThreads className="social-icon" />
            </a>
          </div>
          <button onClick={() => setActiveSection("projects")} className="btn">
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
