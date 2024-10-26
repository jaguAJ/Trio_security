import React from "react";
import group39473 from "../assets/group-39473.png";
import { Circle } from "./Circle.js";
import dev from "../ProcessImg/dev.png";
import design from "../ProcessImg/design.png";
import analysis from "../ProcessImg/analysis.png";
import planning from "../ProcessImg/planning.png";
import { FaArrowRight } from "react-icons/fa"; // FontAwesome arrow icon

export const Workflow = () => {
  return (
    <section className="max-w-full h-full mx-auto mt-[12rem] mb-[12rem]">
      <div className="flex flex-col gap-20 w-full h-full sm:h-[405px] bg-[#f1f1f1] shadow-[inset_0_0_15px_rgba(0,0,0,0.25)]">
        <div className="">
          <h3 className="[font-family:'Poppins-Medium',Helvetica] font-medium text-[#1abcfe] text-[20px] text-center tracking-[0]  whitespace-nowrap pt-14 pb-6">
            Work Flow
          </h3>
          <div className="[font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#003fcb] text-5xl text-center tracking-[0]">
            Our Working Process
          </div>
        </div>
        <div>
          <div className="flex flex-col  sm:flex-row items-center justify-center gap-4 mt-8">
            <Circle
              processImg={planning}
              imgWidth={"61px"}
              imgHeight={"68px"}
              processText="Planning"
            />

            <div className="w-[90px] sm:w-[124px] h-0 sm:h-20 flex items-center pl-6 pr-14 sm:pl-0 sm:pr-0 sm:pb-[5.5rem] rotate-90 sm:rotate-0">
              <div className="w-full h-[2.5px] bg-[#3D61B2]"></div>
              <FaArrowRight className="text-[#3D61B2] text-3xl ml-0" />
            </div>

            <Circle
              processImg={analysis}
              imgWidth={"62px"}
              imgHeight={"61px"}
              processText="Analysis"
            />

            <div className="w-[90px] sm:w-[124px] h-0 sm:h-20 flex items-center pl-6 pr-14 sm:pl-0 sm:pr-0 sm:pb-[5.5rem] rotate-90 sm:rotate-0">
              <div className="w-full h-[2.5px] bg-[#3D61B2]"></div>
              <FaArrowRight className="text-[#3D61B2] text-3xl ml-0" />
            </div>

            <Circle
              processImg={design}
              imgWidth={"70px"}
              imgHeight={"76px"}
              processText="Design"
            />

            <div className="w-[90px] sm:w-[124px] h-0 sm:h-20 flex items-center pl-6 pr-14 sm:pl-0 sm:pr-0 sm:pb-[5.5rem] rotate-90 sm:rotate-0">
              <div className="w-full h-[2.5px] bg-[#3D61B2]"></div>
              <FaArrowRight className="text-[#3D61B2] text-3xl ml-0" />
            </div>

            <Circle
              processImg={dev}
              imgWidth={"84px"}
              imgHeight={"78px"}
              processText="Development"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
