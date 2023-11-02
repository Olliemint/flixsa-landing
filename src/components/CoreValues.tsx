import { core_values } from '../constants/data';

const CoreValues = () => {
  return (
    <div className="max-w-[1440px] mx-auto lg:mt-10">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="max-w-[687px] text-center space-y-[14px] px-[22px] md:px-0 md:space-y-8">
          <h1 className="text-2xl text-primaryWhite font-groteska-bold tracking-[-0.72px] md:text-[54px]">
            Our Core Values
          </h1>
          <p className="text-[18px] font-groteska-regular leading-8 text-primaryGray md:font-groteska-medium">
            we are committed to upholding a set of core values that define who
            we are, what we stand for, and how we operate. These values are the
            guiding principles that drive our decisions and actions, ensuring
            that we consistently deliver the best experience to our users.
          </p>
        </div>
        <div className="px-3  relative gap-y-[87px] grid grid-flow-row lg:grid-flow-col mt-16 lg:gap-x-[65px] lg:h-[500px] lg:mt-24">
          {core_values.map((value) => (
            <div
              key={value.id}
              className={`text-start relative space-y-4 w-full max-w-[334px] lg:max-w-[402px] ${
                value.id === 1
                  ? "self-end"
                  : value.id === 2
                  ? "self-center"
                  : "self-start"
              }`}
            >
              <span className='absolute transform left-1/2'>
                <img
                  className=""
                  src={value.image}
                  alt=""
                />
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="46"
                viewBox="0 0 45 46"
                fill="none"
              >
                <rect
                  y="0.830078"
                  width="44.2553"
                  height="44.2553"
                  rx="20"
                  fill="#F7F8FF"
                />
                <rect
                  x="13.8301"
                  y="14.6602"
                  width="15.9043"
                  height="15.9043"
                  rx="7.95213"
                  fill="#1D2939"
                />
              </svg>
              <h1 className="text-[18px] text-primaryWhite font-groteska-bold tracking-[-0.54px]">
                {value.title}
              </h1>
              <p className="  text-base font-groteska-medium text-primaryGray leading-8">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoreValues