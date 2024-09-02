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
              key={index}
              title={`redirec to ${l.url}`}
              href={l.url}
              className="floatingbar__icon"
              target="_blank"
            >
              {l.icon}
            </a>
          );
        })}
    </div>
  );
};
