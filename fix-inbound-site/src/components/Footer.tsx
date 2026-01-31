import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-charcoal text-ivory py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">FixInbound</h3>
            <p className="text-ivory/60 leading-relaxed">
              A digital product studio dedicated to transforming ideas into experiences that connect, engage, and convert.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-ivory/60 hover:text-ivory transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-6">

            </div>
            <div className="text-ivory/60">
              <p className="mb-2">Contact us at</p>
              <a
                href="mailto:evan@fixInbound.com"
                className="inline-flex items-center gap-2 text-ivory hover:text-primary transition-colors duration-200"
              >
                <Mail size={18} />
                evan@fixInbound.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-ivory/20 pt-8 text-center text-ivory/60">
          <p>
            Copyright &copy; 2025 FixInbound. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
