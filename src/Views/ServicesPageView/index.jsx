import SpecialFoodComponent from '@/Components/Shared/specialFoodComponent';
import React from 'react'
import ContactUs from '@/Components/Shared/ContactUs';
import ServicesCategories from './Services';

const ServicesBannerData = [
  {
    bannerText: "Services",
    img: "/assets/images/servicesbanner.jpg",
    heading: 'Explore Our Services and Find the Perfect Culinary Experience for Your Event'
  },
];


const Services = () => {
  return (
    <div className='flex flex-col gap-10'>
      <SpecialFoodComponent data={ServicesBannerData} />
      <ServicesCategories />
      <ContactUs />

    </div>
  )
}

export default Services