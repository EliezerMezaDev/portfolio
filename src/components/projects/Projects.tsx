import { useState } from "react";

//? css
import "./projects.css";

//? data
import { PROJECTS, PROJECT_CATEGORIES } from "../../assets/data";

//? icons
import { FaGithub } from "react-icons/fa";
import { MdDesktopWindows } from "react-icons/md";

//? interfaces
import { Project, ProjectCategory } from "../../interfaces";

//? others
import { OptImg } from "../globals/OptImg";

export const Projects = () => {
  const [currentCategory, changeCurrentCategory] = useState("All");

  let projectSource = PROJECTS;

  function selectCategory(_category: ProjectCategory) {
    changeCurrentCategory(_category);

    projectSource = PROJECTS.filter((p: Project) => p.category === _category);
  }

  return (
    <>
      <section className="projects section" id="projects">
        <h2 className="section__title">Mis proyectos</h2>
        <h3 className="section__subtitle">
          Algunos proyectos en lo que he participado
        </h3>

        <div className="projects__container container grid">
          <ul className="projects__categories">
            {PROJECT_CATEGORIES &&
              PROJECT_CATEGORIES.map((c: ProjectCategory) => {
                return (
                  <button
                    className={
                      currentCategory === c
                        ? "projects__category bordered current-category"
                        : "projects__category bordered"
                    }
                    onClick={() => selectCategory(c)}
                  >
                    {c}
                  </button>
                );
              })}
          </ul>

          <div className="projects__wrapper">
            {projectSource &&
              projectSource.map((project: Project, index) => {
                return (
                  <article className="project bordered" key={index}>
                    <div className="project__image">
                      <OptImg src={project.image} alt={`project_${index}`} />
                    </div>

                    <div className="project__data">
                      <h5 className="project__title"> {project.label} </h5>

                      <span className="project__links">
                        <a href={project.url.github}>
                          <FaGithub />
                        </a>

                        <a href={project.url.github}>
                          <MdDesktopWindows />
                        </a>
                      </span>
                    </div>
                  </article>
                );
              })}
          </div>

          {/* <a className="projects__anchor" href="/"> Ver todos</a> */}
        </div>
      </section>
    </>
  );
};
