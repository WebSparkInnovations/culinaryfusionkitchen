import SpecialFoodComponent from '@/Components/Shared/specialFoodComponent'
import React from 'react'
import ContactUs from '../HomePageView/ContactUs';




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
      <ContactUs />
    </div>
  )
}

export default Gallery