import { useState } from "react";

//? css
import "./header.css";

//? data
import { NAV_LINK } from "../../assets/data";

//? icons
import { FaWindowClose } from "react-icons/fa";
import { BsGrid1X2Fill } from "react-icons/bs";

//? others
import { Link } from "../../interfaces";

export const Header = () => {
  const [showMenu, toggleShowMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="nav__logo">
          EMZ
        </a>
        <div className={`${showMenu ? "nav__menu show-menu " : "nav__menu"}`}>
          {/* ! grid */}
          <ul className="nav__list">
            {NAV_LINK &&
              NAV_LINK.map((l: Link, index) => {
                return (
                  <li className="nav__item" key={index}>
                    <a
                      href={l.url}
                      className={`${
                        l.url === "#home"
                          ? "nav__link active-link"
                          : "nav__link"
                      }`}
                      onClick={() => toggleShowMenu(false)}
                    >
                      {l.icon} {l.label}
                    </a>
                  </li>
                );
              })}
          </ul>

          <FaWindowClose
            className="nav__close"
            onClick={() => toggleShowMenu(false)}
          />
        </div>

        <div
          className="nav__toggle"
          onClick={() => {
            toggleShowMenu(true);
          }}
        >
          <BsGrid1X2Fill />
        </div>
      </nav>
    </header>
  );
};
