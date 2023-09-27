import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import SectionTitle from "../../components/SectionTitle";

import "./Projects.css";
import { BsFillCursorFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";

// logo
import logo from "../../assets/logo.png";

// E-commerce
import Ecommere1 from "../../assets/projects/E-commere/1.png";
import Ecommere2 from "../../assets/projects/E-commere/1-2.png";
import Ecommere3 from "../../assets/projects/E-commere/1-3.png";
import Ecommere4 from "../../assets/projects/E-commere/1-4.png";
import Ecommere5 from "../../assets/projects/E-commere/1-5.png";
import Ecommere6 from "../../assets/projects/E-commere/1-6.png";
import Ecommere7 from "../../assets/projects/E-commere/1-7.png";

// Blog
import Blog1 from "../../assets/projects/BlogApp/1.png";

// Fashion Studio
import Fashion1 from "../../assets/projects/FashionStudio/1.png";
import Fashion2 from "../../assets/projects/FashionStudio/1-2.png";
import Fashion3 from "../../assets/projects/FashionStudio/1-3.png";
import Fashion4 from "../../assets/projects/FashionStudio/1-4.png";

// Admin Dashboard
import AdminDashboard1 from "../../assets/projects/AdminDashboard/1.png";
import AdminDashboard2 from "../../assets/projects/AdminDashboard/1-2.png";
import AdminDashboard3 from "../../assets/projects/AdminDashboard/1-3.png";
import AdminDashboard4 from "../../assets/projects/AdminDashboard/1-4.png";
import AdminDashboard5 from "../../assets/projects/AdminDashboard/1-5.png";

// YouTube
import YouTube1 from "../../assets/projects/YouTubeClone/1.png";
import YouTube2 from "../../assets/projects/YouTubeClone/1-2.png";

// Game
import Game1 from "../../assets/projects/XO/1.png";
import Game2 from "../../assets/projects/XO/1-2.png";
import Game3 from "../../assets/projects/XO/1-3.png";

// Chat app
import Chat1 from "../../assets/projects/chatapp/1.png";
import Chat2 from "../../assets/projects/chatapp/1-2.png";
import Chat3 from "../../assets/projects/chatapp/1-3.png";

// News
import News1 from "../../assets/projects/news-website-/1.png";
import News2 from "../../assets/projects/news-website-/1-2.png";

// E-Commerce Dashboard
import ECommerceDashboard1 from "../../assets/projects/E-CommerceDashboard/1.png";
import ECommerceDashboard2 from "../../assets/projects/E-CommerceDashboard/1-2.png";
import ECommerceDashboard3 from "../../assets/projects/E-CommerceDashboard/1-3.png";

// Special-Design
import SpecialDesign from "../../assets/projects/Special-Design/1.png";

// my-first-project
import myfirst from "../../assets/projects/myfirstproject/1.png";

import SingleProject from "./SingleProject";
// import ImageLode from "../../components/ImageLode";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const projects = [
  {
    image: [
      Ecommere1,
      Ecommere2,
      Ecommere3,
      Ecommere4,
      Ecommere5,
      Ecommere6,
      Ecommere7,
    ],
    title: "E-Commerce",
    github: "https://github.com/Mohammed-Shaaban-Ali/E-Commerce_Frontend",
    demo: "https://e-commerce-v8ra.onrender.com/",
    category: "Full Stack",
  },
  {
    image: [Blog1],
    title: "Blog App",
    github: "https://github.com/Mohammed-Shaaban-Ali/blog-frontend",
    demo: "https://blog-website1.web.app/",
    category: "Full Stack",
  },
  {
    image: [Fashion1, Fashion2, Fashion3, Fashion4],
    title: "Fashion Studio",
    github: "https://github.com/Mohammed-Shaaban-Ali/wibe-studio",
    demo: "https://wibe-studio.pages.dev/",
    category: "React",
  },

  {
    image: [Chat1, Chat2, Chat3],
    title: "Chat App",
    github: "https://github.com/Mohammed-Shaaban-Ali/Whatsapp-Frontend",
    demo: "https://whatsapp-frontend-five.vercel.app/",
    category: "Full Stack",
  },

  {
    image: [YouTube1, YouTube2],
    title: "YouTube Clone",
    github: "https://github.com/Mohammed-Shaaban-Ali/youtube_clone",
    demo: "https://fir-26dc7.web.app/",
    category: "React",
  },
  {
    image: [
      AdminDashboard1,
      AdminDashboard2,
      AdminDashboard3,
      AdminDashboard4,
      AdminDashboard5,
    ],
    title: "Admin Dashboard",
    github: "https://github.com/Mohammed-Shaaban-Ali/Dashboard",
    demo: "https://dashboard-kappa-plum.vercel.app/",
    category: "React",
  },
  {
    image: [News1, News2],
    title: "News-Website",
    github: "https://github.com/Mohammed-Shaaban-Ali/News-Website",
    demo: "https://news-website-1.web.app/",
    category: "React",
  },
  {
    image: [Game1, Game2, Game3],
    title: "XO-Game",
    github: "https://github.com/Mohammed-Shaaban-Ali/xo-game-react",
    demo: "https://xo-game-react-sooty.vercel.app/",
    category: "React",
  },
  {
    image: [ECommerceDashboard1, ECommerceDashboard2, ECommerceDashboard3],
    title: "E-Commerce Dashboard",
    github: "https://github.com/Mohammed-Shaaban-Ali/E-Commerce_Admin",
    demo: "https://e-commerce-admin-gly7.onrender.com/",
    category: "Full Stack",
  },

  {
    image: [SpecialDesign],
    title: "Special-Design",
    github: "https://github.com/Mohammed-Shaaban-Ali/Special-Design",
    demo: "https://mohammed-shaaban-ali.github.io/Special-Design/",
    category: "JavaScript",
  },
  {
    image: [myfirst],
    title: "my-first-project",
    github: "https://github.com/Mohammed-Shaaban-Ali/my-first-project",
    demo: "https://mohammed-shaaban-ali.github.io/my-first-project/",
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
    } else if (categor === "Full Stack") {
      setprojectLoop(
        projects.filter((project) => project.category === "Full Stack")
      );
    } else {
      setprojectLoop(
        projects.filter((project) => project.category === "React")
      );
    }
  }, [categor]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" relative w-full overflow-hidden-web flex justify-center">
        <div className="blur projectblur"></div>
        <div className="blur projectblu2"></div>
        <div className="w-full  flex flex-col xl:w-[70%]">
          <div className="w-full">
            <SectionTitle title={title} subtitle={subtitle} />
          </div>
          <div className="">
            {pathname === "/projects" && (
              <div className={` dirction catrgories `}>
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
              <div data-aos="fade-right" className="dirction btnproject">
                <Link className="LastProject">{lastProject}</Link>
                <Link to="/projects" className="viewall">
                  {viewall}
                </Link>
              </div>
            )}
            <div className=" containerimage  ">
              {projectLoop?.map((project, index) => {
                return (
                  <div
                    data-aos="zoom-out-up"
                    key={index}
                    className="dirction cardimage"
                  >
                    <div className=" imagecontent">
                      <div className="overlaycard"></div>
                      <div className="image">
                        {/* <ImageLode src={project.image[0]} alt={project.title} /> */}
                        <LazyLoadImage
                          effect="black-and-white"
                          placeholderSrc={logo}
                          width="100%"
                          height="100%"
                          src={project.image[0]}
                          alt={project.title}
                          // visibleByDefault={src === logo}
                        />
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
