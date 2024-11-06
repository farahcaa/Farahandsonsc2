import react, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BelmontPage = () => {
  useEffect(() =>{
    window.scrollTo(0,0);
  }, [])
  return (
    <>
      <Header homepage={false} />

      <Footer />
    </>
  );
};

export default BelmontPage;
