import WebVideo from "../assets/video/web.mp4";
import AndroidVideo from "../assets/video/android.mp4";


const Hero = () => {

  return (
    <section className="w-full relative h-[760px] sm:h-[780px]  md:h-[800px] overflow-hidden">
      <div className="absolute z-10  h-full w-full overflow-hidden rounded-[8px]  lg:rounded-[64px]">
        <svg
          className="lg:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 414 812"
          fill="none"
        >
          <path
            d="M0 0H414V812H0V0Z"
            fill="url(#paint0_linear_1155_38386)"
            fill-opacity="0.9"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1155_38386"
              x1="207"
              y1="-4.80715e-05"
              x2="1026.15"
              y2="401.585"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0411875" stop-color="#1D2939" />
              <stop offset="1" stop-color="#1D2939" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="hidden lg:block"
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="833"
          viewBox="0 0 1440 833"
          fill="none"
        >
          <path
            d="M0 0H1440V833H0V0Z"
            fill="url(#paint0_linear_1149_38202)"
            fill-opacity="0.9"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1149_38202"
              x1="720"
              y1="-4.93147e-05"
              x2="1659.16"
              y2="1561.08"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0411875" stop-color="#1D2939" />
              <stop offset="1" stop-color="#1D2939" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute w-full h-full lg:hidden">
        <video
          className="w-full h-full object-cover rounded-lg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={AndroidVideo} type="video/mp4" />
        </video>
      </div>
      <div className="w-full  absolute h-full z-0 hidden lg:block">
        <video
          className="w-full h-full object-cover rounded-[64px]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={WebVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className=" pt-[78px] z-20 flex flex-col gap-y-3 items-center justify-center  text-center sm:pt-[50px]">
        <h1 className="z-10 px-3 text-primaryWhite font-groteska-medium  text-[24px] tracking-[-0.72px] md:leading-[88px] md:tracking-[-1.62px] md:text-[40px] sm:px-0 lg:text-[54px] max-w-[865px]">
          Your One-Stop Destination for a Seamless Movie Experience
        </h1>
        <p className="z-10 w-full font-groteska-regular px-4 max-w-[687px] text-base leading-7 text-primaryGray sm:text-lg sm:leading-8 sm:px-10 md:px-2">
          Experience the magic of cinema like never before! Book your tickets
          today and join us in celebrating the art of storytelling on the big
          screen. Your unforgettable cinematic adventure starts here! 🍿
        </p>
        <div className="z-20 flex gap-[18px] mt-8 md:gap-7 md:mt-10">
          <img
            className="h-[56.096px] md:h-full"
            src="https://res.cloudinary.com/seeders/image/upload/v1697553274/Google_Play_Blue_Border_j2o66o.png"
            alt=""
          />
          <img
            className="h-[56.096px] md:h-full"
            src="https://res.cloudinary.com/seeders/image/upload/v1697552972/App_Store_Blue_Border_qxkoxa.png"
            alt=""
          />
        </div>
      </div>
      {/* download links */}

      <div className=" absolute  -bottom-48 z-20 justify-center items-center w-full overflow-y-hidden hidden md:flex">
        <img
          className="z-0  w-full max-w-[698px] h-full object-cover"
          src="https://res.cloudinary.com/seeders/image/upload/v1697459430/Frame_1000003860_eclyyn.png"
          alt=""
        />
      </div>
      <div className="absolute bottom-0 z-20 overflow-hidden w-full md:hidden">
        <img
          className="z-0  w-full h-full object-cover"
          src="https://res.cloudinary.com/seeders/image/upload/v1697553664/Frame_1000003867_t35kk1.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default Hero