import { m, LazyMotion, domAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import htmlIcon from "../assets/tech/html.png";
import cssIcon from "../assets/tech/css.png";
import jsIcon from "../assets/tech/javascript.png";
import reactIcon from "../assets/tech/reactjs.png";
import javaIcon from "../assets/tech/java.png";
import gitIcon from "../assets/tech/git.png";
import githubIcon from "../assets/tech/github.png";
import viteIcon from "../assets/tech/vite.svg";
import nodeIcon from "../assets/tech/node.webp";

const skillsIcon = [
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  viteIcon,
  nodeIcon,
];

const SkillsCards = () => {
  const { t } = useTranslation();
  const skills = t("skills.skill", { returnObjects: true });
  const fontsize = t("fontsize");
  return (
    <div className="flex dirction">
      <LazyMotion features={domAnimation} strict>
        {typeof skills !== "string" &&
          skills.map((skill, index) => (
            <m.div
              initial={{ scale: 0.8 }}
              animate={{
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
              key={index}
              className="card w-[300px] h-[300px] flex flex-col items-center  bg-primary-500 rounded-xl border-4 border-primary-600 cursor-pointer"
            >
              <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col">
                <img
                  className="h-[50px] flex justify-center items-center w-[50px]  bg-primary-500 rounded-[50%] p-1 object-contain"
                  src={skillsIcon[index]}
                  alt={skill.title}
                />
                <span
                  className="text-xl text-grayscale-950"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  {skill.title}
                </span>
                <span
                  className={`${fontsize} text-center bg-primary-500 text-grayscale-950 rounded-xl text-sm p-4`}
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  {skill.description}
                </span>
              </div>
            </m.div>
          ))}
      </LazyMotion>
    </div>
  );
};

export default SkillsCards;
