import React from "react";
import SpecialFoodComponent from "@/Components/Shared/specialFoodComponent";
import ContactUs from "@/Components/Shared/ContactUs";

const OfficeEventData = [
    {
        bannerText: "Meal",
        img: "/assets/images/mealbanner.jpg",
        heading: "Elevate Your Office Events with Culinary Fusion Kitchen ",
        description:
            "Welcome to our distinguished office event catering service, where culinary excellence meets professional gatherings, creating memorable experiences for every occasion. Whether it’s a corporate luncheon, a celebratory cocktail party, a team-building brunch, or an important board meeting, our catering offerings are tailored to elevate your office events. Delight in an extensive menu featuring an array of culinary delights designed to suit diverse tastes and dietary preferences. From elegant platters of artisanal cheeses and charcuterie for sophisticated receptions to bountiful buffet spreads showcasing globally inspired cuisine, our offerings are as versatile as your event demands. Enjoy the sophistication of beautifully crafted canapés and hors d’oeuvres during networking sessions, or opt for health-conscious options such as fresh salads, vibrant vegetable platters, and gluten-free nibbles, ensuring everyone’s preferences are catered to seamlessly. Our commitment to excellence extends beyond taste to encompass meticulous presentation and professional service, ensuring that your office event is a resounding success, leaving a lasting impression on all attendees.",
    },
];

const MealService = () => {
    return (
        <div className="flex flex-col gap-10">
            <SpecialFoodComponent data={OfficeEventData} />
            <ContactUs />
        </div>
    );
};

export default MealService;
