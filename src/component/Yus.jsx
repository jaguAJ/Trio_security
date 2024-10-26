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

        <div className="relative w-full h-full md:w-[1395px] md:h-[395px] mb-36 md:mb-10 flex sm:justify-center">
          <Vector1283 className="w-[1000px] h-[800px] scale-150 sm:scale-100 md:scale-100 sm:w-[838px] sm:h-[302px] md:w-[1395px] md:h-[395px] sm:rotate-0 rotate-90" />
          {/* First Card */}
          <div className="absolute top-[-40px] left-[120px] md:top-[148px] md:left-[52px] flex flex-col pt-[1.6rem] sm:pt-[2.5rem] pl-[2.8rem] gap-1 sm:gap-6 w-[228px] h-[185px] md:w-[306px] md:h-[247px] bg-[#d3e1ff99] rounded-[25px] backdrop-blur-sm">
            <img
              className="w-[54px] sm:w-[58px] md:w-[62px] h-[60px] sm:h-[64px] md:h-[68px]"
              alt="Star badge"
              src={star}
            />
            <h2 className="text-[#282828] font-poppins text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[32.64px] tracking-[-0.6px]">
              Premium Quality
            </h2>
            <p className="w-[200px] sm:w-[248px] text-black text-[1.4rem] sm:text-[1.4rem] md:text-[1.6rem] leading-[23.04px] tracking-[-0.4px]">
              Our service ensures premium quality, never lowering your
              expectations.
            </p>
          </div>

          {/* Second Card */}
          <div className="absolute top-[185px] md:top-[49px] md:left-[382px] flex flex-col pt-[1.6rem] sm:pt-[2.5rem] pl-[2.8rem] gap-1 sm:gap-6 w-[228px] h-[185px] md:w-[306px] md:h-[247px] bg-[#d3e1ff99] rounded-[25px] backdrop-blur-sm">
            <img
              className="w-[44px] sm:w-[46px] md:w-[50px] h-[60px] sm:h-[64px] md:h-[68px]"
              alt="Hourglass streamline"
              src={time}
            />
            <h2 className="text-[#282828] font-poppins text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[32.64px] tracking-[-0.6px]">
              On-Time Delivery
            </h2>
            <p className="w-[200px] sm:w-[248px] text-black text-[1.4rem] sm:text-[1.4rem] md:text-[1.6rem] leading-[23.04px] tracking-[-0.4px]">
              We deliver your project on time according to the agreed-upon
              dates.
            </p>
          </div>

          {/* Third Card */}
          <div className="absolute top-[410px] left-[142px] md:top-[148px] md:left-[712px] flex flex-col pt-[1.6rem] sm:pt-[2.5rem] pl-[2.8rem] gap-1 sm:gap-6 w-[228px] h-[185px] md:w-[306px] md:h-[247px] bg-[#d3e1ff99] rounded-[25px] backdrop-blur-sm">
            <img
              className="w-[44px] sm:w-[46px] md:w-[50px] h-[46px] sm:h-[50px] md:h-[54px]"
              alt="affordable price"
              src={handshake}
            />
            <h2 className="text-[#282828] font-poppins text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[32.64px] tracking-[-0.6px]">
              Affordable&nbsp;&nbsp;Prices
            </h2>
            <p className="w-[200px] sm:w-[248px] text-black text-[1.4rem] sm:text-[1.4rem] md:text-[1.6rem] leading-[23.04px] tracking-[-0.4px]">
              Our prices vary based on client requirements, ensuring we remain
              budget-friendly.
            </p>
          </div>

          {/* Fourth Card */}
          <div className="absolute top-[640px] md:top-[49px] md:left-[1031px] flex flex-col pt-[1.6rem] sm:pt-[2.5rem] pl-[2.8rem] gap-1 sm:gap-6 w-[228px] h-[185px] md:w-[306px] md:h-[247px] bg-[#d3e1ff99] rounded-[25px] backdrop-blur-sm">
            <img
              className="w-[44px] sm:w-[46px] md:w-[50px] h-[50px] sm:h-[54px] md:h-[58px]"
              alt="Customer support"
              src={support}
            />
            <h2 className="text-[#282828] font-poppins text-[20px] sm:text-[22px]  md:text-[24px] font-semibold leading-[32.64px] tracking-[-0.6px]">
              24/7 Support
            </h2>
            <p className="w-[200px] sm:w-[248px] text-black text-[1.4rem] sm:text-[1.4rem] md:text-[1.6rem] leading-[23.04px] tracking-[-0.4px]">
              We are thrilled to connect with clients and help them achieve
              their goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
