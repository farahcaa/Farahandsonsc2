import Header from "../components/Header";
import { HomeHeaderPic } from "../assets";
import HomeHero from "../components/HomeHero";
import HomeExpert from "../components/HomeExpert";

const Home = () => {
  return (
    <>
      <Header HeaderPic={HomeHeaderPic} />
      <HomeHero />
      <HomeExpert />
    </>
  );
};

export default Home;
