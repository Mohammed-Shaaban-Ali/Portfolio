import SectionTitle from "../components/SectionTitle";
import Form from "../components/Form";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

const Content = () => {
  const { t } = useTranslation();
  const title = t("contenttitle");
  const subtitle = t("contentsubtitle");
  return (
    <div
      id="contact"
      className=" relative w-full overflow-hidden-web flex flex-col items-center"
    >
      <div className="blur blurcontant"></div>
      <div className="blur blurcontant2"></div>
      <div className="formamrgn w-full flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title={title} subtitle={subtitle} />
        </div>
        <div className=" w-full flex justify-center items-center">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              style={{ justifyContent: "center" }}
              className=" w-full sm:w-[90%] md:w-[80%] sm:h-[600px] p-4 flex flex-col sm:flex-row gap-4 items-center content-center"
            >
              <div className="flex justify-center"></div>
              <Form />
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </div>
  );
};

export default Content;
