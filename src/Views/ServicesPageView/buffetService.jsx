import React from "react";

import SpecialFoodComponent from "@/Components/Shared/specialFoodComponent";
import ContactUs from "@/Components/Shared/ContactUs";

const BuffetServiceData = [
    {
        bannerText: "Buffet",
        img: "/assets/images/buffetbanner.jpg",
        heading: "Transform Your Events with Culinary Fusion Kitchen's Exquisite Buffet Selections",
        description:
            "Welcome to our distinguished catering service, where culinary excellence transforms your gatherings into memorable experiences. Our buffet offerings are designed to cater to any occasion, whether it’s a wedding, corporate event, family celebration, or community gathering.With a commitment to versatility, our buffets provide an array of options to suit diverse tastes and dietary preferences, ensuring that every guest is delighted.From elegantly arranged displays to interactive food stations, we create an inviting atmosphere that encourages guests to indulge at their own pace.Our meticulous attention to presentation and quality ensures that each buffet not only satisfies the palate but also enhances the overall experience of your event.Trust us to elevate your occasion with exceptional buffet service, leaving a lasting impression on all attendees.",
    },
];

const BuffetService = () => {
    return (
        <div className="flex flex-col gap-10">
            <SpecialFoodComponent data={BuffetServiceData} />
            <ContactUs />
        </div>
    );
};

export default BuffetService;
