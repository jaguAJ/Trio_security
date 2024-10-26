import React from "react";

export const Circle = ({ processImg, processText, imgWidth, imgHeight }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center w-[135px] h-[132px] bg-white rounded-full border-[5px] border-[#3D61B2]">
        <img
          src={processImg}
          className={`object-cover ${imgWidth} ${imgHeight}`}
        />
      </div>

      {/* This div is adjusted to show text properly */}
      <h3 className="text-[24px] font-semibold leading-[68px] text-center">
        {processText}
      </h3>
    </div>
  );
};
