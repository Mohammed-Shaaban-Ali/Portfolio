import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import "flag-icon-css/css/flag-icon.min.css";
import PreloadMedia from "./components/PreloadMedia.jsx";
import { media } from "./Constants/constants.js";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    debug: false,
    // Options for language detector
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    react: { useSuspense: false },
    backend: {
      loadPath: "/src/assets/locales/{{lng}}/translation.json",
    },
  });

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={PreloadMedia}>
    <React.StrictMode>
      <BrowserRouter>
        <PreloadMedia images={Object.values(media)}>
          <App />
        </PreloadMedia>
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>
);
