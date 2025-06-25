import { useState, useEffect } from 'react';
import { skillsData, mlExpertise, aiIntegrationSkills } from '@/lib/skills-data';

export default function SkillsSection() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    python: false,
    r: false
  });
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));

    // Animate skill bars when section opens
    if (!expandedSections[section]) {
      setTimeout(() => {
        setAnimatedSkills(prev => {
          const newSet = new Set(prev);
          newSet.add(section);
          return newSet;
        });
      }, 100);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute('data-section');
          if (section && expandedSections[section]) {
            setAnimatedSkills(prev => {
              const newSet = new Set(prev);
              newSet.add(section);
              return newSet;
            });
          }
        }
      });
    });

    const skillElements = document.querySelectorAll('[data-section]');
    skillElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [expandedSections]);

  const renderSkillBars = (section: string) => {
    const sectionData = skillsData[section];
    if (!sectionData) return null;

    return (
      <div className={`space-y-4 transition-all duration-500 overflow-hidden ${
        expandedSections[section] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        {sectionData.skills.map((skill, index) => (
          <div key={skill.name} className="skill-item">
            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span className="text-[var(--portfolio-accent)]">{skill.level}%</span>
            </div>
            <div className="bg-gray-700 rounded-full h-2">
              <div 
                className={`skill-bar bg-gradient-to-r from-[var(--portfolio-accent)] to-[var(--portfolio-coral)] h-full rounded-full transition-all duration-2000 ease-out ${
                  animatedSkills.has(section) ? '' : 'w-0'
                }`}
                style={{ 
                  width: animatedSkills.has(section) ? `${skill.level}%` : '0%',
                  transitionDelay: `${index * 200}ms`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-portfolio-secondary relative scroll-mt-20">
      {/* Modern architecture background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-300">Honest assessment of technical proficiency levels</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Python Skills */}
          <div className="glass-effect rounded-2xl p-8" data-section="python">
            <div 
              className="flex items-center justify-between mb-6 cursor-pointer"
              onClick={() => toggleSection('python')}
            >
              <h3 className="text-2xl font-bold text-[var(--portfolio-accent)] flex items-center">
                <i className="fab fa-python mr-3"></i>Python Libraries
              </h3>
              <i className={`fas fa-chevron-down transform transition-transform duration-300 ${
                expandedSections.python ? 'rotate-180' : ''
              }`}></i>
            </div>
            {renderSkillBars('python')}
          </div>
          
          {/* R Skills */}
          <div className="glass-effect rounded-2xl p-8" data-section="r">
            <div 
              className="flex items-center justify-between mb-6 cursor-pointer"
              onClick={() => toggleSection('r')}
            >
              <h3 className="text-2xl font-bold text-[var(--portfolio-accent)] flex items-center">
                <i className="fab fa-r-project mr-3"></i>R Packages
              </h3>
              <i className={`fas fa-chevron-down transform transition-transform duration-300 ${
                expandedSections.r ? 'rotate-180' : ''
              }`}></i>
            </div>
            {renderSkillBars('r')}
          </div>
        </div>
        
        {/* Machine Learning Expertise */}
        <div className="mt-12 glass-effect rounded-2xl p-8">
          <h3 className="text-2xl font-bold gradient-text mb-6 text-center">Machine Learning Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mlExpertise.map((item, index) => (
              <div key={index} className="text-center p-6 bg-portfolio-primary rounded-xl">
                <i className={`fas fa-${item.icon} text-4xl text-[var(--portfolio-accent)] mb-4`}></i>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Integration Skills */}
        <div className="mt-12 glass-effect rounded-2xl p-8">
          <h3 className="text-2xl font-bold gradient-text mb-6 text-center">AI Integration & APIs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiIntegrationSkills.map((item, index) => (
              <div key={index} className="text-center p-6 bg-portfolio-primary rounded-xl">
                <i className={`fas fa-${item.icon} text-4xl text-[var(--portfolio-coral)] mb-4`}></i>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-300 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
