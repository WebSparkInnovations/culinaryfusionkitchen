
import React from "react";

const SpecialFoodComponent = ({ data }) => {

  return (
    <>
      {data.map((ls, index) => ( // Added index parameter
        <div key={index} className="flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            <div
              className="h-[280px] 2xl:h-[380px] bg-cover bg-center"
              style={{ backgroundImage: `url(${ls.img})` }}
            >
              <div className="relative w-full h-full bg-black/40 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40" />
                <div className="text-white text-center relative z-10">
                  <h1 className="text-[45px] md:text-[60px] 2xl:text-[72px] font-bold uppercase">
                    {ls.bannerText}
                  </h1>
                </div>
              </div>
            </div>

            <div className={`flex flex-col max-w-[1200px]  py-3 px-5 2xl:px-10 mx-auto w-full gap-5 ${ls.heading && ls.description ? 'border-[#fc7344] border-[3px]' : ''}`}>
              {ls.heading && (<h1 className="text-[24px] xl:text-[32px] text-center font-semibold">
                {ls.heading} {/* Changed from data.heading to ls.heading */}
              </h1>)}
              {ls.description && (<p className="text-[14px] md:text-[16px] 2xl:text-[18px] text-center text-[#808080]">
                {ls.description} {/* Changed from data.description to ls.description */}
              </p>)}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SpecialFoodComponent;
