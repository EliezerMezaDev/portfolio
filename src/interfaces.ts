import { ReactElement } from "react";

export type Link = {
  icon: ReactElement;
  label?: string;
  url: string;
};


export type ProjectCategory = "All" | "Desarrollo web" | "Diseño" | "Practica";

export type Project = {
  label: string;
  image: string;
  category: ProjectCategory;
  url: {
    github: string;
    demo: string;
  };
};

export type SkillType = "frontend" | "backend" | "database" | "desing";

export type Skill = {
  icon?: ReactElement;
  img?: string;
  label: string;
  type: SkillType;
};
