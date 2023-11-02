
interface CustomStyles {
  websvgs: {
    svg_one: string;
    svg_two: string;
  };
  mobilesvgs: {
    svg_one: string;
    svg_two: string;
  };
}

type AboutSvgsProps = {
    custom: CustomStyles;
    };





const AboutSvgs = ({custom}:AboutSvgsProps) => {

   

    
  return (
    <>
      {/* web svgs */}
      <svg
        className={`absolute right-0 ${custom.websvgs.svg_one} hidden lg:block`}
        xmlns="http://www.w3.org/2000/svg"
        width="238"
        height="420"
        viewBox="0 0 238 420"
        fill="none"
      >
        <path
          opacity="0.3"
          d="M544.117 80.5888L424.069 -69.2531C423.379 -70.1151 422.12 -70.2541 421.258 -69.5635L1.69499 266.574C0.832968 267.264 0.694002 268.523 1.38463 269.385L121.432 419.227C122.123 420.089 123.381 420.228 124.243 419.537L543.806 83.4002C544.668 82.7096 544.807 81.4509 544.117 80.5888Z"
          fill="url(#paint0_linear_743_22536)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_743_22536"
            x1="622.713"
            y1="-110.088"
            x2="67.6437"
            y2="334.612"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8F9BB3" />
            <stop offset="1" stop-color="#8F9BB3" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className={`absolute right-0 ${custom.websvgs.svg_two}  hidden lg:block`}
        xmlns="http://www.w3.org/2000/svg"
        width="234"
        height="385"
        viewBox="0 0 234 385"
        fill="none"
      >
        <path
          opacity="0.3"
          d="M458.679 44.9588L423.819 1.4466C423.128 0.58456 421.87 0.445607 421.008 1.13624L1.4445 337.273C0.58248 337.964 0.443514 339.223 1.13414 340.085L35.9944 383.597C36.685 384.459 37.9437 384.598 38.8058 383.907L458.369 47.7702C459.231 47.0795 459.37 45.8209 458.679 44.9588Z"
          fill="url(#paint0_linear_743_22537)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_743_22537"
            x1="581.463"
            y1="-90.5639"
            x2="26.3937"
            y2="354.135"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8F9BB3" />
            <stop offset="1" stop-color="#8F9BB3" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* mobile svgs */}

      <svg
        className={`absolute right-0 ${custom.mobilesvgs.svg_one} lg:hidden`}
        xmlns="http://www.w3.org/2000/svg"
        width="105"
        height="235"
        viewBox="0 0 105 235"
        fill="none"
      >
        <g clip-path="url(#clip0_749_22749)">
          <path
            opacity="0.3"
            d="M240.051 35.6652L187.089 -30.6491C186.785 -31.0306 186.229 -31.0921 185.849 -30.7864L0.747669 117.975C0.367366 118.28 0.306056 118.838 0.610745 119.219L53.5728 185.533C53.8775 185.915 54.4328 185.976 54.8131 185.671L239.914 36.9094C240.295 36.6037 240.356 36.0467 240.051 35.6652Z"
            fill="url(#paint0_linear_749_22749)"
          />
          <path
            opacity="0.3"
            d="M204.123 84.0682L188.744 64.8114C188.439 64.4299 187.884 64.3684 187.503 64.674L2.40197 213.435C2.02166 213.741 1.96035 214.298 2.26504 214.679L17.6446 233.936C17.9493 234.318 18.5046 234.379 18.8849 234.074L203.986 85.3124C204.366 85.0068 204.428 84.4497 204.123 84.0682Z"
            fill="url(#paint1_linear_749_22749)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_749_22749"
            x1="274.726"
            y1="-48.7208"
            x2="29.2431"
            y2="147.335"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8F9BB3" />
            <stop offset="1" stop-color="#8F9BB3" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_749_22749"
            x1="258.292"
            y1="24.0911"
            x2="12.8093"
            y2="220.147"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8F9BB3" />
            <stop offset="1" stop-color="#8F9BB3" stop-opacity="0" />
          </linearGradient>
          <clipPath id="clip0_749_22749">
            <rect width="105" height="235" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default AboutSvgs