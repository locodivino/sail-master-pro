import { Anchor, Star, MapPin, Phone } from 'lucide-react';
import LanguageToggle from '../LanguageToggle';
import heroImage from '@/assets/hero-maritime.jpg';

interface HeroProps {
  content: {
    title: string;
    subtitle: string;
    cta: string;
    stats: {
      experience: string;
      clients: string;
      rating: string;
    };
  };
  language: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
}

const Hero = ({ content, language, onLanguageChange }: HeroProps) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(30, 58, 138, 0.75)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 py-6">
        <div className="container-padding flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Anchor className="w-6 h-6 text-accent" />
            </div>
            <div className="text-white">
              <h2 className="text-xl font-bold">Captain Pro</h2>
              <p className="text-sm text-white/80">{language === 'fr' ? 'Skipper Professionnel' : 'Professional Skipper'}</p>
            </div>
          </div>
          
          <LanguageToggle currentLang={language} onLanguageChange={onLanguageChange} />
        </div>
      </nav>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl float-animation" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Stats Bar */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-8 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20">
              <div className="flex items-center gap-2 text-white">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <span className="text-sm font-semibold">{content.stats.rating}</span>
              </div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="text-white text-sm font-medium">{content.stats.experience}</div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="text-white text-sm font-medium">{content.stats.clients}</div>
              <div className="w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-1 text-white">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Antibes</span>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {content.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-hero">
              {content.cta}
            </button>
            <button className="btn-outline-light">
              <Phone className="w-5 h-5 mr-2" />
              +352 671 191 071
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-background" viewBox="0 0 1200 120" fill="currentColor">
          <path d="M0,60 C400,90 800,30 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;