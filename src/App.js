import React from "react";
import { LanguageProvider } from "./LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import LanguageSelector from "./components/LanguageSelector";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <div className='App'>
        <Navbar />
        <LanguageSelector />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
