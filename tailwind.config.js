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
        500: "#bd97f8", //255 188 235
        600: "#bd97f8", //149 136 170
      },
      grayscale: {
        50: "#ffffff",
        100: "#efefef",
        200: "#FDFDFF",
        950: "#16161b",
      },
    },
  },
  plugins: [],
};
