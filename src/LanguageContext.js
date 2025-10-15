import React, { createContext, useState, useContext } from "react";
import { translations } from "./translations";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default: English

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "he" : "en"));

    // Update HTML dir attribute for RTL/LTR
    document.documentElement.dir = language === "en" ? "rtl" : "ltr";
    document.documentElement.lang = language === "en" ? "he" : "en";
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
