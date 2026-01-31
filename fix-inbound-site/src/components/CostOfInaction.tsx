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
      className={`bg-ivory py-32 px-6 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-20">
          What inaction costs
        </h2>

        <div className="space-y-12">
          <div className="border-l-2 border-charcoal pl-8">
            <p className="text-xl md:text-2xl font-light text-charcoal leading-relaxed">
              10 missed calls per week = 40 lost patients/month at $300 average = $144,000/year
            </p>
          </div>

          <div className="border-l-2 border-charcoal pl-8">
            <p className="text-xl md:text-2xl font-light text-charcoal leading-relaxed">
              Slow response time drops conversion 50%. That's another $70,000.
            </p>
          </div>

          <div className="border-l-2 border-charcoal pl-8">
            <p className="text-xl md:text-2xl font-light text-charcoal leading-relaxed">
              Poor website UX costs you 3 of every 10 visitors who were ready to book.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-2xl md:text-3xl font-normal text-charcoal">
            These aren't projections. This is happening now.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CostOfInaction;
