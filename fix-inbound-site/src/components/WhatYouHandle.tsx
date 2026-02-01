import React, { useEffect, useRef, useState } from 'react';

const WhatYouHandle: React.FC = () => {
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

  return (
    <section
      ref={sectionRef}
      className={`bg-ivory py-32 px-6 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <p className={`text-2xl md:text-3xl font-light text-charcoal mb-16 leading-relaxed transition-all duration-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '100ms' }}>
          How we fix your entire inbound
        </p>

        <div className="space-y-12">
          <p className={`text-xl md:text-2xl font-light text-charcoal leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`} style={{ transitionDelay: '200ms' }}>
            We take ownership of the full patient entry point — from discovery to booking — and rebuild it as one connected system.
          </p>

          <div className="space-y-8">
            <div className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '300ms' }}>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Local visibility</h3>
              <p className="text-lg text-charcoal/70 font-light leading-relaxed">
                So patients find your clinic when they're actively searching.
              </p>
            </div>

            <div className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '450ms' }}>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Calls and messages</h3>
              <p className="text-lg text-charcoal/70 font-light leading-relaxed">
                Handled consistently, even when staff is busy or unavailable.
              </p>
            </div>

            <div className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '600ms' }}>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Website and booking flow</h3>
              <p className="text-lg text-charcoal/70 font-light leading-relaxed">
                Designed to guide patients toward one clear outcome: an appointment.
              </p>
            </div>
          </div>

          <div className="mt-16 space-y-3">
            <p className={`text-lg text-charcoal font-light transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`} style={{ transitionDelay: '750ms' }}>
              No disconnected tools.
            </p>
            <p className={`text-lg text-charcoal font-light transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`} style={{ transitionDelay: '850ms' }}>
              No partial fixes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouHandle;
