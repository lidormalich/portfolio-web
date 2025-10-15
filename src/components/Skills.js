import React from "react";
import {
  FaReact,
  FaJs,
  FaJava,
  FaNode,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaLinux,
} from "react-icons/fa";
import { SiCplusplus, SiCsharp, SiMongodb, SiMysql, SiC } from "react-icons/si";
import { useLanguage } from "../LanguageContext";
import "../styles/Skills.css";

const Skills = () => {
  const { t } = useLanguage();

  const skillsData = [
    { name: "React", icon: <FaReact />, level: 90, color: "#61DAFB" },
    { name: "JavaScript", icon: <FaJs />, level: 95, color: "#F7DF1E" },
    { name: "Node.js", icon: <FaNode />, level: 85, color: "#339933" },
    { name: "Java", icon: <FaJava />, level: 80, color: "#007396" },
    { name: "C++", icon: <SiCplusplus />, level: 75, color: "#00599C" },
    { name: "C#", icon: <SiCsharp />, level: 75, color: "#239120" },
    { name: "C", icon: <SiC />, level: 70, color: "#A8B9CC" },
    { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "#1572B6" },
    { name: "SASS", icon: <FaSass />, level: 85, color: "#CC6699" },
    { name: "Bootstrap", icon: <FaBootstrap />, level: 90, color: "#7952B3" },
    { name: "MongoDB", icon: <SiMongodb />, level: 80, color: "#47A248" },
    { name: "MySQL", icon: <SiMysql />, level: 85, color: "#4479A1" },
    { name: "SQL", icon: <FaDatabase />, level: 85, color: "#336791" },
    { name: "Linux", icon: <FaLinux />, level: 75, color: "#FCC624" },
  ];

  return (
    <section
      id='skills'
      className='skills'>
      <div className='section-header'>
        <h2 className='section-title'>{t.skills.title}</h2>
        <div className='title-underline'></div>
        <p className='section-subtitle'>{t.skills.subtitle}</p>
      </div>

      <div className='skills-grid'>
        {skillsData.map((skill, index) => (
          <div
            className='skill-card'
            key={index}
            style={{ animationDelay: `${index * 0.05}s` }}>
            <div
              className='skill-icon'
              style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <div className='skill-info'>
              <h3 className='skill-name'>{skill.name}</h3>
              <div className='skill-progress'>
                <div
                  className='skill-progress-bar'
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(135deg, ${skill.color}00 0%, ${skill.color} 100%)`,
                  }}>
                  <span className='skill-percentage'>{skill.level}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='skills-categories'>
        <div className='category-card'>
          <h3>{t.skills.frontend}</h3>
          <p>{t.skills.frontendDesc}</p>
        </div>
        <div className='category-card'>
          <h3>{t.skills.backend}</h3>
          <p>{t.skills.backendDesc}</p>
        </div>
        <div className='category-card'>
          <h3>{t.skills.database}</h3>
          <p>{t.skills.databaseDesc}</p>
        </div>
        <div className='category-card'>
          <h3>{t.skills.tools}</h3>
          <p>{t.skills.toolsDesc}</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
