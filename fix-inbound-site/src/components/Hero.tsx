import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const clients = [
    'Zyrax.fit',
    'Product Management Cohort',
    'Zylo.fit',
    'Vidyahive.com',
    'Hyve',
    'Consulto',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Main Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Build Products
            <br />
            <span className="text-primary">That Convert</span>
          </h1>

          {/* Supporting Text */}
          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto font-light transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Launch your website or MVP in days, not months.
            <br className="hidden md:block" />
            Built for founders who need results fast.
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <a
              href="https://calendly.com/viditkhenwar/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-semibold text-lg rounded-xl hover:bg-primary-dark transform hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-primary/20 hover:shadow-primary/30"
            >
              Start Your Project
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-gray-500 mt-4">Free 30-min discovery call • No commitment</p>
          </div>

          {/* Client Marquee */}
          <div
            className={`mt-20 transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <p className="text-xs text-gray-600 font-medium mb-8 uppercase tracking-widest">
              Trusted by 10+ brands
            </p>
            <div className="relative overflow-hidden py-4">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...clients, ...clients].map((client, index) => (
                  <span
                    key={index}
                    className="mx-10 text-gray-600 font-medium text-base hover:text-gray-400 transition-colors"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 35s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Hero;
