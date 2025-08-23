import { Anchor, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  language: 'fr' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerContent = {
    fr: {
      rights: "Tous droits réservés",
      services: "Services",
      contact: "Contact",
      navigation: "Navigation personnalisée",
      residence: "Capitaine à résidence",
      delivery: "Convoyage",
      teambuilding: "Team Building"
    },
    en: {
      rights: "All rights reserved",
      services: "Services", 
      contact: "Contact",
      navigation: "Personalized Navigation",
      residence: "Resident Captain",
      delivery: "Boat Delivery",
      teambuilding: "Team Building"
    }
  };

  const content = footerContent[language];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                <Anchor className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Captain Pro</h3>
                <p className="text-sm text-primary-foreground/80">
                  {language === 'fr' ? 'Skipper Professionnel' : 'Professional Skipper'}
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              {language === 'fr' 
                ? "30 ans d'expérience au service de votre passion nautique en Méditerranée."
                : "30 years of experience serving your nautical passion in the Mediterranean."
              }
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{content.services}</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="hover:text-accent transition-colors duration-300 cursor-pointer">
                {content.navigation}
              </li>
              <li className="hover:text-accent transition-colors duration-300 cursor-pointer">
                {content.residence}
              </li>
              <li className="hover:text-accent transition-colors duration-300 cursor-pointer">
                {content.delivery}
              </li>
              <li className="hover:text-accent transition-colors duration-300 cursor-pointer">
                {content.teambuilding}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{content.contact}</h4>
            <div className="space-y-4">
              <a 
                href="tel:+352671191071"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                +352 671 191 071
              </a>
              <a 
                href="mailto:contact@captain-pro.fr"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                contact@captain-pro.fr
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>3 avenue du 11 Novembre<br />06600 Antibes</span>
              </div>
            </div>
          </div>

          {/* Zone */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {language === 'fr' ? 'Zone d\'intervention' : 'Operating Area'}
            </h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Côte d'Azur</li>
              <li>Monaco</li>
              <li>Marseille</li>
              <li>
                {language === 'fr' ? 'Méditerranée française' : 'French Mediterranean'}
              </li>
              <li>
                {language === 'fr' ? 'International' : 'International'}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>© {currentYear} Captain Pro. {content.rights}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;