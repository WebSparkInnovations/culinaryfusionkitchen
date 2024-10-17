import React from "react";
import AboutTeam from "./AboutTeam";
import DeliveryPartner from "./DeliveryPartnerView/DeliveryPartner";

// import HomeSwiper from "../../Components/Sliders/HomeSwiper";
import Slider from "../../Components/Sliders/HomeSwiper";
import ContactUs from "@/Components/Shared/ContactUs";


const Home = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-8 2xl:gap-12">
      <Slider />
      <DeliveryPartner />
      <AboutTeam />
      <ContactUs />
    </div>
  );
};

export default Home;
