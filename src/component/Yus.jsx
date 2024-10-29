import React from "react";
import { Vector1283 } from "../Vector1283/Vector1283";
import star from "../assets/star.png";
import support from "../assets/support.png";
import time from "../assets/time.png";
import handshake from "../assets/handshake.png";

export const YUs = () => {
  return (
    <section
      className="px-4 pt-0 sm:pt-24 max-w-full sm:max-w-[90%] md:max-w-[140rem] mx-auto mb-48 sm:mb-[18rem]"
      id="whyUs"
    >
      <div className="flex flex-col gap-10 md:gap-2">
        <>
          <h2 className="font-semibold text-[2.4rem] sm:text-[2.8rem] md:text-[3.8rem]  mb-[4.6rem] sm:mb-[8.6rem] md:mb-[9.6rem]">
            WHY TRIO SECURITY?
          </h2>
        </>

        <div className="relative mx-auto w-full h-full sm:w-[620px] lg:w-[1395px] sm:h-[300px] lg:h-[395px] mb-36 md:mb-10 flex sm:justify-center">
          <Vector1283 className="w-[1000px] h-[800px] scale-150 sm:scale-90 md:scale-100 sm:w-[908px] sm:h-[362px] md:w-[1395px] md:h-[395px] sm:rotate-0 rotate-90" />
          {/* First Card */}
          <div className="absolute top-[-40px] left-[120px] sm:top-[10px] sm:left-[-22px] lg:top-[148px] lg:left-[52px] flex flex-col py-[1.6rem] lg:py-[2.5rem] px-[2.6rem] gap-1 sm:gap-2 lg:gap-6 max-w-[228px] h-[185px] lg:max-w-[306px] lg:h-[247px] bg-[#d3e1ff99] rounded-[25px] backdrop-blur-sm">
            <img
              className="w-[52px]  lg:w-[62px] h-[58px]  lg:h-[68px]"
              alt="Star badge"
              src={star}
            />
            <h2 className="text-[#282828] font-poppins text-[20px] lg:text-[24px] font-semibold leading-[32.64px] tracking-[-0.6px]">
              Premium Quality
            </h2>
            <p className="w-[200px] lg:w-[248px] text-black text-[1.4rem]  lg:text-[1.6rem] leading-[23.04px] tracking-[-0.4px]">
              Our service ensures premium quality, never lowering your
              expectations.
            </p>
          </div>

          {/* Second Card */}
          <div className="absolute top-[185px] sm:top-[212px] sm:left-[109px] lg:top-[49px] lg:left-[382px] flex flex-col py-[1.6rem] lg:py-[3.6rem] px-[2.8rem] gap-1 sm:gap-2 lg:gap-6 max-w-[228px] h-[185px] lg:max-w-[306px] lg:h-[247px] bg-[#d3e1ff99] rounded-[25px] backdrop-blur-sm">
            <img
              className="w-[40px] lg:w-[50px] h-[56px] lg:h-[68px]"
              alt="Hourglass streamline"
              src={time}
            />
            <h2 className="text-[#282828] font-poppins text-[20px]  lg:text-[24px] font-semibold leading-[32.64px] tracking-[-0.6px]">
              On-Time Delivery
            </h2>
            <p className="w-[200px] lg:w-[248px] text-black text-[1.4rem]  lg:text-[1.6rem] leading-[23.04px] tracking-[-0.4px]">
              We deliver your project on time according to the agreed-upon
              dates.
            </p>
          </div>

          {/* Third Card */}
          <div className="box-border overflow-hidden absolute top-[410px] left-[120px] sm:top-[10px] sm:left-[236px] lg:top-[148px] lg:left-[712px] flex flex-col py-[1.6rem] lg:py-[3.6rem] px-[2.8rem] sm:p-[2.8rem] gap-1 sm:gap-2 lg:gap-6 max-w-[228px] sm:max-w-[248px] lg:max-w-[306px] h-[185px] lg:h-[247px] bg-[#d3e1ff99] rounded-[25px] backdrop-blur-sm">
            <img
              className="w-[42px]  lg:w-[50px] h-[44px]  lg:h-[54px]"
              alt="affordable price"
              src={handshake}
            />
            <h2 className="text-[#282828] font-poppins text-[20px]  lg:text-[24px] font-semibold leading-[32.64px] tracking-[-0.6px]">
              Affordable&nbsp;&nbsp;Prices
            </h2>
            <p className="w-[200px] lg:w-[248px] text-black text-[1.4rem] lg:text-[1.6rem] leading-[23.04px] tracking-[-0.4px]">
              Our prices vary based on client requirements, ensuring we remain
              budget-friendly.
            </p>
          </div>

          {/* Fourth Card */}
          <div className="absolute top-[640px] sm:top-[212px] sm:left-[386px] lg:top-[49px] lg:left-[1031px] flex flex-col py-[1.6rem] lg:py-[2.5rem] px-[2.8rem] gap-1 sm:gap-2 lg:gap-6 max-w-[228px] h-[185px] lg:max-w-[306px] lg:h-[247px] bg-[#d3e1ff99] rounded-[25px] backdrop-blur-sm">
            <img
              className="w-[42px]  lg:w-[50px] h-[48px] lg:h-[58px]"
              alt="Customer support"
              src={support}
            />
            <h2 className="text-[#282828] font-poppins text-[20px] lg:text-[24px] font-semibold leading-[32.64px] tracking-[-0.6px]">
              24/7 Support
            </h2>
            <p className="w-[200px] lg:w-[248px] text-black text-[1.4rem] lg:text-[1.6rem] leading-[23.04px] tracking-[-0.4px]">
              We are thrilled to connect with clients and help them achieve
              their goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
