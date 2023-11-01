import { motion} from "framer-motion";
import { services } from "../constants/data";



const WhyUs = () => {

  
  return (
    <div className="max-w-[1440px] mx-auto w-full">
      <h1 className="text-center mt-[124px] md:mt-[223px] text-[22px] font-groteska-medium  text-primaryWhite tracking-[-1.32px] md:text-[44px]">
        Why use Flixsa?
      </h1>
      <motion.div
       
        className="mt-[37px] flex relative  flex-col gap-y-20 lg:flex-row lg:gap-x-[74px] items-center md:mt-14"
      >
        <div className="">
          <img
            className="hidden md:block"
            src="https://res.cloudinary.com/seeders/image/upload/v1697557170/Frame_1000003824_vi5yus.png"
            alt=""
          />
          <img
            className="md:hidden"
            src="https://res.cloudinary.com/seeders/image/upload/v1697565705/Frame_1000003864_se5yvs.png"
            alt=""
          />
        </div>
        <motion.div  className="  space-y-6 px-6">
          {services.one.map((item) => (
            <div
              key={item.id}
              className="bg-cardbg max-w-[586px] px-6 py-[24.5px] rounded-[20px] flex flex-col justify-center relative md:px-9"
            >
              <span className="w-[3px] h-[50px] absolute flex bg-primaryWhite left-0 rounded-[20px]"></span>
              <span className="h-[3px] w-[158px] bottom-0 absolute flex bg-primaryWhite rounded-[20px]"></span>
              <div className="flex gap-x-3 items-center">
                <span className="w-10 h-[35px] bg-primaryWhite flex items-center justify-center rounded-[10px]">
                  <img src={item.image} alt="" />
                </span>
                <h1 className="text-[22px] text-primaryWhite font-groteska-regular">
                  {item.title}
                </h1>
              </div>
              <p className="text-sm md:text-[18px] font-groteska-regular text-primaryGray mt-[10.5px]">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <div className="mt-[72px] relative flex  flex-col-reverse gap-y-20 lg:flex-row md:gap-x-[74px] md:items-center md:justify-end md:mt-[122px]">
        <div className="  space-y-6 px-6">
          {services.two.map((item) => (
            <div
              key={item.id}
              className="bg-cardbg max-w-[586px] px-6 py-[24.5px] rounded-[20px] flex flex-col justify-center relative md:px-9"
            >
              <span className="w-[3px] h-[50px] absolute flex bg-primaryWhite left-0 rounded-[20px]"></span>
              <span className="h-[3px] w-[158px] bottom-0 absolute flex bg-primaryWhite rounded-[20px]"></span>
              <div className="flex gap-x-3 items-center">
                <span className="w-10 h-[35px] bg-primaryWhite flex items-center justify-center rounded-[10px]">
                  <img src={item.image} alt="" />
                </span>
                <h1 className="text-[22px] text-primaryWhite font-groteska-regular">
                  {item.title}
                </h1>
              </div>
              <p className="text-sm md:text-[18px] font-groteska-regular text-primaryGray mt-[10.5px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="">
          <img
            className="hidden md:block"
            src="https://res.cloudinary.com/seeders/image/upload/v1697557171/Frame_1000003825_ogseis.png"
            alt=""
          />
          <img
            className="md:hidden"
            src="https://res.cloudinary.com/seeders/image/upload/v1697566859/Frame_1000003864_1_e4xqfd.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default WhyUs