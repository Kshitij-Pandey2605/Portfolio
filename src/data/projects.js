import havellsImg from '../assets/havells.png';

export const projectsData = [
  // ── FULL STACK ─────────────────────────────────────────────────
  {
    id: "fitlife-ai",
    title: "FitLife AI",
    description: "AI-powered health platform that analyzes user body data (height, weight, age, activity level) and generates personalized diet plans and workout routines. Features progress tracking, meal suggestions, and real-time analytics dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Kshitij-Pandey2605/dietanalyzer-",
    live: "https://dietanalyzer-fitlife.netlify.app",
    youtube: "",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&q=80",
    featured: true
  },
  {
    id: "contentcraft-ai",
    title: "ContentCraft AI",
    description: "Production-ready AI-powered content generation platform that helps marketers and creators produce viral-worthy content. AI tweet generator, hashtag optimizer, sentiment analysis, and analytics dashboard. Reduced content creation time by 70%.",
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
    github: "https://github.com/Kshitij-Pandey2605/contentcraft-ai",
    live: "https://contentcraft-ai-snowy.vercel.app/login",
    youtube: "",
    category: "Full Stack",
    image: new URL('../assets/contentcraft-dashboard.png', import.meta.url).href,
    featured: true
  },

  // ── FRONTEND ───────────────────────────────────────────────────
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description: "Real-time weather application using OpenWeatherMap API. Features location-based weather tracking, 5-day forecast, interactive UI with dynamic backgrounds, and metric/imperial unit toggling.",
    tech: ["React", "API", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Kshitij-Pandey2605/",
    live: "https://your-weather-app.netlify.app",
    youtube: "",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    featured: false,
    isInternal: false
  },
  {
    id: "todo-app",
    title: "Smart Todo List",
    description: "Advanced task management system with categories, priorities, due dates, drag-and-drop ordering, and progress tracking. Uses local storage for persistence and features import/export capabilities.",
    tech: ["React", "Local Storage", "Framer Motion"],
    github: "https://github.com/Kshitij-Pandey2605/",
    live: "https://your-todo-app.netlify.app",
    youtube: "",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    featured: false,
    isInternal: false
  },

  // ── CLONES ─────────────────────────────────────────────────────
  {
    id: "havells-clone",
    title: "Havells Website Clone",
    description: "Pixel-perfect Havells website clone — demonstrates extreme attention to detail and ability to replicate complex enterprise-grade layouts.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Kshitij-Pandey2605",
    live: "",
    youtube: "https://youtu.be/Ol9UBQls6OE",
    category: "Clones",
    image: havellsImg,
    featured: true
  },
  {
    id: "dream-clone",
    title: "Dream Website Clone",
    description: "A comprehensive clone of the Dream website built with modern HTML and CSS practices — illustrating responsive design and modern layout patterns.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Kshitij-Pandey2605",
    live: "",
    youtube: "https://youtu.be/Wb-3WKllPEY",
    category: "Clones",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featured: false
  }
];

export const projectCategories = ["All", "Full Stack", "Frontend", "Clones"];
