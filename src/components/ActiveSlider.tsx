import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";


const images = [
  "https://cdn.pixabay.com/photo/2023/10/12/14/41/town-8310950_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/09/25/20/11/boat-8275962_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/10/15/18/12/swan-8317602_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/10/10/16/05/grapes-8306833_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/10/12/23/33/bird-8311908_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/09/27/03/00/residential-8278516_1280.jpg",
];

const ActiveSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {images.map((item) => (
          <SwiperSlide key={item}>
            <div className=" rounded-xl  h-[511px]  w-[315px] lg:h-[548px] lg:w-[370px] cursor-pointer">
              <img
                src={item}
                alt=""
                className="w-full h-full rounded-xl object-cover object-center transition-all duration-500 ease-in-out transform group-hover:scale-110"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
