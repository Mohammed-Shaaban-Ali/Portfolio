// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faX,
//   faBars,
//   faWindowRestore,
//   faBagShopping,
//   faDiceD6,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faReact,
//   faGithub,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  viteIcon,
  nodeIcon,
  avatar,
} from "../assets";

// library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  javaIcon,
  gitIcon,
  githubIcon,

  viteIcon,
  nodeIcon,

  avatar,
};

// const icons = {
//   faBars,
//   faX,
//   faWindowRestore,
//   faBagShopping,
//   faDiceD6,
//   faReact,
//   faGithub,
//   faLinkedin,
//   faEnvelope,
// };

const memoji = {
  image: [avatar],
};

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { media, memoji, markerSvg };
