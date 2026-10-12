import { Project, SkillCategory, ExperienceItem, StatItem, SocialLink } from "../types/portfolio";

export const PERSONAL_INFO = {
  name: "Manikant Kumar",
  title: "Full Stack Engineer",
  company: "Appspine Technologies",
  roleTagline: "Full Stack Engineer @ Appspine Technologies • React.js • Next.js 16 • Node.js • Java Spring Boot",
  headline: "Full Stack Engineer Architecting Scalable & Real-Time Production Systems",
  subheadline:
    "Full Stack Engineer at Appspine Technologies specializing in React.js, Next.js 16, TypeScript, Node.js, Express.js, Java Spring Boot, Python FastAPI, PostgreSQL, and Socket.IO real-time web architectures with 99.9% uptime.",
  status: "Full Stack Engineer @ Appspine Technologies | Open for Collaborations",
  location: "Noida, Uttar Pradesh, India",
  email: "rajmanikant100@gmail.com",
  phone: "+91-9905959438",
  whatsappNumber: "919905959438",
  yearsExperience: "1+ Years",
  completedProjects: "10+",
  githubUrl: "https://github.com/VEDANTraj9",
  linkedinUrl: "https://www.linkedin.com/in/manikant-kumar",
  portfolioUrl: "https://manikantportfolio-drab.vercel.app/",
  resumePdfUrl: "/Manikant_Kumar.pdf",
  resumeDownloadUrl: "/api/resume?download=1",
  profileImage: "/profile.png",
};

export const SEO_KEYWORDS = [
  "Manikant Kumar",
  "Full Stack Developer",
  "Full Stack Engineer",
  "Appspine Technologies",
  "React.js Developer",
  "Next.js 16 Developer",
  "TypeScript Engineer",
  "Node.js Backend Developer",
  "Express.js REST APIs",
  "Java Spring Boot",
  "Python FastAPI",
  "PostgreSQL",
  "MySQL Database",
  "Socket.IO Real-Time",
  "Redis Cache",
  "Razorpay Payment Gateway",
  "Microservices Architecture",
  "Full Stack Developer Noida",
  "Software Engineer India",
  "Scalable Web Applications",
];

