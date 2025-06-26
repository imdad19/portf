import profileImage from "@assets/photo_2025-06-08_12-52-06_1750893288551.jpg";
import { useLanguage } from "@/hooks/use-language";

export default function HeroSection() {
  const { t } = useLanguage();
  const handleDownloadCV = () => {
    // Create a downloadable CV link
    const link = document.createElement('a');
    link.href = '/cv-imed-eddine-aouidane.pdf';
    link.download = 'CV-Imed-Eddine-Aouidane.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Premium workspace background with glassmorphism overlay */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 15, 35, 0.8), rgba(26, 26, 46, 0.8)), url('https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {t.hero.greeting} <span className="gradient-text">Imed Eddine Aouidane</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-[var(--portfolio-accent)] mb-6">{t.hero.title}</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              {t.hero.description}
            </p>
            <div className="flex justify-center lg:justify-start">
              <div className="glass-effect px-6 py-3 rounded-full border border-[var(--portfolio-coral)] border-opacity-30">
                <div className="flex items-center">
                  <i className="fas fa-globe-europe text-[var(--portfolio-coral)] mr-2"></i>
                  <span className="text-[var(--portfolio-coral)] font-medium">{t.hero.availability}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Professional photo with creative framing */}
              <div className="w-96 h-96 lg:w-[28rem] lg:h-[28rem] rounded-full glass-effect p-2 animate-float">
                <img 
                  src={profileImage}
                  alt="Imed Eddine Aouidane - Data Scientist" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-[var(--portfolio-accent)] rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--portfolio-coral)] rounded-full opacity-50 animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
