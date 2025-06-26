import ParticleBackground from '@/components/particle-background';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';
import ChatbotWidget from '@/components/chatbot-widget';

export default function Portfolio() {
  return (
    <div className="bg-portfolio-primary text-white font-inter overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <ChatbotWidget />
      
      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Imed Eddine Aouidane. Built with passion for data science and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}
