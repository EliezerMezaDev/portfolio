//? css
import "./skills.css";

//? interfaces
import { Skill } from "../../interfaces";

//? data
import { SKILLS } from "../../assets/data";
import { IoSparkles } from "react-icons/io5";

function getSkillByType(_type: string): Skill[] {
  return SKILLS.filter((s: Skill) => s.type === _type);
}

export const Skills = () => {
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section__title">Mis habilidades</h2>
        <h3 className="section__subtitle">
          Tecnologias con las que tengo experiencia
        </h3>

        <div className="skills__container container grid">
          {["frontend", "backend", "database", "desing"].map(
            (type: string, index) => {
              const sCurrent: Skill[] = getSkillByType(type);

              return (
                <>
                  {sCurrent.length > 0 && (
                    <ul key={index} className="skill__wrapper bordered">
                      {sCurrent.map((s: Skill, skillIndex) => {
                        return (
                          <li key={skillIndex} className="skill__item">
                            <span className="skill__icon">{s.icon}</span>
                            {s.label}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </>
              );
            }
          )}
        </div>
      </section>
    </>
  );
};
