import React, { useEffect, useRef, useState } from 'react';

const RealityCheck: React.FC = () => {
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

  const problems = [
    {
      title: 'Missed Calls',
      description: 'Peak hours. Busy desks. Patients move on.'
    },
    {
      title: 'Delayed Responses',
      description: 'Messages answered late — or not at all.'
    },
    {
      title: 'Low Conversion',
      description: 'Website traffic that doesn\'t turn into bookings.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-ivory border-t border-charcoal/10">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`border border-charcoal/20 p-8 transition-all duration-1000 ease-out hover:shadow-xl hover:border-charcoal/40 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className={`text-xl font-semibold text-charcoal mb-3 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`} style={{ transitionDelay: `${index * 200 + 100}ms` }}>
                  {problem.title}
                </h3>
                <p className={`text-base text-charcoal/70 font-light leading-relaxed transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`} style={{ transitionDelay: `${index * 200 + 200}ms` }}>
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealityCheck;
