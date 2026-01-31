import React, { useEffect, useRef, useState } from 'react';
import { Palette, Code, Rocket, Sparkles } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  deliverables: string[];
}

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services: Service[] = [
    {
      icon: <Palette size={32} className="text-primary" />,
      title: 'Design',
      description: 'Stunning, conversion-optimized interfaces that engage your audience',
      deliverables: ['UI/UX Design', 'Landing Pages', 'Brand Identity'],
    },
    {
      icon: <Code size={32} className="text-primary" />,
      title: 'Development',
      description: 'Lightning-fast, scalable applications built with modern tech',
      deliverables: ['Web Development', 'Mobile Apps', 'Framer Sites'],
    },
    {
      icon: <Rocket size={32} className="text-primary" />,
      title: 'MVP Launch',
      description: 'Validate your idea and ship to market in record time',
      deliverables: ['Market Research', 'Full Development', 'Launch Support'],
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-28 px-6 bg-ivory">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            >
              <Sparkles
                size={52}
                className="text-primary animate-spin"
                style={{ animationDuration: '3s' }}
              />
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              What We Do
            </h2>
          </div>
          <p
            className={`text-base sm:text-lg md:text-xl text-charcoal/60 font-light max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Complete digital solutions tailored for ambitious entrepreneurs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-ivory-dark/50 backdrop-blur-sm border border-charcoal/10 p-8 rounded-2xl hover:border-primary/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal/60 mb-8 leading-relaxed font-light">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                    <span className="text-sm text-charcoal/50">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
