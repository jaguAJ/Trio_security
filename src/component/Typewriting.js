import { TypeAnimation } from "react-type-animation";

const Typewriting = () => {
  return (
    <TypeAnimation
      sequence={["Transforming ideas to reality", 1000]}
      wrapper="span"
      speed={50}
      className="absolute max-w-[10ch] md:max-w-[13ch] top-[24px] left-[20px] md:top-[44px] md:left-[50px] text-[38px] md:text-[72px] font-[800] text-[#2D2D2D] leading-[1.4] md:leading-[1.2] w-full" // Removed max-w-[50%] and added w-full
      repeat={Infinity}
      cursor={false}
    />
  );
};

export default Typewriting;
