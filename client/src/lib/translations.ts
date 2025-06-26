export type Language = 'en' | 'fr' | 'de' | 'it';

export interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    description: string;
    availability: string;
  };
  about: {
    title: string;
    description: string;
    experience: string;
    clients: string;
    projects: string;
    years: string;
  };
  skills: {
    title: string;
    description: string;
    python: string;
    r: string;
    ml: string;
  };
  projects: {
    title: string;
    description: string;
    webDev: string;
    dataScience: string;
    viewProject: string;
  };
  contact: {
    title: string;
    description: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills", 
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      title: "Data Scientist & Web Developer",
      description: "Data scientist specializing in machine learning, statistical analysis, and data visualization. Creating intelligent data-driven solutions and modern web applications.",
      availability: "Open to Global Opportunities"
    },
    about: {
      title: "About Me",
      description: "Data scientist and web developer creating modern websites, portfolios, and intelligent data-driven solutions for businesses worldwide.",
      experience: "Years Experience",
      clients: "Happy Clients",
      projects: "Projects Completed",
      years: "5+"
    },
    skills: {
      title: "Technical Skills",
      description: "Specialized expertise in data science, machine learning, and modern web development technologies.",
      python: "Python & Libraries",
      r: "R & Statistics", 
      ml: "Machine Learning"
    },
    projects: {
      title: "Featured Projects",
      description: "Web development and data science solutions",
      webDev: "Web Development",
      dataScience: "Data Science",
      viewProject: "View Project"
    },
    contact: {
      title: "Get In Touch",
      description: "Ready to collaborate on your next project? Let's discuss how we can work together.",
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again."
    }
  },
  fr: {
    nav: {
      about: "À Propos",
      skills: "Compétences",
      projects: "Projets", 
      contact: "Contact"
    },
    hero: {
      greeting: "Bonjour, je suis",
      title: "Data Scientist & Développeur Web",
      description: "Data scientist spécialisé en apprentissage automatique, analyse statistique et visualisation de données. Création de solutions intelligentes basées sur les données et d'applications web modernes.",
      availability: "Ouvert aux Opportunités Mondiales"
    },
    about: {
      title: "À Propos de Moi",
      description: "Data scientist et développeur web créant des sites web modernes, des portfolios et des solutions intelligentes basées sur les données pour les entreprises du monde entier.",
      experience: "Années d'Expérience",
      clients: "Clients Satisfaits",
      projects: "Projets Terminés",
      years: "5+"
    },
    skills: {
      title: "Compétences Techniques",
      description: "Expertise spécialisée en data science, apprentissage automatique et technologies de développement web modernes.",
      python: "Python & Bibliothèques",
      r: "R & Statistiques",
      ml: "Apprentissage Automatique"
    },
    projects: {
      title: "Projets Phares",
      description: "Solutions de développement web et de data science",
      webDev: "Développement Web",
      dataScience: "Data Science", 
      viewProject: "Voir le Projet"
    },
    contact: {
      title: "Contactez-Moi",
      description: "Prêt à collaborer sur votre prochain projet ? Discutons de la façon dont nous pouvons travailler ensemble.",
      name: "Votre Nom",
      email: "Votre Email",
      subject: "Sujet",
      message: "Votre Message",
      send: "Envoyer le Message",
      sending: "Envoi en cours...",
      success: "Message envoyé avec succès !",
      error: "Échec de l'envoi du message. Veuillez réessayer."
    }
  },
  de: {
    nav: {
      about: "Über Mich",
      skills: "Fähigkeiten",
      projects: "Projekte",
      contact: "Kontakt"
    },
    hero: {
      greeting: "Hallo, ich bin",
      title: "Data Scientist & Webentwickler",
      description: "Data Scientist spezialisiert auf maschinelles Lernen, statistische Analyse und Datenvisualisierung. Entwicklung intelligenter datengesteuerter Lösungen und moderner Webanwendungen.",
      availability: "Offen für Globale Möglichkeiten"
    },
    about: {
      title: "Über Mich",
      description: "Data Scientist und Webentwickler, der moderne Websites, Portfolios und intelligente datengesteuerte Lösungen für Unternehmen weltweit erstellt.",
      experience: "Jahre Erfahrung",
      clients: "Zufriedene Kunden",
      projects: "Abgeschlossene Projekte",
      years: "5+"
    },
    skills: {
      title: "Technische Fähigkeiten",
      description: "Spezialisierte Expertise in Data Science, maschinellem Lernen und modernen Webentwicklungstechnologien.",
      python: "Python & Bibliotheken",
      r: "R & Statistik",
      ml: "Maschinelles Lernen"
    },
    projects: {
      title: "Hauptprojekte",
      description: "Webentwicklungs- und Data Science-Lösungen",
      webDev: "Webentwicklung",
      dataScience: "Data Science",
      viewProject: "Projekt Ansehen"
    },
    contact: {
      title: "Kontakt Aufnehmen",
      description: "Bereit, an Ihrem nächsten Projekt zu arbeiten? Lassen Sie uns besprechen, wie wir zusammenarbeiten können.",
      name: "Ihr Name",
      email: "Ihre E-Mail",
      subject: "Betreff",
      message: "Ihre Nachricht",
      send: "Nachricht Senden",
      sending: "Wird gesendet...",
      success: "Nachricht erfolgreich gesendet!",
      error: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut."
    }
  },
  it: {
    nav: {
      about: "Chi Sono",
      skills: "Competenze",
      projects: "Progetti",
      contact: "Contatto"
    },
    hero: {
      greeting: "Ciao, sono",
      title: "Data Scientist & Sviluppatore Web",
      description: "Data scientist specializzato in apprendimento automatico, analisi statistica e visualizzazione dati. Creazione di soluzioni intelligenti basate sui dati e applicazioni web moderne.",
      availability: "Aperto a Opportunità Globali"
    },
    about: {
      title: "Chi Sono",
      description: "Data scientist e sviluppatore web che crea siti web moderni, portfolio e soluzioni intelligenti basate sui dati per aziende in tutto il mondo.",
      experience: "Anni di Esperienza",
      clients: "Clienti Soddisfatti",
      projects: "Progetti Completati",
      years: "5+"
    },
    skills: {
      title: "Competenze Tecniche",
      description: "Competenza specializzata in data science, apprendimento automatico e tecnologie di sviluppo web moderne.",
      python: "Python & Librerie",
      r: "R & Statistiche",
      ml: "Apprendimento Automatico"
    },
    projects: {
      title: "Progetti Principali",
      description: "Soluzioni di sviluppo web e data science",
      webDev: "Sviluppo Web",
      dataScience: "Data Science",
      viewProject: "Visualizza Progetto"
    },
    contact: {
      title: "Contattami",
      description: "Pronto a collaborare al tuo prossimo progetto? Discutiamo di come possiamo lavorare insieme.",
      name: "Il Tuo Nome",
      email: "La Tua Email",
      subject: "Oggetto",
      message: "Il Tuo Messaggio",
      send: "Invia Messaggio",
      sending: "Invio in corso...",
      success: "Messaggio inviato con successo!",
      error: "Invio del messaggio fallito. Riprova."
    }
  }
};

export const languageNames: Record<Language, string> = {
  en: "English",
  fr: "Français", 
  de: "Deutsch",
  it: "Italiano"
};