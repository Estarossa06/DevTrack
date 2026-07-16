import type { Project } from "@/types/project";

export const mockProjects: Project[] = [
  {
    id: "1",

    title: "DevTrack",

    description:
      "Workspace personal para desarrolladores orientado a preservar el contexto de los proyectos.",

    status: "active",

    priority: "high",

    progress: 35,

    lastCheckpoint:
      "Definición del Product Blueprint y arquitectura del Project Workspace.",

    nextStep:
      "Implementar el módulo Projects y el primer Project Workspace.",

    startDate: "2026-06-20",

    repository: "https://github.com/user/devtrack",

    demoUrl: "",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],

    createdAt: "2026-06-20",

    updatedAt: "2026-07-15",
  },

  {
    id: "2",

    title: "Green Wave",

    description:
      "Sistema para el monitoreo y automatización del cultivo de microalgas.",

    status: "active",

    priority: "high",

    progress: 75,

    lastCheckpoint:
      "Desarrollo del sistema web para monitoreo del fotobiorreactor.",

    nextStep:
      "Integrar el monitoreo en tiempo real con el backend.",

    startDate: "2025-08-01",

    repository: "",

    demoUrl: "",

    technologies: [
      "Arduino",
      "React",
      "Node.js",
      "MongoDB",
    ],

    createdAt: "2025-08-01",

    updatedAt: "2026-07-15",
  },

  {
    id: "3",

    title: "Portfolio",

    description:
      "Portafolio profesional para mostrar proyectos y experiencia.",

    status: "planning",

    priority: "medium",

    progress: 10,

    lastCheckpoint:
      "Definición de la estructura inicial del sitio.",

    nextStep:
      "Diseñar la página principal y la sección de proyectos.",

    startDate: "2026-07-10",

    repository: "",

    demoUrl: "",

    technologies: [
      "React",
      "Tailwind CSS",
    ],

    createdAt: "2026-07-10",

    updatedAt: "2026-07-15",
  },
];