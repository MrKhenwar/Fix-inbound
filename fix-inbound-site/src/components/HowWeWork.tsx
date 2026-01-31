import React from 'react';
import { Phone, Search, Cog, HeartHandshake } from 'lucide-react';

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HowWeWork: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      icon: <Phone size={40} className="text-primary" />,
      title: 'Discovery Call',
      description: 'Initial discovery call to gather requirements.',
    },
    {
      icon: <Search size={40} className="text-primary" />,
      title: 'Research & Strategy',
      description:
        'Competitor Analysis and Research to develop a tailored strategy.',
    },
    {
      icon: <Cog size={40} className="text-primary" />,
      title: 'Implementation',
      description: 'Implementation and Iterations.',
    },
    {
      icon: <HeartHandshake size={40} className="text-primary" />,
      title: 'Post-Launch Support',
      description: 'Post-launch support to ensure smooth operations.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-primary">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-4">
            How We Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-ivory/80">
            At FixInbound, we turn your ideas into reality through our
            streamlined process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-ivory-dark p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-charcoal text-ivory rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                {index + 1}
              </div>

              <div className="flex justify-center mb-6">{step.icon}</div>

              <h3 className="text-xl font-bold text-charcoal mb-3">
                {step.title}
              </h3>

              <p className="text-charcoal/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
