import React from "react";
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleArchitectureDesign from "../components/single-service/SingleArchitectureDesign";
import BrandOne from "../components/brand/BrandOne";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";

const ArchitectureDesign = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb
        heading="Information Technology"
        currentPage="Information Technology"
      />
      {/* <SingleArchitectureDesign />
            <BrandOne /> */}
      <FooterOne />
    </>
  );
};

export default ArchitectureDesign;
