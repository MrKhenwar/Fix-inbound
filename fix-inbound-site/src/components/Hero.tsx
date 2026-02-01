import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 bg-ivory">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Main Heading */}
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight transition-all duration-1200 ease-out max-w-3xl mx-auto ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            We Fix Your Clinic's Inbound.
          </h1>

          {/* Supporting Text */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed transition-all duration-1200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            So Every Call, Click, and Message Turns Into Appointments.
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-1200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <a
              href="https://calendly.com/viditkhenwar/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-ivory font-medium text-base hover:bg-charcoal/90 hover:scale-105 transition-all duration-300 border border-charcoal shadow-lg hover:shadow-2xl"
            >
              Request a Free Inbound Audit
            </a>
            <p className={`text-sm text-charcoal/50 mt-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>15–20 minute call</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
