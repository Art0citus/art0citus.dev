export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Expenny",
    description:
      "Expense tracking and subscription management app built with Flutter, focused on clean mobile UX and organized financial tracking.",
    technologies: ["Flutter", "Dart", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
    image: "/images/expenny.png",
    featured: true,
  },
  {
    title: "LazyText",
    description:
      "Real-time messaging app with instant one-to-one communication, JWT authentication, persistent chat history, and Socket.IO-powered WebSocket communication.",
    technologies: [
      "Flutter",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
    ],
    github: "#",
    demo: "#",
    image: "/images/lazytext.png",
    featured: true,
  },
  {
    title: "ArtoBot AI",
    description:
      "AI-powered search and Q&A app using Flutter, FastAPI, and Gemini to deliver concise conversational answers through a clean cross-platform interface.",
    technologies: ["Flutter", "Dart", "FastAPI", "Python", "Gemini"],
    github: "#",
    demo: "#",
    image: "/images/artobot.png",
  },
  {
    title: "Image Classification",
    description:
      "Deep learning web app using MobileNetV2 to classify uploaded images and return top-3 predictions with confidence scores through a Streamlit interface.",
    technologies: [
      "Python",
      "TensorFlow",
      "MobileNetV2",
      "Streamlit",
      "OpenCV",
    ],
    github: "#",
    demo: "#",
    image: "/images/imageclassification.png",
  },
];