export const STATS: StatItem[] = [
  {
    label: "Active Users Served",
    value: "5,000+",
    subtext: "On live production platforms (NAVAMBHAW)",
    icon: "Users",
  },
  {
    label: "Live Transactions",
    value: "10k+",
    subtext: "100% ACID consistency & zero leakage",
    icon: "ShieldCheck",
  },
  {
    label: "API Latency & Uptime",
    value: "<150ms",
    subtext: "99.9% uptime with Redis caching",
    icon: "Zap",
  },
  {
    label: "Engineering Academic CGPA",
    value: "8.10",
    subtext: "B.Tech in Computer Science (KK University)",
    icon: "GraduationCap",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code",
    description: "Core languages for building robust backend services and interactive frontends.",
    skills: [
      { name: "Java (Core & Advanced)", level: 92, highlight: true },
      { name: "JavaScript (ES6+)", level: 95, highlight: true },
      { name: "TypeScript", level: 90, highlight: true },
      { name: "Python", level: 86, highlight: true },
      { name: "SQL (MySQL, PostgreSQL)", level: 92, highlight: true },
      { name: "C#", level: 80 },
      { name: "HTML5 & CSS3", level: 95 },
    ],
  },
  {
    title: "Frontend Technologies",
    iconName: "Layout",
    description: "Modern component-driven web frameworks with responsive UI/UX.",
    skills: [
      { name: "React.js", level: 95, highlight: true },
      { name: "Next.js (App Router)", level: 90, highlight: true },
      { name: "Svelte", level: 82 },
      { name: "Tailwind CSS", level: 94, highlight: true },
      { name: "Bootstrap 5", level: 90 },
      { name: "Responsive & Accessible Design", level: 94 },
    ],
  },
  {
    title: "Backend & Distributed Systems",
    iconName: "Server",
    description: "Microservices, real-time WebSockets, transaction engines, and REST APIs.",
    skills: [
      { name: "Node.js & Express.js", level: 94, highlight: true },
      { name: "Java Spring Boot", level: 90, highlight: true },
      { name: "Python FastAPI", level: 88, highlight: true },
      { name: "Socket.IO (Real-Time Chat & Audio)", level: 92, highlight: true },
      { name: "Razorpay Payment Gateway", level: 90, highlight: true },
      { name: "JWT Authentication & Role RBAC", level: 92 },
      { name: "ASP.NET Core", level: 78 },
    ],
  },
  {
    title: "Databases, Tools & DevOps",
    iconName: "Database",
    description: "Relational/NoSQL databases, caching layers, and continuous deployment.",
    skills: [
      { name: "MySQL & Transaction Locking", level: 94, highlight: true },
      { name: "PostgreSQL", level: 90, highlight: true },
      { name: "MongoDB", level: 85 },
      { name: "Redis Caching & Queues", level: 88, highlight: true },
      { name: "Git, GitHub & Netlify CI/CD", level: 92, highlight: true },
      { name: "Postman API Automation", level: 90 },
      { name: "Maven, VS Code & IntelliJ IDEA", level: 92 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "leadyfy-os",
    title: "Leadyfy OS – UGC Agency Operations Platform",
    description:
      "Full-stack agency operations platform built with Next.js App Router and TypeScript, implementing role-based access control (RBAC) and Kanban production workflows.",
    longDescription:
      "Engineered with Next.js App Router, TypeScript, PostgreSQL, and Prisma ORM. Built Kanban-based video production pipelines with client feedback tracking, structured task workflows, and responsive UI deployed on Vercel.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/VEDANTraj9",
    liveUrl: "https://github.com/VEDANTraj9",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    category: "Full Stack",
    featured: true,
    metrics: "Next.js App Router & RBAC Security",
  },
  {
    id: "navambhaw-platform",
    title: "NAVAMBHAW - Real-Time Consultation Platform",
    description:
      "Production consultation platform handling live audio calls and real-time chat for 5,000+ active users with a per-minute wallet billing engine.",
    longDescription:
      "Architected with React.js, Node.js, Express.js, MySQL, Python FastAPI, and Socket.IO achieving sub-150ms latency. Implemented ACID SQL transaction billing engine for per-minute deductions with zero billing leakage and Razorpay gateway integration.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "FastAPI", "Socket.IO", "Redis", "Razorpay"],
    githubUrl: "https://github.com/VEDANTraj9",
    liveUrl: "https://navambhaw.com/",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    category: "Full Stack",
    featured: true,
    metrics: "5,000+ active users, sub-150ms latency",
  },
  {
    id: "ai-email-writer",
    title: "AI Email Writer Assistant",
    description:
      "Intelligent AI productivity web application using OpenAI GPT & Google Gemini APIs to dynamically generate context-aware business emails, cutting drafting time by 80%.",
    longDescription:
      "Scalable Java Spring Boot REST API backend with environment-level API key management, request rate throttling, and responsive React.js UI with custom tone adjustments and instant copy workflows.",
    techStack: ["React.js", "Java Spring Boot", "OpenAI GPT", "Google Gemini", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/VEDANTraj9",
    liveUrl: "https://email-writer-assistant.netlify.app/",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1000&q=80",
    category: "AI & Cloud",
    featured: true,
    metrics: "80% drafting turnaround reduction",
  },
  {
    id: "weekend-getaways-travel",
    title: "Weekend Getaways – Travel Discovery Platform",
    description:
      "Interactive travel discovery web app featuring curated destination cards, dynamic itinerary filtering, modular UI, and automated CI/CD deployment pipelines.",
    longDescription:
      "Built with React.js, JavaScript, and custom CSS3 responsive design. Configured GitHub Actions and Netlify CI/CD pipeline for automated test builds, linting, and zero-downtime production deployments.",
    techStack: ["React.js", "JavaScript", "CSS3", "GitHub Actions", "Netlify CI/CD"],
    githubUrl: "https://github.com/VEDANTraj9",
    liveUrl: "https://weekendstravel.netlify.app/",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80",
    category: "Frontend & UI",
    featured: true,
    metrics: "Automated CI/CD zero-downtime builds",
  },
  {
    id: "digital-kharidi-ecommerce",
    title: "Digital Kharidi - Full-Stack E-Commerce",
    description:
      "Feature-rich e-commerce platform with indexed SQL search filters, persistent cart management, and sub-second catalog navigation.",
    longDescription:
      "Engineered backend REST endpoints in Express.js & MySQL with Redis caching, boosting page load speeds by 35% with 99.9% API uptime across heavy catalog browsing.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "Redis", "REST APIs"],
    githubUrl: "https://github.com/VEDANTraj9",
    liveUrl: "https://digitalkharidi.com/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    category: "Full Stack",
    featured: false,
    metrics: "35% faster load speed, 99.9% uptime",
  },
  {
    id: "kaira-jewellery-erp",
    title: "Kaira Jewellery ERP & Billing System",
    description:
      "Enterprise ERP and website billing software developed using Svelte and ASP.NET Core, cutting manual invoice generation time by 40%.",
    longDescription:
      "Built modular inventory calculation components, automated tax and discount modules, and secure transaction receipts with C# and ASP.NET Core backend services.",
    techStack: ["Svelte", "C#", "ASP.NET Core", "SQL Server", "MVC Architecture"],
    githubUrl: "https://github.com/VEDANTraj9",
    liveUrl: "https://kskairajewellers.com/",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
    category: "Full Stack",
    featured: false,
    metrics: "40% faster invoice generation",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-appspine",
    role: "Full Stack Engineer",
    company: "Appspine Technologies",
    period: "September 2026 – Present",
    location: "Noida, Uttar Pradesh, India",
    type: "Work",
    description:
      "Engineering scalable web applications by building responsive frontend components, implementing robust backend services, and ensuring seamless data flow across enterprise platforms.",
    achievements: [
      "Develop and maintain scalable web applications by building responsive frontend components and integrating backend services using modern web technologies.",
      "Implement and integrate RESTful APIs, manage database operations, and troubleshoot application issues to ensure reliable data flow and functionality.",
      "Collaborate on feature development, bug fixes, and code improvements to enhance application performance, maintainability, and user experience.",
      "Contribute to end-to-end development by coordinating frontend and backend functionality, testing integrations, and supporting ongoing application improvements.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "PostgreSQL",
      "MySQL",
      "Git",
    ],
  },
  {
    id: "exp-mojija",
    role: "Full Stack Engineer",
    company: "Mojija E-Commerce",
    period: "August 2025 – September 2026",
    location: "Noida, Uttar Pradesh, India",
    type: "Work",
    description:
      "Engineered full-stack systems and real-time architectures for high-traffic live production platforms including NAVAMBHAW and Digital Kharidi.",
    achievements: [
      "Developed production applications, including NAVAMBHAW and Digital Kharidi, using React.js, Node.js, Express.js, Python FastAPI, and MySQL.",
      "Implemented REST API integrations, real-time features using Socket.IO, JWT authentication, Redis caching, and database-driven wallet billing workflows.",
      "Engineered real-time transactional wallet billing engine leveraging SQL transactions for per-minute deductions, maintaining 100% ACID consistency and zero billing leakage across 10,000+ live transactions.",
      "Integrated Razorpay payment gateway, cutting API response times by 45% with Redis caching and handling 200+ concurrent astrologer queue requests.",
      "Contributed to Kaira Jewellery ERP & Billing Software using Svelte, C#, and ASP.NET Core, reducing manual invoice generation and billing processing time by 40%.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Python FastAPI",
      "MySQL",
      "Socket.IO",
      "Redis",
      "Razorpay",
      "JWT",
    ],
  },
  {
    id: "exp-ducat",
    role: "Java Full Stack Developer Intern",
    company: "Ducat School of AI",
    period: "February 2025 – January 2026",
    location: "Noida, Uttar Pradesh, India",
    type: "Work",
    description:
      "Completed intensive hands-on software development training, building 5+ enterprise applications using Java, Spring Boot, Spring Data JPA, Hibernate, JavaScript, and MySQL.",
    achievements: [
      "Completed intensive hands-on software development training, building 5+ enterprise applications using Java, Spring Boot, Spring Data JPA, Hibernate, JavaScript, and MySQL.",
      "Designed 3-tier MVC architecture with Controllers, Services, and Repositories with secure REST API endpoints and database persistence.",
      "Implemented comprehensive database schema normalization, indexing, and transactional integrity.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "JavaScript",
      "MySQL",
      "RESTful APIs",
      "MVC Architecture",
    ],
  },
  {
    id: "exp-education",
    role: "Bachelor of Technology in Computer Science and Engineering",
    company: "KK University",
    period: "2022 – May 2026",
    location: "Nalanda, Bihar, India",
    type: "Education",
    description:
      "Bachelor of Technology in Computer Science and Engineering with CGPA: 8.10 / 10.0.",
    achievements: [
      "Academic Performance: CGPA 8.10 / 10.0.",
      "Core Coursework: Data Structures, Algorithms, Object-Oriented Programming (Java/C++), Operating Systems, DBMS (SQL), Computer Networks.",
      "Led multiple web engineering and hackathon development initiatives across university technical chapters.",
    ],
    technologies: [
      "Data Structures & Algorithms",
      "Java",
      "Database Systems (SQL)",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/VEDANTraj9",
    icon: "Github",
    username: "VEDANTraj9",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/manikant-kumar-900158211/",
    icon: "Linkedin",
    username: "in/manikant-kumar",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/919905959438",
    icon: "MessageCircle",
    username: "+91-9905959438",
  },
  {
    name: "Email",
    url: "mailto:rajmanikant100@gmail.com",
    icon: "Mail",
    username: "rajmanikant100@gmail.com",
  },
];
