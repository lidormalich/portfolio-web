import React, { useState } from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    const mailtoLink = `mailto:lidormalich@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "lidormalich@gmail.com",
      link: "mailto:lidormalich@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "052-676-1204",
      link: "tel:0526761204",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "Chat with me",
      link: "http://api.whatsapp.com/send?phone=972526761204",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Israel",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/lidormalich/",
      color: "#0077B5",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      link: "https://github.com/lidormalich",
      color: "#333",
    },
    {
      icon: <FaWhatsapp />,
      name: "WhatsApp",
      link: "http://api.whatsapp.com/send?phone=972526761204",
      color: "#25D366",
    },
    {
      icon: <FaFacebook />,
      name: "Facebook",
      link: "http://fb.com/lidormalich2",
      color: "#1877F2",
    },
  ];

  return (
    <section
      id='contact'
      className='contact'>
      <div className='section-header'>
        <h2 className='section-title'>Get In Touch</h2>
        <div className='title-underline'></div>
        <p className='section-subtitle'>Looking forward to hearing from you</p>
      </div>

      <div className='contact-content'>
        <div className='contact-info-section'>
          <div className='contact-intro'>
            <h3>Let's work together!</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
            </p>
          </div>

          <div className='contact-info-grid'>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className='contact-info-card'>
                <div className='info-icon'>{info.icon}</div>
                <div className='info-content'>
                  <h4>{info.title}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : "_self"}
                      rel='noopener noreferrer'>
                      {info.value}
                    </a>
                  ) : (
                    <p>{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className='social-section'>
            <h3>Connect with me</h3>
            <div className='social-links-grid'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-link-card'
                  style={{ borderColor: social.color }}>
                  <div
                    className='social-icon'
                    style={{ color: social.color }}>
                    {social.icon}
                  </div>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='contact-form-section'>
          <form
            onSubmit={handleSubmit}
            className='contact-form'>
            <div className='form-group'>
              <label htmlFor='name'>Your Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='John Doe'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Your Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='john@example.com'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='subject'>Subject</label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder='Project Discussion'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows='6'
                placeholder='Tell me about your project...'></textarea>
            </div>

            <button
              type='submit'
              className='btn btn-primary submit-btn'>
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className='footer'>
        <p>© 2024 Lidor Malich. All rights reserved.</p>
        <p>Built with ❤️ using React</p>
      </footer>
    </section>
  );
};

export default Contact;
