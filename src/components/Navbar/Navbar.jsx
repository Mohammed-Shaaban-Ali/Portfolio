import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";

import { AiTwotoneHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import { AiFillMessage } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FaAward } from "react-icons/fa";

import logo from "../../assets/logo.png";

const Navbar = () => {
  const { t } = useTranslation();
  const navBar = t("navbar.nav", { returnObjects: true });

  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "ar",
      name: "العربية",
      dir: "rtl",
      country_code: "sa",
    },
  ];

  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage, t]);

  return (
    <>
      <div className=" navbar">
        <div className="left">
          <img src={logo} alt="logo" />
        </div>
        <div className="center">
          {typeof navBar !== "string" &&
            navBar.map((nav, i) => (
              <NavLink key={i} to={nav.path} className="link">
                {nav.name}
              </NavLink>
            ))}

          {/* <NavLink to="/a" className="link">
            About
          </NavLink>
          <NavLink to="/a" className="link">
            Skills
          </NavLink>
          <NavLink to="/a" className="link">
            Projects
          </NavLink>
          <NavLink to="/a" className="link">
            Education
          </NavLink>
          <NavLink to="/a" className="link">
            Talk Me
          </NavLink> */}
        </div>
        <div className="right">
          <div className="lang">
            {languages.map(({ code, name, country_code }) => {
              if (currentLanguageCode !== code)
                return (
                  <div key={country_code}>
                    <div
                      onClick={() => {
                        i18next.changeLanguage(code);
                      }}
                    >
                      <span
                        className={`flag-icon flag-icon-${country_code} mx-2`}
                        style={{
                          opacity: currentLanguageCode === code ? 0.5 : 1,
                        }}
                      ></span>
                      {name}
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      </div>

      <div className="nav">
        <div className={`wrapper`}>
          <span>Home</span>
          <NavLink className={`icon nav_icon`}>
            <AiTwotoneHome />
          </NavLink>
        </div>
        <div className={`wrapper  `}>
          <span>About</span>
          <NavLink className={`icon nav_icon`}>
            <FaUserAlt />
          </NavLink>
        </div>
        <div className={`wrapper  `}>
          <span>Skills</span>
          <NavLink className={`icon nav_icon`}>
            <FaBookOpen />
          </NavLink>
        </div>

        <div className={`wrapper  `}>
          <span>Projects</span>
          <NavLink className={`icon nav_icon`}>
            <SiUpwork />
          </NavLink>
        </div>

        <div className={`wrapper  `}>
          <span>Education</span>
          <NavLink className={`icon nav_icon`}>
            <FaAward />
          </NavLink>
        </div>

        <div className={`wrapper  `}>
          <span>Talk Me</span>
          <a href="#contact" className={`icon nav_icon`}>
            <AiFillMessage />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
