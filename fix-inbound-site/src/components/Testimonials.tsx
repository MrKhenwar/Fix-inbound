import React from 'react';
import { Twitter } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  platform: string;
  quote: string;
}

const Testimonials: React.FC = () => {
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
    <section id="testimonials" className="py-20 px-6 bg-dark-surface">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            LOVED BY THINKERS
          </h2>
          <p className="text-xl text-gray-500">
            Here's what people are saying about us!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
                <Twitter className="text-primary" size={24} />
              </div>
              <p className="text-gray-300 leading-relaxed">
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
