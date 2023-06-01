import React from "react";
import Header from "../homepage/components/Header";
import Footer from "../homepage/components/Footer";
import HeroRight from "../homepage/components/hero-components/HeroRight";
import SignupForm from "../homepage/components/formComponents/SignupForm";

const Signup = () => {
  return (
    <>
      <Header />
      <SignupForm />
      <HeroRight left={true} />
      <Footer layout={"signup"} />
    </>
  );
};

export default Signup;
