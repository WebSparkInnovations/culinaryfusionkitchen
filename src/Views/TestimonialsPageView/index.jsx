import SpecialFoodComponent from '@/Components/Shared/specialFoodComponent';
import React from 'react'
import TestimonialReviewSection from './TestimonialReviewSection';
import ContactUs from '@/Components/Shared/ContactUs';

const OfficeEventData = [
  {
    bannerText: "Testimonials",
    img: "/assets/images/testimonialbanner.jpg",
    heading: "Below are a Few Cherished Testimonials from Our Cherished Customers",
  },
];


const Testimonials = () => {
  return (
    <div className='flex flex-col gap-6 xl:gap-8'>
      <SpecialFoodComponent data={OfficeEventData} />
      <TestimonialReviewSection/>
      <ContactUs/>

    </div>
  )
}

export default Testimonials