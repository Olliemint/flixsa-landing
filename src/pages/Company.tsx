import AppLinks from "../components/AppLinks";
import CoreValues from "../components/CoreValues";

const Company = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="max-w-[687px] text-center space-y-[14px] px-[22px] md:px-0 md:space-y-8">
          <h1 className="text-2xl text-primaryWhite font-groteska-bold tracking-[-0.72px] md:text-[54px]">
            Who are we?
          </h1>
          <p className="text-[18px] font-groteska-regular leading-8 text-primaryGray md:font-groteska-medium">
            We're passionate about providing and exceptional user experience
            while benefiting cinema owners. Our mission is to provide you with
            the ultimate movie-watching experience, making it easier than ever
            to discover, enjoy, and book your favorite films.
          </p>
          <div className="py-[52px] flex items-center justify-center">
            <img
              className="hidden md:block"
              src="https://res.cloudinary.com/seeders/image/upload/v1697796543/Group_48095588_wzxq5g.png"
              alt=""
            />
            <img
              className="md:hidden"
              src="https://res.cloudinary.com/seeders/image/upload/v1697796563/Group_48095589_jlbviy.png"
              alt=""
            />
          </div>
        </div>
        <div className="px-5 space-y-7  md:px-0  mt-10 lg:mt-20 ">
          <h1 className="text-[22px] font-groteska-bold tracking-[-1.32px] text-primaryWhite md:text-[44px] text-center lg:text-start">
            Our Founder’s Story
          </h1>
          <div className="w-full relative  max-w-[1296px] rounded-[20px] flex flex-col items-center gap-y-[34px]  overflow-hidden bg-darkBg px-5 py-[42px] xl:flex-row xl:gap-x-[42px] xl:px-14">
            <span className="w-[328px] bottom-0 left-0 -translate-x-[50%] translate-y-[50%] absolute border-[50px] border-cardbg h-[328px] flex items-center justify-center rounded-full md:h-[448px] md:w-[448px] md:border-[75px] md:-translate-x-[38%] md:translate-y-[49%]"></span>
            <span className="w-[328px] top-0  right-0 translate-x-[55%] -translate-y-[55%]  absolute border-[50px] border-cardbg h-[328px] flex items-center justify-center rounded-full md:h-[448px] md:w-[448px] md:border-[75px] md:translate-x-[40%] md:-translate-y-[49%]"></span>
            <div className=" flex flex-col text-center gap-y-[26px]">
              <img
                className="z-10 md:hidden"
                src="https://res.cloudinary.com/seeders/image/upload/v1697792573/Frame_1000003828_1_vp4hah.png"
                alt=""
              />
              <img
                className="hidden z-10 md:block"
                src="https://res.cloudinary.com/seeders/image/upload/v1697795068/Frame_1000003828_2_ly5hub.png"
                alt=""
              />
              <div className="space-y-2">
                <h1 className="text-[28px] font-groteska-bold text-primaryWhite tracking-[-0.84px]">
                  Emmanuel Iheme
                </h1>
                <p className="text-[18px] text-primaryGray font-groteska-bold tracking-[3.06px]">
                  CEO/Co-Founder
                </p>
              </div>
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
            <svg
              className="hidden xl:block"
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="736"
              viewBox="0 0 2 736"
              fill="none"
            >
              <path
                d="M1 735.5L1.00003 0.500023"
                stroke="#F7F8FF"
                stroke-width="0.3"
              />
            </svg>
            <div className="md:max-w-[725px]">
              <p className="inline-flex text-[18px] flex-col gap-y-7 leading-8 font-groteska-medium text-primaryGray ">
                <span>
                  Hello, movie enthusiasts! I want to share with you the story
                  of how our app came to be and why I'm so passionate about
                  bringing it to life. Since I was a child, I've had an immense
                  love for cinema. The power of storytelling through film, the
                  magic of the silver screen, and the way movies can transport
                  us to different worlds always fascinated me. Whether it was an
                  action-packed blockbuster, an emotional drama, or a
                  mind-bending sci-fi flick, I cherished every moment spent in a
                  movie theatre.
                </span>
                <span>
                  The idea for Flixsa was born out of my personal experiences
                  and frustrations. Like many of you, I often found myself
                  spending more time waiting in lines and dealing with ticketing
                  issues than enjoying the actual movie. That's when I realized
                  that there had to be a better way to book and enjoy movies.
                </span>
                <span>
                  I began to envision an app that would make the entire
                  movie-going experience seamless and enjoyable. An app that
                  would allow you to browse movie listings, select the best
                  seats, and book tickets with just a few taps on your
                  smartphone. An app that would keep you updated on the latest
                  releases, showtimes, and exclusive offers. An app that would
                  put the power of movie booking in your hands. With this vision
                  in mind, I set out to assemble a team of talented developers,
                  designers, and movie lovers who shared the same passion.
                  Together, we embarked on a journey to create Flixsa, a
                  platform that we believe will redefine the way you book and
                  enjoy movies.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="py-[120px]">
          <CoreValues />
        </div>
      </div>
      <div className="xl:py-16">
        <AppLinks />
      </div>
    </div>
  );
}

export default Company