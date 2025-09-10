import React from "react";
import "./Home.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import myImage from "./image/profile.png";
function Home({ setActiveSection }) {
  const typedElement = useRef(null);

  useEffect(() => {
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: [
          "MernStack Developer",
          "React Developer",
          "Frontend Developer",
          "Web Developer",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });

      return () => typed.destroy(); // Cleanup on component unmount
    }
  }, []);
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>
          Hello, I'm a <span ref={typedElement} className="highlight"></span>
        </h1>
        <p>
          Building interactive and responsive web applications with modern
          technologies.
        </p>
        <button onClick={() => setActiveSection("projects")} className="btn">
          View My Work
        </button>
      </div>
      <div className="home-image">
        <img src={myImage} alt="Profile" />
      </div>
    </section>
  );
}

export default Home;
