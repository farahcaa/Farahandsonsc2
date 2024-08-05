import { Link } from "react-router-dom";
import { FarahandsonsPic } from "../assets";
import { navigation } from "../constants";

const Menu = ({ openNav, togglenav }) => {
  return (
    <div
      onClick={togglenav}
      className={` ${
        openNav ? "flex" : "hidden"
      } lg:hidden xl:hidden absolute bg-white left-0 top-0 h-screen w-screen border z-30 overflow-hidden`}
    >
      <img
        src={FarahandsonsPic}
        className="absolute top-7 z-40 left-1/2 -translate-x-1/2"
      />
      <div className="rounded-[5rem] absolute  top-1/2 left-1/2 bg-white w-[100vh] h-[100vh] -translate-x-1/2 -translate-y-1/2" />
      <div className="rounded-full bg-Blue absolute top-1/2 left-1/2  w-[40vh] h-[60vh] -translate-x-1/2 -translate-y-1/2" />
      <div className="rounded-full bg-sl absolute top-1/2 left-1/2 e -translate-x-1/2 -translate-y-1/2">
        {navigation.map((item) => (
          <Link
            key={item.id}
            to={item.url}
            className="flex flex-col border border-black justify-center my-2 items-center text-3xl p-4 text-Black font-serif bg-White rounded-2xl"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
