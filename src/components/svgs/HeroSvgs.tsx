interface CustomStyles {
  websvgs: {
    svg: string;
   
  };
  mobilesvgs: {
    svg: string;
   
  };
}

type HeroSvgsProps = {
  custom: CustomStyles;
};
const HeroSvgs = ({custom}:HeroSvgsProps) => {
  return (
    <>
      <svg
        className={`absolute ${custom.mobilesvgs.svg} z-0 md:hidden`}
        xmlns="http://www.w3.org/2000/svg"
        width="156"
        height="86"
        viewBox="0 0 156 86"
        fill="none"
      >
        <g clip-path="url(#clip0_767_22772)">
          <path
            d="M2.52393 30.9475C14.4256 28.4443 43.4558 27.7721 64.3619 45.1083C90.4949 66.779 98.3957 69.3534 113.286 71.2848C128.175 73.2157 144.736 78.5798 155.524 90.8094"
            stroke="url(#paint0_linear_767_22772)"
            stroke-opacity="0.3"
          />
          <path
            d="M-9.47607 30.9475C2.42561 28.4443 31.4556 27.7721 52.3619 45.1083C78.4949 66.779 86.3956 69.3534 101.286 71.2848C116.175 73.2157 132.736 78.5798 143.524 90.8094"
            stroke="url(#paint1_linear_767_22772)"
            stroke-opacity="0.3"
          />
          <path
            d="M-22.7617 30.9475C-10.86 28.4443 18.1699 27.7721 39.0764 45.1083C65.2093 66.779 73.11 69.3534 87.9999 71.2848C102.89 73.2157 119.451 78.5798 130.238 90.8094"
            stroke="url(#paint2_linear_767_22772)"
            stroke-opacity="0.3"
          />
          <path
            d="M-42.0693 27.849C-29.2035 25.6974 2.02871 25.8805 24.0315 43.8262C51.5349 66.2585 59.9593 69.0649 75.9159 71.4339C91.8729 73.803 109.532 79.6527 120.795 92.1959"
            stroke="url(#paint3_linear_767_22772)"
            stroke-opacity="0.3"
          />
          <path
            opacity="0.8"
            d="M96.8766 46.5806C108.324 43.8536 115.389 32.3786 112.658 20.9505C109.926 9.52234 98.4321 2.46866 86.9849 5.19565C75.5378 7.92264 68.4724 19.3976 71.2039 30.8258C73.9354 42.2539 85.4295 49.3076 96.8766 46.5806Z"
            stroke="url(#paint4_linear_767_22772)"
            stroke-opacity="0.15"
          />
          <path
            d="M94.2857 45.3531C104.464 45.3531 112.714 37.1161 112.714 26.9551C112.714 16.7942 104.464 8.55713 94.2857 8.55713C84.1079 8.55713 75.8572 16.7942 75.8572 26.9551C75.8572 37.1161 84.1079 45.3531 94.2857 45.3531Z"
            fill="url(#paint5_radial_767_22772)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_767_22772"
            x1="79.0238"
            y1="29.6255"
            x2="79.0238"
            y2="90.8094"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8F9BB3" stop-opacity="0" />
            <stop offset="1" stop-color="#8F9BB3" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_767_22772"
            x1="67.0238"
            y1="29.6255"
            x2="67.0238"
            y2="90.8094"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8F9BB3" stop-opacity="0" />
            <stop offset="1" stop-color="#8F9BB3" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_767_22772"
            x1="53.7382"
            y1="29.6255"
            x2="53.7382"
            y2="90.8094"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8F9BB3" stop-opacity="0" />
            <stop offset="1" stop-color="#8F9BB3" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_767_22772"
            x1="40.2217"
            y1="28.7811"
            x2="38.5461"
            y2="89.9425"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8F9BB3" stop-opacity="0" />
            <stop offset="1" stop-color="#8F9BB3" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_767_22772"
            x1="86.9352"
            y1="4.98756"
            x2="95.033"
            y2="42.3371"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8F9BB3" />
            <stop offset="1" stop-color="#8F9BB3" stop-opacity="0" />
          </linearGradient>
          <radialGradient
            id="paint5_radial_767_22772"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(94.2857 26.9551) rotate(90) scale(18.398 18.4286)"
          >
            <stop offset="0.145833" stop-color="#8F9BB3" stop-opacity="0" />
            <stop offset="1" stop-color="#8F9BB3" stop-opacity="0.08" />
          </radialGradient>
          <clipPath id="clip0_767_22772">
            <rect width="156" height="86" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
        className={`absolute  ${custom.websvgs.svg}  z-0 hidden md:block`}
        width="364"
        height="201"
        viewBox="0 0 364 201"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_743_22396)">
          <path
            d="M5.88916 72.3301C33.6598 66.4796 101.397 64.9084 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#paint0_linear_743_22396)"
            stroke-opacity="0.3"
          />
          <path
            d="M-22.1106 72.3301C5.65999 66.4796 73.3966 64.9084 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
            stroke="url(#paint1_linear_743_22396)"
            stroke-opacity="0.3"
          />
          <path
            d="M-53.1106 72.3301C-25.34 66.4796 42.3966 64.9084 91.1784 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
            stroke="url(#paint2_linear_743_22396)"
            stroke-opacity="0.3"
          />
          <path
            d="M-98.1619 65.0889C-68.1417 60.0601 4.73357 60.4883 56.0733 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
            stroke="url(#paint3_linear_743_22396)"
            stroke-opacity="0.3"
          />
          <path
            opacity="0.8"
            d="M226.045 108.868C252.755 102.495 269.241 75.6751 262.868 48.9651C256.494 22.2552 229.675 5.76923 202.965 12.1428C176.255 18.5163 159.769 45.3358 166.142 72.0458C172.516 98.7558 199.335 115.242 226.045 108.868Z"
            stroke="url(#paint4_linear_743_22396)"
            stroke-opacity="0.15"
          />
          <path
            d="M220 106C243.748 106 263 86.7482 263 63C263 39.2518 243.748 20 220 20C196.252 20 177 39.2518 177 63C177 86.7482 196.252 106 220 106Z"
            fill="url(#paint5_radial_743_22396)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_743_22396"
            x1="184.389"
            y1="69.2403"
            x2="184.389"
            y2="212.24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8F9BB3" stop-opacity="0" />
            <stop offset="1" stop-color="#8F9BB3" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_743_22396"
            x1="156.389"
            y1="69.2403"
            x2="156.389"
            y2="212.24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8F9BB3" stop-opacity="0" />
            <stop offset="1" stop-color="#8F9BB3" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_743_22396"
            x1="125.389"
            y1="69.2403"
            x2="125.389"
            y2="212.24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8F9BB3" stop-opacity="0" />
            <stop offset="1" stop-color="#8F9BB3" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_743_22396"
            x1="93.8506"
            y1="67.2674"
            x2="89.9277"
            y2="210.214"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8F9BB3" stop-opacity="0" />
            <stop offset="1" stop-color="#8F9BB3" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_743_22396"
            x1="202.849"
            y1="11.6564"
            x2="221.804"
            y2="98.9372"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8F9BB3" />
            <stop offset="1" stop-color="#8F9BB3" stop-opacity="0" />
          </linearGradient>
          <radialGradient
            id="paint5_radial_743_22396"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(220 63) rotate(90) scale(43)"
          >
            <stop offset="0.145833" stop-color="#8F9BB3" stop-opacity="0" />
            <stop offset="1" stop-color="#8F9BB3" stop-opacity="0.08" />
          </radialGradient>
          <clipPath id="clip0_743_22396">
            <rect width="364" height="201" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default HeroSvgs;
