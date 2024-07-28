import React from "react";
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleMetrialManagment from "../components/single-service/SingleMetrialManagment";
import BrandOne from "../components/brand/BrandOne";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";

const MetrialManagment = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb
        heading="Civil Engineering "
        currentPage="Civil Engineering "
      />
      <SingleMetrialManagment />
      <BrandOne />
      <FooterOne />
    </>
  );
};

export default MetrialManagment;
