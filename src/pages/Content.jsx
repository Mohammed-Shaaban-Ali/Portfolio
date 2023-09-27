import SectionTitle from "../components/SectionTitle";
import Form from "../components/Form";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Content = () => {
  const { t } = useTranslation();
  const title = t("contenttitle");
  const subtitle = t("contentsubtitle");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{ justifyContent: "center" }}
              className=" w-full sm:w-[90%] md:w-[80%] sm:h-[600px] pb-4 flex flex-col sm:flex-row gap-4 items-center content-center"
            >
              <div className="flex justify-center"></div>
              <Form />
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Content;
