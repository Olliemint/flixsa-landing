import { socials } from "../constants/data";

const Network = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-24 md:py-[268px]">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[687px] space-x-4 md:space-y-[23px]">
          <h1 className=" text-[22px] font-groteska-medium text-primaryWhite text-center tracking-[-0.66px] md:text-[44px] md:tracking-[-1.32px]">
            Join Our Network
          </h1>
          <p className="max-w-[365px] text-center text-[18px] leading-7 font-groteska-regular text-primaryGray md:leading-8 md:max-w-full">
            Be a part of our bubbling community of movie lovers. it’s your
            personalised book of everything you need to know about movies
          </p>
        </div>
        <div className="max-w-[1210px] w-full mt-[36px] flex flex-wrap justify-center  gap-y-[83px] px-7  md:gap-x-16 md:px-0 md:mt-[88px]">
          {socials.map((social) => (
            <div
              key={social.id}
              className="max-w-full  space-y-4 space-x-4 flex flex-col items-center md:flex-row md:max-w-[573px] "
            >
              <span className="w-[146px] h-[146px] rounded-full bg-darkBg flex items-center justify-center shadow-socials-shadow">
                <img src={social.image} alt="" />
              </span>
              <div className="space-y-4 text-center max-w-[411px] md:text-start">
                <h1 className="text-[22px] font-groteska-medium text-primaryWhite">
                  {social.title}
                </h1>
                <p className="text-base leading-8 font-groteska-regular text-primaryGray">
                  {social.description}
                </p>
                <button
                  type="button"
                  className="px-[22px] py-[9px] text-primaryWhite font-groteska-medium border-[0.5px] border-primaryWhite rounded-lg shadow-follow-btn-shadow"
                >
                  Follow Us
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Network