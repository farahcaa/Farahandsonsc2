import Header from "../components/Header";
import { HomeHeaderPic } from "../assets";
import HomeHero from "../components/HomeHero";
import HomeExpert from "../components/HomeExpert";
import HomeLast from "../components/HomeLast";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() =>{
    window.scrollTo(0,0);
  }, [])
  return (
    <>
      <Header homepage={true} />
      <HomeHero />
      <HomeExpert />
      <HomeLast />
      <Footer />
    </>
  );
};

export default Home;
