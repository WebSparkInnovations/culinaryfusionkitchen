import React from 'react'

const TestimonialData = [
    {
        heading: 'Office Event Catering',
        description: `Our office event's success was thanks to Culinary Fusion Kitchen. Chef Malik and his team's professionalism and culinary artistry were evident from start to finish. Their customized menu, delicious food, and impeccable service left a memorable impression on all our guests. I proudly recommend Culinary Fusion Kitchen.`,
        name: 'John Anderson'
    },
    {
        heading: 'Meal Prep Service',
        description: `Culinary Fusion Kitchen has been a game-changer for my meal prep needs. Chef Malik's culinary expertise shines through in every dish. Their diverse menu and locally sourced, fresh ingredients have elevated my dining experience. I wholeheartedly endorse Culinary Fusion Kitchen for anyone seeking a top-notch meal prep service.`,
        name: 'Sarah Williams'
    },

]
const TestimonialReviewSection = () => {
    return (
        <div className='container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {TestimonialData.map((ls, index) => (
                <div key={ls.id} className='rounded-[10px] flex items-center p-8 flex-col gap-5 bg-gray-200 border-[2px] border-grey-500'>
                    <h1>
                        {ls.heading}
                    </h1>
                    <p>
                        {ls.description}
                    </p>
                    <p>
                        - {ls.name}
                    </p>
                </div>
            ))}

        </div>
        </div>
    )
}

export default TestimonialReviewSection