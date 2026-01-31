import React, { useEffect, useState, useRef } from 'react';
import { Twitter, MessageSquareQuote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  platform: string;
  quote: string;
}

const Testimonials: React.FC = () => {
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

  const testimonials: Testimonial[] = [
    {
      name: 'Anupama Bhat',
      role: 'Founder @Social Butterfly',
      platform: 'Twitter',
      quote:
        'The experience has been extremely good. Their service exceeded all expectations, delivering outstanding results. Would recommend 10/10.',
    },
    {
      name: 'Omar Alkhairy',
      role: 'Co-Founder @TravayGroup',
      platform: 'Twitter',
      quote:
        'I found their services to be extremely efficient and responsive. They consistently delivered prompt solutions that exceeded my expectations.',
    },
    {
      name: 'Om Rafols Cots',
      role: 'Founder @FundsFinder',
      platform: 'Twitter',
      quote:
        'Crework Labs was the best experience we ever had with an agency. They were fast with replies and deliveries, always ensuring that the final result was as expected. I will work with them in the future and totally recommend them.',
    },
    {
      name: 'Abid Kamal',
      role: 'Partner @White Swan Advisors',
      platform: 'Twitter',
      quote:
        'Extremely professional, quick support, exceptional adherence to deadlines, and generally a breeze to work with.',
    },
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 px-6 bg-ivory">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-45'
              }`}
            >
              <MessageSquareQuote
                size={48}
                className="text-primary animate-pulse"
              />
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              LOVED BY THINKERS
            </h2>
          </div>
          <p
            className={`text-base sm:text-lg md:text-xl text-charcoal/60 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Here's what people are saying about us!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-ivory p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg text-charcoal">
                    {testimonial.name}
                  </h3>
                  <p className="text-charcoal/60 text-sm">{testimonial.role}</p>
                </div>
                <Twitter className="text-primary" size={24} />
              </div>
              <p className="text-charcoal/70 leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
