import { policies } from "../constants/policy";
import { terms } from "../constants/terms";

const PrivacyPolicy = () => {
 

  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="max-w-[687px] text-center space-y-[14px] px-[22px] md:px-0 md:space-y-8">
          <h1 className="text-2xl text-primaryWhite font-groteska-bold tracking-[-0.72px] md:text-[54px]">
            Privacy Policy
          </h1>
          <p className="text-[18px] font-groteska-regular leading-8 text-primaryGray md:font-groteska-medium max-w-[687px]">
            At Flixsa, we are committed to protecting your privacy and ensuring
            the security of your personal information. This Privacy Policy
            outlines how we collect, use, disclose, and safeguard your data when
            you use our movie booking app. By using our app, you consent to the
            practices described in this Privacy Policy.
          </p>
        </div>
      </div>
      <div className="px-[36px] flex  flex-col gap-y-4 mt-[60px] sm:gap-y-[50px] ">
        {policies.map((item) => (
          <div key={item.id} className="space-y-4">
            <h1 className="text-base text-primaryWhite font-groteska-medium sm:text-2xl">
              {item.title}
            </h1>
            <div className={`${!item.description && "hidden"}`}>
              <p className="text-sm font-groteska-regular leading-8 text-primaryGray sm:text-[18px]">
                {item.description &&
                  item.description.split("info@flixsa.com").map((text, index) =>
                    index === 0 ? (
                      text
                    ) : (
                      <span
                        key={index}
                        className="text-primaryWhite font-groteska-regular"
                      >
                        info@flixsa.com
                      </span>
                    )
                  )}
              </p>
            </div>
            <div className={`${!item.list && "hidden"} pl-4`}>
              <ul className=" list-decimal text-sm font-groteska-regular leading-8 text-primaryGray space-y-2 sm:text-[18px]">
                {item.list &&
                  item.list.map((listItem) => (
                    <li key={listItem.sub_title} className="space-x-1">
                      <span className="font-groteska-medium text-primaryWhite">
                        {listItem.sub_title}
                      </span>
                      <span className="font-groteska-regular text-primaryGray">
                        {listItem.sub_description}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
            <div className={`${!item.points && "hidden"} pl-4`}>
              <ul className=" list-disc text-sm font-groteska-regular leading-8 text-primaryGray space-y-2 sm:text-[18px]">
                {item.points &&
                  item.points.map((listItem) => (
                    <li key={listItem} className="space-x-1">
                      <span className="font-groteska-regular text-primaryGray">
                        {listItem}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="">
          <p className="inline-flex flex-col space-y-2 text-primaryWhite font-groteska-medium text-sm">
            <span>Flixsa</span>
            <span>www.flixsa.com</span>
            <span>info@flixsa.com</span>
            <span> +2349014163835</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy