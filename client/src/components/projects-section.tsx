import { useState, useEffect } from 'react';
import { projectsData } from '@/lib/projects-data';

export default function ProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlide = Math.max(0, projectsData.length - slidesPerView);

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (slide: number) => {
    setCurrentSlide(Math.min(slide, maxSlide));
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [maxSlide]);

  const translateX = -(currentSlide * (100 / slidesPerView));

  return (
    <section id="projects" className="py-20 relative scroll-mt-20">
      {/* Premium workspace background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300">Real-world applications of data science and machine learning</p>
        </div>
        
        {/* Project Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {projectsData.map((project) => (
                <div key={project.id} className="flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                  <div className="project-card glass-effect rounded-2xl p-6 h-full">
                    {/* Project visual */}
                    <div className={`h-48 rounded-xl mb-6 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center overflow-hidden`}>
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <i className={`${project.icon.startsWith('fab') ? 'fab' : 'fas'} fa-${project.icon} text-6xl text-white opacity-50`}></i>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--portfolio-accent)] mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-[var(--portfolio-secondary)] rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <button className="text-[var(--portfolio-accent)] hover:text-white transition-colors">
                        <i className="fas fa-external-link-alt mr-2"></i>View Details
                      </button>
                      <button className="text-gray-400 hover:text-white transition-colors">
                        <i className="fab fa-github text-xl"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Navigation */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-3 hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-primary)] transition-all duration-300"
            disabled={currentSlide === 0}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-3 hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-primary)] transition-all duration-300"
            disabled={currentSlide === maxSlide}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[var(--portfolio-accent)]' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
