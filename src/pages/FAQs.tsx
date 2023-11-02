import { IFaqs, faqs } from '../constants/data';
import AppLinks from '../components/AppLinks';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const FAQs = () => {

  const [activeFaqs, setActiveFaqs] = useState<IFaqs>(faqs[0])

  const handleActiveFaqs = (selectedFaq: IFaqs) => {
    setActiveFaqs(selectedFaq)
   }
  
 


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
      <div className="px-5  space-y-10 flex flex-col items-center  mt-10 lg:mt-20 xxl:px-0">
        <div className="w-full relative  max-w-[1296px] rounded-[20px] flex flex-col p-4 py-20 pb-56  gap-y-[34px]  overflow-hidden bg-darkBg   xl:flex-row xl:gap-x-[42px] xl:p-[106px] lg:pb-0">
          <span className="w-[328px] bottom-0 left-0 -translate-x-[50%] translate-y-[50%] absolute border-[50px] border-cardbg h-[328px] flex items-center justify-center rounded-full md:h-[448px] md:w-[448px] md:border-[75px] md:-translate-x-[38%] md:translate-y-[49%]"></span>
          <span className="w-[328px] top-0  right-0 translate-x-[55%] -translate-y-[55%]  absolute border-[50px] border-cardbg h-[328px] flex items-center justify-center rounded-full md:h-[448px] md:w-[448px] md:border-[75px] md:translate-x-[40%] md:-translate-y-[49%]"></span>
          <div className="flex py-7 flex-row overflow-x-scroll w-full max-w-[520px] text-center gap-x-3 gap-y-[26px] md:flex-col md:py-0">
            {faqs.map((faq) => (
              <motion.button
                onClick={() => handleActiveFaqs(faq)}
                key={faq.id}
                className={`cursor-pointer ${
                  activeFaqs.id === faq.id
                    ? "bg-[#F9FBFC]"
                    : "bg-darkBg text-primaryWhite font-groteska-medium"
                } h-[48px] min-w-[284px] px-4 text-start rounded-lg text-base font-groteska-bold md:text-[18px] transition-all ease-in-out duration-200 md:h-[60px]`}
                whileTap={{ scale: 0.95 }} // Scale down slightly on click
              >
                {faq.title}
              </motion.button>
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
            <AnimatePresence mode="wait">
              <motion.p
                key={activeFaqs.id} // Set a unique key for the motion component
                className="text-[20px] leading-10 font-groteska-regular text-primaryGray md:text-[18px]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {activeFaqs.description}
              </motion.p>
            </AnimatePresence>
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