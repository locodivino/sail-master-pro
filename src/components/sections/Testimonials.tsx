import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

interface TestimonialsProps {
  content: {
    title: string;
    subtitle: string;
    testimonials: Array<{
      name: string;
      role: string;
      content: string;
      rating: number;
      company?: string;
    }>;
  };
}

const Testimonials = ({ content }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

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

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="card-nautical text-center mb-8">
            <Quote className="w-12 h-12 text-accent mx-auto mb-6" />
            
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < content.testimonials[activeIndex].rating
                      ? 'text-accent fill-accent'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            <blockquote className="text-lg md:text-xl text-muted-foreground mb-8 italic leading-relaxed">
              "{content.testimonials[activeIndex].content}"
            </blockquote>

            <div>
              <h4 className="text-xl font-bold text-primary mb-2">
                {content.testimonials[activeIndex].name}
              </h4>
              <p className="text-muted-foreground">
                {content.testimonials[activeIndex].role}
                {content.testimonials[activeIndex].company && 
                  ` • ${content.testimonials[activeIndex].company}`
                }
              </p>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center gap-3">
            {content.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-secondary scale-125'
                    : 'bg-gray-300 hover:bg-secondary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;