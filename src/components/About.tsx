import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center p-6 mt-[130px] md:mt-[207px] ">
      <motion.h1
        className="text-[22px] font-groteska-bold text-center text-primaryWhite md:text-[44px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Get the App!
      </motion.h1>
      <motion.p
        className="text-base font-groteska-regular leading-7 text-primaryGray md:text-lg md:max-w-[687px] text-center md:px-4 md:leading-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Discover the latest & trending trailers, book your tickets and
        refreshments from a wide variety of cinemas within your locality and
        enjoy an unforgettable cinematic experience
      </motion.p>
    </section>
  );
}

export default About