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
      <div className="blur homeblur"></div>
      <div className="blur homeblur2"></div>
      <>
        <div className="blur heroblur"></div>
        <div
          id="hero"
          className="relative w-full flex justify-center items-center h-screen min-h-[600px]"
        >
          {/* HeroText  */}
          <div
            className="noselect w-fit h-fit text-grayscale-50 absolute z-10 flex flex-col justify-center items-center rounded-[50%]"
            id="repulse-div"
          >
            <>
              <h1
                className="text-center flex justify-center items-center flex-col opacity-100 text-7xl sm:text-9xl cursor-default"
                style={{ fontFamily: "SuperMario" }}
              >
                <span
                  data-aos="fade-right"
                  data-aos-duration="750"
                  className="who"
                  style={{ marginBottom: "20px" }}
                >
                  {who}{" "}
                </span>
                <div
                  className={`${font}`}
                  data-aos="fade-left"
                  data-aos-duration="1000"
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
                </div>
              </h1>
            </>
          </div>

          <HeroParticles />
        </div>
      </>
    </div>
  );
};

export default Home;
