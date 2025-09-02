"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, LanguageCode } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe, ChevronDown } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage, supportedLanguages, currentLanguageInfo } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (newLanguage: LanguageCode) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button 
        ref={buttonRef}
        variant="outline" 
        size="sm" 
        className="flex items-center gap-2 hover:bg-black hover:text-white transition-colors rounded-none"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Globe className="h-4 w-4" />
        <span className="text-xs font-medium">
          {language.toUpperCase()}
        </span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>
      
      {isOpen && (
        <div 
          className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-none z-50"
          style={{ width: `${buttonWidth + 20}px` }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {Object.entries(supportedLanguages).map(([code, info]) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code as LanguageCode)}
              className={`w-full flex items-center justify-center gap-2 cursor-pointer hover:bg-black hover:text-white transition-colors px-3 py-2 text-sm font-medium ${
                language === code ? 'bg-gray-100' : ''
              }`}
            >
              <span>{code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 