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
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        {typeof navBar !== "string" &&
          navBar.map((nav, i) => (
            <NavLink key={i} to={nav.path} className="link">
              {nav.name}
            </NavLink>
          ))}
      </div>
      <div className="social_med">
        <NavLink to="www.linkedin.com/in/mohammedٍshaaban" className="scoial">
          <BsLinkedin />
          <p>{t("Linkedin")}</p>
        </NavLink>
        <NavLink
          to="https://github.com/Mohammed-Shaaban-Ali"
          className="scoial"
        >
          <BsGithub />
          <p>{t("Github")}</p>
        </NavLink>
        <NavLink
          to="https://api.whatsapp.com/send/?phone=201224146762"
          className="scoial"
        >
          <BsWhatsapp />
          <p>{t("Whatsapp")}</p>
        </NavLink>
        <NavLink
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
