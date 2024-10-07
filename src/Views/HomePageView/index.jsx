import React from "react";
import AboutTeam from "./AboutTeam";
import DeliveryPartner from "./DeliveryPartnerView/DeliveryPartner";
import ContactUs from "./ContactUs";
// import HomeSwiper from "../../Components/Sliders/HomeSwiper";
import Slider from "../../Components/Sliders/HomeSwiper";

const Home = () => {
  return (
    <div className="flex flex-col gap-7 md:gap-10 2xl:gap-14">
      <Slider />
      <DeliveryPartner />
      <AboutTeam />
      <ContactUs />
    </div>
  );
};

export default Home;
