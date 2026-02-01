import React, { useEffect, useRef, useState } from 'react';

const WhyThisWorks: React.FC = () => {
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
        <div className="space-y-8">
          <p className={`text-xl md:text-2xl font-light text-charcoal leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`} style={{ transitionDelay: '100ms' }}>
            Everything we design is built around how clinics actually operate.
          </p>
          <p className={`text-xl md:text-2xl font-light text-charcoal leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`} style={{ transitionDelay: '200ms' }}>
            Not ideal workflows.
          </p>
          <p className={`text-xl md:text-2xl font-light text-charcoal leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`} style={{ transitionDelay: '300ms' }}>
            Not perfect staffing.
          </p>
          <p className={`text-xl md:text-2xl font-light text-charcoal leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`} style={{ transitionDelay: '400ms' }}>
            Real schedules. Real interruptions. Real patients.
          </p>
          <p className={`text-xl md:text-2xl font-light text-charcoal leading-relaxed mt-12 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '550ms' }}>
            Systems are designed to support your front desk — not replace it.
          </p>
          <p className={`text-xl md:text-2xl font-light text-charcoal leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '700ms' }}>
            To stay consistent without adding pressure.
          </p>
          <p className={`text-xl md:text-2xl font-light text-charcoal leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '850ms' }}>
            And to work quietly in the background once set up.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyThisWorks;
