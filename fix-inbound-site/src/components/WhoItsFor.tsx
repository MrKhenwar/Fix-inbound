import React, { useEffect, useRef, useState } from 'react';

const WhoItsFor: React.FC = () => {
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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-ivory mb-20">
          Who this is for
        </h2>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h3 className="text-2xl md:text-3xl font-normal text-ivory mb-10">
              This is for you if:
            </h3>
            <div className="space-y-8">
              <div className="border-l-2 border-ivory pl-8">
                <p className="text-lg md:text-xl font-light text-ivory leading-relaxed">
                  You're doing $500k+/year and losing patients to operational gaps
                </p>
              </div>
              <div className="border-l-2 border-ivory pl-8">
                <p className="text-lg md:text-xl font-light text-ivory leading-relaxed">
                  Your team is overwhelmed with inbound admin work
                </p>
              </div>
              <div className="border-l-2 border-ivory pl-8">
                <p className="text-lg md:text-xl font-light text-ivory leading-relaxed">
                  You want a system, not more tools to manage
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-normal text-ivory mb-10">
              This isn't for you if:
            </h3>
            <div className="space-y-8">
              <div className="border-l-2 border-ivory pl-8 opacity-70">
                <p className="text-lg md:text-xl font-light text-ivory leading-relaxed">
                  You're looking for cheap marketing tricks
                </p>
              </div>
              <div className="border-l-2 border-ivory pl-8 opacity-70">
                <p className="text-lg md:text-xl font-light text-ivory leading-relaxed">
                  You want to DIY it with your current staff
                </p>
              </div>
              <div className="border-l-2 border-ivory pl-8 opacity-70">
                <p className="text-lg md:text-xl font-light text-ivory leading-relaxed">
                  You need someone to 'teach' you—we just fix it
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
