import Header from "../components/Header";
import { HomeHeaderPic } from "../assets";
import HomeHero from "../components/HomeHero";
import HomeExpert from "../components/HomeExpert";
import HomeLast from "../components/HomeLast";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header HeaderPic={HomeHeaderPic} />
      <HomeHero />
      <HomeExpert />
      <HomeLast />
      <Footer />
    </>
  );
};

export default Home;
