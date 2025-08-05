"use client";

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="relative">
      <Button 
        ref={buttonRef}
        variant="outline" 
        size="sm" 
        className="flex items-center gap-2 hover:bg-black hover:text-white transition-colors rounded-none"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Globe className="h-4 w-4" />
        <span className="text-xs font-medium">
          {language === 'pt' ? 'PT' : 'EN'}
        </span>
      </Button>
      
      {isOpen && (
        <div 
          className="absolute top-full right-0 bg-white border border-gray-200 shadow-lg rounded-none z-50"
          style={{ width: `${buttonWidth}px` }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            className="w-full flex items-center justify-center gap-2 cursor-pointer hover:bg-black hover:text-white transition-colors px-3 py-2 text-sm font-medium"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      )}
    </div>
  );
} 