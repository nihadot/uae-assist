import React from "react";
import logo from "../../../assets/logo/main-logo 2.png";
import greenLogo from "../../../assets/main-green-logo.svg";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function Header({ space = true }) {
  const [toggleMenubar, setToggleMenubar] = React.useState(false);

  const { pathname } = useLocation();

  const handleToggleHeaderMenu = () => setToggleMenubar(!toggleMenubar);

  return (
    <div
      className={`flex ${
        space && "px-4 md:px-[100px]"
      }  relative justify-between items-center h-[100px]`}
    >
      {pathname === "/" && (
        <Link to={"/"}>
          <img
            src={logo}
            alt=""
            className="object-contain h-[20px] w-[200px] pe-5 "
          />
        </Link>
      )}
      {pathname !== "/" && (
        <Link to={"/"}>
          <img
            src={greenLogo}
            alt=""
            className="object-contain h-[20px] w-[200px] pe-5 "
          />
        </Link>
      )}

      <div className="sm:hidden flex cursor-pointer">
        {!toggleMenubar && (
          <IoIosMenu
            onClick={handleToggleHeaderMenu}
            color={`${pathname === "/" ? "white" : "#4DA833"}`}
            size={37}
          />
        )}
        {toggleMenubar && (
          <IoCloseOutline
            onClick={handleToggleHeaderMenu}
            color={`${pathname === "/" ? "white" : "#4DA833"}`}
            size={37}
          />
        )}
      </div>

      {/* mobile menu bar */}
      {toggleMenubar && (
        <div
          className={`h-[109px] ${
            pathname !== "/" && "w-[89%] m-auto"
          }  sm:hidden  text-[15px] flex flex-col items-start justify-center gap-2 ps-4 z-50 text-black mobile-blur-menubar w-full absolute top-[90px] left-0 right-0 `}
        >
          <Link to={"/about"} className="font-sf-500 font-medium ">
            About Us
          </Link>
          <Link to={"/terms-of-use"} className="font-sf-500 font-medium ">
            Terms of Use
          </Link>
          <Link to={"/privacy-policy"} className="font-sf-500 font-medium ">
            Privacy Policy
          </Link>
        </div>
      )}

      {/* desktop menu bar */}
      <div className="hidden sm:flex">
        <div
          className={`h-[109px] flex  text-[15px]  items-center justify-center gap-4 px-4 ${
            pathname === "/" ? "text-white" : "text-black"
          } w-full`}
        >
          <Link to="/about" className={`font-sf-500 cursor-pointer font-medium ${pathname === "/about" && "text-[#4DA833]" } `}>
            About Us
          </Link>
          <Link
            to={"/terms-of-use"}
            className={`font-sf-500 ${pathname === "/terms-of-use" && "text-[#4DA833]" } cursor-pointer font-medium `}
          >
            Terms of Use
          </Link>
          <Link
            to={"/privacy-policy"}
            className={`font-sf-500 cursor-pointer font-medium ${pathname === "/privacy-policy" && "text-[#4DA833]" } `}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
