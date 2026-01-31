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
        <h2 className="text-4xl md:text-5xl font-light text-ivory mb-20">
          How we work
        </h2>

        <div className="space-y-16">
          <div>
            <div className="flex items-baseline gap-6 mb-4">
              <span className="text-6xl md:text-7xl font-light text-ivory opacity-40">
                1
              </span>
              <h3 className="text-2xl md:text-3xl font-normal text-ivory">
                Diagnose
              </h3>
            </div>
            <p className="text-xl md:text-2xl font-light text-ivory leading-relaxed ml-20 md:ml-24">
              Map every inbound touchpoint. Identify exact failure points.
            </p>
          </div>

          <div>
            <div className="flex items-baseline gap-6 mb-4">
              <span className="text-6xl md:text-7xl font-light text-ivory opacity-40">
                2
              </span>
              <h3 className="text-2xl md:text-3xl font-normal text-ivory">
                Rebuild
              </h3>
            </div>
            <p className="text-xl md:text-2xl font-light text-ivory leading-relaxed ml-20 md:ml-24">
              AI chat & voice for 24/7 response. Local SEO for visibility. Website purely for booking.
            </p>
          </div>

          <div>
            <div className="flex items-baseline gap-6 mb-4">
              <span className="text-6xl md:text-7xl font-light text-ivory opacity-40">
                3
              </span>
              <h3 className="text-2xl md:text-3xl font-normal text-ivory">
                Route to Booking
              </h3>
            </div>
            <p className="text-xl md:text-2xl font-light text-ivory leading-relaxed ml-20 md:ml-24">
              Every interaction ends in an appointment or clear next step.
            </p>
          </div>
        </div>

        <div className="mt-20 ml-20 md:ml-24">
          <p className="text-xl md:text-2xl font-light text-ivory opacity-80">
            No features. Just outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approach;
