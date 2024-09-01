//? icons
import { FaTelegramPlane } from "react-icons/fa";

export const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Eliezer Meza</h1>
      <h3 className="home__subtitle">Desarrollador Web</h3>
      <p className="home__description">Cine, Videjuegos, tecnologia</p>

      <a href="#contact" className="button button--flex">
        Contactame
        <FaTelegramPlane className="button__icon" />
      </a>
    </div>
  );
};
