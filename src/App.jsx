import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const MainPage = lazy(() => import("./pages/MainPage"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Content = lazy(() => import("./pages/Content"));
const Projects = lazy(() => import("./pages/project/Projects"));

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="w-screen h-screen overflow-hidden bg-load flex items-center justify-center relative">
                  <span
                    style={{ fontFamily: "SuperMario" }}
                    className="absolute text-primary-400 text-xl"
                  >
                    M
                  </span>
                  <div className="loader"></div>
                </div>
              }
            >
              <MainPage />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense
              fallback={
                <div className="w-screen h-screen overflow-hidden bg-load flex items-center justify-center relative">
                  <span
                    style={{ fontFamily: "SuperMario" }}
                    className="absolute text-primary-400 text-xl"
                  >
                    M
                  </span>
                  <div className="loader"></div>
                </div>
              }
            >
              <About />
            </Suspense>
          }
        />
        <Route
          path="/skills"
          element={
            <Suspense
              fallback={
                <div className="w-screen h-screen overflow-hidden bg-load flex items-center justify-center relative">
                  <span
                    style={{ fontFamily: "SuperMario" }}
                    className="absolute text-primary-400 text-xl"
                  >
                    M
                  </span>
                  <div className="loader"></div>
                </div>
              }
            >
              <Skills />
            </Suspense>
          }
        />
        <Route
          path="/content"
          element={
            <Suspense
              fallback={
                <div className="w-screen h-screen overflow-hidden bg-load flex items-center justify-center relative">
                  <span
                    style={{ fontFamily: "SuperMario" }}
                    className="absolute text-primary-400 text-xl"
                  >
                    M
                  </span>
                  <div className="loader"></div>
                </div>
              }
            >
              <Content />
            </Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense
              fallback={
                <div className="w-screen h-screen overflow-hidden bg-load flex items-center justify-center relative">
                  <span
                    style={{ fontFamily: "SuperMario" }}
                    className="absolute text-primary-400 text-xl"
                  >
                    M
                  </span>
                  <div className="loader"></div>
                </div>
              }
            >
              <Projects />
            </Suspense>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
