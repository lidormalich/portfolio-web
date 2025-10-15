import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";
import "../styles/LanguageSelector.css";

const LanguageSelector = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "he", name: "עברית", flag: "🇮🇱" },
  ];

  const currentLang = languages.find((lang) => lang.code === language);

  const handleLanguageChange = () => {
    toggleLanguage();
    setIsOpen(false);
  };

  return (
    <div className='language-selector'>
      <button
        className='language-selector-button'
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Select Language'
        title={`Current: ${currentLang.name}`}>
        <span className='globe-icon'>🌍</span>
        <span className='current-flag'>{currentLang.flag}</span>
      </button>

      {isOpen && (
        <div className='language-dropdown'>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${
                language === lang.code ? "active" : ""
              }`}
              onClick={handleLanguageChange}>
              <span className='flag'>{lang.flag}</span>
              <span className='lang-name'>{lang.name}</span>
              {language === lang.code && <span className='checkmark'>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
