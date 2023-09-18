import { m, LazyMotion, domAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

const SectionTitle = (props) => {
  const { t } = useTranslation();

  const { title, subtitle } = props;
  const font = t("font");

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-primary-600 p-6 noselect"
      >
        <span
          className="opacity-50"
          style={{
            textTransform: "uppercase",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}
        >
          {subtitle}
        </span>
        <h2
          className=" font-extrabold tracking-wider text-4xl sm:text-4xl md:text-6xl"
          style={{ fontFamily: "Morganite Black" }}
        >
          {title.split("").map((char, index) => {
            if (char === " ") {
              return " ";
            }
            return (
              <span key={index} className="bounce">
                {char}
              </span>
            );
          })}
        </h2>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;
