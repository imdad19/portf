import { useState, useEffect } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

export default function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const stageInterval = setInterval(() => {
      setStage(prev => (prev + 1) % 3);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stageInterval);
    };
  }, [onComplete]);

  const stages = [
    "Initializing Data Science Models",
    "Loading Portfolio Analytics", 
    "Preparing Interactive Experience"
  ];

  return (
    <div className="fixed inset-0 bg-[var(--portfolio-primary)] z-50 flex items-center justify-center">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[var(--portfolio-accent)] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-md mx-auto px-6">
        {/* Logo/Name Animation */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold gradient-text mb-2 animate-pulse">
            Imed Eddine Aouidane
          </h1>
          <p className="text-xl text-[var(--portfolio-accent)] animate-fade-in">
            Data Scientist & Web Developer
          </p>
        </div>

        {/* Loading Circle */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgba(100, 255, 218, 0.2)"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="var(--portfolio-accent)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
              className="transition-all duration-300 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-[var(--portfolio-accent)]">
              {progress}%
            </span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="h-6">
          <p className="text-gray-300 animate-pulse">
            {stages[stage]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-1 mt-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[var(--portfolio-accent)] to-[var(--portfolio-coral)] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}