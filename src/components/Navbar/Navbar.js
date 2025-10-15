import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className='navbar-container'>
        <div
          className='navbar-logo'
          onClick={() => scrollToSection("hero")}>
          <span className='logo-text'>LM</span>
        </div>

        <div className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
          <a
            onClick={() => scrollToSection("hero")}
            className='nav-link'>
            Home
          </a>
          <a
            onClick={() => scrollToSection("about")}
            className='nav-link'>
            About
          </a>
          <a
            onClick={() => scrollToSection("skills")}
            className='nav-link'>
            Skills
          </a>
          <a
            onClick={() => scrollToSection("projects")}
            className='nav-link'>
            Projects
          </a>
          <a
            onClick={() => scrollToSection("contact")}
            className='nav-link'>
            Contact
          </a>
        </div>

        <div
          className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
