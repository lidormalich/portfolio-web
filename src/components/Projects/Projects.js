import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const projectsData = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, product management, shopping cart, and secure payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image:
        "https://via.placeholder.com/400x300/667eea/ffffff?text=E-Commerce+Platform",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      image:
        "https://via.placeholder.com/400x300/764ba2/ffffff?text=Task+Manager",
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with location-based forecasts, weather alerts, and historical data visualization.",
      technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      image:
        "https://via.placeholder.com/400x300/f093fb/ffffff?text=Weather+Dashboard",
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Clone",
      description:
        "Full-featured social media platform with posts, comments, likes, friend system, and real-time notifications.",
      technologies: ["React", "Node.js", "Socket.io", "MySQL"],
      image:
        "https://via.placeholder.com/400x300/667eea/ffffff?text=Social+Media",
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Builder",
      description:
        "Dynamic portfolio builder allowing users to create and customize their professional portfolios with drag-and-drop interface.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      image:
        "https://via.placeholder.com/400x300/764ba2/ffffff?text=Portfolio+Builder",
      github: "#",
      demo: "#",
    },
    {
      title: "Fitness Tracker",
      description:
        "Comprehensive fitness tracking app with workout logging, progress charts, calorie counter, and workout recommendations.",
      technologies: ["React Native", "Node.js", "MongoDB", "Express"],
      image:
        "https://via.placeholder.com/400x300/f093fb/ffffff?text=Fitness+Tracker",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id='projects'
      className='projects'>
      <div className='section-header'>
        <h2 className='section-title'>Featured Projects</h2>
        <div className='title-underline'></div>
        <p className='section-subtitle'>
          Here are some of my recent projects that showcase my skills
        </p>
      </div>

      <div className='projects-grid'>
        {projectsData.map((project, index) => (
          <div
            className='project-card'
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}>
            <div className='project-image'>
              <img
                src={project.image}
                alt={project.title}
              />
              <div className='project-overlay'>
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
        <p>Want to see more of my work?</p>
        <a
          href='https://github.com/lidormalich'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-primary'>
          <FaGithub /> Visit My GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
