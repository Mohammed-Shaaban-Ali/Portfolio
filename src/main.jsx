import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import App from "./App.jsx";
import "./index.css";
import "flag-icon-css/css/flag-icon.min.css";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          lastProject: "Last Project",
          viewall: "View All",
          project: "PROJECTS",
          projectsub: "WHAT I HAVE DONE",
          formtext: "Let's get in touch!",
          formnanme: "Name",
          formnanmeplas: "Enter your name",
          formemail: "E-mail",
          formemailplas: "example@gmail.com",
          formmessage: "Message",
          formmessageplas: "Enter your message",
          btnsend: "Send",
          btnDone: "Done",
          contenttitle: "CONTACT",
          contentsubtitle: "Get in touch",
          font: "enFont",
          fontsize: " ",

          "Who`s": "Who`s",
          name: "MOHAMED",
          navbar: {
            nav: [
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Skills", path: "/skills" },
              { name: "Projects", path: "/projects" },
              { name: "Content", path: "/content" },
            ],
          },

          Linkedin: "Linkedin",
          Github: "Github",
          Whatsapp: "Whatsapp",
          Facebook: "Facebook",
          about: "ABOUT ME",
          Introduction: "Introduction",
          skillsSction: "SKILLS",
          skillsSubtitle: "WHAT I DO",
          about_content: [
            "Hello there, I'm so happy you are here! (:",

            "My name is Mohammed Shaaban, I'm 20 and a third-year computer science student based in Menof. I have a strong passion for the technologies related to the Frontend, Backend.",
            " Junior Frontend Developer with 1+ years of experience designing and building responsive web design. Proficient with React and Node Frameworks. Passionate about learning and development with a desire to apply skills on a larger development team. Eager to tackle more complex problems and continue to find ways to maximize user efficiency",
          ],
          skills: {
            skill: [
              {
                id: "html",
                title: "HTML",
                icon: "htmlIcon",
                description:
                  "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
              },

              {
                id: "css",
                title: "CSS",
                icon: "cssIcon",
                description:
                  "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
              },
              {
                id: "javascript",
                title: "JavaScript",
                icon: "jsIcon",
                description:
                  "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
              },
              {
                id: "react",
                title: "React",
                icon: "reactIcon",
                description:
                  "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
              },
              {
                id: "java",
                title: "Java",
                icon: "javaIcon",
                description:
                  "I have extensive utilizing Java for object-oriented programming (OOP).",
              },

              {
                id: "git",
                title: "Git",
                icon: "gitIcon",
                description:
                  "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
              },
              {
                id: "github",
                title: "GitHub",
                icon: "githubIcon",
                description:
                  "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
              },

              {
                id: "vite",
                title: "Vite",
                icon: "viteIcon",
                description:
                  "I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.",
              },

              {
                id: "node",
                title: "Node",
                icon: "nodeIcon",
                description:
                  "When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
              },
            ],
          },
        },
      },
      ar: {
        translation: {
          lastProject: "احدث المشاريع",
          viewall: "عرض الكل",
          project: "المشاريع",
          projectsub: "ما فعلته",
          formnanme: "الاسم",
          formnanmeplas: "من فضلك ادخل الاسم كامل",
          formemail: "جيميل",
          formemailplas: "مثال@gmail.com",
          formmessage: "الرسالة",
          formmessageplas: "من فضلك ادخل الرساله",
          btnsend: "ارسال",
          btnDone: "تم",
          formtext: "دعنا نتواصل!",
          contenttitle: "تواصل معي",
          contentsubtitle: "ابقى على تواصل",
          font: "arabFont",
          fontsize: "arabFontsiz",
          "Who`s": "من هو",
          name: "محمد شعبان",
          about: "حولي",
          Introduction: "مقدمة",
          skillsSction: "المهارات",
          skillsSubtitle: "ماذا افعل",

          navbar: {
            nav: [
              { name: "الرئيسية", path: "/" },
              { name: "حولي", path: "/about" },
              { name: "المهارات", path: "/skills" },
              { name: "المشاريع", path: "/projects" },
              { name: "تواصل", path: "/content" },
            ],
          },
          about_content: [
            "مرحبا بك ، أنا سعيد جدا لأنك هنا ! ",

            "اسمي محمد شعبان، عمري 20 عاما وطالب علوم كمبيوتر في السنة الثالثة مقيم في منوف. لدي شغف قوي بالتقنيات المتعلقة بالواجهة الأمامية والخلفية وتجربة المستخدم.",
            "مطور الواجهة الأمامية  مع 1+ سنه من الخبرة في تصميم وبناء مواقع ويب سريع الاستجابة. شغوف بالتعلم والتطوير مع الرغبة في تطبيق المهارات على فريق تطوير أكبر. حريصة على معالجة المشكلات الأكثر تعقيدا والاستمرار في إيجاد طرق لزيادة كفاءة المستخدم إلى أقصى حد",
          ],
          Linkedin: "لينكد ان",
          Github: "جيت هب",
          Whatsapp: "واتساب",
          Facebook: "فيس بوك",
          skills: {
            skill: [
              {
                id: "html",
                title: "HTML",
                icon: "htmlIcon",
                description:
                  "لتنظيم صفحات الويب وإنشاء محتوى ذو مغزى يمكن الوصول إليه من قبل جميع المستخدمين لدي معرفه قوية",
              },

              {
                id: "css",
                title: "CSS",
                icon: "cssIcon",
                description:
                  " لدي خبرة في استخدامها لتصميم صفحات الويب واستخدام الانميشن لتعزيز تجربة المستخدم بشكل عام",
              },
              {
                id: "javascript",
                title: "JavaScript",
                icon: "jsIcon",
                description:
                  "لدي خبره كبيره في استخدام الجافاسكربت لعمل واجهة مستخدم ديناميكيه",
              },
              {
                id: "react",
                title: "React",
                icon: "reactIcon",
                description:
                  "علي درايه جيده باستخدام رياكت واتقن إنشاء مكونات قابله لاعاده الاستخدام واداره حاله التطبيق باستخدام الهوكس و الكونتكست.",
              },
              {
                id: "java",
                title: "Java",
                icon: "javaIcon",
                description: "لدي خبر قليله في استخدام الجافا",
              },

              {
                id: "git",
                title: "Git",
                icon: "gitIcon",
                description:
                  "انا بارع في استخدام الجيت في إدارة التغيرات البرمجية و التعاون مع الاخرين",
              },
              {
                id: "github",
                title: "GitHub",
                icon: "githubIcon",
                description:
                  "انا ماهو في استخدام الجيت هب، اقوم بإنشاء و ادارة التطبيقات و تقديم عملي بشكل فعال لاصحاب العمل المحتملين.",
              },

              {
                id: "vite",
                title: "Vite",
                icon: "viteIcon",
                description:
                  "لقد اكتسبت خبره في الفيت من خلال العمل بيها لمدّة ستة اشهر مستفيدا من قدراتها في عمل موقع ويب سريع",
              },

              {
                id: "node",
                title: "Node",
                icon: "nodeIcon",
                description:
                  "لدي الخبره في الاستفاده من النود كبيئة وقت التشغل الخاصه بي ، فانا افضل العمل بها لتطوير تطبيقات ويب قويه وقابله للتطوير",
              },
            ],
          },
        },
      },
    },
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
  });
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
