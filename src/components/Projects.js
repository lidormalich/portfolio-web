import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";
import ProjectImage from "./ProjectImage";
import "../styles/Projects.css";

const Projects = () => {
  const { t } = useLanguage();
  const [hoveredProject, setHoveredProject] = useState(null);

  const projectsData = [
    // 1. CRM SMS - הפרויקט הכי מקצועי שלך
    {
      title: "CRM SMS Management System",
      description:
        "Enterprise-level CRM system with SMS integration. Built with TypeScript for type-safe, scalable customer relationship management with automated messaging capabilities.",
      technologies: ["TypeScript", "React", "Node.js", "SMS API"],
      gradient: "purple",
      github: "https://github.com/lidormalich/crmsms",
      demo: "https://crm-sms-39c69c412c78.herokuapp.com/",
    },

    // 2. Portfolio Website - הפרויקט הזה!
    {
      title: "Modern Portfolio Website",
      description:
        "Professional portfolio website built with React featuring smooth animations, responsive design, and modern UI. Showcases skills, projects, and contact information in an elegant interface.",
      technologies: ["React", "CSS3", "JavaScript", "React Icons", "i18n"],
      gradient: "blue",
      github: "https://github.com/lidormalich/portfolio-web",
      demo: "https://lidormalich.github.io/portfolio-web",
    },

    {
      title: "Place For Date Website",
      description:
        "Dating platform web application for connecting people and finding perfect date locations. Features user profiles, location recommendations, and interactive matching system.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Web APIs"],
      gradient: "pink",
      github: "https://github.com/lidormalich/Place-For-date",
      demo: "https://placefordate.netlify.app/addplace",
    },
    {
      title: "Digital Business Card Platform",
      description:
        "Modern digital business card solution built with TypeScript. Create, customize, and share professional digital business cards with interactive features, QR code integration, and contact management.",
      technologies: ["TypeScript", "React", "CSS3", "QR Integration"],
      gradient: "green",
      github: "https://github.com/lidormalich/bizcard",
      demo: "#",
    },
    {
      title: "PuzzleBlock Game",
      description:
        "Interactive puzzle game built in Java with engaging gameplay mechanics, multiple difficulty levels, and smooth user experience.",
      technologies: ["Java", "Game Development", "OOP"],
      gradient: "orange",
      github: "https://github.com/lidormalich/PuzzleBlock-Game",
      demo: "#",
    },
    {
      title: "IL-Tools - Israeli Smartphone Lab Tools",
      description:
        "Comprehensive toolkit for smartphone laboratory work in Israel. Built with C# for hardware testing, diagnostics, and maintenance operations.",
      technologies: ["C#", ".NET", "Hardware Integration"],
      gradient: "violet",
      github: "https://github.com/lidormalich/IL-Tools",
      demo: "#",
    },
  ];

  return (
    <section
      id='projects'
      className='projects'>
      <div className='section-header'>
        <h2 className='section-title'>{t.projects.title}</h2>
        <div className='title-underline'></div>
        <p className='section-subtitle'>{t.projects.subtitle}</p>
      </div>

      <div className='projects-grid'>
        {projectsData.map((project, index) => (
          <div
            className='project-card'
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}>
            <div className='project-image'>
              <ProjectImage
                title={project.title}
                gradient={project.gradient}
                isHovered={hoveredProject === index}
              />
              <div
                className={`project-overlay ${
                  hoveredProject === index ? "active" : ""
                }`}>
                <div className='project-links'>
                  <a
                    href={project.github}
                    className='project-link'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='View GitHub Repository'>
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    className='project-link'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='View Live Demo'>
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className='project-content'>
              <h3 className='project-title'>{project.title}</h3>
              <p className='project-description'>{project.description}</p>
              <div className='project-technologies'>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='tech-tag'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='projects-cta'>
        <p>{t.projects.viewMore}</p>
        <a
          href='https://github.com/lidormalich'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-primary'>
          <FaGithub /> {t.projects.visitGithub}
        </a>
      </div>
    </section>
  );
};

export default Projects;
