import { useEffect,useRef } from "react";
import { routes } from "../constants/routes";
import { NavLink } from "react-router-dom";

type SideMenuProps = {
  toggleSidebar: () => void;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarOpen: boolean;
};

const SideMenu = ({ toggleSidebar, sidebarOpen,setSidebarOpen }: SideMenuProps) => {
  const trigger = useRef<any>(null);

   const delayToggle = () => {
     setTimeout(() => {
       toggleSidebar();
     }, 300);
   };
  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!trigger.current) return;
      if (trigger.current.contains(target)) return;
      setSidebarOpen(!sidebarOpen);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  return (
    <div className="py-10  flex flex-col items-center">
     
      <header className="w-full text-lg font-groteska-regular text-primaryWhite flex justify-between px-4 border-b pb-4 border-primaryBlack">
        <span className="flex gap-[7px] items-center sm:gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <g clip-path="url(#clip0_1185_6354)">
              <path
                d="M21.2108 26H4.7892C2.1424 26 0 23.8576 0 21.2108V4.7892C0 2.1424 2.1424 0 4.7892 0H21.2108C23.8576 0 26 2.1424 26 4.7892V21.2108C26 23.8576 23.8576 26 21.2108 26Z"
                fill="#1D2939"
              />
              <path
                d="M12.5607 12.2198V8.06725H17.9407C18.1442 8.06725 18.3055 7.90592 18.3055 7.7025V4.21631C18.3055 4.0129 18.1442 3.85156 17.9407 3.85156L12.5817 3.87962C12.5396 3.87962 12.4975 3.89365 12.4625 3.92171L7.29981 8.00412C7.25071 8.03919 7.22266 8.10232 7.22266 8.15844V16.0076C7.22266 16.211 7.38399 16.3724 7.58741 16.3724H12.4835L18.3616 12.2128H12.5607V12.2198Z"
                fill="#F7F8FF"
              />
              <path
                d="M12.5256 17.5225L7.2928 21.3173C7.25071 21.3453 7.22266 21.3944 7.22266 21.4506V22.2783C7.43309 22.0819 7.76277 22.0889 7.95917 22.2993C8.04335 22.3905 8.09245 22.5027 8.09946 22.629H8.6045C8.62555 22.3414 8.87105 22.1239 9.15865 22.145C9.41818 22.159 9.62862 22.3695 9.64264 22.629H10.1477C10.1687 22.3414 10.4142 22.1239 10.7018 22.145C10.9614 22.159 11.1718 22.3695 11.1858 22.629H11.6909C11.7049 22.3414 11.9504 22.1239 12.231 22.138C12.3432 22.145 12.4414 22.1801 12.5326 22.2502V21.4716V17.5926C12.5256 17.5575 12.5256 17.5365 12.5256 17.5225Z"
                fill="#F7F8FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_1185_6354">
                <rect width="26" height="26" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="14"
            viewBox="0 0 51 14"
            fill="none"
          >
            <g clip-path="url(#clip0_1185_6359)">
              <path
                d="M0.749717 6.2966V13.7448H2.72846V6.2966H5.87855V4.55972H2.72846V2.0422H5.87855V0.120809H3.466C2.57595 0.120809 1.90986 0.354066 1.46772 0.820578C0.98905 1.3256 0.749717 1.87529 0.749717 2.46966V4.55972H0V6.2966H0.749717ZM7.47955 13.7448H9.45957V0H7.47955V13.7448ZM12.5965 2.72217C12.9611 2.72217 13.2628 2.59454 13.5016 2.33927C13.7404 2.08401 13.8599 1.76637 13.8602 1.38633C13.8602 1.00674 13.7407 0.689206 13.5016 0.433725C13.2626 0.178243 12.9609 0.0508323 12.5965 0.0514924C12.2319 0.0514924 11.927 0.179123 11.6818 0.434385C11.4366 0.689646 11.3141 1.00696 11.3143 1.38633C11.3143 1.76593 11.4368 2.08335 11.6818 2.33861C11.9268 2.59388 12.2317 2.72151 12.5965 2.72151M11.5594 13.7448H13.6718V3.94676H11.5594V13.7448ZM24.7224 3.92795H22.3835L19.7243 7.44264L17.1602 3.92795H14.8213L18.4049 8.97355L14.8217 13.7448H17.198L19.6874 10.3869L22.1391 13.7448H24.4584L21.0075 8.93394L24.7224 3.92795ZM27.6453 10.5843H25.7031C25.7031 11.1475 25.8288 11.6286 26.0802 12.0278C26.3316 12.427 26.6805 12.7542 27.1269 13.0094C27.5734 13.2645 28.0951 13.451 28.6921 13.5689C29.3296 13.6906 29.9769 13.7498 30.6253 13.7458C31.2846 13.7489 31.9432 13.7031 32.596 13.6085C33.2059 13.5168 33.7339 13.3596 34.1801 13.1372C34.6263 12.9147 34.9752 12.6136 35.2268 12.2337C35.478 11.8542 35.6037 11.3829 35.6039 10.82C35.6092 10.5027 35.5379 10.1889 35.3963 9.90701C35.2546 9.63484 35.058 9.39712 34.8196 9.20988C34.5608 9.00567 34.2751 8.84041 33.9712 8.71905C33.6391 8.58489 33.2946 8.48612 32.943 8.42429L29.7561 7.81563C29.0773 7.72408 28.5587 7.58677 28.2003 7.40369C27.8419 7.2206 27.6626 6.99142 27.6626 6.71613C27.6626 6.49366 27.7602 6.30716 27.9552 6.15665C28.1502 6.00613 28.3953 5.8851 28.6905 5.79356C29.004 5.69837 29.326 5.63578 29.6516 5.60673C29.9974 5.57395 30.3213 5.55766 30.6231 5.55788C30.9963 5.55481 31.3691 5.58373 31.7377 5.64436C32.0462 5.69365 32.3476 5.78236 32.6348 5.90843C32.8928 6.02615 33.094 6.18019 33.2384 6.37054C33.3843 6.56386 33.4609 6.8031 33.4553 7.04786H35.3601C35.3601 6.52435 35.2406 6.0662 35.0015 5.67341C34.7625 5.28061 34.4294 4.95659 34.0022 4.70132C33.5751 4.44628 33.0752 4.25319 32.5028 4.12204C31.8863 3.98588 31.2571 3.91947 30.6266 3.92399C29.9903 3.9211 29.3554 3.98357 28.7312 4.11048C28.1331 4.23481 27.6082 4.41482 27.1564 4.65049C26.7047 4.88617 26.3433 5.18071 26.0722 5.53412C25.8045 5.8795 25.6611 6.30979 25.6666 6.75178C25.6666 7.14435 25.7546 7.48467 25.9306 7.77272C26.1095 8.06355 26.3437 8.31405 26.6191 8.50912C26.924 8.7238 27.2569 8.89284 27.6079 9.01118C27.9841 9.14192 28.3684 9.24689 28.7581 9.32541L31.4173 9.83604C31.7095 9.87347 31.9993 9.92914 32.2849 10.0027C32.5327 10.0651 32.7755 10.1472 33.0109 10.2483C33.1913 10.3234 33.3597 10.426 33.5104 10.5526C33.6362 10.664 33.6992 10.7785 33.6992 10.8963C33.7022 11.0182 33.6763 11.1391 33.6237 11.2484C33.5711 11.3576 33.4934 11.4521 33.3973 11.5234C33.1961 11.6805 32.9415 11.7984 32.6335 11.8769C32.3054 11.9584 31.971 12.011 31.6342 12.034C31.2756 12.06 30.9393 12.073 30.6253 12.073C30.2596 12.0738 29.8941 12.0508 29.5312 12.0043C29.2078 11.9661 28.8907 11.8835 28.5886 11.7588C28.3109 11.6412 28.0877 11.4872 27.919 11.2966C27.7502 11.1061 27.659 10.8671 27.6453 10.5797M40.3185 13.9964C40.6831 13.9964 41.1357 13.9506 41.6763 13.8591C42.2253 13.7645 42.7566 13.5822 43.251 13.3187C43.7657 13.0458 44.2137 12.6565 44.5617 12.1799C44.9263 11.689 45.1085 11.0378 45.1083 10.2262V13.725H47.1076V8.16815C47.1076 7.38278 46.985 6.72174 46.7397 6.18503C46.5053 5.6618 46.145 5.20892 45.693 4.86934C45.2406 4.52891 44.6843 4.28355 44.0241 4.13326C43.3639 3.98296 42.619 3.9077 41.7894 3.90748C41.1509 3.90507 40.5135 3.96096 39.8846 4.0745C39.2814 4.18453 38.7475 4.37752 38.2827 4.65346C37.8294 4.91655 37.4495 5.29528 37.1792 5.75329C36.9093 6.211 36.7742 6.78039 36.774 7.46145H38.7165C38.7165 7.06866 38.8202 6.75123 39.0276 6.50917C39.2421 6.26178 39.5103 6.07008 39.8103 5.94969C40.1395 5.81493 40.4855 5.72891 40.8381 5.6942C41.1794 5.65663 41.5224 5.63702 41.8656 5.63545C42.225 5.63665 42.5841 5.65957 42.9409 5.70411C43.2965 5.74402 43.6453 5.83283 43.978 5.96817C44.2792 6.09042 44.5471 6.28614 44.7588 6.53855C44.9662 6.78699 45.0699 7.12081 45.0699 7.54001V7.87372L40.412 8.08959C39.9637 8.10561 39.5182 8.16809 39.0821 8.27609C38.644 8.37936 38.222 8.54465 37.828 8.76725C37.4602 8.97456 37.1439 9.26684 36.904 9.62116C36.6654 9.97457 36.546 10.4066 36.5458 10.9174C36.5456 11.4281 36.656 11.8765 36.8771 12.2625C37.094 12.6449 37.3901 12.9733 37.7444 13.2243C38.1131 13.4845 38.521 13.6803 38.9517 13.8036C39.3963 13.9344 39.8564 14.0005 40.3188 14M40.9596 12.3701C40.6875 12.3693 40.4161 12.3431 40.1486 12.2918C39.8894 12.2453 39.6384 12.1593 39.4037 12.0367C39.1895 11.9236 39.0026 11.7626 38.8568 11.5653C38.7124 11.3686 38.6401 11.1265 38.6399 10.8392C38.6374 10.729 38.6592 10.6196 38.7036 10.5194C38.748 10.4191 38.8138 10.3305 38.8962 10.2602C39.0865 10.0975 39.3035 9.97114 39.537 9.88721C39.8087 9.78533 40.0899 9.71287 40.3761 9.671C40.6781 9.62501 40.961 9.59564 41.2248 9.58287L45.1096 9.40595V10.1519C45.1096 10.5839 44.9619 10.9406 44.6665 11.222C44.3711 11.5035 44.0097 11.7294 43.5823 11.8997C43.1442 12.0724 42.6888 12.1942 42.2245 12.2628C41.8063 12.3296 41.384 12.3655 40.9608 12.3704"
                fill="#1D2939"
              />
              <path
                d="M51.0004 11.1409C51.0004 11.1332 50.9984 11.1257 50.9944 11.1192C50.9905 11.1127 50.9849 11.1074 50.9783 11.104C50.9716 11.1005 50.9642 11.0991 50.9568 11.0998C50.9494 11.1005 50.9423 11.1033 50.9363 11.1079L48.718 12.7721C48.7088 12.779 48.7014 12.788 48.6963 12.7984C48.6912 12.8088 48.6885 12.8202 48.6885 12.8319V13.7459C48.7199 13.7154 48.7592 13.6949 48.8016 13.6866C48.844 13.6784 48.8878 13.6828 48.9278 13.6993C48.9679 13.7159 49.0025 13.7439 49.0277 13.78C49.0528 13.8161 49.0674 13.8589 49.0697 13.9033H49.2886C49.2917 13.8436 49.3168 13.7875 49.3589 13.7464C49.401 13.7053 49.4568 13.6823 49.5148 13.6823C49.5728 13.6823 49.6285 13.7053 49.6706 13.7464C49.7127 13.7875 49.7379 13.8436 49.741 13.9033H49.9598C49.962 13.8431 49.9868 13.786 50.0289 13.7442C50.0711 13.7024 50.1273 13.679 50.1858 13.679C50.2443 13.679 50.3006 13.7024 50.3427 13.7442C50.3849 13.786 50.4097 13.8431 50.4119 13.9033H50.631C50.6326 13.8602 50.6458 13.8184 50.6692 13.7827C50.6926 13.7469 50.7253 13.7187 50.7635 13.701C50.8017 13.6834 50.8439 13.6772 50.8854 13.683C50.9269 13.6888 50.9659 13.7065 50.9982 13.734V13.3841L51.0004 11.1409Z"
                fill="#1D2939"
              />
            </g>
            <defs>
              <clipPath id="clip0_1185_6359">
                <rect width="51" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span className="w-8 h-8 rounded-full flex items-center justify-center bg-primaryBlack shadow-close-shadow cursor-pointer">
          <svg
            onClick={toggleSidebar}
            className="fill-primaryWhite"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill=""
          >
            <path
              d="M12.5 4L4.5 12"
              stroke="#FFFFFF"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.5 4L12.5 12"
              stroke="#FFFFFF"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </header>

      <div className="divide-y mt-7 divide-gray-100 w-full space-y-5 px-4">
        {routes.map((route) => (
          <NavLink
            to={route.path}
            key={route.path}
            className="flex flex-col items-center gap-4 py-2 text-lg font-groteska-regular text-primaryBlack hover:text-primaryWhite transition-all duration-300"
          >
            {({ isActive }) => (
              <button
                type="button"
                className={`w-full transition-all ease-in-out duration-200 rounded-md ${
                  isActive
                    ? "bg-primaryBlack text-primaryWhite py-2"
                    : "bg-transparent"
                }`}
                onClick={delayToggle}
              >
                {route.name}
              </button>
            )}
          </NavLink>
        ))}
      </div>
      <div className="flex mt-16 items-center gap-4  py-[9px] px-[22px] bg-primaryGray rounded-lg ">
        <div className="">
          <p className="text-base font-groteska-bold text-primaryWhite">
            Download on
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="24"
          viewBox="0 0 2 24"
          fill="none"
        >
          <path d="M1 23.5L1 0.499999" stroke="#F7F8FF" stroke-width="0.3" />
        </svg>
        <div className="flex gap-3 ">
          <img
            src="https://res.cloudinary.com/seeders/image/upload/v1697456969/Google_Play_Black_ad7wxw.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/seeders/image/upload/v1697456969/App_Store_Black_tjy4ai.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SideMenu