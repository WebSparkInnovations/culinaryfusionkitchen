import React from 'react'
import ContactUs from '../HomePageView/ContactUs'
import Accordion from './QuestionAccordionSection'

const Faqs = () => {
  return (
    <div className='flex flex-col gap-10 mt-14'>
      <ContactUs />
     <div className='max-w-[1140px] w-full mx-auto'>
     <p className='text-[19px] text-center text-[#333333] font-semibold'>Feel free to provide any additional information to help us better understand your event needs. We will get in touch with you within 24 hours to discuss your requirements further. Thank you for considering Culinary Fusion Kitchen for your catering needs.</p>
     </div>
     <Accordion/>
    </div>
  )
}

export default Faqs