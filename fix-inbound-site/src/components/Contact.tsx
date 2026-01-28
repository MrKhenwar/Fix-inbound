import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-28 px-6 bg-dark-bg">
      <div className="container mx-auto max-w-4xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-5">
            Let's Talk
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>

        {isSubmitted ? (
          <div
            className={`bg-dark-surface/50 backdrop-blur-sm border border-primary/30 p-16 rounded-3xl text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <CheckCircle size={64} className="text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-3">
              Thanks for reaching out!
            </h3>
            <p className="text-gray-400 text-lg font-light">
              We'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {/* CTA Section */}
            <div
              className={`flex flex-col justify-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to start?
              </h3>
              <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
                Skip the form and book a call directly. We'll discuss your project and provide a custom quote.
              </p>
              <a
                href="https://calendly.com/creworklabs/30mins"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl w-fit"
              >
                Book a Call
                <ArrowRight size={20} />
              </a>
              <p className="text-sm text-gray-600 mt-4">
                30 min • Free • No commitment
              </p>
            </div>

            {/* Form Section */}
            <form
              onSubmit={handleSubmit}
              className={`bg-dark-surface/50 backdrop-blur-sm border border-gray-800/50 p-8 rounded-3xl transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-dark-bg border border-gray-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-white placeholder-gray-600"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-dark-bg border border-gray-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-white placeholder-gray-600"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-dark-bg border border-gray-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none text-white placeholder-gray-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-dark-card text-white font-semibold rounded-xl hover:bg-primary border border-gray-800 hover:border-primary transition-all duration-300"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
