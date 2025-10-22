import React from "react";
import About from "./Components/About";
import Main from "./Components/Main";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Certificate from "./Components/Certificate";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <About />
      <Main />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Certificate />
      <Contact />
    </div>
  );
}

export default App;
