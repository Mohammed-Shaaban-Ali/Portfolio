import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import SectionTitle from "../../components/SectionTitle";

import "./Projects.css";
import { AiFillGithub } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillCursorFill } from "react-icons/bs";

import image1 from "../../assets/projects/1.png";
import SingleProject from "./SingleProject";

const projects = [
  {
    image: [image1],
    title: "E-Commerce",
    github: "",
    demo: "",
    descrtiption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quidem tenetur eius, ullam quis.",
    category: "Full Stack",
  },
  {
    image: [image1],
    title: "E-Commerce",
    github: "",
    demo: "",
    descrtiption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quidem tenetur eius, ullam quis.",
    category: "React",
  },
  {
    image: [image1],
    title: "E-Commerce",
    github: "",
    demo: "",
    descrtiption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quidem tenetur eius, ullam quis.",
    category: "JavaScript",
  },
  {
    image: [image1],
    title: "E-Commerce",
    github: "",
    demo: "",
    descrtiption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quidem tenetur eius, ullam quis.",
    category: "Full Stack",
  },
  {
    image: [image1],
    title: "E-Commerce",
    github: "",
    demo: "",
    descrtiption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quidem tenetur eius, ullam quis.",
    category: "React",
  },
  {
    image: [image1],
    title: "E-Commerce",
    github: "",
    demo: "",
    descrtiption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quidem tenetur eius, ullam quis.",
    category: "JavaScript",
  },
  {
    image: [image1],
    title: "E-Commerce",
    github: "",
    demo: "",
    descrtiption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quidem tenetur eius, ullam quis.",
    category: "Full Stack",
  },
  {
    image: [image1],
    title: "E-Commerce",
    github: "",
    demo: "",
    descrtiption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quidem tenetur eius, ullam quis.",
    category: "React",
  },
  {
    image: [image1],
    title: "E-Commerce",
    github: "",
    demo: "",
    descrtiption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quidem tenetur eius, ullam quis.",
    category: "JavaScript",
  },
  {
    image: [image1],
    title: "E-Commerce",
    github: "",
    demo: "",
    descrtiption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quidem tenetur eius, ullam quis.",
    category: "Full Stack",
  },
  {
    image: [image1],
    title: "E-Commerce",
    github: "",
    demo: "",
    descrtiption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quidem tenetur eius, ullam quis.",
    category: "React",
  },
  {
    image: [image1],
    title: "E-Commerce",
    github: "",
    demo: "",
    descrtiption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quidem tenetur eius, ullam quis.",
    category: "JavaScript",
  },
];
const Projects = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const lastProject = t("lastProject");
  const viewall = t("viewall");
  const title = t("project");
  const subtitle = t("projectsub");
  const categories = [
    "All",
    "Last Project",
    "Full Stack",
    "React",
    "JavaScript",
  ];
  const [open, setopen] = useState(null);
  const [projectLoop, setprojectLoop] = useState(null);
  const [categor, setcategor] = useState("All");
  useEffect(() => {
    if (pathname === "/") setcategor("Last Project");
    if (categor === "All") {
      setprojectLoop(projects);
    } else if (categor === "Last Project") {
      let last = [];
      for (let o = 0; o < 6; o++) {
        const element = projects[o];
        last.push(element);
      }
      setprojectLoop(last);
    } else if (categor === "JavaScript") {
      setprojectLoop(
        projects.filter((project) => project.category === "JavaScript")
      );
    } else {
      setprojectLoop(
        projects.filter((project) => project.category === "React")
      );
    }
  }, [categor]);

  return (
    <>
      <div className=" relative w-full overflow-hidden-web flex justify-center">
        <div className="w-full  flex flex-col xl:w-[70%]">
          <div className="w-full">
            <SectionTitle title={title} subtitle={subtitle} />
          </div>
          <div className="">
            {pathname === "/projects" && (
              <div className={`catrgories `}>
                {categories?.map((category, i) => {
                  return (
                    <div
                      key={i}
                      className={`catrgory ${
                        categor === category && "categoryactiv"
                      }`}
                      onClick={() => setcategor(category)}
                    >
                      {category}
                    </div>
                  );
                })}
              </div>
            )}
            {pathname === "/" && (
              <div className="dirction btnproject">
                <Link className="LastProject">{lastProject}</Link>
                <Link to="/projects" className="viewall">
                  {viewall}
                </Link>
              </div>
            )}
            <div className=" containerimage  ">
              {projectLoop?.map((project, index) => {
                return (
                  <div key={index} className="cardimage">
                    <div className="imagecontent">
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
                    <div className="projectContent">
                      <h5>{project.title}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {open && <SingleProject setopen={setopen} project={open} />}
      </div>
    </>
  );
};

export default Projects;
