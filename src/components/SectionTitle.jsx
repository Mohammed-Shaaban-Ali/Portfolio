import { useTranslation } from "react-i18next";

const SectionTitle = ({ title, subtitle }) => {
  const { t } = useTranslation();

  const font = t("font");

  return (
    <>
      <div data-aos="fade-right" className="text-primary-500 p-6 noselect">
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
      </div>
    </>
  );
};

export default SectionTitle;
