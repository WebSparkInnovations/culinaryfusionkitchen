import React from "react";

import SpecialFoodComponent from "@/Components/Shared/specialFoodComponent";
import ContactUs from "@/Components/Shared/ContactUs";

const BeveragesServiceData = [
  {
    bannerText: "Beverages",
    img: "/assets/images/bevbanner.jpg",
    heading: "Enhance Your Office Events with Culinary Fusion Kitchen's Signature Beverages",
    description:
      "Welcome to our distinguished office event catering service, where culinary and beverage excellence meet professional gatherings, creating memorable experiences for every occasion. Whether it’s a corporate luncheon, a celebratory cocktail party, a team-building brunch, or an important board meeting, our tailored beverage offerings perfectly complement our exquisite cuisine to elevate your office events.Delight in a curated selection of refreshing beverages, from handcrafted cocktails and premium wines to sparkling sodas and artisanal non-alcoholic drinks, designed to suit diverse tastes and preferences. Pair these drinks with our extensive menu featuring an array of culinary delights, including elegant platters of artisanal cheeses and charcuterie for sophisticated receptions, or bountiful buffet spreads showcasing globally inspired cuisine.For networking sessions, enjoy the sophistication of beautifully crafted canapés and hors d’oeuvres, complemented by signature beverages. Or opt for health-conscious drink options, such as fresh-pressed juices and herbal infusions, alongside vibrant vegetable platters and gluten-free nibbles. Our commitment to excellence extends beyond taste to encompass meticulous presentation and professional service, ensuring that your office event is a resounding success and leaves a lasting impression on all attendees.",
  },
];

const BeveragesService = () => {
  return (
    <div className="flex flex-col gap-10">
      <SpecialFoodComponent data={BeveragesServiceData} />
      <ContactUs />
    </div>
  );
};

export default BeveragesService;
