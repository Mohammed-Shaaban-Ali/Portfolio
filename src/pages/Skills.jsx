import { useTranslation } from "react-i18next";
import MarqueeCards from "../components/MarqueeCards";
import SectionTitle from "../components/SectionTitle";
import SkillsCards from "../components/SkillsCards";
import { useEffect } from "react";

const Skills = () => {
  const { t } = useTranslation();
  const title = t("skillsSction");
  const subtitle = t("skillsSubtitle");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      id="skills"
      className=" relative w-full overflow-hidden-web flex justify-center"
    >
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="blur blurskills"></div>
        <div className="blur blurskills2"></div>
        <div className="w-full">
          <SectionTitle title={title} subtitle={subtitle} />
        </div>
        <div
          data-aos="fade-up"
          className="xl:border-l-2 xl:border-r-2 xl:border-primary-400  dirction skillsborder"
        >
          <div data-aos="fade-up" data-aos-duration="1000" className="relative">
            <div className="absolute top-[45px] w-full h-[1px]  bg-primary-400"></div>
            <MarqueeCards direction="left">
              <SkillsCards />
            </MarqueeCards>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="relative">
            <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
            <MarqueeCards direction="right">
              <SkillsCards />
            </MarqueeCards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
