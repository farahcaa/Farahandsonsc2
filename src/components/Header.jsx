import { useState, useEffect } from "react";
import { Link, useHref } from "react-router-dom";
import { navigation } from "../constants";
import { FarahandsonsPic } from "../assets";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import MenuSvg from "../assets/MenuSvg";
import Menu from "./Menu";
import HeaderCarosel from "./HeaderCarosel";
const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [openNavigation, setOpenNavigation] = useState(false);
  const pathname = useHref();
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const checkScrollTop = () => {
    setSticky(window.scrollY > 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);
  return (
    <>
      <div className="flex w-full h-auto overflow-hidden">
        <div className={`z-30 fixed top-0 w-full shadow-2xl bg-white`}>
          <div className="flex float-end h-14 ">
            {navigation.map((item) => (
              <div
                key={item.id}
                className={` lg:flex sm:hidden h-14 flex items-center`}
              >
                <Link
                  key={item.id}
                  to={item.url}
                  className={
                    (item.id === "6"
                      ? "bg-Blue text-white font-semibold rounded-xl z-50  p-2 hover:cursor-pointer threexl:text-2xl font-serif"
                      : "") +
                    (item.url === pathname
                      ? "px-4 font-bold twoxl:text-lg threexl:text-2xl "
                      : "") +
                    "px-4 hover:cursor-pointer z-50 threexl:text-2xl font-serif"
                  }
                >
                  {item.title}
                </Link>
              </div>
            ))}

            <button
              className={`lg:hidden z-40 pr-4`}
              onClick={toggleNavigation}
            >
              <MenuSvg openNavigation={openNavigation} />
            </button>
            <Menu openNav={openNavigation} togglenav={toggleNavigation} />
          </div>
        </div>
        <div className="absolute threexl:top-[20rem] twoxl:top-[15rem] lg:top-[12rem] md:top-[8rem] sm:top-[8rem] md:left-8 sm:left-8 z-40">
          <img
            src={FarahandsonsPic}
            width={300}
            className={`transition-all ${
              isSticky
                ? "sticky1"
                : "threexl:w-[700px] lg:w-[350px] twoxl:w-[500px] sm:w-[150px]"
            } ${openNavigation ? "hidden" : ""}`}
          />
        </div>
        <div className=" w-full h-[600px] top-0 z-0">
          <HeaderCarosel />
        </div>
      </div>
    </>
  );
};

export default Header;
