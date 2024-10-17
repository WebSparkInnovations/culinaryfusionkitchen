import SpecialFoodComponent from '@/Components/Shared/specialFoodComponent'
import React from 'react'
import AboutChef from './AboutChefSection';
import ContactUs from '@/Components/Shared/ContactUs';


const OfficeEventData = [
  {
    bannerText: "About Us",
    img: "/assets/images/aboutbanner.jpg",

  },
];

const AboutUs = () => {
  return (
    <div className='flex flex-col gap-10'>
      <SpecialFoodComponent data={OfficeEventData} />
      <AboutChef />
      <ContactUs />
    </div>
  )
}

export default AboutUs