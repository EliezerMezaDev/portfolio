//? css
import "./footer.css";

//? data
import { SOCIAL_LINK } from "../../assets/data";

//? interfaces
import { Link } from "../../interfaces";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__copy">
          © Copyright 2024. By <a href="/">Eliezer A Meza</a>
        </div>
      </div>
    </footer>
  );
};
