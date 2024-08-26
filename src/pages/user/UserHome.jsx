import React from "react";
import Header from "./components/Header";
import DownloadNowPlay from "../../assets/download-now-play-mobile.svg";
import DownloadNowApple from "../../assets/download-now-apple-mobile.svg";
import MobilePhones from "../../assets/mobile-phones.svg";
import DownloadNowAppleDesktop from "../../assets/download-now-apple-desktop.svg";
import DownloadNowPlayDesktop from "../../assets/download-now-play-desktop.svg";
import UserAbout from "./UserAbout";
import Footer from "./Footer";

function UserHome() {
  return (
    <>
      <div className="w-full overflow-hidden h-[932px] md:h-screen custom-gradient px-4 md:px-[100px]">
        <Header space={false} />

        <div className="uppercase text-start md:text-center flex items-center justify-center font-sf-600 font-semibold text-[25px] md:text-[39px] md:leading-[46.54px] leading-[36px] text-white mt-[60px] md:mt-[22px]">
          <h1>
            Your Ultimate AI Companion for Expert Guidance and Answers in the
            UAE, Anytime, Anywhere.
          </h1>
        </div>

        {/* only mobile screen visible */}
        <div className="grid sm:hidden grid-cols-2 gap-3 px-4 mt-[81px] ">
          <img
            src={DownloadNowPlay}
            alt=""
            className="w-full max-w-[200px] max-h-[48px]  object-contain"
          />
          <img
            src={DownloadNowApple}
            alt=""
            className="w-full max-w-[200px] max-h-[48px] object-contain"
          />
        </div>

        {/* not only mobile screen visible */}
        <div className="hidden sm:flex items-center justify-center gap-3 px-4 mt-[33px] ">
          <img
            src={DownloadNowPlayDesktop}
            alt=""
            className="w-full max-w-[200px] max-h-[48px]  object-contain"
          />
          <img
            src={DownloadNowAppleDesktop}
            alt=""
            className="w-full max-w-[200px] max-h-[48px] object-contain"
          />
        </div>

        {/* only mobile screen visible */}
        <div className="sm:hidden block">
          <img
            src={MobilePhones}
            alt=""
            className="w-full max-h-[500px] max-w-[500px] m-auto h-full object-contain"
          />
        </div>

        {/* not only mobile screen visible */}
        <div className="-mt-10 sm:block hidden">
          <img
            src={MobilePhones}
            alt=""
            className="w-full max-h-[600px] max-w-[500px] m-auto h-full object-contain"
          />
        </div>
      </div>

      {/* about page */}
      <UserAbout />


      {/* footer */}
      <Footer/>
    </>
  );
}

export default UserHome;
