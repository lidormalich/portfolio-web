import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";
import "../styles/Hero.css";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id='hero'
      className='hero'>
      <div className='hero-content'>
        <div className='hero-text'>
          <div className='greeting'>
            <span className='wave'>👋</span>
            <span>{t.hero.greeting}</span>
          </div>
          <h1 className='hero-title'>
            <span className='gradient-text'>{t.hero.name}</span>
          </h1>
          <h2 className='hero-subtitle'>{t.hero.title}</h2>
          <p className='hero-description'>{t.hero.description}</p>

          <div className='hero-buttons'>
            <a
              href='https://drive.google.com/file/d/1HNkoC24prRLNw1qDFWhEg4tqBgPN4E8f/view'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary'>
              {t.hero.downloadResume}
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
              {t.hero.contactMe}
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
              src='https://github.com/lidormalich/portfolio-web/blob/main/public/media/20220711_152500.jpg?raw=true'
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
