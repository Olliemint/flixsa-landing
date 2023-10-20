import Circle from "../assets/iimages/circle.png";

const MovieSlider = () => {
  return (
    <div className="py-24 max-w-[1440px] mx-auto">
      <div className=" flex gap-7 flex-col ">
        <div className="space-y-[74px] max-w-[487px] w-full px-[24px] md:px-0 ">
          <div className="space-y-2">
            <h1 className="text-[22px] font-groteska-bold tracking-[-0.66px] text-primaryWhite">
              Featured on Flixsa
            </h1>
            <p className="text-[18px] text-primaryGray font-groteska-medium">
              Best features for you today!
            </p>
          </div>
          <div className="max-w-[487px] space-y-6">
            <h1 className="text-[22px] font-groteska-bold  text-primaryWhite md:text-[44px]">
              Deadpool 2
            </h1>
            {/* buttons section */}
            <div className=" flex items-center gap-4">
              <p className="inline-flex items-center gap-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M2.06708 8.03333L4.46708 10.2333L3.80041 13.3C3.73375 13.7 3.86708 14.1 4.20041 14.3C4.33375 14.4333 4.53375 14.5 4.73375 14.5C4.86708 14.5 5.00041 14.5 5.13375 14.4333C5.13375 14.4333 5.20041 14.4333 5.20041 14.3667L7.93375 12.8333L10.6671 14.3667C10.6671 14.3667 10.7337 14.3667 10.7337 14.4333C11.0671 14.5667 11.4671 14.5667 11.7337 14.3667C12.0671 14.1667 12.2004 13.7667 12.1337 13.3667L11.4671 10.3C11.7337 10.1 12.1337 9.7 12.5337 9.3L13.8004 8.16667L13.8671 8.1C14.1337 7.83333 14.2004 7.43333 14.0671 7.1C13.9337 6.76667 13.6671 6.5 13.2671 6.43333H13.2004L10.0671 6.1L8.80041 3.23333C8.80041 3.23333 8.80041 3.16667 8.73375 3.16667C8.66708 2.7 8.33375 2.5 8.00041 2.5C7.66708 2.5 7.33375 2.7 7.13375 3.03333C7.13375 3.03333 7.13375 3.1 7.06708 3.1L5.80041 5.96667L2.66708 6.3H2.60041C2.26708 6.36667 1.93375 6.63333 1.80041 6.96667C1.73375 7.36667 1.80041 7.76667 2.06708 8.03333Z"
                    fill="#F7F8FF"
                  />
                </svg>
                <span className="text-xs font-groteska-bold text-primaryWhite">
                  4.9
                </span>
              </p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="24"
                  viewBox="0 0 2 24"
                  fill="none"
                >
                  <path
                    d="M1 23.5L1 0.499999"
                    stroke="#F7F8FF"
                    stroke-width="0.3"
                  />
                </svg>
              </span>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4 ">
                <span className="">
                  <button
                    type="button"
                    className="px-[14px] py-[3px] text-xs font-groteska-regular text-primaryWhite inline-flex items-center gap-1 bg-ratingBtns rounded-[14px]"
                  >
                    Action
                    <span>
                      <img src={Circle} alt="" />
                    </span>
                  </button>
                </span>
                <span>
                  <button
                    type="button"
                    className="px-[14px] py-[3px] text-xs font-groteska-regular text-primaryWhite inline-flex items-center gap-1 bg-ratingBtns rounded-[14px]"
                  >
                    PG-18
                    <span>
                      <img src={Circle} alt="" />
                    </span>
                  </button>
                </span>
                <span>
                  <button
                    type="button"
                    className="px-[14px] py-[3px] text-xs font-groteska-regular text-primaryWhite inline-flex items-center gap-1 bg-ratingBtns rounded-[14px]"
                  >
                    2023
                    <span>
                      <img src={Circle} alt="" />
                    </span>
                  </button>
                </span>
                <span>
                  <button
                    type="button"
                    className="px-[14px] py-[3px] text-xs font-groteska-regular text-primaryWhite inline-flex items-center gap-1 bg-ratingBtns rounded-[14px]"
                  >
                    2h 35m
                    <span>
                      <img src={Circle} alt="" />
                    </span>
                  </button>
                </span>
              </div>
            </div>
            <p className=" font-groteska-medium leading-8 text-primaryGray md:text-[18px]">
              July 3rd, 2019 On Halloween, Gotham City mayor Don Mitchell Jr. is
              murdered by a serial killer calling himself the Riddler. Bruce
              Wayne, who has operated for two years as the vigilante. The Force
              Awakens including Leia, Finn.. Read more..
            </p>
          </div>
        </div>
        <div className=" overflow-hidden pl-4 md:pl-0">
          {/* <ActiveSlider /> */}
        </div>
      </div>
    </div>
  );
}

export default MovieSlider