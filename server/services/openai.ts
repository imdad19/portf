import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.API_KEY || "sk-test-key" 
});

// Static responses for when OpenAI API is unavailable
const staticResponses = {
  projects: `Imed has worked on several impressive data science projects:

🔹 **AI Revenue Impact Assessment** - Comprehensive econometric analysis of NVIDIA's AI integration effects using advanced R statistical modeling
🔹 **Intelligent Audio Processing** - OpenAI Whisper integration with noise reduction algorithms for speech-to-text conversion
🔹 **Global Power Prediction** - Electricity consumption forecasting using ARIMA time series analysis
🔹 **Sales Analytics Dashboard** - Interactive Power BI dashboard with real-time KPI tracking
🔹 **Bitcoin Price Prediction** - Cryptocurrency forecasting using advanced time series techniques
🔹 **Palmer Penguins Classification** - Interactive R Shiny application for species classification
🔹 **Treatment Outcome Assessment** - Healthcare predictive model using logistic regression
🔹 **Telecom Customer Churn** - Ensemble machine learning model for customer retention

Each project demonstrates his expertise in R, Python, machine learning, and data visualization.`,
  
  skills: `Imed's technical skills include:

**Programming Languages:** R, Python, SQL (junior-level proficiency, 50-75% competency)
**Python Libraries:** pandas, numpy, matplotlib, sklearn, selenium, beautifulsoup
**R Packages:** tidyverse, ggplot2, tidymodels, shiny, forecast, dplyr
**Machine Learning:** Supervised Learning, Unsupervised Learning, Time Series Analysis
**AI Integration:** OpenAI GPT-4 API, Whisper Speech-to-Text, Hugging Face Transformers
**Tools:** Power BI, Shiny dashboards, PostgreSQL

He's honest about his junior-level experience while continuously learning and building practical projects.`,

  background: `Imed Eddine Aouidane is a graduate from École supérieure d'économie with specialization in Data Science for Economics and Business. He's a data science professional with experience in machine learning, time series forecasting, and automation.

He has completed internships at DRAPEST-TEXALG (texture industry data analysis) and explored the healthcare sector with LITMED PRO. Imed has earned multiple data science certifications from DataCamp, IBM, and Google.

Currently based in Algeria, he's open to global opportunities and available for relocation with visa sponsorship support.`,

  availability: `Imed is actively seeking data science opportunities worldwide, with particular interest in European markets. He's open to:

✅ Remote work arrangements
✅ International relocation (visa sponsorship welcome)
✅ Full-time positions in data science, analytics, or machine learning
✅ Collaborative projects and consulting opportunities

Feel free to reach out through the contact form to discuss potential opportunities!`,

  default: `Hi! I'm here to help you learn about Imed Eddine Aouidane's background and experience. You can ask me about:

• His data science projects and achievements
• Technical skills and programming expertise  
• Educational background and certifications
• Availability for job opportunities
• Experience with machine learning and AI

What would you like to know about Imed?`
};

function getStaticResponse(message: string): string {
  const msg = message.toLowerCase();
  
  if (msg.includes('project') || msg.includes('work') || msg.includes('portfolio')) {
    return staticResponses.projects;
  }
  if (msg.includes('skill') || msg.includes('technical') || msg.includes('programming') || msg.includes('python') || msg.includes('r ')) {
    return staticResponses.skills;
  }
  if (msg.includes('background') || msg.includes('education') || msg.includes('experience') || msg.includes('about')) {
    return staticResponses.background;
  }
  if (msg.includes('available') || msg.includes('hire') || msg.includes('job') || msg.includes('opportunity') || msg.includes('contact')) {
    return staticResponses.availability;
  }
  
  return staticResponses.default;
}

export async function generateChatbotResponse(message: string): Promise<string> {
  try {
    const systemPrompt = `You are an AI assistant for Imed Eddine Aouidane's portfolio website. You should help visitors learn about Imed's background, skills, and projects. Here's key information about Imed:

Background:
- Graduate from École supérieure d'économie with specialization in Data Science for Economics and Business
- Data science professional with experience in machine learning, time series forecasting, and automation
- Proficient in R, Python, SQL, and data visualization tools
- Available for European opportunities and relocation (requires visa sponsorship)

Technical Skills:
- Programming: R, Python, SQL (junior-level proficiency, 50-75% competency)
- Python Libraries: pandas, numpy, matplotlib, sklearn, selenium, beautifulsoup
- R Packages: tidyverse, ggplot2, tidymodels, shiny, forecast, dplyr
- Machine Learning: Supervised Learning, Unsupervised Learning, Time Series Analysis
- AI Integration: OpenAI GPT-4 API development, Whisper Speech-to-Text, Hugging Face Transformers, voice recognition systems
- Tools: Power BI, Shiny dashboards, PostgreSQL

Key Projects:
1. AI Revenue Impact Assessment (NVIDIA case study) - comprehensive econometric analysis using R
2. Intelligent Audio Processing System - OpenAI Whisper integration with noise reduction
3. Global Active Power Prediction - electricity consumption forecasting with ARIMA
4. Sales Analytics Dashboard - interactive Power BI visualization
5. Bitcoin Price Prediction - cryptocurrency forecasting with time series techniques
6. Palmer Penguins Classification - interactive Shiny app for species classification
7. Treatment Outcome Assessment - logistic regression for healthcare predictions
8. Telecom Customer Churn - ensemble models for customer retention

Professional Experience:
- DRAPEST-TEXALG internships (texture industry data analysis)
- LITMED PRO healthcare sector exploration
- Multiple data science certifications from DataCamp, IBM, Google

Keep responses conversational, informative, and focused on Imed's qualifications. Encourage potential employers or collaborators to reach out. Be honest about his junior-level experience while highlighting his strong foundation, learning mindset, and availability for European opportunities.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      max_tokens: 300,
      temperature: 0.7
    });

    return response.choices[0].message.content || getStaticResponse(message);
  } catch (error) {
    console.error("OpenAI API error:", error);
    // Return intelligent static response instead of generic error message
    return getStaticResponse(message);
  }
}
