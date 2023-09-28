export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        green: "0 0 10rem #29c26f",
      },
    },
    colors: {
      primary: {
        400: "#975cf0", //203 189 229
        500: "#dcc2ff", //255 188 235
        600: "#975cf0", //149 136 170
      },
      grayscale: {
        50: "#ffffff",
        100: "#efefef",
        200: "#FDFDFF",
        950: "#16161b",
      },
      load: "#3c3745",
    },
  },
  plugins: [],
};
