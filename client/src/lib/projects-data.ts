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
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "AI Revenue Impact Assessment",
    description: "Comprehensive econometric analysis quantifying AI adoption impact on NVIDIA's financial performance using advanced statistical models and causal inference techniques.",
    technologies: ["R", "Time Series", "Econometrics", "ARIMA"],
    icon: "chart-line",
    gradientFrom: "from-blue-600",
    gradientTo: "to-purple-600",
    year: "2024",
    image: "/project-images/ai-revenue-assessment.svg"
  },
  {
    id: 2,
    title: "Intelligent Audio Processing",
    description: "End-to-end audio transcription and summarization pipeline using OpenAI Whisper with noise reduction algorithms and speaker diarization for multi-speaker environments.",
    technologies: ["Python", "OpenAI Whisper", "Audio ML", "NLP"],
    icon: "microphone",
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-600",
    year: "2024",
    image: "/project-images/audio-processing.svg"
  },
  {
    id: 3,
    title: "Global Power Prediction",
    description: "Electricity consumption forecasting using ARIMA models and seasonal decomposition techniques for accurate time series predictions and energy planning.",
    technologies: ["R", "ARIMA", "Forecasting", "TSstudio"],
    icon: "bolt",
    gradientFrom: "from-green-600",
    gradientTo: "to-blue-600",
    year: "2024",
    image: "/project-images/power-prediction.svg"
  },
  {
    id: 4,
    title: "Sales Analytics Dashboard",
    description: "Interactive Power BI dashboard visualizing sales trends, regional performance, and product profitability metrics with real-time data updates.",
    technologies: ["Power BI", "Data Viz", "Analytics", "SQL"],
    icon: "chart-bar",
    gradientFrom: "from-orange-600",
    gradientTo: "to-red-600",
    year: "2024",
    image: "/project-images/sales-dashboard.svg"
  },
  {
    id: 5,
    title: "Bitcoin Price Prediction",
    description: "Cryptocurrency price forecasting using advanced time series analysis including ACF/PACF analysis and seasonal decomposition techniques.",
    technologies: ["R", "TSstudio", "Crypto", "Forecast"],
    icon: "bitcoin",
    gradientFrom: "from-yellow-600",
    gradientTo: "to-orange-600",
    year: "2024",
    image: "/project-images/bitcoin-prediction.svg"
  },
  {
    id: 6,
    title: "Palmer Penguins Classification",
    description: "Interactive Shiny application for penguin species classification with real-time model testing, data visualization, and educational insights.",
    technologies: ["R", "Shiny", "Classification", "tidymodels"],
    icon: "dove",
    gradientFrom: "from-blue-600",
    gradientTo: "to-cyan-600",
    year: "2024",
    image: "/project-images/penguins-classification.svg"
  },
  {
    id: 7,
    title: "Treatment Outcome Assessment",
    description: "Logistic regression model to predict treatment success rates with statistical analysis and identification of key predictive factors.",
    technologies: ["R", "tidyverse", "glm", "caret"],
    icon: "heart-pulse",
    gradientFrom: "from-red-500",
    gradientTo: "to-pink-500",
    year: "2023",
    image: "/project-images/treatment-outcome.svg"
  },
  {
    id: 8,
    title: "Telecom Customer Churn",
    description: "Customer churn prediction using ensemble machine learning models including Random Forest and Logistic Regression with feature importance analysis.",
    technologies: ["R", "tidymodels", "Random Forest", "ggplot2"],
    icon: "phone",
    gradientFrom: "from-indigo-600",
    gradientTo: "to-purple-600",
    year: "2023",
    image: "/project-images/telecom-churn.svg"
  }
];
