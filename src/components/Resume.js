
import React from "react";
import "./resume.css";

function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="container">
        <h1 className="title">My Resume</h1>
        <p className="subtitle">Rajkumar Maurya</p>

        {/* About */}
        <div className="resume-block">
          <h2>About Me</h2>
          <p>
            I am a passionate B.Tech Computer Science student eager to start my
            career in software development And Fullstack Developer. I enjoy solving coding challenges,
            building projects, and learning about emerging technologies.
          </p>
        </div>

        {/* Education */}
        <div className="resume-block">
          <h2>Education</h2>
          <div className="item">
            <h3>Bachelor of Technology (B.Tech) in Computer Science</h3>
            <p>DIT UNIVERSITY  — 2023 - 2027</p>
            <p>CGPA: 7.7 / 10</p>
          </div>
          <div className="item">
            <h3>Higher Secondary (Class XII)</h3>
            <p>Shree Susanskrit Secondary School — 2021</p>
            <p>Percentage: 80%</p>
          </div>
        </div>

        {/* Skills */}
        <div className="resume-block">
          <h2>Technical Skills</h2>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>HTML5 & CSS3</li>
            <li>Java</li>
            <li>React Native</li>
            <li>Data Structures & Algorithms</li>
            <li>Git / GitHub</li>
            <li>Firebase</li>
            <li>Frontend</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="resume-block">
          <h2>Projects</h2>
         
 <div className="item">
            <h3>Employee_Mangement_System</h3>
            <p>
              I’m currently developing an Employee Management System (EMS) 
              using Java, Swing, and MySQL — a desktop-based application 
              designed to simplify and automate employee record management
               within organizations.
            </p>
          </div>

           <div className="item">
            <h3>ChatBot</h3>
            <p>
              PersonalBot is an AI-powered chatbot designed to provide real-time, 
              human-like conversations through a modern web interface. It uses FastAPI (Python) 
              as the backend to handle message processing and communicate with OpenAI’s GPT model,
               while the React.js frontend offers a clean and responsive chat interface for users.
            </p>
          </div>

           <div className="item">
            <h3>QR Code Generator</h3>
            <p>
             The QR Code Generator is a simple web application that allows users to create QR codes instantly from any text input. 
             The user just needs to enter text (such as a message, URL, or any string), and with one click, the app generates a
              corresponding QR code. The application provides three main features: Generate – Converts the entered text into 
              a QR code. Download – Allows the user to save the generated QR code as an image file. Clear – Resets the input 
              and removes the QR code from the screen.
            </p>
          </div>


          <div className="item">
            <h3>Portfolio Website</h3>
            <p>
              Built a personal portfolio using React.js to showcase skills,
              projects, and achievements. Focused on responsive design and
              performance.
            </p>
          </div>

          <div className="item">
            <h3>Weather App</h3>
            <p>
              Developed a React app that fetches live weather data using OpenWeather API.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="resume-block">
          <h2>Contact</h2>
          <p><strong>Email:</strong> mauryarajkumar21424@gmail.com</p>
          <p><strong>Phone:</strong> +91 9451814505</p>
          <p><strong>Location:</strong> Dehradun, India</p>
        </div>

        {/* Download */}
        <a
          href="https://drive.google.com/file/d/1fNU_rXqAFsOK69q_tcFQ92zdwxRk-ap_/view?usp=drive_link"
          className="download-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          📄 Download Resume (PDF)
        </a>
      </div>
    </section>
  );
}

export default Resume;
