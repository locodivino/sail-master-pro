import { useState } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  currentLang: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
}

const LanguageToggle = ({ currentLang, onLanguageChange }: LanguageToggleProps) => {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex rounded-lg border border-border/30 p-1 bg-white/10 backdrop-blur-sm">
        <Button
          variant="ghost"
          size="sm"
          className={`px-3 py-1 text-sm font-medium transition-all duration-300 ${
            currentLang === 'fr'
              ? 'bg-white text-primary shadow-sm'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
          onClick={() => onLanguageChange('fr')}
        >
          FR
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={`px-3 py-1 text-sm font-medium transition-all duration-300 ${
            currentLang === 'en'
              ? 'bg-white text-primary shadow-sm'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
          onClick={() => onLanguageChange('en')}
        >
          EN
        </Button>
      </div>
    </div>
  );
};

export default LanguageToggle;