import { faqs } from '../constants/data';
import AppLinks from '../components/AppLinks';

const FAQs = () => {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="max-w-[687px] text-center space-y-[14px] px-[22px] md:px-0 md:space-y-8">
          <h1 className="text-2xl text-primaryWhite font-groteska-bold tracking-[-0.72px] md:text-[54px]">
            FAQs
          </h1>
          <p className="text-[18px] font-groteska-regular leading-8 text-primaryGray md:font-groteska-medium">
            We can assist you with almost everything you might need to enhance
            your cinematic experience
          </p>
        </div>
      </div>
      <div className="px-5 space-y-10 flex flex-col items-center md:px-0  mt-10 lg:mt-20 ">
        <div className="w-full relative  max-w-[1296px] rounded-[20px] flex flex-col p-4 py-10  gap-y-[34px]  overflow-hidden bg-darkBg  xl:flex-row xl:gap-x-[42px] xl:p-[106px]">
          <span className="w-[328px] bottom-0 left-0 -translate-x-[50%] translate-y-[50%] absolute border-[50px] border-cardbg h-[328px] flex items-center justify-center rounded-full md:h-[448px] md:w-[448px] md:border-[75px] md:-translate-x-[38%] md:translate-y-[49%]"></span>
          <span className="w-[328px] top-0  right-0 translate-x-[55%] -translate-y-[55%]  absolute border-[50px] border-cardbg h-[328px] flex items-center justify-center rounded-full md:h-[448px] md:w-[448px] md:border-[75px] md:translate-x-[40%] md:-translate-y-[49%]"></span>
          <div className=" flex flex-col text-center gap-y-[26px] w-full max-w-[520px]">
            {faqs.map((faq, index) => (
              <p
                key={index}
                className={`w-full ${
                  index === 0
                    ? "bg-[#F9FBFC]"
                    : "bg-darkBg text-primaryWhite font-groteska-medium"
                } py-[19px] px-[17px] text-start rounded-lg text-base font-groteska-bold md:text-[18px]`}
              >
                {faq}
              </p>
            ))}
          </div>
          <svg
            className="xl:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="334"
            height="2"
            viewBox="0 0 334 2"
            fill="none"
          >
            <path d="M0 1L334 1" stroke="#F7F8FF" stroke-width="0.3" />
          </svg>
          <span className="hidden   w-[0.3px] bg-[#F7F8FF] bg-opacity-20 xl:block"></span>
          <div className="md:max-w-[480px]">
            <p className="  text-[20px] leading-10  font-groteska-regular text-primaryGray md:text-[18px] ">
              Flixsa is a platform that provides a smooth & seamless means of
              booking movies with a wide variety of cinemas closest in your
              city. This allow cinemas to set show dates and time while
              providing customers with an easy platform to order tickets.
            </p>
          </div>
        </div>
      </div>
      <div className="py-20 md:py-24">
        <AppLinks />
      </div>
    </div>
  );
}

export default FAQs