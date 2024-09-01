//? data
import { SOCIAL_LINK } from "../../assets/data";

//? interfaces
import { Link } from "../../interfaces";

export const Social = () => {
  return (
    <div className="floatingbar floatingbar__social">
      {SOCIAL_LINK &&
        SOCIAL_LINK.map((l: Link, index) => {
          return (
            <a
              href={l.url}
              className="floatingbar__icon"
              target="_blank"
              key={index}
            >
              {l.icon}
            </a>
          );
        })}
    </div>
  );
};
