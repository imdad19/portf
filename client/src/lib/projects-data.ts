export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  gradientFrom: string;
  gradientTo: string;
  year: string;
  image?: string;
  category: 'data-science' | 'web-dev';
  url?: string;
}

export const webDevProjects: Project[] = [
  {
    id: 1,
    title: "Auralytics AI",
    description: "Modern AI analytics platform featuring advanced data visualization, machine learning insights, and automated reporting. Built with React, Node.js, and integrated AI capabilities for business intelligence solutions. Developed by Imed Eddine Aouidane.",
    technologies: ["React", "Node.js", "TypeScript", "AI/ML", "Analytics"],
    icon: "brain",
    gradientFrom: "from-purple-600",
    gradientTo: "to-blue-600",
    year: "2025",
    category: "web-dev",
    url: "https://auralyticsai.com",
    image: "/attached_assets/Auralytics Ai-28_1750960301699.png"
  },
  {
    id: 10,
    title: "Nexai WMF",
    description: "Modern web management framework with AI integration for streamlined workflow automation and enhanced productivity. Features responsive design and user-friendly interface.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration", "Netlify"],
    icon: "lightning-bolt",
    gradientFrom: "from-blue-600",
    gradientTo: "to-cyan-600",
    year: "2025",
    category: "web-dev",
    url: "https://nexaiwmf.netlify.app/",
    image: "/project-images/nexai-wmf-new.svg"
  },
  {
    id: 11,
    title: "Pharmacist Portfolio",
    description: "Professional portfolio website for Dr. Oussama Aouidane, PharmD, showcasing clinical research, drug safety expertise, and regulatory affairs experience in the pharmaceutical industry.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Radix UI"],
    icon: "pill",
    gradientFrom: "from-green-600",
    gradientTo: "to-emerald-600",
    year: "2025",
    category: "web-dev",
    url: "https://aouidaneoussama.netlify.app",
    image: "/project-images/pharmacist-portfolio.svg"
  },
  {
    id: 12,
    title: "Professional Portfolio",
    description: "Modern, responsive portfolio website showcasing web development and data science expertise with interactive features, contact forms, and project categorization.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
    icon: "user",
    gradientFrom: "from-slate-600",
    gradientTo: "to-gray-600",
    year: "2025",
    category: "web-dev",
    url: "https://portfolio-example.com",
    image: "/project-images/portfolio-new.svg"
  }
];

export const dataScienceProjects: Project[] = [
  {
    id: 2,
    title: "AI Revenue Impact Assessment",
    description: "Comprehensive econometric analysis quantifying AI adoption impact on NVIDIA's financial performance using advanced statistical models and causal inference techniques.",
    technologies: ["R", "Time Series", "Econometrics", "ARIMA"],
    icon: "chart-line",
    gradientFrom: "from-blue-600",
    gradientTo: "to-purple-600",
    year: "2024",
    category: "data-science",
    image: "/project-images/ai-revenue-assessment.svg"
  },
  {
    id: 3,
    title: "Intelligent Audio Processing",
    description: "End-to-end audio transcription and summarization pipeline using OpenAI Whisper with noise reduction algorithms and speaker diarization for multi-speaker environments.",
    technologies: ["Python", "OpenAI Whisper", "Audio ML", "NLP"],
    icon: "microphone",
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-600",
    year: "2024",
    category: "data-science",
    image: "/project-images/audio-processing.svg"
  },
  {
    id: 4,
    title: "Global Power Prediction",
    description: "Electricity consumption forecasting using ARIMA models and seasonal decomposition techniques for accurate time series predictions and energy planning.",
    technologies: ["R", "ARIMA", "Forecasting", "TSstudio"],
    icon: "bolt",
    gradientFrom: "from-green-600",
    gradientTo: "to-blue-600",
    year: "2024",
    category: "data-science",
    image: "/project-images/power-prediction.svg"
  },
  {
    id: 5,
    title: "Sales Analytics Dashboard",
    description: "Interactive Power BI dashboard visualizing sales trends, regional performance, and product profitability metrics with real-time data updates.",
    technologies: ["Power BI", "Data Viz", "Analytics", "SQL"],
    icon: "chart-bar",
    gradientFrom: "from-orange-600",
    gradientTo: "to-red-600",
    year: "2024",
    category: "data-science",
    image: "/project-images/sales-dashboard.svg"
  },
  {
    id: 6,
    title: "Bitcoin Price Prediction",
    description: "Cryptocurrency price forecasting using advanced time series analysis including ACF/PACF analysis and seasonal decomposition techniques.",
    technologies: ["R", "TSstudio", "Crypto", "Forecast"],
    icon: "bitcoin",
    gradientFrom: "from-yellow-600",
    gradientTo: "to-orange-600",
    year: "2024",
    category: "data-science",
    image: "/project-images/bitcoin-prediction.svg"
  },
  {
    id: 7,
    title: "Palmer Penguins Classification",
    description: "Interactive Shiny application for penguin species classification with real-time model testing, data visualization, and educational insights.",
    technologies: ["R", "Shiny", "Classification", "tidymodels"],
    icon: "dove",
    gradientFrom: "from-blue-600",
    gradientTo: "to-cyan-600",
    year: "2024",
    category: "data-science",
    image: "/project-images/penguins-classification.svg"
  },
  {
    id: 8,
    title: "Treatment Outcome Assessment",
    description: "Logistic regression model to predict treatment success rates with statistical analysis and identification of key predictive factors.",
    technologies: ["R", "tidyverse", "glm", "caret"],
    icon: "heart-pulse",
    gradientFrom: "from-red-500",
    gradientTo: "to-pink-500",
    year: "2023",
    category: "data-science",
    image: "/project-images/treatment-outcome.svg"
  },
  {
    id: 9,
    title: "Telecom Customer Churn",
    description: "Customer churn prediction using ensemble machine learning models including Random Forest and Logistic Regression with feature importance analysis.",
    technologies: ["R", "tidymodels", "Random Forest", "ggplot2"],
    icon: "phone",
    gradientFrom: "from-indigo-600",
    gradientTo: "to-purple-600",
    year: "2023",
    category: "data-science",
    image: "/project-images/telecom-churn.svg"
  }
];

export const projectsData: Project[] = [...webDevProjects, ...dataScienceProjects];