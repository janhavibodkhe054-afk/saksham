
import React, {
  createContext,
  useContext,
  useState,
} from "react";

export const LanguageContext = createContext(null);

// Custom Hook
export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
};

// Language Provider
export const LanguageProvider = ({ children }) => {
  // Default language: English
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => {
    if (lang === "en" || lang === "mr") {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
