import React from "react";
import Header from "./components/Header";
import UserAbout from "./UserAbout";
import Footer from "./Footer";

function UserAboutPage() {
  return (
    <div className="">
      <div className="">
        <Header />

        <div className="mt-5 md:mt-0">
          <UserAbout contentSpace={true} marginTop={false} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserAboutPage;
