import { Link } from "react-router-dom";
import Service from "../component/Services.js";
import Arrow from "../assets/Arrow.svg"; //black
import arrow from "../assets/arr.svg"; //white
import { useState } from "react";

function Wedo() {
  const [isHovered, editHovered] = useState(true);
  function handleChange() {
    editHovered((prevIsHovered) => !prevIsHovered);
  }
  return (
    <section className="bg-[#fafafa] px-[1.8rem] pt-[4.8rem] sm:pt-[6rem] pb-[0.6rem] sm:pb-[2rem] flex flex-col sm:flex-row gap-[2rem] sm:gap-[3rem] max-w-full sm:max-w-[90%] md:max-w-[130rem] mx-auto mb-[6rem] sm:mb-[2rem]">
      <div className="flex flex-col md:flex-row gap-[3rem] mt-[5rem]">
        <div className="flex flex-col max-w-[60rem] gap-[3rem]">
          <h4 className="flex items-center font-[600] text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] leading-[3rem]">
            What we do
            <span className="ml-[10px] w-[50%] h-[3px] bg-black"></span>
          </h4>

          <h3 className="text-[#000] font-poppins text-[30px] sm:text-[35px] md:text-[40px] font-[600]  leading-[40px] sm:leading-[50px] md:leading-[56px]">
            The Perfect Services <br />
            we’re Offering
          </h3>
          <p className="text-black text-[1.6rem] font-[400] leading-[40px] break-words font-['Plus Jakarta Sans']">
            Reshape your business ideas into a unique and fully-realized online
            presence with our team of expert developers. We specialize in
            turning your sketches into comprehensive websites that fulfill your
            business needs. No need to worry about your unique ideas; we'll make
            them beautiful.
          </p>
          <Link
            to="/ourservice"
            className="inline-flex self-start gap-[1rem] items-center text-[1.6rem] py-[1.6rem] px-[3.1rem] rounded-[1rem] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.6)] bg-[#010202] text-white no-underline transition-all duration-300 hover:bg-[#ffffff] hover:text-[#010202] hover:shadow-[inset_0px_4px_8.7px_#00000040,0px_4px_4px_#00000040]"
            onMouseEnter={handleChange}
            onMouseLeave={handleChange}
          >
            More Services
            <span>
              <img src={isHovered ? Arrow : arrow} alt="arrow" />
            </span>
          </Link>
        </div>
        <div>
          <Service />
        </div>
      </div>
    </section>
  );
}
export default Wedo;
