import Button from '@/Components/UI/Button';
import Image from 'next/legacy/image';
import React from 'react'
import { GiHotMeal } from "react-icons/gi";
import { HiBuildingOffice } from "react-icons/hi2";
import { FaGlassCheers } from "react-icons/fa";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import Link from 'next/link';

const ServicesData = [
    {
        id: 1,
        img: '/assets/images/meal.jpg',
        icon: <GiHotMeal />,
        iconTitle: 'Meal Prep',
        description: 'Experience the convenience of our meal prep service, offering a variety of nutritious and delicious dishes ready to fuel your busy lifestyle. Each meal is thoughtfully crafted to ensure you enjoy flavorful, healthy eating without the hassle of cooking.',
        link: '/meal'
    },
    {
        id: 2,
        img: '/assets/images/office.jpg',
        icon: <HiBuildingOffice />,
        iconTitle: 'Office Event',
        description: `Transform your office parties with our meal prep service, delivering a delectable assortment of gourmet dishes, ready to impress your team. Whether it's a casual lunch or a formal event, our carefully curated meals ensure everyone enjoys a flavorful and hassle-free dining experience.`,
        link: '/officecatering'
    },
    {
        id: 3,
        img: '/assets/images/parties.jpg',
        icon: <FaGlassCheers />,
        iconTitle: 'Parties',
        description: 'Make your next party unforgettable with our meal prep service, offering a wide selection of flavorful, chef-crafted dishes designed to delight your guests. From intimate gatherings to grand celebrations, we provide a seamless dining experience with ready-to-serve gourmet meals that cater to every palate.',
        link: '/smallparties'
    },
    {
        id: 4,
        img: '/assets/images/wedding.jpg',
        icon: <FaGift />,
        iconTitle: 'Wedding',
        description: 'Celebrate your special day with our exquisite wedding meal prep service, featuring an array of gourmet dishes tailored to elevate your reception. With beautifully prepared, ready-to-serve meals, we ensure a memorable dining experience that complements the elegance and joy of your wedding celebration.',
        link: '/weddings'
    },
    {
        id: 5,
        img: '/assets/images/buffet.jpg',
        icon: <GiMeal />,
        iconTitle: 'Buffet',
        description: 'Elevate your buffet experience with our expertly prepared meal prep service, offering a variety of mouthwatering dishes that cater to diverse tastes. Perfectly portioned and ready to serve, our gourmet selection ensures a seamless, flavorful feast for any occasion.',
        link: '/buffets'
    },
    {
        id: 6,
        img: '/assets/images/beverages.jpg',
        icon: <FaGlassMartiniAlt />,
        iconTitle: 'Beverages',
        description: `Quench your guests' thirst with our refreshing beverage offerings, featuring a curated selection of signature drinks, juices, and mocktails. Whether it's a casual gathering or a formal event, our beverages are crafted to perfectly complement any occasion.`,
        link: '/beverages'
    },

]

const ServicesCategories = () => {
    return (
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'>
                {ServicesData?.map((ls, id) => (
                    <div key={ls.id} className='relative shadow-md group cursor-pointer rounded-[10px] flex flex-col overflow-hidden'>
                        {/* Image container with hover effect */}
                        <div className='relative overflow-hidden'>
                            <Image
                                src={ls.img}
                                width={800}
                                height={600}
                                className='w-full h-full object-cover rounded-[10px] transform transition-transform duration-500 group-hover:scale-[0.9]'
                            />
                            {/* Overlay div, hidden initially, appears on hover */}
                            <div className='absolute rounded-t-[10px] inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <div className='text-white flex flex-col items-center text-center'>
                                    <div className='text-4xl text-[#fc7344]'>
                                        {ls.icon}
                                    </div>
                                    <h1 className='text-lg text-[#fc7344] font-bold'>{ls.iconTitle}</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col  flex-1 justify-between w-full   p-5'>
                            {/* Additional content */}
                            <div className='flex flex-col min-h-full gap-5 justify-between'>
                                <p className='text-[16px] sm::text-[18px] text-gray-400'>{ls.description}</p>
                                <Link href={ls.link}>
                                    <div className='max-w-[200px] w-full'>
                                        <Button className='px-6 py-3 text-white font-semibold transition-all duration-200 hover:scale-105 cursor-pointer bg-[#fc7344] rounded-[5px]'>
                                            Learn More
                                        </Button>
                                    </div></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ServicesCategories;
