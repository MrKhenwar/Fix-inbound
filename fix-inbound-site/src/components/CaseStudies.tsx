import React, { useEffect, useState, useRef } from 'react';
import { ExternalLink, ArrowRight, Briefcase } from 'lucide-react';

interface CaseStudy {
  title: string;
  description: string;
  tags: string[];
  metric?: string;
  projectLink: string;
  liveLink?: string;
}

const CaseStudies: React.FC = () => {
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

  const caseStudies: CaseStudy[] = [
    {
      title: 'PlanO - Activity Discovery & Booking Marketplace',
      description:
        'A personalized, map-first marketplace that helps parents instantly discover and book the best activities for their kids.',
      tags: ['MVP Development', 'Web App', 'User Experience Optimisation'],
      projectLink: 'https://www.creworklabs.com/case-studies/plano',
      liveLink: 'https://www.creworklabs.com/#',
    },
    {
      title: 'Fintech SAAS: Simplifying fundraising for startups',
      description:
        'How we helped QuickFunds simplify fundraising with automated outreach, data sourcing, and campaign management.',
      tags: ['Market Research', 'Product Design', 'End to End Development'],
      metric: '60% Faster Fundraising',
      projectLink:
        'https://www.creworklabs.com/case-studies/fintech-saas-simplifying-fundraising-for-startups',
    },
    {
      title: 'Instant Business Valuation Web Application',
      description:
        "How we built a quick, data-driven business valuations tool for FundsFinders.",
      tags: [
        'Product Design',
        'User Experience Optimization',
        'Web App Development',
      ],
      metric: '47% increase in leads generation',
      projectLink:
        'https://www.creworklabs.com/case-studies/instant-business-valuation-web-application',
    },
    {
      title:
        'AI-powered ATS streamlining hiring for enhanced efficiency and ease.',
      description:
        'A powerful AI tool that streamlines the hiring process by automatically screening resumes to match company-specific requirements.',
      tags: [
        'Workflow Optimization',
        'User Interface Design',
        'Applicant Tracking System (ATS)',
      ],
      projectLink:
        'https://www.creworklabs.com/case-studies/ai-powered-ats-streamlining-hiring-for-enhanced-efficiency-and-ease',
    },
    {
      title: 'Custom Learning Management System',
      description:
        'A personalized CMS solution for an edtech platform designed to increase engagement by delivering tailored learning experiences.',
      tags: ['Custom LMS Development', 'Product Design', 'User Experience Research'],
      metric: '65% increase in Engagement Rate',
      projectLink:
        'https://www.creworklabs.com/case-studies/custom-learning-management-system',
    },
    {
      title: 'AI Pitch Deck Reviewer',
      description:
        'An AI-driven tool that provides insights to refine your pitch deck, geared towards founders looking to improve investor appeal, maximize their fundraising potential, and stand out.',
      tags: [
        'Pitch Deck Enhancement',
        'AI Driven Feedback',
        'Custom AI tool development',
      ],
      projectLink: 'https://www.creworklabs.com/case-studies/ai-pitch-deck-review',
      liveLink: 'https://pitch-deck-ai-beta.vercel.app/',
    },
  ];

  return (
    <section ref={sectionRef} id="case-studies" className="py-20 px-6 bg-dark-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-45'
              }`}
            >
              <Briefcase
                size={48}
                className="text-primary animate-bounce"
                style={{ animationDuration: '2s' }}
              />
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold text-white transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              Case Studies
            </h2>
          </div>
          <p
            className={`text-xl text-gray-500 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Transforming Ideas into Impact
          </p>
          <p
            className={`text-lg text-gray-600 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Discover the creative process that drives our success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-dark-surface p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {study.title}
              </h3>
              <p className="text-gray-500 mb-4 leading-relaxed">
                {study.description}
              </p>

              {study.metric && (
                <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-lg mb-4">
                  {study.metric}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {study.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-dark-card text-gray-300 text-sm rounded-full border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={study.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200"
                >
                  View Project
                  <ArrowRight size={16} />
                </a>
                {study.liveLink && (
                  <a
                    href={study.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors duration-200"
                  >
                    View Live Link
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.creworklabs.com/case-studies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:underline"
          >
            View All Case Studies
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
