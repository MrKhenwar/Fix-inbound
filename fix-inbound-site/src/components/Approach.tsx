import React, { useEffect, useRef, useState } from 'react';

const Approach: React.FC = () => {
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
      className={`bg-charcoal py-32 px-6 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <p className={`text-xl md:text-2xl font-light text-ivory leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`} style={{ transitionDelay: '100ms' }}>
            Most clinics don't struggle because of demand.
          </p>
          <p className={`text-xl md:text-2xl font-light text-ivory leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`} style={{ transitionDelay: '200ms' }}>
            They struggle because inbound isn't built to handle it.
          </p>
          <p className={`text-xl md:text-2xl font-light text-ivory leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`} style={{ transitionDelay: '300ms' }}>
            Patients expect fast, consistent responses — across calls, messages, and websites.
          </p>
          <p className={`text-xl md:text-2xl font-light text-ivory leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`} style={{ transitionDelay: '400ms' }}>
            Front desks aren't designed for that volume or consistency anymore.
          </p>
          <p className={`text-xl md:text-2xl font-light text-ivory leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`} style={{ transitionDelay: '500ms' }}>
            As clinics grow busier, the gap widens.
          </p>
          <p className={`text-xl md:text-2xl font-light text-ivory leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`} style={{ transitionDelay: '600ms' }}>
            Missed calls increase. Responses slow down. Booking friction compounds.
          </p>
          <p className={`text-xl md:text-2xl font-light text-ivory leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`} style={{ transitionDelay: '700ms' }}>
            Fixing this later only makes it harder.
          </p>
          <p className={`text-xl md:text-2xl font-semibold text-ivory leading-relaxed mt-8 transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`} style={{ transitionDelay: '900ms' }}>
            Fixing it now prevents silent patient loss from becoming routine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approach;
