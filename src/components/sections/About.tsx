import { Award, MapPin, Clock, Users } from 'lucide-react';

interface AboutProps {
  content: {
    title: string;
    description: string;
    highlights: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    cta: string;
  };
}

const highlightIcons = {
  award: Award,
  mapPin: MapPin,
  clock: Clock,
  users: Users,
};

const About = ({ content }: AboutProps) => {
  return (
    <section className="section-padding bg-nautical-light-blue/30">
      <div className="container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              {content.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {content.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {content.highlights.map((highlight, index) => {
                const IconComponent = highlightIcons[highlight.icon as keyof typeof highlightIcons] || Award;
                
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-ocean-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="btn-hero">
              {content.cta}
            </button>
          </div>

          {/* Stats/Visual */}
          <div className="relative">
            <div className="card-nautical">
              <div className="text-center">
                <div className="w-24 h-24 bg-ocean-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-ocean-gradient mb-2">30+</div>
                    <div className="text-sm text-muted-foreground">Années d'expérience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-ocean-gradient mb-2">150+</div>
                    <div className="text-sm text-muted-foreground">Clients satisfaits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-ocean-gradient mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Missions réalisées</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-ocean-gradient mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Disponibilité</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;