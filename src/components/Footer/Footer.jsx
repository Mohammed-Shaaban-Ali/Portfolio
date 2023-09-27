import "./Footer.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import { BsGithub, BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const { t } = useTranslation();
  const navBar = t("navbar.nav", { returnObjects: true });
  return (
    <footer>
      <div data-aos="zoom-in-right" className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="menu">
        {typeof navBar !== "string" &&
          navBar.map((nav, i) => (
            <NavLink
              data-aos="fade-up"
              data-aos-duration="1000"
              key={i}
              to={nav.path}
              className="link"
            >
              {nav.name}
            </NavLink>
          ))}
      </div>

      <div className="social_med">
        <NavLink
          data-aos="zoom-in-up"
          to="www.linkedin.com/in/mohammedٍshaaban"
          className="scoial"
        >
          <BsLinkedin />
          <p>{t("Linkedin")}</p>
        </NavLink>
        <NavLink
          data-aos="zoom-in-up"
          to="https://github.com/Mohammed-Shaaban-Ali"
          className="scoial"
        >
          <BsGithub />
          <p>{t("Github")}</p>
        </NavLink>
        <NavLink
          data-aos="zoom-in-up"
          to="https://api.whatsapp.com/send/?phone=201224146762"
          className="scoial"
        >
          <BsWhatsapp />
          <p>{t("Whatsapp")}</p>
        </NavLink>
        <NavLink
          data-aos="zoom-in-up"
          to="https://www.facebook.com/profile.php?id=100013011452691"
          className="scoial"
        >
          <BsFacebook />
          <p>{t("Facebook")}</p>
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
