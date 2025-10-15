import React from "react";
import { useLanguage } from "../LanguageContext";
import { calculateAge } from "../utils/calculateAge";
import "../styles/About.css";

const About = () => {
  const { t } = useLanguage();
  const age = calculateAge(1998);

  return (
    <section
      id='about'
      className='about'>
      <div className='section-header'>
        <h2 className='section-title'>{t.about.title}</h2>
        <div className='title-underline'></div>
      </div>

      <div className='about-content'>
        <div className='about-text'>
          <p className='about-paragraph'>{t.about.paragraph1}</p>

          <p className='about-paragraph'>{t.about.paragraph2}</p>

          <p className='about-paragraph'>{t.about.paragraph3}</p>

          <div className='about-stats'>
            <div className='stat-item'>
              <div className='stat-number'>{age}</div>
              <div className='stat-label'>{t.about.yearsOld}</div>
            </div>
            <div className='stat-item'>
              <div className='stat-number'>15+</div>
              <div className='stat-label'>{t.about.technologies}</div>
            </div>
            <div className='stat-item'>
              <div className='stat-number'>42+</div>
              <div className='stat-label'>{t.about.repositories}</div>
            </div>
            <div className='stat-item'>
              <div className='stat-number'>100%</div>
              <div className='stat-label'>{t.about.dedication}</div>
            </div>
          </div>
        </div>

        <div className='about-highlights'>
          <div className='highlight-card'>
            <div className='highlight-icon'>🎓</div>
            <h3>{t.about.education}</h3>
            <p>{t.about.educationDesc1}</p>
            <p>{t.about.educationDesc2}</p>
          </div>

          <div className='highlight-card'>
            <div className='highlight-icon'>💼</div>
            <h3>{t.about.expertise}</h3>
            <p>{t.about.expertiseDesc1}</p>
            <p>{t.about.expertiseDesc2}</p>
            <p>{t.about.expertiseDesc3}</p>
          </div>

          <div className='highlight-card'>
            <div className='highlight-icon'>🚀</div>
            <h3>{t.about.location}</h3>
            <p>{t.about.locationDesc1}</p>
            <p>{t.about.locationDesc2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
