import React from "react";
// import HeaderThree from "../common/header/HeaderThree";
// import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FaqTwo from "../components/faq/FaqTwo";
import BrandOne from "../components/brand/BrandOne";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";

const FaqPage = () => {
  return (
    <>
      <HeaderOne />

      {/* <Breadcrumb
                heading="Faq Page"
                currentPage="Faq" 
            /> */}
      <FaqTwo />
      <BrandOne />
      <FooterOne />
    </>
  );
};

export default FaqPage;
