import React from "react";
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ContactMap from "../components/contact/ContactMap";
import ContactForm from "../components/contact/ContactForm";
import BrandOne from "../components/brand/BrandOne";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";

const ContactPage = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb heading="Contact Us" currentPage="Contact Us" />
      <ContactMap />
      {/* <ContactForm /> */}
      {/* <BrandOne /> */}
      <FooterOne />
    </>
  );
};

export default ContactPage;
