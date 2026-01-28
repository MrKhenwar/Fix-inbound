import React from 'react';
import { Palette, Code, Rocket, Check } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Palette size={40} className="text-primary" />,
      title: 'Design',
      description:
        'We create visually stunning and user-friendly designs that leave a lasting impression.',
      features: [
        'UI/UX Design',
        'Landing Page and Website Design',
        'Brand Identity Design',
      ],
    },
    {
      icon: <Code size={40} className="text-primary" />,
      title: 'Development',
      description:
        'With expertise in various programming languages and frameworks, we build robust and scalable web and mobile applications.',
      features: [
        'Framer Development',
        'Web Development',
        'Mobile App Development',
      ],
    },
    {
      icon: <Rocket size={40} className="text-primary" />,
      title: 'MVP Development',
      description:
        'Our MVP development services help you launch a minimum viable product that captures early-stage feedback and validates your concept.',
      features: [
        'Market Research',
        'Competitor Analysis',
        'Web and App Development',
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-dark-surface">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-500">
            From concept to creation, we're your trusted digital partner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-dark-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
