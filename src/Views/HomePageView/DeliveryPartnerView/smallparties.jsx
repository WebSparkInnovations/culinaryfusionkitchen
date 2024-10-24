import React from "react";
import ContactUs from "../ContactUs";
import SpecialFoodComponent from "@/Components/Shared/specialFoodComponent";

const SmallPartyData = [
  {
    bannerText: "Small Party",
    img: "/assets/images/partiesbanner.jpg",
    heading: "Culinary Fusion Kitchen: Elevate Your Small Parties",
    description:
      "  Indulge in an unforgettable culinary experience with our bespoke catering service designed for intimate gatherings and small parties, transforming every occasion into a gastronomic delight. Whether it’s an intimate family celebration, a cozy dinner party with friends, a bridal shower, or a special anniversary soirée, our diverse menu offerings cater to the unique essence of each gathering. Delight in an array of culinary options tailored to suit various tastes and dietary preferences. From elegant plated dinners featuring succulent mains and gourmet sides to themed grazing tables adorned with artisanal cheeses, fresh fruits, and delectable charcuterie, our offerings are as varied as they are sumptuous. Savor the sophistication of handcrafted hors d’oeuvres and canapés during cocktail hours or relish health-conscious alternatives like vibrant salads, gluten-free appetizers, and delectable vegetarian or vegan options, ensuring that every guest’s palate is catered to with finesse. Our commitment to impeccable service and culinary creativity ensures that your small party is elevated to an extraordinary experience, leaving a lasting impression on you and your guests.",
  },
];

const SmallParties = () => {
  return (
    <div className="flex flex-col gap-10">
      <SpecialFoodComponent data={SmallPartyData} />
      <ContactUs />
    </div>
  );
};

export default SmallParties;
