export default function AboutSection() {
  const achievements = [
    { icon: "fas fa-graduation-cap", text: "Data Science for Economics & Business" },
    { icon: "fas fa-laptop-code", text: "Freelance Web Developer" },
    { icon: "fas fa-chart-line", text: "Machine Learning & Analytics" },
    { icon: "fas fa-globe-europe", text: "Building Websites & Portfolios Globally" }
  ];

  const expertise = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description: "React, Node.js, Modern Stacks"
    },
    {
      icon: "fas fa-robot",
      title: "Machine Learning",
      description: "Data Science & Analytics"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Responsive Design",
      description: "Mobile-First Approach"
    },
    {
      icon: "fas fa-chart-line",
      title: "Data Visualization",
      description: "Interactive Dashboards"
    }
  ];

  return (
    <section id="about" className="py-20 relative scroll-mt-20">
      {/* Abstract geometric pattern background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Freelance developer specializing in data science and web development. Creating modern websites, portfolios, and data-driven solutions for businesses worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[var(--portfolio-accent)] mb-6">Professional Background</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Graduate from École supérieure d'économie with specialized training in Data Science for Economics and Business. 
              Experienced in developing end-to-end machine learning solutions, from data collection and preprocessing to model deployment.
            </p>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <i className={`${achievement.icon} text-[var(--portfolio-accent)] mr-3`}></i>
                  <span>{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[var(--portfolio-accent)] mb-6">Core Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div key={index} className="text-center p-4 bg-[var(--portfolio-secondary)] rounded-lg">
                  <i className={`${item.icon} text-3xl text-[var(--portfolio-accent)] mb-2`}></i>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
