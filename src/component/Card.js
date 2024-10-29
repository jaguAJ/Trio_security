import React, { useState } from "react";

const Card = ({ icon, title, description, hoverContent, top, left }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`static lg:absolute bg-white shadow-custom w-[150px] h-[210px] sm:w-[163px] sm:h-[230px] md:w-[272px] md:h-[397px] flex flex-col gap-1 md:gap-6 items-center justify-center pt-[1.6rem] md:pt-[3.2rem] pb-[2.4rem] md:pb-[4.8rem] px-[0.8rem] md:px-[1.8rem] group hover:bg-[#2E74C5] transition-colors duration-300 `}
      style={{ top, left }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="w-[34px] h-[33px] md:w-[61px] md:h-[65px] transition-all duration-300 group-hover:filter group-hover:invert"
        src={icon}
        alt={title}
      />
      <h3 className="text-black text-[12px] md:text-[20px] font-poppins font-medium leading-[25px] group-hover:text-white whitespace-nowrap px-3">
        {title}
      </h3>
      {isHovered ? (
        <ul className="text-white text-[10px] md:text-[14px] font-poppins font-normal  leading-6 md:leading-[24px] list-disc pl-1 md:pl-5">
          {hoverContent.map((item, index) => (
            <li key={index} className="ml-3 md:ml-4">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-[#4d4d4d] font-poppins font-normal text-[10px] md:text-[16px] leading-[18px] md:leading-[35px] break-words group-hover:text-white">
          {description}
        </p>
      )}
    </div>
  );
};

export default Card;
