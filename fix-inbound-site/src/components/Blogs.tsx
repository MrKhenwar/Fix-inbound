import React from 'react';
import { BookOpen } from 'lucide-react';

const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="py-20 px-6 bg-ivory">
      <div className="container mx-auto max-w-7xl text-center">
        <div className="max-w-2xl mx-auto">
          <BookOpen size={64} className="text-primary mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Blogs Coming Soon
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-charcoal/60">
            We're working on bringing you insights, tips, and stories from our
            journey. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
