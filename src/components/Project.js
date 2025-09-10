import React from "react";
import "./project.css";
import imgprojectone from "./image/project1.png";
import secondproj from "./image/qrcode.png";
function Project() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-container">
        <div className="project-card">
          <img src={imgprojectone} alt="Project 1" />
          <h3>City-Weather</h3>
          <p>
            This is a simple Weather App built using HTML, CSS, and JavaScript.
            It allows users to enter a city name and fetches real-time weather
            data from the OpenWeatherMap API. The app displays a short weather
            description along with the temperature in Celsius, Humidity In
            Percantage And Wind Speed in KM/H.
          </p>
          <a href="https://city-weather-79e76.web.app/" className="btn">
            View Project
          </a>
        </div>
        <div className="project-card">
          <img src={secondproj} alt="Project 2" />
          <h3>Online Qr Generator</h3>
          <p>The QR Code Generator is a simple web application that allows users to create
           QR codes instantly from any text input. The user just needs to enter text 
           (such as a message, URL, or any string), and with one click, the app generates
            a corresponding QR code. The application provides three main features:
           Generate – Converts the entered text into a QR code.
          Download – Allows the user to save the generated QR code as an image file.
          Clear – Resets the input and removes the QR code from the screen.</p>
          <a href="https://online-qr-code-generator-ten.vercel.app/" className="btn">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
