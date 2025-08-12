"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// Importar traduções de cada página
import { homeTranslations } from './translations/home';
import { headerFooterTranslations } from './translations/header-footer';
import { serieIfTranslations } from './translations/serie-if';
import { digitalEducationAppTranslations } from './translations/digital-education-app';
import { virtualiaTranslations } from './translations/virtualia';
import { metaversoTranslations } from './translations/metaverso';
import { arqueologiaDigitalTranslations } from './translations/arqueologia-digital';
import { thePhilosophersDaoTranslations } from './translations/the-philosophers-dao';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    // Combinar todas as traduções
    const allTranslations = {
      pt: {
        ...headerFooterTranslations.pt,
        ...homeTranslations.pt,
        ...serieIfTranslations.pt,
        ...digitalEducationAppTranslations.pt,
        ...virtualiaTranslations.pt,
        ...metaversoTranslations.pt,
        ...arqueologiaDigitalTranslations.pt,
        ...thePhilosophersDaoTranslations.pt
      },
      en: {
        ...headerFooterTranslations.en,
        ...homeTranslations.en,
        ...serieIfTranslations.en,
        ...digitalEducationAppTranslations.en,
        ...virtualiaTranslations.en,
        ...metaversoTranslations.en,
        ...arqueologiaDigitalTranslations.en,
        ...thePhilosophersDaoTranslations.en
      }
    };

    const translations = language === 'en' ? allTranslations.en : allTranslations.pt;
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}