// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper/modules";
const images = [
  "https://cdn.pixabay.com/photo/2023/10/12/14/41/town-8310950_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/09/25/20/11/boat-8275962_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/10/15/18/12/swan-8317602_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/10/10/16/05/grapes-8306833_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/10/12/23/33/bird-8311908_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/09/27/03/00/residential-8278516_1280.jpg",
];

export default function Slider() {
  return (
    <>
          <Swiper
              allowSlideNext={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="overflow-x-hidden bg-red-400"
          >
              {images.map((image, index) => (
                  <SwiperSlide
                      key={index}>
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                          className="object-cover w-full h-full"
                        />
                    </SwiperSlide>
              ))}
      </Swiper>
    </>
  );
}
