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
import { useLanguage } from "../LanguageContext";
import "../styles/Contact.css";

const Contact = () => {
  const { t } = useLanguage();

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
      title: t.contact.email,
      value: "lidormalich@gmail.com",
      link: "mailto:lidormalich@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: t.contact.phone,
      value: "052-676-1204",
      link: "tel:0526761204",
    },
    {
      icon: <FaWhatsapp />,
      title: t.contact.whatsapp,
      value: t.contact.whatsappValue,
      link: "http://api.whatsapp.com/send?phone=972526761204",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: t.contact.location,
      value: t.contact.locationValue,
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: t.contact.linkedin,
      link: "https://www.linkedin.com/in/lidormalich/",
      color: "#0077B5",
    },
    {
      icon: <FaGithub />,
      name: t.contact.github,
      link: "https://github.com/lidormalich",
      color: "#333",
    },
    {
      icon: <FaWhatsapp />,
      name: t.contact.whatsapp,
      link: "http://api.whatsapp.com/send?phone=972526761204",
      color: "#25D366",
    },
    {
      icon: <FaFacebook />,
      name: t.contact.facebook,
      link: "http://fb.com/lidormalich2",
      color: "#1877F2",
    },
  ];

  return (
    <section
      id='contact'
      className='contact'>
      <div className='section-header'>
        <h2 className='section-title'>{t.contact.title}</h2>
        <div className='title-underline'></div>
        <p className='section-subtitle'>{t.contact.subtitle}</p>
      </div>

      <div className='contact-content'>
        <div className='contact-info-section'>
          <div className='contact-intro'>
            <h3>{t.contact.workTogether}</h3>
            <p>{t.contact.workTogetherDesc}</p>
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
            <h3>{t.contact.connectWith}</h3>
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
              <label htmlFor='name'>{t.contact.yourName}</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.contact.namePlaceholder}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>{t.contact.yourEmail}</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t.contact.emailPlaceholder}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='subject'>{t.contact.subject}</label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder={t.contact.subjectPlaceholder}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='message'>{t.contact.message}</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows='6'
                placeholder={t.contact.messagePlaceholder}></textarea>
            </div>

            <button
              type='submit'
              className='btn btn-primary submit-btn'>
              {t.contact.sendMessage}
            </button>
          </form>
        </div>
      </div>

      <footer className='footer'>
        <p>© 2024 Lidor Malich. {t.contact.footerRights}</p>
        <p>{t.contact.footerBuilt}</p>
      </footer>
    </section>
  );
};

export default Contact;
