import React, { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const { t } = useLanguage();
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
          <button
            onClick={() => scrollToSection("hero")}
            className='nav-link'>
            {t.nav.home}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className='nav-link'>
            {t.nav.about}
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className='nav-link'>
            {t.nav.skills}
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className='nav-link'>
            {t.nav.projects}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className='nav-link'>
            {t.nav.contact}
          </button>
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
