import "./Projects.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// // import required modules
// import { Keyboard, Pagination, Navigation } from "swiper/modules";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import closeimage from "../../assets/close.svg";

const SingleProject = ({ setopen, project }) => {
  return (
    <div className="gallary">
      <div onClick={() => setopen(null)} className="over"></div>
      <div className="boxcontainer">
        <div className="imageslider">
          <Carousel className="slidercontainar">
            {project?.image?.map((url, i) => (
              <div className="singleimage" key={i}>
                <img src={url} alt="url" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;

//  <Swiper
//    slidesPerView={1}
//    spaceBetween={30}
//    keyboard={{
//      enabled: true,
//    }}
//    pagination={{
//      clickable: true,
//    }}
//    navigation={true}
//    modules={[Keyboard, Pagination, Navigation]}
//    className="mySwiper w-full h-full"
//  >
//    {project?.image.map((ima, i) => (
//      <SwiperSlide className="image" key={i}>
//        <img width={300} src={ima} alt="ima" />
//      </SwiperSlide>
//    ))}
//  </Swiper>;
