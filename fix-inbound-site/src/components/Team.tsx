import React from 'react';
import { Linkedin, User } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  affiliation: string;
  linkedIn: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Vidit raj Khenwar',
      role: 'Tech Partner',
      affiliation: 'Bennett University',
      linkedIn: 'https://www.linkedin.com/in/vidit-raj-khenwar',
    },
    {
      name: 'Ishaan Nakra',
      role: 'Sales and Marketing Head',
      affiliation: 'Bennnett University',
      linkedIn: 'https://www.linkedin.com/in/ishaan-nakra',
    },
  ];

  return (
    <section id="team" className="py-20 px-6 bg-ivory">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Meet the Team
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-ivory p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4">
                  <User size={40} className="text-primary" />
                </div>

                <h3 className="text-lg font-bold text-charcoal mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-charcoal/60 mb-3">{member.role}</p>

                {/* Affiliation Badge */}
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                  {member.affiliation}
                </span>

                {/* LinkedIn Button */}
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-200"
                >
                  <Linkedin size={20} />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
