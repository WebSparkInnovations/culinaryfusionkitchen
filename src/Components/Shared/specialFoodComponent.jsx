
import React from "react";

const SpecialFoodComponent = ({ data }) => {

  return (
    <>
      {data.map((ls, index) => ( // Added index parameter
        <div key={index} className="flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <div
              className="h-[250px] xl:h-[300px] 2xl:h-[380px] bg-cover bg-center"
              style={{ backgroundImage: `url(${ls.img})` }}
            >
              <div className="relative w-full h-full bg-black/40 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40" />
                <div className="text-white text-center relative z-10">
                  <h1 className="text-[32px] md:text-[40px] xl:text-[48px] font-bold uppercase">
                    {ls.bannerText}
                  </h1>
                </div>
              </div>
            </div>
            <div className={`flex flex-col sm:max-w-[600px] md:max-w-[800px] xl:max-w-[900px]  py-3 px-5 2xl:px-10 mx-auto w-full gap-5 ${ls.heading && ls.description ? 'border-[#fc7344] border-[3px]' : ''}`}>
              {ls.heading && (<h1 className="text-[20px] lg:text-[28px] text-center font-semibold">
                {ls.heading} {/* Changed from data.heading to ls.heading */}
              </h1>)}
              {/* Conditionally render description only if it exists */}
              {ls.description ? (
                <p className="text-[12px] md:text-[14px] xl:text-[16px] text-center text-[#808080]">
                  {ls.description}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SpecialFoodComponent;
