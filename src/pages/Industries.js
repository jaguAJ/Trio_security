import health from "../assets/health.png";
import retail from "../assets/retail.png";
import food from "../assets/food.png";
import manufacture from "../assets/manufacture.png";
import transport from "../assets/transport.png";
import Industry from "../assets/industry.png";
import government from "../assets/government.png";
import finance from "../assets/finance.png";
import automative from "../assets/automative.png";
import MainNavigation from "../component/MainNavigation";
import Footer from "../component/Footer";

function Industries() {
  const service = [
    { src: health, alt: "health", label: "HEALTH CARE" },
    { src: retail, alt: "retail", label: "RETAIL & WHOLESALE" },
    { src: food, alt: "food", label: "FOOD & SERVICES" },
    { src: manufacture, alt: "manufacture", label: "MANUFACTURING" },
    { src: transport, alt: "transport", label: "TRANSPORTATION" },
    { src: Industry, alt: "Industry", label: "INDUSTRIES" },
    { src: government, alt: "government", label: "GOVERNMENT" },
    { src: finance, alt: "finance", label: "FINANCE" },
    { src: automative, alt: "automative", label: "AUTOMATIVE" },
  ];

  return (
    <div>
      <MainNavigation />

      <div>
        <div className="custom-shape-divider-top-1728395753 ">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <section className="relative px-[1.8rem] py-[9.6rem] max-w-[120rem] mx-auto ">
          <div className="relative z-0">
            <h1 className="text-center mb-[6rem] text-[#353535] text-[3rem] font-bold font-poppins leading-[1.75rem]">
              Industries we Serve
            </h1>
            <div className="w-full mx-auto grid grid-cols-2 gap-[4rem] md:grid-cols-3">
              {service.map(({ src, alt, label }) => (
                <div
                  key={alt}
                  className="flex flex-col items-center justify-center w-full max-w-[180px] h-[160px] rounded-[20px] shadow-[6px_6px_6px_0px_rgba(0,0,0,0.25),-6px_-6px_6px_0px_#fff] bg-[#fafafa] p-[15px] justify-self-center md:max-w-[250px] md:h-[232px]"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="mb-[1rem] max-w-[60%] h-auto md:max-w-[80%] md:h-auto" // Adjust image size for small devices
                  />
                  <h3 className="text-center text-black text-[1rem] font-semibold font-poppins leading-[1.5rem] md:text-[1.25rem] md:leading-[1.75rem]">
                    {label}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Industries;
