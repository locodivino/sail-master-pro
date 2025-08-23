import { Compass, Home, Waves, Users, Ship, Navigation } from 'lucide-react';

interface ServicesProps {
  content: {
    title: string;
    subtitle: string;
    services: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
}

const serviceIcons = {
  compass: Compass,
  home: Home,
  waves: Waves,
  users: Users,
  ship: Ship,
  navigation: Navigation,
};

const Services = ({ content }: ServicesProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.map((service, index) => {
            const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons] || Compass;
            
            return (
              <div key={index} className="card-service group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-ocean-gradient rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="w-full h-1 bg-gradient-to-r from-secondary to-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;