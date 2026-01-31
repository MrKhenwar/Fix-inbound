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
        <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-20">
          Why this works for clinics
        </h2>

        <div className="space-y-12">
          <div className="border-l-2 border-charcoal pl-8">
            <p className="text-xl md:text-2xl font-light text-charcoal leading-relaxed">
              Built specifically for how patients actually book appointments
            </p>
          </div>

          <div className="border-l-2 border-charcoal pl-8">
            <p className="text-xl md:text-2xl font-light text-charcoal leading-relaxed">
              Handles the operational reality of front desk workload
            </p>
          </div>

          <div className="border-l-2 border-charcoal pl-8">
            <p className="text-xl md:text-2xl font-light text-charcoal leading-relaxed">
              Designed around insurance, scheduling, and compliance constraints
            </p>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-2xl md:text-3xl font-normal text-charcoal">
            This isn't adapted from SaaS or e-commerce. It's purpose-built.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyThisWorks;
