'use client'
import React from "react";
import AboutTeam from "./AboutTeam";
import DeliveryPartner from "./DeliveryPartnerView/DeliveryPartner";

// import HomeSwiper from "../../Components/Sliders/HomeSwiper";
import ContactUs from "@/Components/Shared/ContactUs";
import HomeSlider from "../../Components/Sliders/HomeSwiper";


const Home = () => {
  return (
    <div className="flex flex-col">
      <HomeSlider />
      <DeliveryPartner />
      <AboutTeam />
      <ContactUs />
    </div>
  );
};

export default Home;
