import React from 'react'
import AboutChef from './AboutChefSection';
import ContactUs from '@/Components/Shared/ContactUs';
import AboutUsHero from '@/Components/Shared/aboutUsHeroComponent';


const OfficeEventData = [
  {
    bannerText: "About Us",
    img: "/assets/images/aboutbanner.jpg",

  },
];

const AboutUs = () => {
  return (
    <div className='flex flex-col'>
      <AboutUsHero data={OfficeEventData} />
      <AboutChef />
      <ContactUs />
    </div>
  )
}

export default AboutUs