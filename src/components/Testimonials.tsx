import { useEffect, useState } from "react";
import { testimonials } from "../constants/data";
import { AnimatePresence, motion } from "framer-motion";

const Testimonials = () => {

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 6000); // Change testimonial every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="max-w-[1440px] mx-auto w-full px-[26px] mt-[72px] md:mt-[192px] md:px-0">
      <div className="mt-[37px]  flex  flex-col gap-y-20 lg:flex-row lg:gap-x-[74px] md:items-center md:mt-14">
        <div className="hidden md:block">
          <img
            className=""
            src="https://res.cloudinary.com/seeders/image/upload/v1697571296/Frame_1000003831_vh22xg.png"
            alt=""
          />
        </div>
        <div className="max-w-[554px]  space-y-5">
          <h1 className="text-2xl font-groteska-medium   text-primaryWhite md:text-[36px]">
            What do they think?
          </h1>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonialIndex}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="testimonial-container"
            >
              <div className="flex gap-x-4 items-center">
                <span className="w-[75px] h-[75px] flex items-center justify-center rounded-full">
                  <img
                    className="h-full w-full object-cover rounded-full"
                    src={currentTestimonial.imageSrc}
                    alt={currentTestimonial.name}
                  />
                </span>
                <div>
                  <h1 className="text-[22px] font-groteska-medium text-primaryWhite">
                    {currentTestimonial.name}
                  </h1>
                  <p className="text-[18px] font-groteska-medium text-primaryGray">
                    {currentTestimonial.occupation}
                  </p>
                </div>
              </div>
              <p className="text-[18px] font-groteska-regular text-primaryGray leading-8 mt-5">
                {currentTestimonial.quote}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="w-[100.61px] py-4 px-[8px] bg-primaryBlack bg-opacity-70 rounded-[10px] flex items-center justify-between">
            {testimonials.map((item,index) => (
              <p key={item.id} className="">
                <span
                  className={`${
                    index === currentTestimonialIndex
                      ? "w-6 h-2 bg-[#F7F8FF] flex rounded-[4px]"
                      : "w-2 h-2 flex rounded-full bg-[#f7f8ff26]"
                  } transition-all ease-in-out duration-500`}
                ></span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials