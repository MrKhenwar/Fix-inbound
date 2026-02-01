import React, { useEffect, useRef, useState } from 'react';

const FinalCTA: React.FC = () => {
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
      className={`bg-ivory py-32 px-6 transition-all duration-1500 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className={`text-2xl md:text-3xl font-light text-charcoal mb-12 leading-relaxed transition-all duration-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
        }`} style={{ transitionDelay: '200ms' }}>
          Start with a clear inbound audit before changing anything.
        </p>

        <a
          href="https://calendly.com/viditkhenwar/30min"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-ivory font-medium text-base hover:bg-charcoal/90 hover:scale-105 transition-all duration-300 border border-charcoal shadow-lg hover:shadow-2xl ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          Request a Free Inbound Audit
        </a>
        <p className={`text-sm text-charcoal/50 mt-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>15–20 minute call</p>
      </div>
    </section>
  );
};

export default FinalCTA;
