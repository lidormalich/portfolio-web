import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id='hero'
      className='hero'>
      <div className='hero-content'>
        <div className='hero-text'>
          <div className='greeting'>
            <span className='wave'>👋</span>
            <span>Hello, I'm</span>
          </div>
          <h1 className='hero-title'>
            <span className='gradient-text'>Lidor Malich</span>
          </h1>
          <h2 className='hero-subtitle'>Full Stack Developer</h2>
          <p className='hero-description'>
            Passionate software engineer specializing in modern web
            technologies. I create elegant solutions to complex problems and
            love building applications that make a difference.
          </p>

          <div className='hero-buttons'>
            <a
              href='https://drive.google.com/file/d/1HNkoC24prRLNw1qDFWhEg4tqBgPN4E8f/view'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary'>
              Download Resume
            </a>
            <a
              href='#contact'
              className='btn btn-secondary'
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}>
              Contact Me
            </a>
          </div>

          <div className='hero-social'>
            <a
              href='https://www.linkedin.com/in/lidormalich/'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
              aria-label='LinkedIn'>
              <FaLinkedin />
            </a>
            <a
              href='https://github.com/lidormalich'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
              aria-label='GitHub'>
              <FaGithub />
            </a>
            <a
              href='http://api.whatsapp.com/send?phone=972526761204'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
              aria-label='WhatsApp'>
              <FaWhatsapp />
            </a>
            <a
              href='mailto:lidormalich@gmail.com'
              className='social-icon'
              aria-label='Email'>
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className='hero-image'>
          <div className='image-wrapper'>
            <img
              src='/media/20220711_152500.jpg'
              alt='Lidor Malich'
            />
            <div className='image-border'></div>
          </div>
        </div>
      </div>

      <div className='scroll-indicator'>
        <div className='mouse'>
          <div className='wheel'></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
