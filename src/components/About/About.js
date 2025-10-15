import React from "react";
import "./About.css";

const About = () => {
  return (
    <section
      id='about'
      className='about'>
      <div className='section-header'>
        <h2 className='section-title'>About Me</h2>
        <div className='title-underline'></div>
      </div>

      <div className='about-content'>
        <div className='about-text'>
          <p className='about-paragraph'>
            I'm a 24-year-old Full Stack Developer with a passion for creating
            innovative and efficient solutions. I successfully graduated from
            practical software engineering studies and completed a comprehensive
            Web FullStack course at HackerU College.
          </p>

          <p className='about-paragraph'>
            My journey in software development has equipped me with expertise in
            both front-end and back-end technologies. I thrive on challenges and
            am constantly learning and adapting to new technologies to stay at
            the forefront of the industry.
          </p>

          <p className='about-paragraph'>
            I believe in writing clean, maintainable code and creating user
            experiences that are both beautiful and functional. I'm always
            looking for the next opportunity to grow, learn, and contribute to
            meaningful projects.
          </p>

          <div className='about-stats'>
            <div className='stat-item'>
              <div className='stat-number'>24</div>
              <div className='stat-label'>Years Old</div>
            </div>
            <div className='stat-item'>
              <div className='stat-number'>10+</div>
              <div className='stat-label'>Technologies</div>
            </div>
            <div className='stat-item'>
              <div className='stat-number'>15+</div>
              <div className='stat-label'>Projects</div>
            </div>
            <div className='stat-item'>
              <div className='stat-number'>100%</div>
              <div className='stat-label'>Dedication</div>
            </div>
          </div>
        </div>

        <div className='about-highlights'>
          <div className='highlight-card'>
            <div className='highlight-icon'>🎓</div>
            <h3>Education</h3>
            <p>Practical Software Engineering</p>
            <p>HackerU - Web FullStack</p>
          </div>

          <div className='highlight-card'>
            <div className='highlight-icon'>💼</div>
            <h3>Experience</h3>
            <p>Full Stack Development</p>
            <p>Modern Web Technologies</p>
          </div>

          <div className='highlight-card'>
            <div className='highlight-icon'>🚀</div>
            <h3>Mission</h3>
            <p>Building scalable applications</p>
            <p>Continuous learning & growth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
