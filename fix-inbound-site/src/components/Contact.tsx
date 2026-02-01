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
    <section ref={sectionRef} id="contact" className="py-28 px-6 bg-ivory">
      <div className="container mx-auto max-w-4xl">
        <div
          className={`text-center mb-16 transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-5 transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`} style={{ transitionDelay: '100ms' }}>
            A Clear Diagnosis of Your Current Inbound Setup
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-charcoal/60 font-light max-w-2xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            This call is used to understand how your clinic handles inbound today — and where it breaks under real conditions.
          </p>
        </div>

        {isSubmitted ? (
          <div
            className={`bg-ivory-dark/50 backdrop-blur-sm border border-primary/30 p-16 rounded-3xl text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <CheckCircle size={64} className="text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-charcoal mb-3">
              Thanks for reaching out!
            </h3>
            <p className="text-charcoal/60 text-lg font-light">
              We'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {/* CTA Section */}
            <div
              className={`flex flex-col justify-center transition-all duration-1200 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className={`text-2xl font-light text-charcoal mb-6 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`} style={{ transitionDelay: '500ms' }}>
                During the audit, we look at:
              </h3>
              <ul className="space-y-4 mb-8">
                <li className={`text-charcoal/70 text-lg font-light leading-relaxed flex items-start gap-3 transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`} style={{ transitionDelay: '600ms' }}>
                  <span className="text-charcoal mt-1">•</span>
                  <span>How calls and messages are currently handled</span>
                </li>
                <li className={`text-charcoal/70 text-lg font-light leading-relaxed flex items-start gap-3 transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`} style={{ transitionDelay: '700ms' }}>
                  <span className="text-charcoal mt-1">•</span>
                  <span>Where patient interest drops before booking</span>
                </li>
                <li className={`text-charcoal/70 text-lg font-light leading-relaxed flex items-start gap-3 transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`} style={{ transitionDelay: '800ms' }}>
                  <span className="text-charcoal mt-1">•</span>
                  <span>How your website and visibility support (or block) appointments</span>
                </li>
              </ul>
              <p className={`text-charcoal/60 text-base mb-8 font-light leading-relaxed transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`} style={{ transitionDelay: '900ms' }}>
                There are no promises made on this call.<br/>
                No pitches. No pressure.<br/><br/>
                If we see clear gaps, we'll explain them.<br/>
                If it makes sense to fix them together, we'll tell you how.
              </p>
              <a
                href="https://calendly.com/viditkhenwar/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-ivory font-medium hover:bg-charcoal/90 hover:scale-105 transition-all duration-300 w-fit border border-charcoal shadow-lg hover:shadow-2xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                Request a Free Inbound Audit
                <ArrowRight size={20} />
              </a>
              <p className={`text-sm text-charcoal/40 mt-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`} style={{ transitionDelay: '1100ms' }}>
                15–20 minute call
              </p>
            </div>

            {/* Form Section */}
            <form
              onSubmit={handleSubmit}
              className={`bg-ivory-dark/50 backdrop-blur-sm border border-charcoal/10 p-8 rounded-3xl transition-all duration-1000 ${
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
                    className="w-full px-5 py-4 bg-ivory border border-charcoal/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-charcoal placeholder-charcoal/40"
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
                    className="w-full px-5 py-4 bg-ivory border border-charcoal/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-charcoal placeholder-charcoal/40"
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
                    className="w-full px-5 py-4 bg-ivory border border-charcoal/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none text-charcoal placeholder-charcoal/40"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-ivory font-semibold rounded-xl hover:bg-primary-dark border border-primary hover:border-primary-dark transition-all duration-300"
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
