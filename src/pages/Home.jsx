import { m, LazyMotion, domAnimation } from "framer-motion";

import HeroParticles from "../components/Particles/HeroParticles";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  const who = t("Who`s");
  const name = t("name");
  const font = t("font");

  return (
    <div
      id="hero"
      className="w-full flex justify-center overflow-hidden-web relative"
    >
      <LazyMotion features={domAnimation} strict>
        <div className="blur heroblur"></div>
        <m.div
          id="hero"
          className="relative w-full flex justify-center items-center h-screen min-h-[600px]"
        >
          {/* HeroText  */}
          <div
            className="noselect w-fit h-fit text-grayscale-50 absolute z-10 flex flex-col justify-center items-center rounded-[50%]"
            id="repulse-div"
          >
            <LazyMotion features={domAnimation} strict>
              <m.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="text-center flex justify-center items-center flex-col opacity-100 text-7xl sm:text-9xl cursor-default"
                style={{ fontFamily: "SuperMario" }}
              >
                <m.span
                  initial={{ x: -100 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="who"
                  style={{ marginBottom: "20px" }}
                >
                  {who}{" "}
                </m.span>
                <m.div
                  className={`${font}`}
                  initial={{ x: 100 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  {name.split("").map((char, index) => {
                    if (char === " ") {
                      return " ";
                    }
                    return (
                      <span
                        key={index}
                        className="  name text-primary-400 bounce"
                      >
                        {char}
                      </span>
                    );
                  })}
                </m.div>
              </m.h1>
            </LazyMotion>
          </div>

          <HeroParticles />
        </m.div>
      </LazyMotion>
    </div>
  );
};

export default Home;
