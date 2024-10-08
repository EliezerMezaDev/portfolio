//? interfaces
import { Link, Project, ProjectCategory, Skill } from "../interfaces";

//? icons
import {
  FaCss3,
  FaHome,
  FaImage,
  FaFigma,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";

import { SiPhp, SiSupabase, SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAV_LINK: Link[] = [
  {
    icon: <FaHome className="nav__icon" />,
    label: "Inicio",
    url: "#home",
  },
  {
    icon: <FaCss3 className="nav__icon" />,
    label: "Tecnologias",
    url: "#skills",
  },
  {
    icon: <FaImage className="nav__icon" />,
    label: "Proyectos",
    url: "#projects",
  },
  {
    icon: <FaTelegramPlane className="nav__icon" />,
    label: "Contacto",
    url: "#contact",
  },
];

export const SOCIAL_LINK: Link[] = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/eliezer-a-meza-7a1b882b9/",
  },
  {
    icon: <FaGithub />,
    url: "https://eliezermezadev.github.io/TheCocktailMenu/",
  },
];

export const PROJECTS: Project[] = [
  {
    label: "The cocktail menu",
    image: { src: "images/projects", file: "the_cocktail_menu" },
    category: "Desarrollo web",
    url: {
      github: "https://github.com/EliezerMezaDev/TheCocktailMenu",
      demo: "https://eliezermezadev.github.io/TheCocktailMenu",
    },
  },

  {
    label: "NotesApp",
    image: { src: "images/projects", file: "notes_app" },
    category: "Desarrollo web",
    url: {
      github: "https://github.com/EliezerMezaDev/NotesApp",
      demo: "https://eliezermezadev.github.io/NotesApp",
    },
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "All",
  "Desarrollo web",
  "Diseño",
  "Practica",
];

export const SKILLS: Skill[] = [
  {
    label: "Javascript",
    type: "frontend",
    icon: <FaJs />,
  },
  {
    label: "SASS",
    type: "frontend",
    icon: <FaSass />,
  },
  {
    label: "React",
    type: "frontend",
    icon: <FaReact />,
  },
  {
    label: "Tailwind",
    type: "frontend",
    icon: <SiTailwindcss />,
  },

  {
    label: "NodeJS",
    type: "backend",
    icon: <FaNodeJs />,
  },
  {
    label: "PHP",
    type: "backend",
    icon: <SiPhp />,
  },

  {
    label: "Postgresql",
    type: "database",
    icon: <BiLogoPostgresql />,
  },
  {
    label: "Supabase",
    type: "database",
    icon: <SiSupabase />,
  },

  {
    label: "Figma",
    type: "desing",
    icon: <FaFigma />,
  },
];
