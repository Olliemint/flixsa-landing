
const AppLinks = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex justify-center px-5 md:px-0">
      <div className="max-w-[375px] w-full p-[26px] bg-darkBg rounded-[32px] items-center text-center flex flex-col gap-y-[30px] md:max-w-[1339px]  xl:flex-row xl:gap-x-[43px]">
        <p className="text-[22px] font-groteska-bold tracking-[-0.66px] text-primaryWhite w-full xl:max-w-[803px] xl:text-[54px] xl:text-start">
          Get the App & Start Booking Movies without Hassle 🥳
        </p>
        <svg
          className="w-full xl:hidden"
          xmlns="http://www.w3.org/2000/svg"
          height="1"
          viewBox="0 0 335 1"
          fill="none"
        >
          <path d="M0.5 0.375H334.5" stroke="#F7F8FF" stroke-width="0.3" />
        </svg>
        <svg
          className="hidden xl:block"
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="177"
          viewBox="0 0 2 177"
          fill="none"
        >
          <path
            d="M1 177L1.00001 8.46386e-06"
            stroke="#F7F8FF"
            stroke-width="0.3"
          />
        </svg>
        <div className="flex justify-center gap-x-6">
          <img
            className="hidden xl:block"
            src="https://res.cloudinary.com/seeders/image/upload/v1697809047/Group_48095586_1_tv2v4z.png"
            alt=""
          />
          <img
            className="w-[82.25px] h-[82.25px] xl:hidden"
            src="https://res.cloudinary.com/seeders/image/upload/v1697808296/Google_Play_Black_eva8ra.png"
            alt=""
          />
                  <svg
            className="hidden xl:block"
            xmlns="http://www.w3.org/2000/svg"
            width="151"
            height="151"
            viewBox="0 0 151 151"
            fill="none"
          >
            <circle
              cx="75.5"
              cy="75.5"
              r="75.5"
              fill="white"
              fill-opacity="0.05"
            />
            <path
              d="M97.373 77.7183C97.4525 71.5173 100.77 65.6498 106.032 62.4019C102.712 57.6421 97.1518 54.6243 91.3666 54.4426C85.1962 53.7924 79.2143 58.1492 76.07 58.1492C72.8648 58.1492 68.0236 54.5071 62.8105 54.6148C56.0154 54.8352 49.6806 58.7136 46.3746 64.6775C39.2681 77.0294 44.569 95.1824 51.3764 105.167C54.7823 110.056 58.7628 115.517 63.9713 115.323C69.0681 115.111 70.9716 112.061 77.1238 112.061C83.219 112.061 85.0049 115.323 90.319 115.2C95.7881 115.111 99.2339 110.289 102.52 105.354C104.967 101.87 106.851 98.0203 108.1 93.9462C101.673 91.2172 97.3805 84.7239 97.373 77.7183Z"
              fill="white"
            />
            <path
              d="M87.3354 47.8764C90.3174 44.2827 91.7865 39.6636 91.4307 35C86.875 35.4804 82.6667 37.6662 79.6444 41.1221C76.6891 44.4986 75.1511 49.0364 75.4419 53.5218C79.9993 53.5689 84.4796 51.4423 87.3354 47.8764Z"
              fill="white"
            />
          </svg>
          <svg
            className="xl:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="83"
            height="83"
            viewBox="0 0 83 83"
            fill="none"
          >
            <circle
              cx="41.625"
              cy="41.5"
              r="41.125"
              fill="white"
              fill-opacity="0.05"
            />
            <path
              d="M53.538 42.7082C53.5813 39.3305 55.3882 36.1345 58.2547 34.3653C56.4463 31.7727 53.4175 30.1288 50.2663 30.0299C46.9053 29.6757 43.6469 32.0489 41.9342 32.0489C40.1883 32.0489 37.5513 30.065 34.7117 30.1237C31.0104 30.2437 27.5598 32.3563 25.7591 35.6049C21.8881 42.3329 24.7755 52.2209 28.4835 57.6594C30.3387 60.3225 32.5069 63.2972 35.344 63.1917C38.1202 63.0761 39.1571 61.4145 42.5082 61.4145C45.8283 61.4145 46.8011 63.1917 49.6957 63.1246C52.6747 63.0761 54.5516 60.4497 56.3417 57.7614C57.6747 55.8639 58.7004 53.7667 59.3809 51.5476C55.88 50.0611 53.542 46.5242 53.538 42.7082Z"
              fill="white"
            />
            <path
              d="M48.0705 26.4533C49.6948 24.4958 50.495 21.9797 50.3012 19.4395C47.8197 19.7011 45.5274 20.8918 43.8812 22.7742C42.2714 24.6134 41.4337 27.0851 41.592 29.5283C44.0745 29.554 46.5149 28.3956 48.0705 26.4533Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AppLinks