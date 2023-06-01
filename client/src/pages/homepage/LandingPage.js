import React from "react";
import { styles } from "./styles";
import Header from "./components/Header";
import Tickertape from "./components/Tickertape";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/Hero";
import Brief from "./components/Brief";
import Hero2 from "./components/Hero2";
import Testimonials from "./components/Testimonials";
import QuickMenu from "./components/QuickMenu";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <>
      <div style={styles.landingPage}>
        <Header />
        <Tickertape />
        <Navigation />
        <Hero />
        <Brief />
        <Hero2 />
        <Testimonials />
        <QuickMenu />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
