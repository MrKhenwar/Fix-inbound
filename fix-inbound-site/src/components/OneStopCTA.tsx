import React from 'react';
import { ArrowRight } from 'lucide-react';

const OneStopCTA: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          One stop solution for all your design and tech needs
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-10">
          Have an idea you want to build? Reach out to us now!
        </p>
        <a
          href="https://calendly.com/creworklabs/30mins"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Book a free consultation call
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default OneStopCTA;
