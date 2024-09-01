import { ReactElement } from "react";

export type Link = {
  icon: ReactElement;
  label?: string;
  url: string;
};

export type Image = {
  src: string;
  file: string;
};

export type ProjectCategory = "All" | "Desarrollo web" | "Diseño" | "Practica";

export type Project = {
  label: string;
  image: Image;
  category: ProjectCategory;
  url: {
    github: string;
    demo: string;
  };
};

export type SkillType = "frontend" | "backend" | "database" | "desing";

export type Skill = {
  icon?: ReactElement;
  img?: Image;
  label: string;
  type: SkillType;
};
