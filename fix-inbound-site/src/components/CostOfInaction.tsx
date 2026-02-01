import React, { useEffect, useRef, useState } from 'react';

const CostOfInaction: React.FC = () => {
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
      className={`bg-charcoal py-32 px-6 transition-all duration-1500 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className={`text-2xl md:text-3xl font-light text-ivory leading-relaxed transition-all duration-1500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
        }`} style={{ transitionDelay: '300ms' }}>
          Every unanswered interaction quietly becomes a lost patient.
        </p>
      </div>
    </section>
  );
};

export default CostOfInaction;
