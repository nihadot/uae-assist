import React from "react";
import MobilePhones from "../../assets/mobile-two-phones.svg";
import PlayWhite from "../../assets/play-white.svg";
import AppleWhite from "../../assets/apple-white.svg";
function UserAbout({marginTop =true,contentSpace =false}) {
  const [knowMore, setKnowMore] = React.useState(false);

  const handleOpenKnowMore = () => setKnowMore((prev) => !prev);

  return (
    <div className="px-4 flex md:px-[100px] relative overflow-hidden">
      <div className="md:w-[650px]">
        <div className={`uppercase flex items-center text-center md:text-start md:items-start justify-center flex-col ${marginTop && 'mt-[64px]'} ${ contentSpace  && 'md:pt-[3rem]'}`}>
          <h2 className="text-[#838383] font-sf-500 font-medium md:mb-1 text-[20px] leading-[23.87px]">
            About Us
          </h2>
          <h3 className="text-[26px] md:text-[40px] font-sf-600 font-semibold leading-[38.19px] md:leading-[53px]">
            Explore the UAE with Our{" "}
            <span className="text-[#51AE36]">Expert Guidance</span>
          </h3>
        </div>

        <div className="block md:hidden">
          <img
            src={MobilePhones}
            alt=""
            className="w-full max-h-[600px] max-w-[500px] m-auto h-full object-contain"
          />
        </div>

        <div className="pb-10  text-pretty">
          <Paragraph
            title={`Welcome to UAE ASSIST, your ultimate AI companion designed to provide expert guidance and answers for all your needs in the UAE. Our mission is to empower residents and visitors with local knowledge and support, ensuring you have access to accurate information and assistance anytime, anywhere. `}
          />

          <Paragraph
            title={`At UAE ASSIST, we understand the unique challenges and opportunities that come with living in or visiting the UAE. Whether you're navigating the bustling cities of Dubai and Abu Dhabi, exploring the rich cultural heritage, or seeking practical advice on daily life, our advanced AI technology is here to help. `}
          />

          <Paragraph
            title={`Our platform leverages cutting-edge AI to offer real-time solutions and personalized responses, making your experience in the UAE smoother and more enjoyable. From legal inquiries and travel tips to local customs and business insights, UAE ASSIST is your trusted source for reliable information.`}
          />

          <Paragraph
            title={` Join the UAE ASSIST community today and discover how our AI-driven platform can make life in the UAE easier, more informed, and incredibly rewarding.`}
          />
        </div>

        {!knowMore && (
          <div className="mb-16 flex items-center md:items-start md:justify-start justify-center">
            <button
              onClick={handleOpenKnowMore}
              className="bg-[#51AE36] font-sf-500 py-3 px-6 text-white font-medium rounded-[6px]"
            >
              Know More
            </button>
          </div>
        )}

        {knowMore && (
          <div className="flex w-full items-center md:items-start md:justify-start justify-center gap-3 mb-16">
            <button className="h-[44px] text-white flex items-center justify-between gap-3 px-3 bg-[#51AE36] rounded-[6px]">
              <label
                htmlFor=""
                className="font-sf-500   font-medium text-[14px]"
              >
                Download Now
              </label>
              <img
                src={PlayWhite}
                alt=""
                className="w-[16px] h-[18px] object-cover"
              />
            </button>

            <button className="h-[46px] text-white flex items-center justify-between gap-3 px-3 bg-[#000] rounded-[6px]">
              <label
                htmlFor=""
                className="font-sf-500   font-medium text-[14px]"
              >
                Download Now
              </label>
              <img
                src={AppleWhite}
                alt=""
                className="w-[16px] h-[18px] object-cover"
              />
            </button>
          </div>
        )}
      </div>

      <div
        style={{ borderRadius: "50% 0% 0% 50%" }}
        className=" bg-[#4DA833] lg:flex hidden absolute -top-[17%] items-start justify-start -right-[5%] w-[47%] h-[128%]"
      >
        <img
          src={MobilePhones}
          alt=""
          className="w-full m-auto h-full object-contain"
        />
      </div>
      {/* <div className="md:flex-[50%] bg-[#4DA833] hidden md:block"></div> */}
    </div>
  );
}

export default UserAbout;

function Paragraph({ title }) {
  return (
    <h1 className=" text-center md:text-start mt-6 text-[#666666] font-sf-400 font-light text-[15px] md:text-[15px]">
      {title}
    </h1>
  );
}
