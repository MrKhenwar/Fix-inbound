import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const clients = [
    'Funds Finder',
    'Feel Good Club',
    'PlanO',
    'Carret',
    'Butterflies',
    'Product Management Cohort',
    'Blend Studio',
    'White Swan',
    'QuickFunds',
    'Ice Tribe',
  ];

  const services = ['Websites', 'Web Apps', 'MVPs'];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Sleek, Powerful and
            <br />
            User Focused
          </h1>

          {/* Service Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {services.map((service, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-primary/10 text-primary font-semibold rounded-full text-lg hover:bg-primary/20 transition-colors duration-200"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Supporting Text */}
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mt-8">
            AI-powered solutions, guided by human expertise, for founders who
            need results yesterday.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="https://calendly.com/creworklabs/30mins"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Book a free discovery call
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Client Marquee */}
          <div className="mt-16 overflow-hidden">
            <p className="text-sm text-gray-500 font-medium mb-6 uppercase tracking-wide">
              Trusted by
            </p>
            <div className="relative">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...clients, ...clients].map((client, index) => (
                  <span
                    key={index}
                    className="mx-8 text-gray-500 font-medium text-lg"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Hero;
