import rocket from "../assets/RocketLaunch.svg";
import Rock from "../assets/rocket.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Typewriting from "./Typewriting";

function Hero() {
  const [isHovered, editHovered] = useState(true);

  function handleChange() {
    editHovered((prevIsHovered) => !prevIsHovered);
  }

  return (
    <section className="relative inset-0 bg-no-repeat bg-cover bg-center min-h-[450px] sm:min-h-[410px] md:min-h-[610px] lg:min-h-[826px] bg-opacity-50 filter brightness-20 md:brightness-100 md:opacity-100 max-w-full mb-[1.4rem] sm:mb-[1.7rem] md:mb-[3.4rem] bg-hero-desktop bg-hero-mobile ">
      <div className="absolute top-[5%] left-0 md:top-[15%] md:right-[50%] flex flex-col gap-[1rem] md:gap-[4rem] max-w-[80rem] md:max-w-[70rem] mx-auto px-[2rem] md:px-[5.2rem] py-[2rem] md:py-[7rem] text-[#0c034a] min-h-full">
        {/* Typewriting component */}
        <div className="overflow-auto">
          {" "}
          {/* Allow overflow */}
          <Typewriting />
        </div>

        <div className="max-w-full flex flex-col justify-around md:block">
          <div className="max-w-full sm:mt-[80px] md:mt-[200px]">
            <p className="relative hidden lg:block sm:mt-[19.5px] md:mt-[39px] font-sans font-medium text-[10px] sm:text-[12px] md:text-[18px] text-[#000] leading-[1.6]">
              Advance your online presence with a unique website. We add
              creativity to every detail and ensure timely delivery, bringing
              your vision to life effortlessly.
            </p>
          </div>

          <div className="mt-[14rem] sm:mt-[6rem] md:mt-0 lg:mt-[6rem]">
            <Link
              to="/ourservice"
              className="flex items-center self-start justify-start gap-[1rem] text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] font-semibold text-[#fff] bg-[#000] rounded-[10px] md:rounded-[20px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.6)] py-[1.2rem] md:py-[1.8rem] px-[2.8rem] md:px-[4rem] max-w-[210px] mt-[6rem] border-none transition-all duration-300 no-underline whitespace-nowrap hover:bg-[#feffff] hover:text-[#000] hover:shadow-[inset_0px_4px_8.7px_#00000040,0px_4px_4px_#00000040]"
              onMouseEnter={handleChange}
              onMouseLeave={handleChange}
            >
              <span>
                <img src={isHovered ? rocket : Rock} alt="RocketLaunch" />
              </span>
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
