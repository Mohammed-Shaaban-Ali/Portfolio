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
        <div className="scoial">
          <BsLinkedin />
          <p>{t("Linkedin")}</p>
        </div>
        <div className="scoial">
          <BsGithub />
          <p>{t("Github")}</p>
        </div>
        <div className="scoial">
          <BsWhatsapp />
          <p>{t("Whatsapp")}</p>
        </div>
        <div className="scoial">
          <BsFacebook />
          <p>{t("Facebook")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
