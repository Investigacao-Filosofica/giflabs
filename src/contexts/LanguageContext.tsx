"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

// Importar idiomas dinamicamente
import { pt } from './translations/languages/pt';
import { en } from './translations/languages/en';

// Configuração de idiomas suportados (começando com PT e EN)
export const SUPPORTED_LANGUAGES = {
  pt: { name: 'Português', code: 'pt-BR' },
  en: { name: 'English', code: 'en-US' },
  // Preparado para expansão futura:
  // es: { name: 'Español', code: 'es-ES' },
  // fr: { name: 'Français', code: 'fr-FR' },
  // de: { name: 'Deutsch', code: 'de-DE' },
  // it: { name: 'Italiano', code: 'it-IT' },
  // ja: { name: '日本語', code: 'ja-JP' },
  // zh: { name: '中文', code: 'zh-CN' },
  // ko: { name: '한국어', code: 'ko-KR' },
  // ru: { name: 'Русский', code: 'ru-RU' },
  // ar: { name: 'العربية', code: 'ar-SA' },
  // hi: { name: 'हिन्दी', code: 'hi-IN' },
} as const;

export type LanguageCode = keyof typeof SUPPORTED_LANGUAGES;

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
  supportedLanguages: typeof SUPPORTED_LANGUAGES;
  currentLanguageInfo: typeof SUPPORTED_LANGUAGES[LanguageCode];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>('pt');

  // Carregar idioma salvo
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as LanguageCode;
    if (savedLanguage && savedLanguage in SUPPORTED_LANGUAGES) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Memoizar traduções para performance
  const translations = useMemo(() => {
    const allTranslations: Record<LanguageCode, any> = {
      pt,
      en,
    };
    return allTranslations;
  }, []);

  const changeLanguage = (lang: LanguageCode) => {
    if (lang in SUPPORTED_LANGUAGES) {
      setLanguageState(lang);
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): string => {
    const currentTranslations = translations[language];
    if (!currentTranslations) {
      return key;
    }

    const keys = key.split('.');
    let value: any = currentTranslations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback para inglês se não encontrar no idioma atual
        if (language !== 'en' && translations.en) {
          let fallbackValue: any = translations.en;
          for (const fallbackKey of keys) {
            if (fallbackValue && typeof fallbackValue === 'object' && fallbackKey in fallbackValue) {
              fallbackValue = fallbackValue[fallbackKey];
            } else {
              return key;
            }
          }
          return typeof fallbackValue === 'string' ? fallbackValue : key;
        }
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const contextValue: LanguageContextType = {
    language,
    setLanguage: changeLanguage,
    t,
    supportedLanguages: SUPPORTED_LANGUAGES,
    currentLanguageInfo: SUPPORTED_LANGUAGES[language],
  };

  return (
    <LanguageContext.Provider value={contextValue}>
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