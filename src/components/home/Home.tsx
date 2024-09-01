import "./home.css";

import { Data } from "./Data.js";
import { Social } from "../globals/Social.js";
import { OptImg } from "../globals/OptImg.js";

export const Home = () => {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__img">
              <OptImg src="images/me" file="me" alt="me" />
            </div>

            <Data />
          </div>
        </div>
      </section>
    </>
  );
};
