import SpecialFoodComponent from '@/Components/Shared/specialFoodComponent';
import React from 'react'
import ContactUs from '@/Components/Shared/ContactUs';
import ServicesCategories from './Services';

const ServicesBannerData = [
  {
    bannerText: "Services",
    img: "/assets/images/servicesbanner.jpg",
  },
];


const Services = () => {
  return (
    <div className='flex flex-col gap-10'>
      <SpecialFoodComponent data={ServicesBannerData} />
      <ServicesCategories/>
      <ContactUs />

    </div>
  )
}

export default Services