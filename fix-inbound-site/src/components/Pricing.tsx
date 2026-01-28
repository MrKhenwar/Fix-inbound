import React, { useEffect, useRef, useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingPlan {
  name: string;
  subtitle: string;
  price: string;
  priceLabel?: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  highlighted?: boolean;
}

const Pricing: React.FC = () => {
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

  const plans: PricingPlan[] = [
    {
      name: 'Website',
      subtitle: 'Perfect for launching fast',
      price: '$300',
      priceLabel: 'Fixed price',
      features: [
        'Custom design',
        'Fully responsive',
        'SEO optimized',
        '4-5 day delivery',
        'Unlimited revisions',
      ],
      ctaText: 'Get Started',
      ctaLink: 'https://calendly.com/creworklabs/30mins',
    },
    {
      name: 'MVP',
      subtitle: 'Ship your product idea',
      price: '$1000',
      priceLabel: 'Starting from',
      features: [
        'Market research',
        'Brand identity',
        'UI/UX design',
        'Full development',
        'Launch support',
        'Project management',
      ],
      ctaText: 'Start Building',
      ctaLink: 'https://calendly.com/creworklabs/30mins',
      highlighted: true,
    },
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-28 px-6 bg-dark-bg">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-5">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-500 font-light">
            Choose what works for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-dark-surface/50 backdrop-blur-sm border p-10 rounded-3xl transition-all duration-500 hover:scale-[1.02] ${
                plan.highlighted
                  ? 'border-primary/50 shadow-xl shadow-primary/10'
                  : 'border-gray-800/50 hover:border-primary/30'
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                  Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 font-light">
                  {plan.subtitle}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-white">
                    {plan.price}
                  </span>
                </div>
                {plan.priceLabel && (
                  <p className="text-sm text-gray-500 mt-2">{plan.priceLabel}</p>
                )}
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check
                      size={20}
                      className="text-primary flex-shrink-0"
                    />
                    <span className="text-gray-300 font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full px-6 py-4 font-semibold rounded-xl transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl'
                    : 'bg-dark-card text-white hover:bg-primary border border-gray-800'
                }`}
              >
                {plan.ctaText}
                <ArrowRight size={20} />
              </a>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-gray-600 text-sm">
            All projects include unlimited revisions and dedicated support
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
