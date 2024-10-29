import { Link } from "react-router-dom";
import Form from "./Form.js";

function Subscribe() {
  return (
    <section className=" max-w-[140rem] mx-auto py-[4rem]">
      <div className="sub-text-box flex flex-col lg:flex-row justify-between gap-[2.8rem] pt-[2.6rem] pb-[9.4rem] md:py-[9.4rem] px-[3.8rem]">
        <h1 className="text-black font-[600] text-[2.8rem] md:text-[5rem] leading-[110%] font-poppins">
          Your Future Starts Today..
        </h1>
        <Link
          to="/GetInTouch"
          className="sub-btn text-[2.8rem] py-[2.6rem] px-[2.4rem] md:py-[2.8rem] md:px-[4.4rem] border-none rounded-[2rem] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.6)] bg-[#010202] text-white no-underline  self-start inline-flex h-12 animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
        >
          Let's Talk
        </Link>
        {/* <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Shimmer
        </button> */}
      </div>
      <Form />
    </section>
  );
}
export default Subscribe;
