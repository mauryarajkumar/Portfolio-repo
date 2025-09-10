import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ activeSection, setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Hi,Rajkumar Maurya</h1>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={() => setActiveSection("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setActiveSection("projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setActiveSection("skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActiveSection("contact")}>
              Contact
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setActiveSection("about")}>
              About Me
            </a>
          </li>
          <li>
            <a href="#resume" onClick={() => setActiveSection("resume")}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
