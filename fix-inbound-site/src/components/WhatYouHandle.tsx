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
        <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-20">
          What we handle
        </h2>

        <div className="space-y-8">
          <div className="border-l-2 border-charcoal pl-8">
            <p className="text-xl md:text-2xl font-light text-charcoal leading-relaxed">
              Local SEO so patients find you first
            </p>
          </div>

          <div className="border-l-2 border-charcoal pl-8">
            <p className="text-xl md:text-2xl font-light text-charcoal leading-relaxed">
              AI systems that respond instantly, 24/7
            </p>
          </div>

          <div className="border-l-2 border-charcoal pl-8">
            <p className="text-xl md:text-2xl font-light text-charcoal leading-relaxed">
              Website rebuild focused on appointment conversion
            </p>
          </div>

          <div className="border-l-2 border-charcoal pl-8">
            <p className="text-xl md:text-2xl font-light text-charcoal leading-relaxed">
              One system. One dashboard. Zero patient leakage.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-2xl md:text-3xl font-normal text-charcoal">
            You run the clinic. We handle inbound.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouHandle;
