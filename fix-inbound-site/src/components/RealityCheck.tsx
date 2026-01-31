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
    'Patient calls during lunch or after hours—lost forever',
    'Contact forms sit unread for 6+ hours',
    'Staff answer the same questions 40 times a week',
    'Your Google listing shows "usually responds in a few days"',
    'Website visitors leave because booking feels complicated',
    'No one knows which lead source actually drives appointments'
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-ivory border-t border-charcoal/10">
      <div className="container mx-auto max-w-4xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-charcoal mb-16 text-center">
            This sounds familiar
          </h2>

          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`border-l-2 border-charcoal/20 pl-6 py-3 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="text-lg text-charcoal/80 font-light leading-relaxed">
                  {problem}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xl text-charcoal/60 mt-16 text-center font-light leading-relaxed">
            These aren't marketing problems.
            <br />
            They're operational failures happening in real time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealityCheck;
