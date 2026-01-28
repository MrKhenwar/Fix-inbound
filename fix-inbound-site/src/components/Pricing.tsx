import React from 'react';
import { Check, Zap } from 'lucide-react';

interface PricingPlan {
  name: string;
  subtitle: string;
  price: string;
  priceLabel?: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: 'Website Design & Development',
      subtitle: 'For founders or teams who want to launch a perfect website in 1 week.',
      price: '$300',
      priceLabel: 'per project',
      features: [
        'Launch a high-conversion website in just 1 week',
        'Custom design for all website pages',
        'Regular communication and progress updates',
        'Turnaround time: 4-5 business days',
        'Responsive design for mobile and desktop',
      ],
      ctaText: 'Get your website',
      ctaLink: 'https://calendly.com/creworklabs/30mins',
    },
    {
      name: 'MVP Development',
      subtitle: 'For founders or teams looking to build new products and initiatives.',
      price: '$1000',
      priceLabel: 'Starts from',
      features: [
        'Transform your ideas into functional products',
        'Market research and competitor analysis',
        'Custom brand identity design',
        'UI/UX design for website and the product',
        'End-to-end development (web or mobile app)',
        'Project management and regular progress updates',
      ],
      ctaText: 'Get your MVP',
      ctaLink: 'https://calendly.com/creworklabs/30mins',
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-dark-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            Simple plans to get you started fast <Zap className="text-accent" size={40} />
          </h2>
          <p className="text-xl text-gray-500">
            Ready to turn your idea into a product? Choose a plan that's right for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-dark-surface p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {plan.name}
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                {plan.subtitle}
              </p>

              <div className="mb-8">
                {plan.priceLabel && (
                  <p className="text-sm text-gray-500 mb-1">{plan.priceLabel}</p>
                )}
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">
                    {plan.price}
                  </span>
                  {!plan.priceLabel?.includes('Starts') && (
                    <span className="text-gray-500">/ project</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
