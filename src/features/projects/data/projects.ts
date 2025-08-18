export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
  id: "ai-document-companion",
  title: "AI Document Companion",
  description:
    "Full-stack AI-powered document analysis and knowledge management platform with intelligent Q&A, automated summary generation, and multi-format document processing. Features local-first architecture, serverless backend, and advanced AI model integration with privacy-focused design.",
  technologies: [
    "React", 
    "Next.js 14", 
    "TypeScript", 
    "Tailwind CSS", 
    "Netlify Functions", 
    "OpenRouter API", 
    "PDF.js", 
    "IndexedDB", 
    "Framer Motion"
  ],
  image: "/img/chatExample.png",
  link: "https://ai-document-companion.netlify.app/",
  github: "https://github.com/atapia27/Companion",
  featured: true,
  },  
  {
    
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Modern portfolio website showcasing cognitive engineering approach with interactive 3D animations, smart scrolling, and feature-based architecture. Built with React, Three.js, TypeScript, and Tailwind CSS, featuring custom 3D text animations, neural network visualizations, and responsive design.",
    technologies: ["React", "TypeScript", "Three.js", "Tailwind CSS", "Vite", "React Three Fiber", "Framer Motion"],
    image: "/img/website.png",
    link: "https://alejandro-tapia-portfolio.netlify.app/",
    github: "https://github.com/atapia27/Portfolio",
    featured: true,
  },
  
  {
    id: "dog-adoption-platform",
    title: "Dog Adoption Platform",
    description:
      "Modern web app with secure auth, advanced filtering and search, and a custom matching algorithm. Built with feature-based architecture, atomic state via Zustand, and modern React patterns like custom hooks and conditional styling, using Next.js, clsx, tailwind-merge, and TypeScript.",
    technologies: ["Next.js", "TypeScript", "Zustand", "Tailwind", "clsx", "tailwind-merge"],
    image: "/img/dogAdopt.png",
    link: "https://alex-tapia-fetch.netlify.app/",
    github: "https://github.com/atapia27/Fetch-frontend-take-home",
    featured: true,
  },
  {
    id: "edtech-social-app",
    title: "Social Media App (needs redeployment)",
    description:
      "Full Stack social media app featuring video uploads, feed browsing, topic filtering, user profiles, and real-time commenting. Note: Website currently needs to be redeployed and updated.",
    technologies: ["Next.js", "Zustand", "Tailwind", "FastAPI", "Python", "SQLAlchemy"],
    image: "/img/SocialApp.png",
    link: undefined,
    github: "https://github.com/atapia27/Social-Application",
    featured: true,
  },
  {
    id: "studyhub",
    title: "StudyHub",
    description:
      "Study tool providing customizable music, ambient sounds, and themes, enhancing productivity and focus for users during study sessions",
    technologies: ["React", "TypeScript", "Tailwind", "MobX", "Vitest"],
    image: "/img/StudyHub.png",
    link: "https://studyhub-alejandro-tapia.netlify.app/",
    github: "https://github.com/atapia27/studyHub",
    featured: true,
  },
  {
    id: "chat-application",
    title: "Chat Application",
    description:
      "Web messaging platform with login functionality, conversation history tracking, text & image functionality, and profile customization using React, Firebase, JavaScript, and TypeScript",
    technologies: ["React", "Firebase", "JavaScript", "TypeScript", "Python"],
    image: "/img/Chat.png",
    link: "https://chat-application-alejandro-tapia.netlify.app",
    github: "https://github.com/atapia27/Alejandro_Tapia_ChatApplication",
    featured: false,
  },
  {
    id: "stock-predictor",
    title: "Stock Predictor",
    description:
      "Web application allowing users to search for company relevant stock information, predicting future trends, and generating forecast plots components for up to 4 years",
    technologies: ["Python", "TensorFlow", "Prophet API"],
    image: "/img/Stock.png",
    link: "https://stockpredictor.streamlit.app/",
    github: "https://github.com/atapia27/Stock-Predictor",
    featured: false,
  },
  {
    id: "personal-website-legacy",
    title: "Personal Website (Legacy)",
    description:
      "My previous personal website built with Vue.js. This was my first portfolio showcasing skills and projects. Currently archived as I've moved to this new React-based portfolio.",
    technologies: ["Vue", "Tailwind", "JavaScript"],
    image: "/img/Portfolio.png",
    link: undefined,
    github: "https://github.com/atapia27/atapia27.github.io",
    featured: false,
  },
]; 