export interface Skill {
  name: string;
  level: number;
  category: 'python' | 'r' | 'ml';
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: Record<string, SkillCategory> = {
  python: {
    title: "Python Libraries",
    icon: "fab fa-python",
    skills: [
      { name: "pandas", level: 65, category: 'python' },
      { name: "numpy", level: 60, category: 'python' },
      { name: "matplotlib", level: 55, category: 'python' },
      { name: "sklearn", level: 60, category: 'python' },
      { name: "selenium", level: 50, category: 'python' },
      { name: "beautifulsoup", level: 55, category: 'python' },
    ]
  },
  r: {
    title: "R Packages",
    icon: "fab fa-r-project",
    skills: [
      { name: "tidyverse", level: 70, category: 'r' },
      { name: "ggplot2", level: 75, category: 'r' },
      { name: "tidymodels", level: 65, category: 'r' },
      { name: "shiny", level: 55, category: 'r' },
      { name: "forecast", level: 60, category: 'r' },
      { name: "dplyr", level: 70, category: 'r' },
    ]
  }
};

export const mlExpertise = [
  {
    title: "Supervised Learning",
    description: "Regression, Classification, Random Forests, Neural Networks",
    icon: "brain"
  },
  {
    title: "Unsupervised Learning", 
    description: "Clustering, Dimensionality Reduction, Pattern Recognition",
    icon: "project-diagram"
  },
  {
    title: "Time Series Analysis",
    description: "ARIMA, Forecasting, Seasonal Decomposition",
    icon: "chart-line"
  }
];

export const aiIntegrationSkills = [
  {
    title: "OpenAI GPT-4 Integration",
    description: "API development, prompt engineering, conversation systems",
    icon: "robot"
  },
  {
    title: "Whisper Speech-to-Text",
    description: "Audio transcription, voice recognition, multilingual processing",
    icon: "microphone"
  },
  {
    title: "Hugging Face Transformers",
    description: "Pre-trained models, fine-tuning, NLP pipelines",
    icon: "brain"
  },
  {
    title: "Voice Recognition Systems",
    description: "Speech processing, audio analysis, real-time transcription",
    icon: "volume-up"
  }
];
