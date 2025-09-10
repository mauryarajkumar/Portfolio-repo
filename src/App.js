//import logo from './logo.svg';
import React, { useState } from "react";

import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import About from "./components/About";
import Resume from "./components/Resume";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  return (
    // <div className="Nav-body">
    //   <Navbar />
    //   <Home />
    //   <Project />
    //   <Skill />
    //   <Contact />
    // </div>

    <div>
      <Navbar
        activesection={activeSection}
        setActiveSection={setActiveSection}
      />
      {activeSection === "home" && <Home setActiveSection={setActiveSection} />}
      {activeSection === "projects" && <Project />}
      {activeSection === "skills" && <Skill />}
      {activeSection === "contact" && <Contact />}
      {/* {activeSection === "about" && <About />} */}
      {activeSection === "about" && (
        <About setActiveSection={setActiveSection} />
      )}
      {activeSection === "resume" && <Resume />}
    </div>
  );
}

export default App;
