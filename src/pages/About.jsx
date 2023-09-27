import { useLocation } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ImageSlider from "../components/ImageSlider";
import avater from "../assets/avatar/avatar.png";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
const About = () => {
  const { pathname } = useLocation();

  const { t } = useTranslation();
  const title = t("about");
  const subtitle = t("Introduction");
  const aboutContent = t("about_content", { returnObjects: true });
  const arabFontsiz = t("fontsize");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      id="about"
      className={`w-full flex justify-center overflow-hidden-web  relative ${
        pathname === "/about" && "min-h-[75vh]"
      } `}
    >
      <div className="blur aboutblur"></div>

      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title={title} subtitle={subtitle} />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full md:w-[50%] md:h-full flex items-center mt-10">
            <>
              <p
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="text-grayscale-50 p-6 text-center flex flex-col gap-6"
              >
                {typeof aboutContent !== "string" &&
                  aboutContent.map((item, i) => (
                    <span
                      data-aos="fade-up"
                      // data-aos-anchor-placement="top-bottom"
                      className={`${
                        i === 0 && "text-primary-400"
                      } ${arabFontsiz}`}
                      key={i}
                    >
                      {item}
                    </span>
                  ))}
              </p>
            </>
          </div>
          <div className="w-full md:w-[50%] flex h-full items-center justify-center">
            <div className="w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] flex justify-center items-center">
              <ImageSlider images={avater} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
