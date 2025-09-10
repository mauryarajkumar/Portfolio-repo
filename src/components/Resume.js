import React from "react";
import "./resume.css";
function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="Continer">
        <h2>My Resume</h2>
        <p>Download My Resume To View My Qualification </p>
        <a
          href="https://drive.google.com/file/d/1fNU_rXqAFsOK69q_tcFQ92zdwxRk-ap_/view?usp=drive_link"
          download
          className="btn"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
