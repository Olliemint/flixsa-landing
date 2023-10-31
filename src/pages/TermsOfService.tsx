import { terms } from "../constants/terms";

const TermsOfService = () => {
  // function to format the description
  function formatDescription(description:string) {
    // regular expression to find and replace the email address
    const formattedDescription = description.replace(
      /info@flixsa\.com/g,
      '<span class="email-address">info@flixsa.com</span>'
    );

    return <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />;
  }

  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="max-w-[687px] text-center space-y-[14px] px-[22px] md:px-0 md:space-y-8">
          <h1 className="text-2xl text-primaryWhite font-groteska-bold tracking-[-0.72px] md:text-[54px]">
            Terms of Service
          </h1>
          <p className="text-[18px] font-groteska-regular leading-8 text-primaryGray md:font-groteska-medium max-w-[687px]">
            Welcome to Flixsa! These Terms of Service outline the rules and
            guidelines governing your use of our movie booking app. By accessing
            or using Flixsa, you agree to comply with these Terms. If you do not
            agree with any part of these Terms, please refrain from using the
            app.
          </p>
        </div>
      </div>
      <div className="px-[36px] flex  flex-col gap-y-4 mt-[60px] sm:gap-y-[50px] ">
        {terms.map((item) => (
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

export default TermsOfService