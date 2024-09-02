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
    url: "https://github.com/EliezerMezaDev/",
  },
];

export const PROJECTS: Project[] = [
  {
    label: "example 1",
    image: { src: "images/projects", file: "asset1" },
    category: "Desarrollo web",
    url: {
      github: "/",
      demo: "/",
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
