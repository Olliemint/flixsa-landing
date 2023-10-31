
const Testimonials = () => {
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
        <div className="max-w-[554px]  space-y-6 ">
          <h1 className="text-2xl font-groteska-medium   text-primaryWhite md:text-[36px]">
            What do they think?
          </h1>
          <div className="flex gap-x-4 items-center">
            <span className="w-[75px] h-[75px] flex items-center justify-center rounded-full">
              <img
                src="https://res.cloudinary.com/seeders/image/upload/v1697571539/Rectangle_15_yhwvyb.png"
                alt=""
              />
            </span>
            <div className="">
              <h1 className="text-[22px] font-groteska-medium text-primaryWhite">
                Oliver Maiyo
              </h1>
              <p className="text-[18px] font-groteska-medium text-primaryGray">
                Student
              </p>
            </div>
          </div>
          <p className="text-[18px] font-groteska-regular text-primaryGray leading-8">
            “As a frequent moviegoer, Flixsa is a game-changer. I can't imagine
            booking tickets any other way now. The app's convenience and the
            ability to select my preferred seats in advance are fantastic. Plus,
            their loyalty rewards make every visit even more rewarding.”
          </p>
          <div className="flex gap-x-[38px] justify-center md:justify-start ">
            <span className="border border-primaryWhite rounded-full h-10 w-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_2090_12146)">
                  <path
                    d="M15 6L9 12L15 18"
                    stroke="#F7F8FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2090_12146">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="border border-primaryWhite rounded-full h-10 w-10 flex items-center justify-center">
              <svg
                className="rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_2090_12146)">
                  <path
                    d="M15 6L9 12L15 18"
                    stroke="#F7F8FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2090_12146">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials