import { useState, useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import { content } from '@/data/content';

const Index = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  useEffect(() => {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferred-language') as 'fr' | 'en' | null;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const handleLanguageChange = (lang: 'fr' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const currentContent = content[language];

  return (
    <>
      <main className="min-h-screen">
        <Hero 
          content={currentContent.hero} 
          language={language}
          onLanguageChange={handleLanguageChange}
        />
        <Services content={currentContent.services} />
        <About content={currentContent.about} />
        <Testimonials content={currentContent.testimonials} />
        <Contact content={currentContent.contact} />
      </main>
      <Footer language={language} />
    </>
  );
};

export default Index;
