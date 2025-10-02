import React from "react";
import "./skill.css";
import javaicon from "./image/java.png";

import MernStackdeveloper from "./image/mernstack.png";
import Webdeveloper from "./image/webdeveloper.jpeg";
import Fullstackdeveloper from "./image/fullstack.png";
import advjava from "./image/advanced-java-course.jpg";
function Skill() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skill-container">
        <div className="skill-card">
          <img src={javaicon} alt="skillicon"></img>
          <h5>Java</h5>
        </div>
         <div className="skill-card">
          <img src={advjava} alt="skillicon"></img>
          <h5>Advanced Java</h5>
        </div>
        {/* second skill */}

        {/* third Skill */}
        <div className="skill-card">
          <img src={MernStackdeveloper} alt="skillicon"></img>
          <h5>MernStackdeveloper</h5>
        </div>
        {/* fouth skill */}
        <div className="skill-card">
          <img src={Webdeveloper} alt="skillicon"></img>
          <h5>Web Developer</h5>
        </div>
        {/* fifth Skil */}
        <div className="skill-card">
          <img src={Fullstackdeveloper} alt="skillicon"></img>
          <h5>Full Stack Developer</h5>
        </div>
      </div>
    </section>
  );
}

export default Skill;
