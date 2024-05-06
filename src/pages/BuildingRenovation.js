import React from "react";
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleBuildingRenovation from "../components/single-service/SingleBuildingRenovation";
import BrandOne from "../components/brand/BrandOne";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";

const BuildingRenovation = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb
        heading="Eletronic Engineering"
        currentPage="Eletronic Engineering"
      />
      {/* <SingleBuildingRenovation />
            <BrandOne /> */}
      <FooterOne />
    </>
  );
};

export default BuildingRenovation;
