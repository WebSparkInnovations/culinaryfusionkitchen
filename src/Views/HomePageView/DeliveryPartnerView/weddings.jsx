import React from "react";
import ContactUs from "../ContactUs";
import SpecialFoodComponent from "@/Components/Shared/specialFoodComponent";

const WeddingsData = [
  {
    bannerText: "Wedding",
    img: "/assets/images/officebanner.jpg",
    heading: "Celebrate Your Love with Culinary Fusion Magic: Wedding Catering Services",
    description:
      "  Welcome to our exquisite wedding catering service, where culinary artistry intertwines with the magic of your special day, creating an unforgettable dining experience that mirrors your love story. From the grandeur of the reception to the intimacy of rehearsal dinners and bridal showers, our diverse menu offerings cater to the unique charm of each wedding event. Indulge in a symphony of flavors with our curated selection of culinary delights, from opulent plated dinners featuring premium cuts and gourmet accompaniments to lavish buffet spreads showcasing a fusion of global cuisines, ensuring a memorable feast for you and your esteemed guests. Revel in the elegance of beautifully presented hors d’oeuvres and artisanal charcuterie boards during cocktail hours, or embrace health-conscious options like vibrant salads, fresh seafood displays, gluten-free delicacies, and exquisite vegetarian or vegan dishes, providing a gastronomic journey for every palate. Our dedication to impeccable service and culinary excellence ensures that your wedding festivities are not only a celebration of love but also an indulgence in extraordinary dining that reflects your unique style and sophistication.",
  },
];

const Weddings = () => {
  return (
    <div className="flex flex-col gap-10">
      <SpecialFoodComponent data={WeddingsData} />
      <ContactUs />
    </div>
  );
};

export default Weddings;
