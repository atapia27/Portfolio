export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Stealth Startup",
    period: "Feb 2024 - Present (1y 5m)",
    description: "Saas analytics, client solutions",
    technologies: ["SQL", "React", "Python", "Node.js", "Postgres", "Next.js", "Tailwind CSS"],
    achievements: [
      "Built internal design system from scratch using React, enabling engineers to implement complex UI patterns 40% faster through composable, accessible components. Reduced feedback integration time from days to hours, allowing the team to align on prototypes within 1–2 working sessions instead of full sprint cycles.",
      "Integrated AI search functionality using OpenAI GPT-4o API and Elasticsearch, enabling non-technical users to retrieve campaign insights while maintaining security through prompt sanitization and role-aware access controls.",
      "Implemented real-time analytics and custom filters into the dashboard, allowing stakeholders to monitor performance and user engagement metrics with greater precision and responsiveness."
    ],
  },
  {
    title: "Frontend Developer",
    company: "Quorus",
    period: "May 2023 - Feb 2024 (9m)",
    description: "Investment platform providing accessibility in Finance",
    technologies: ["SQL", "AWS", "TypeScript", "Redux", "Python", "Azure", "Next.js", "FastAPI"],
    achievements: [
      "Led migration from Vue to Next.js, architecting a component library in TypeScript and Tailwind that increased UI consistency, reduced frontend maintenance effort, and improved page load performance by 15%.",
      "Leveraged unique approach rooted in cognitive science to build an investment dashboard, integrating continuous user feedback and aligning technical choices with how users process complex financial data under uncertainty, reducing cognitive friction and increasing clarity, trust, and decision confidence.",
      "Improved real-time data performance, optimized data retrieval, and minimized payload sizes, reducing API response times by 400ms and enhancing the user experience in dynamic scenarios, such as fluctuating stock prices."
    ],
  },
  {
    title: "Frontend Developer",
    company: "Breakout LA",
    period: "Oct 2022 - Apr 2023 (6m)",
    description: "eCommerce",
    technologies: ["React", "CSS", "Redux", "React Native", "HTML", "Figma", "REST API"],
    achievements: [
      "Accelerated product listing processes through deployed functionality for user product submissions, reducing time to market from up to 7 days to under 24 hours and boosting weekly product availability.",
      "Aligned platform branding and UI/UX in collaboration with the client and designer to create a visually cohesive, user-centered experience, cutting navigation-related support tickets by nearly 50%.",
      "Enhanced platform stability through rigorous testing protocols, simulating high-traffic conditions to identify and resolve potential issues before launch, increasing uptime by 40% during high-traffic product launches to improve reliability and user trust."
    ],
  },
  {
    title: "Python AI and ML Tutor",
    company: "UCLA",
    period: "Jun 2020 - Sep 2022 (2y 3m)",
    description: "Tutor for UCLA python class, based on merit / performance",
    technologies: ["Python", "Machine Learning", "AI", "Education"],
    achievements: [
      "Enhanced instruction on Python fundamentals and introductory machine learning concepts, including supervised learning, classification algorithms, model evaluation, and data manipulation, strengthening student understanding of AI-driven programming practices.",
      "Supported over 150 students through labs, discussions, and one-on-one mentoring, helping them master programming concepts and foundational machine learning topics such as regression analysis, cross-validation, and basic neural networks.",
      "Collaborated with faculty to design and align lesson plans focused on AI and algorithmic thinking, enhancing curriculum consistency and improving student ability to translate theoretical concepts into practical coding projects."
    ],
  },
]; 