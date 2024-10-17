import SpecialFoodComponent from '@/Components/Shared/specialFoodComponent';
import React from 'react'
import TestimonialReviewSection from './TestimonialReviewSection';
import ContactUs from '@/Components/Shared/ContactUs';

const OfficeEventData = [
  {
    bannerText: "Testimonials",
    img: "/assets/images/testimonialbanner.jpg",
    heading: "Below are a few cherished testimonials from our cherished customers",
  },
];


const Testimonials = () => {
  return (
    <div className='flex flex-col gap-10'>
      <SpecialFoodComponent data={OfficeEventData} />
      <TestimonialReviewSection/>
      <ContactUs/>

    </div>
  )
}

export default Testimonials