import SpecialFoodComponent from '@/Components/Shared/specialFoodComponent'
import React from 'react'
import ContactUs from '../HomePageView/ContactUs';
import InstaPosts from './instaPosts';




const GalleryDate = [
  {
    bannerText: "Gallery",
    img: "/assets/images/gallerybanner.jpg",
  },
];

const Gallery = () => {
  return (
    <div className='flex flex-col gap-10'>
      <SpecialFoodComponent data={GalleryDate} />
      <InstaPosts/>
      <ContactUs />
    </div>
  )
}

export default Gallery