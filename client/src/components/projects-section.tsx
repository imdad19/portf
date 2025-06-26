import { useState, useEffect } from 'react';
import { webDevProjects, dataScienceProjects } from '@/lib/projects-data';
import { useLanguage } from "@/hooks/use-language";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<'web-dev' | 'data-science'>('web-dev');
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  
  const currentProjects = activeCategory === 'web-dev' ? webDevProjects : dataScienceProjects;

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

  const maxSlide = Math.max(0, currentProjects.length - slidesPerView);

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
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">{t.projects.title}</h2>
          <p className="text-xl text-gray-300">{t.projects.description}</p>
          
          {/* Category Tabs */}
          <div className="flex justify-center mt-8">
            <div className="glass-effect rounded-full p-2 flex">
              <button
                onClick={() => {
                  setActiveCategory('web-dev');
                  setCurrentSlide(0);
                }}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === 'web-dev'
                    ? 'bg-[var(--portfolio-accent)] text-[var(--portfolio-primary)]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Web Development
              </button>
              <button
                onClick={() => {
                  setActiveCategory('data-science');
                  setCurrentSlide(0);
                }}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === 'data-science'
                    ? 'bg-[var(--portfolio-accent)] text-[var(--portfolio-primary)]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Data Science
              </button>
            </div>
          </div>
        </div>
        
        {/* Project Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {currentProjects.map((project) => (
                <div key={project.id} className="flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                  <div className="project-card glass-effect rounded-2xl p-6 h-full">
                    {/* Project visual */}
                    <div className={`h-48 rounded-xl mb-6 flex items-center justify-center overflow-hidden ${
                      project.image && project.image.includes('Auralytics') 
                        ? 'bg-white' 
                        : `bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo}`
                    }`}>
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className={`${
                            project.image.includes('Auralytics') 
                              ? 'w-4/5 h-4/5 object-contain' 
                              : 'w-full h-full object-cover'
                          } rounded-xl`}
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
                      <p className="text-gray-400 text-sm">{project.year}</p>
                      {project.url && (
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[var(--portfolio-accent)] hover:text-white transition-colors duration-300 text-sm"
                        >
                          View Live →
                        </a>
                      )}
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
