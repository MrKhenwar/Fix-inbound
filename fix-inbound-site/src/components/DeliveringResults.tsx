import React from 'react';
import { ArrowRight } from 'lucide-react';

const DeliveringResults: React.FC = () => {
  const industries = ['Education', 'E-Commerce', 'Fintech', 'Healthcare', 'SaaS'];
  const brands = [
    'North Star Digital',
    'Feel Good Club',
    'Butterflies',
    'fundsfinder',
    'travaygroup',
  ];

  const metrics = [
    { value: '20+', label: 'Projects Built' },
    { value: '10+', label: 'Clients' },
    { value: '5+', label: 'Industries' },
  ];

  return (
    <section className="py-20 px-6 bg-primary">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-8">
            Delivering Results That Drive Growth Across Industries
          </h2>

          {/* Industry Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-ivory-dark text-charcoal font-medium rounded-full hover:bg-ivory hover:text-primary transition-colors duration-200"
              >
                {industry}
              </span>
            ))}
          </div>

          {/* Trusted by Brands */}
          <div className="mb-12">
            <p className="text-ivory/80 font-medium mb-4">Trusted by brands like</p>
            <div className="flex flex-wrap justify-center gap-6">
              {brands.map((brand, index) => (
                <span
                  key={index}
                  className="text-ivory/70 font-medium text-lg hover:text-ivory transition-colors duration-200"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-ivory/5 to-ivory/10 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-4xl sm:text-5xl font-bold text-ivory mb-2">
                {metric.value}
              </h3>
              <p className="text-ivory/80 font-medium text-lg">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://calendly.com/creworklabs/30mins"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-ivory font-semibold rounded-lg hover:bg-charcoal/90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Book a free discovery call
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeliveringResults;
