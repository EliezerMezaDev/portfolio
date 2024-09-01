//? css
import { FaArrowRight } from "react-icons/fa";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";

export const Contact = () => {
  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section__title">Dejame un mensaje</h2>
        <h3 className="section__subtitle">Te responderé lo antes posible</h3>

        <div className="contact__container container grid">
          <div className="contact__info">
            <div className="contact__card">
              <MdEmail className="contact__icon" />

              <h4>Email</h4>
              <h5>eliezermeza.dev@gmail.com</h5>

              <a
                href="mailto: eliezermeza.dev@gmail.com"
                className="contact__link"
              >
                Escribeme <FaArrowRight className="contact__link__icon" />
              </a>
            </div>

            <div className="contact__card">
              <IoLogoWhatsapp className="contact__icon" />

              <h4>Whatsapp</h4>
              <h5>(+58)412-2970632</h5>

              <a href="https://wa.me/+584122970632" className="contact__link">
                Escribeme <FaArrowRight className="contact__link__icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
