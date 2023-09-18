import { useEffect, useState, useRef } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

const ImageSlider = ({ images }) => {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="w-full h-full blob drop-shadow-div"
        style={{ backgroundImage: `url(${images})` }}
      ></m.div>
    </LazyMotion>
  );
};

export default ImageSlider;
