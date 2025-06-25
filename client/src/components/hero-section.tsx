import profileImage from "@assets/photo_2025-06-08_12-52-06_1750893288551.jpg";

export default function HeroSection() {
  const handleDownloadCV = () => {
    // This would trigger CV download
    console.log('CV download triggered');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Premium workspace background with glassmorphism overlay */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 15, 35, 0.8), rgba(26, 26, 46, 0.8)), url('https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hello, I'm <span className="gradient-text">Imed Eddine Aouidane</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-[var(--portfolio-accent)] mb-6">Data Scientist</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Data science professional specializing in machine learning, time series analysis, and data visualization. 
              Passionate about transforming data into actionable insights and building intelligent solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleDownloadCV}
                className="glass-effect px-8 py-3 rounded-full hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-primary)] transition-all duration-300 transform hover:scale-105"
              >
                <i className="fas fa-download mr-2"></i>Download CV
              </button>
              <div className="text-center">
                <span className="text-[var(--portfolio-coral)] font-semibold">🇪🇺 Available for European Opportunities</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Professional photo with creative framing */}
              <div className="w-80 h-80 rounded-full glass-effect p-2 animate-float">
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
