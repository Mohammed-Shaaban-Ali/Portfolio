import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import closeimage from "../../assets/close.svg";

const SingleProject = ({ setopen, project }) => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="gallary">
      <div className="boxcontainer">
        <div className="closeimage " onClick={() => setopen(null)}>
          <img src={closeimage} alt="closeimage" />
        </div>

        <div className="imageslider">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper w-full h-full"
          >
            {project?.image.map((ima, i) => (
              <SwiperSlide key={i}>
                <img width={300} src={ima} alt="ima" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
