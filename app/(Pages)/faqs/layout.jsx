import FooterPage from "@/components/LandingPage/Footer";
import NavBar from "@/components/LandingPage/NavBar";
import React from "react";

const FAQSLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="max-w-[95rem] mx-auto pt-32">{children}</main>
      <FooterPage />
    </>
  );
};

export default FAQSLayout;
