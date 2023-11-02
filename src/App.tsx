import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import FAQs from "./pages/FAQs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import SideMenu from "./components/SideMenu";
import TopRightSvgs from "./components/TopRightSvgs";
import FooterSvgs from "./components/svgs/FooterSvgs";
import AboutSvgs from "./components/svgs/AboutSvgs";
import { routeStyles } from "./constants/svgstyles";
import HeroSvgs from "./components/svgs/HeroSvgs";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();


  const currentRouteStyles = routeStyles.find(
    (routeStyle) => routeStyle.route === location.pathname
  );

  // routeStyles includes a default value for unmatched routes
  const customStyles =
    currentRouteStyles?.customStyles || routeStyles[0].customStyles;
     const HeroStyles =
       currentRouteStyles?.HerocustomStyles || routeStyles[0].HerocustomStyles;
  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

 

  // Scroll to the top of the page when the location changes
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);
  return (
    <main className=" w-full h-full bg-gradient-to-r  relative  transition-all ease-in-out duration-200 from-primaryBlack to-secondaryBlack overflow-hidden">
      <AboutSvgs custom={customStyles} />
      <HeroSvgs custom={HeroStyles} />
      <div
        className={` bg-primaryWhite fixed left-0 top-0 z-50 flex h-full w-[280px] flex-col overflow-y-hidden duration-300 ease-linear lg:static lg:translate-x-0 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SideMenu
          toggleSidebar={toggleSidebar}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
      <ToastContainer
        autoClose={4000}
        icon={false}
        transition={Slide}
        hideProgressBar
        className="mt-20 lg:mt-32"
      />

      <section className="">
        <section className="w-full relative">
          <TopRightSvgs />
          <div className="max-w-[1440px] pb-14 mx-auto md:p-4 md:pb-20 ">
            <Navbar
              sidebarOpen={sidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          </div>
        </section>

        {/* routes section */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </section>

      <section className="bg-darkBg relative mt-[134px] md:mt-[105px]">
        <FooterSvgs />

        <Footer />
        <div className="from-primaryBlack to-secondaryBlack bg-gradient-to-r  py-[14px] mt-8">
          <div className="max-w-[1440px] text-center mx-auto lg:text-start lg:px-4">
            <p className="text-base text-primaryGray font-groteska-regular tracking-[-0.3px]">
              © 2023 Flixsa. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
