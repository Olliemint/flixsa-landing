import AppLinks from "../components/AppLinks";

const ContactUs = () => {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="max-w-[687px] text-center space-y-[14px] px-[22px] md:px-0 md:space-y-8">
          <h1 className="text-2xl text-primaryWhite font-groteska-bold tracking-[-0.72px] md:text-[54px]">
            Get in Touch
          </h1>
          <p className="text-[18px] font-groteska-regular leading-8 text-primaryGray md:font-groteska-medium">
            Any questions or inquiries? Send us a quick message
          </p>
        </div>
      </div>
      <div className="px-5 space-y-10 flex flex-col items-center   mt-10 lg:mt-20 xxl:px-0">
        <div className="w-full relative  max-w-[1216px] rounded-[20px] flex flex-col p-4 py-10  gap-y-[34px]  overflow-hidden bg-darkBg md:justify-center  md:flex-row xl:gap-x-[42px] xl:p-[106px]">
          <span className="w-[328px] bottom-0 left-0 -translate-x-[50%] translate-y-[50%] absolute border-[50px] border-cardbg h-[328px] flex items-center justify-center rounded-full md:h-[448px] md:w-[448px] md:border-[75px] md:-translate-x-[38%] md:translate-y-[49%]"></span>
          <span className="w-[328px] top-0  right-0 translate-x-[55%] -translate-y-[55%]  absolute border-[50px] border-cardbg h-[328px] flex items-center justify-center rounded-full md:h-[448px] md:w-[448px] md:border-[75px] md:translate-x-[40%] md:-translate-y-[49%]"></span>
          <div className="max-w-[723px] w-full flex flex-col gap-8">
            <div className="w-full flex flex-col gap-8 md:flex-row">
              <div className="flex-col flex w-full gap-y-2">
                <label
                  htmlFor="first_name"
                  className="text-xs tracking-[0.24px] font-groteska-regular text-primaryWhite"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id=""
                  placeholder="Enter your first name"
                  className="h-[42px] w-full rounded-lg border border-[#DDD] bg-transparent font-groteska-regular text-sm text-primaryWhite px-4 outline-none focus:outline-none  placeholder:text-primaryGray"
                />
              </div>
              <div className="flex-col flex w-full gap-y-2">
                <label
                  htmlFor="l_name"
                  className="text-xs tracking-[0.24px] font-groteska-regular text-primaryWhite"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="l_name"
                  id=""
                  placeholder="Enter your las name"
                  className="h-[42px] w-full rounded-lg border border-[#DDD] bg-transparent font-groteska-regular text-sm  px-4 outline-none text-primaryWhite placeholder:text-primaryGray focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-8 md:flex-row">
              <div className="flex-col flex w-full gap-y-2">
                <label
                  htmlFor="first_name"
                  className="text-xs tracking-[0.24px] font-groteska-regular text-primaryWhite"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter your email"
                  className="h-[42px] w-full rounded-lg border border-[#DDD] bg-transparent font-groteska-regular text-sm  px-4 outline-none text-primaryWhite placeholder:text-primaryGray focus:outline-none"
                />
              </div>
              <div className="flex-col flex w-full gap-y-2">
                <label
                  htmlFor="p_number"
                  className="text-xs tracking-[0.24px] font-groteska-regular text-primaryWhite"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="p_number"
                  id=""
                  placeholder="+234"
                  className="h-[42px] w-full rounded-lg border border-[#DDD] bg-transparent font-groteska-regular text-sm px-4 outline-none text-primaryWhite placeholder:text-primaryGray focus:outline-none"
                />
              </div>
            </div>
            <div className="flex-col flex w-full gap-y-2">
              <label
                htmlFor="message"
                className="text-xs tracking-[0.24px] font-groteska-regular text-primaryWhite"
              >
                Message
              </label>

              <textarea
                name="message"
                placeholder="Enter your message"
                className=" px-4 py-[11px] min-h-[220px] w-full rounded-lg border border-[#DDD] bg-transparent font-groteska-regular text-sm   outline-none text-primaryWhite placeholder:text-primaryGray focus:outline-none md:min-h-[226px]"
              />
            </div>
            <div className="flex items-center justify-center mt-4 md:mt-10">
              <button
                className="group rounded-lg bg-primaryWhite w-full gap-[5px] text-primaryBlack font-groteska-bold text-base inline-flex items-center justify-center max-w-[360px] h-[44px]"
                type="submit"
              >
                Send Message
                <svg
                  className=" group-hover:animate-ping"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                >
                  <path
                    d="M14.5765 0.936487C14.2014 0.551449 13.6462 0.408003 13.1284 0.558998L1.056 4.06964C0.509774 4.22139 0.122615 4.65702 0.0183226 5.21041C-0.088221 5.77363 0.283931 6.48859 0.77013 6.78756L4.54493 9.10761C4.93208 9.34542 5.43179 9.28578 5.75217 8.96265L10.0747 4.61323C10.2923 4.38673 10.6524 4.38673 10.87 4.61323C11.0876 4.83217 11.0876 5.18701 10.87 5.4135L6.53999 9.76368C6.21886 10.0861 6.15884 10.5881 6.39518 10.9777L8.70163 14.7903C8.97174 15.2433 9.43693 15.5 9.94714 15.5C10.0072 15.5 10.0747 15.5 10.1347 15.4924C10.72 15.417 11.1851 15.0168 11.3577 14.4506L14.9367 2.39359C15.0942 1.88021 14.9517 1.32153 14.5765 0.936487Z"
                    fill="#1D2939"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 md:py-24">
        <AppLinks />
      </div>
    </div>
  );
};

export default ContactUs;
