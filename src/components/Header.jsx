import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navigation } from "../constants";
import { FarahandsonsPic } from "../assets";
const Header = ({ HeaderPic }) => {
  const [isSticky, setSticky] = useState(false);

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
      <div className="flex w-full h-auto">
        <div className="z-30 fixed top-0 w-full shadow-2xl bg-white">
          <div className="flex float-end ">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                className="p-4 hover:cursor-pointer filter drop-shadow-2xl font-serif"
              >
                {item.title}
              </Link>
            ))}
            {/* <p className="bg-Blue m-2 p-2 px-4  rounded-2xl hover:cursor-pointer hover:shadow-2xl hover:border-black text-white">
          Courses
        </p> */}
          </div>
        </div>
        <div className="absolute twoxl:top-[15rem] lg:top-[12rem] md:top-[8rem] md:left-8 z-40">
          <img
            src={FarahandsonsPic}
            width={300}
            className={`transition-all ${
              isSticky ? "sticky1" : "lg:w-[350px] twoxl:w-[500px] sm:w-[150px]"
            }`}
          />
        </div>
        <div className=" w-full h-auto top-0 z-0">
          <img
            src={HeaderPic}
            className="w-full md:h-full sm:h-[20rem] border object-cover border-black overflow-hidden"
            height={1000}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
