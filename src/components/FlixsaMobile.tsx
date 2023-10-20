
const FlixsaMobile = () => {
    return (
      <div className="flex flex-col px-5 justify-center items-center mt-[58px] md:mt-[211px] md:px-0">
        <div className="w-full relative px-[14px] max-w-[1216px] rounded-[20px] overflow-hidden bg-darkBg flex flex-col gap-y-[55.97px] md:pt-[77px] md:pl-[74px] md:rounded-[64px] md:flex-row md:gap-x-[49px]">
          <span className="w-[328px] bottom-0 left-0 -translate-x-[50%] translate-y-[50%] absolute border-[50px] border-cardbg h-[328px] flex items-center justify-center rounded-full md:h-[448px] md:w-[448px] md:border-[75px] md:-translate-x-[38%] md:translate-y-[49%]"></span>
          <span className="w-[328px] top-0  right-0 translate-x-[55%] -translate-y-[55%]  absolute border-[50px] border-cardbg h-[328px] flex items-center justify-center rounded-full md:h-[448px] md:w-[448px] md:border-[75px] md:translate-x-[40%] md:-translate-y-[49%]"></span>
          <div className="w-full max-w-[554px] mt-[61.84px] md:mt-[170px]">
            <h1 className="text-[18px] text-primaryGray font-groteska-medium tracking-[-0.66px] md:text-[22px]">
              Flixsa Mobile App
            </h1>
            <p className="text-[22px] tracking-[-0.66px] text-primaryWhite font-groteska-regular md:text-[36px] md:mt-3">
              Embark on a memorable & seamless cinematic experience with the
              Flixsa Mobile App{" "}
            </p>
            <div className="z-20 flex flex-col items-center gap-7  mt-8 md:flex-row  md:mt-10">
              <div className="">
                <img
                  className="h-[56.096px] md:h-full"
                  src="https://res.cloudinary.com/seeders/image/upload/v1697553274/Google_Play_Blue_Border_j2o66o.png"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  className="h-[56.096px] md:h-full"
                  src="https://res.cloudinary.com/seeders/image/upload/v1697552972/App_Store_Blue_Border_qxkoxa.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <img
              className="hidden md:block"
              src="https://res.cloudinary.com/seeders/image/upload/v1697613534/mockuuups-h2BvxSwazbEuM1fwCvV2HA_1_qmvjid.png"
              alt=""
            />
            <img
              className="md:hidden"
              src="https://res.cloudinary.com/seeders/image/upload/v1697615698/mockuuups-h2BvxSwazbEuM1fwCvV2HA_1_1_oiwhpx.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
}

export default FlixsaMobile