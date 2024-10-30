
import React from "react";

const AboutUsHero = ({ data }) => {

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
           
              {ls.heading && (<h1 className="text-[24px] xl:text-[32px] text-center font-semibold">
                {ls.heading} {/* Changed from data.heading to ls.heading */}
              </h1>)}
            
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutUsHero;
