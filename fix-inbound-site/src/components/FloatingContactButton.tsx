import React, { useState } from 'react';
import { Mail, Phone, X } from 'lucide-react';

const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: <Mail size={20} />,
      label: 'Email Us',
      action: () => window.location.href = 'mailto:viditkhenwar@gmail.com',
      color: 'bg-black hover:bg-gray-800'
    },
    {
      icon: <Phone size={20} />,
      label: 'Call Us',
      action: () => window.location.href = 'tel:+918810107282',
      color: 'bg-black hover:bg-gray-800'
    }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Contact Options */}
      {isOpen && (
        <div className="mb-4 space-y-3 animate-fade-in">
          {contactOptions.map((option, index) => (
            <button
              key={index}
              onClick={option.action}
              className={`flex items-center gap-3 px-5 py-3 ${option.color} text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl whitespace-nowrap`}
              style={{
                animation: `slideUp 0.3s ease-out ${index * 0.1}s both`
              }}
            >
              {option.icon}
              <span className="font-medium text-sm">{option.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-16 h-16 bg-primary hover:bg-primary-dark rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center overflow-hidden"
        aria-label="Contact us"
      >
        {isOpen ? (
          <X size={28} className="text-ivory transition-transform duration-300" />
        ) : (
          <img
            src="/favicon-32x32.png"
            alt="Contact"
            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
          />
        )}

        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-20 animate-ping"></div>
      </button>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FloatingContactButton;
