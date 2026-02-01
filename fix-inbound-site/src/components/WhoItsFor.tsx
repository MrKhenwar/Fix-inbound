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
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div className={`transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-2xl md:text-3xl font-normal text-ivory mb-10">
              This is a good fit if you:
            </h3>
            <div className="space-y-6">
              <div className={`pl-8 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`} style={{ transitionDelay: '300ms' }}>
                <p className="text-lg md:text-xl font-light text-ivory leading-relaxed">
                  • Run a private clinic or practice
                </p>
              </div>
              <div className={`pl-8 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`} style={{ transitionDelay: '400ms' }}>
                <p className="text-lg md:text-xl font-light text-ivory leading-relaxed">
                  • Care about missed calls and patient experience
                </p>
              </div>
              <div className={`pl-8 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`} style={{ transitionDelay: '500ms' }}>
                <p className="text-lg md:text-xl font-light text-ivory leading-relaxed">
                  • Want inbound to feel calmer and more predictable
                </p>
              </div>
              <div className={`pl-8 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`} style={{ transitionDelay: '600ms' }}>
                <p className="text-lg md:text-xl font-light text-ivory leading-relaxed">
                  • Are open to reviewing what's currently broken
                </p>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-2xl md:text-3xl font-normal text-ivory mb-10">
              This may not be the right fit if you:
            </h3>
            <div className="space-y-6">
              <div className={`pl-8 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
              }`} style={{ transitionDelay: '300ms' }}>
                <p className="text-lg md:text-xl font-light text-ivory leading-relaxed opacity-70">
                  • Are only looking for quick fixes
                </p>
              </div>
              <div className={`pl-8 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
              }`} style={{ transitionDelay: '400ms' }}>
                <p className="text-lg md:text-xl font-light text-ivory leading-relaxed opacity-70">
                  • Want tools without changing processes
                </p>
              </div>
              <div className={`pl-8 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
              }`} style={{ transitionDelay: '500ms' }}>
                <p className="text-lg md:text-xl font-light text-ivory leading-relaxed opacity-70">
                  • Prefer to keep inbound fully manual
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className={`text-xl md:text-2xl font-light text-ivory transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '700ms' }}>
            No pressure either way.
          </p>
          <p className={`text-xl md:text-2xl font-light text-ivory mt-4 transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '850ms' }}>
            Clarity helps both sides.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
