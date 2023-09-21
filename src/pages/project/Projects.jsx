import { useState } from "react";

import { useTranslation } from "react-i18next";
import SectionTitle from "../../components/SectionTitle";

import "./Projects.css";
import { AiFillGithub } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillCursorFill } from "react-icons/bs";

import image1 from "../../assets/projects/1-1.png";
import image2 from "../../assets/projects/1-2png.png";
import SingleProject from "./SingleProject";

const projects = [
  {
    image: [image1, image2],
    title: "E-Commerce",
    github: "",
    demo: "",
  },
  {
    image: [image1, image2],
    title: "E-Commerce",
    github: "",
    demo: "",
  },
  {
    image: [image1, image2],
    title: "E-Commerce",
    github: "",
    demo: "",
  },
  {
    image: [image1, image2],
    title: "E-Commerce",
    github: "",
    demo: "",
  },
  {
    image: [image1, image2],
    title: "E-Commerce",
    github: "",
    demo: "",
  },
  {
    image: [image1, image2],
    title: "E-Commerce",
    github: "",
    demo: "",
  },
];
const Projects = () => {
  const [open, setopen] = useState(null);
  const { t } = useTranslation();
  const title = t("project");
  const subtitle = t("projectsub");

  return (
    <>
      <div className=" relative w-full overflow-hidden-web flex justify-center">
        <div className="w-full  flex flex-col xl:w-[70%]">
          <div className="w-full">
            <SectionTitle title={title} subtitle={subtitle} />
          </div>
          <div className=" containerimage  ">
            {projects?.map((project, index) => {
              return (
                <div key={index} className="cardimage">
                  <div className="overlaycard"></div>
                  <div className="image">
                    <img src={project.image[0]} alt={project.title} />
                  </div>
                  <div className="cardicon">
                    <a href={project.github} target="_blank">
                      <AiFillGithub />
                    </a>
                    <a href={project.demo} target="_blank">
                      <BsFillCursorFill />
                    </a>
                    <div onClick={() => setopen(project)}>
                      <BsFillEyeFill />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {open && <SingleProject setopen={setopen} project={open} />}
      </div>
    </>
  );
};

export default Projects;
