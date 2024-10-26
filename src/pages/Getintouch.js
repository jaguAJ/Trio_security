import React, { useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import Footer from "../component/Footer";
import MainNavigation from "../component/MainNavigation";
import Swal from "sweetalert2";

const Getintouch = () => {
  const [country, setCountry] = useState(null);
  const options = countryList().getData();

  const handleCountryChange = (selectedOption) => {
    setCountry(selectedOption);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "90b64bee-9127-47f0-8d3a-ae134314a1b5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title:
          "Thanks for reaching out! We’re excited to connect with you and will reply soon!",
        showConfirmButton: false,
        timer: 3000,
      });
      event.target.reset();
    }
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      borderColor: "black",
      borderWidth: "2px",
      borderRadius: "1.4rem",
      fontSize: "1.6rem",
      color: "#212121",
      fontFamily: "Poppins, sans-serif",
      width: "100%",
      boxShadow: "none",
      paddingLeft: "0.6rem", // default for all screens (below sm)
      paddingRight: "1rem",
      paddingTop: "0.6rem",
      paddingBottom: "0.6rem",
      "&:hover": {
        borderColor: "black",
      },
      "@media (min-width: 640px)": {
        // equivalent to `sm`
        paddingLeft: "3.6rem",
        paddingRight: "3.6rem",
      },
      "@media (min-width: 768px)": {
        // equivalent to `md`
        paddingLeft: "0.4rem",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "rgba(0, 0, 0, 0.6)",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#000",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 1000,
      color: "#212121",
      fontSize: "1.6rem",

      backgroundColor: "rgba(255, 255, 255, 0.1)", // Adjust transparency here
      backdropFilter: "blur(10px)", // Apply blur effect
      borderRadius: "1.4rem", // Match the border radius with the control
      border: "1px solid rgba(255, 255, 255, 0.2)", // Optional: Add a border with slight transparency
    }),
    menuList: (provided) => ({
      ...provided,
      padding: "0", // Remove default padding if needed
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#212121",
    }),
  };

  return (
    <div className="page-wrapper">
      <MainNavigation isTransparent={true} />
      <section className="getIntouch-section max-w-full mx-auto pt-[2.6rem] pb-[9.6rem] md:py-[9.6rem]">
        <div className="max-w-[90rem] mx-auto p-[1.8rem] md:p-[9.6rem] rounded-[20px] bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px]">
          <h1 className="text-black text-center md:text-start font-bold text-[32px] leading-[100%] tracking-[3px] mb-[2.4rem] uppercase">
            GET IN TOUCH
          </h1>
          <h2 className="font-normal text-center md:text-start text-[16px] mb-[3.8rem]">
            We are here for you. How can we help you?
          </h2>
          <form
            className="max-w-[90rem] grid gap-[2.8rem] grid-cols-1 sm:grid-cols-2 justify-items-center sm:justify-items-start mx-auto"
            onSubmit={onSubmit}
          >
            <div className="flex flex-col mx-auto gap-[2.8rem]">
              <div className="getintouch-control">
                <input
                  type="text"
                  className="bg-transparent border-2 border-black rounded-[1.4rem] text-[#212121] placeholder:text-black-60 focus:outline-none w-full text-[1.6rem] py-[1.2rem] px-[1rem] sm:px-[3.6rem] md:pl-[1.4rem] font-poppins"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="getintouch-control">
                <input
                  className="bg-transparent border-2 border-black rounded-[1.4rem] text-[#212121] placeholder:text-black-60 focus:outline-none w-full text-[1.6rem] py-[1.2rem] px-[1rem] sm:px-[3.6rem] md:pl-[1.4rem] font-poppins"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="getintouch-control">
                <input
                  type="tel"
                  className="bg-transparent border-2 border-black rounded-[1.4rem] text-[#212121] placeholder:text-black-60 focus:outline-none w-full text-[1.6rem] py-[1.2rem] px-[1rem] sm:px-[3.6rem] md:pl-[1.4rem] font-poppins"
                  name="phone"
                  placeholder="Phone no"
                  required
                />
              </div>
              {/* Submit button for md and larger screens */}
              <button className="getInTouch-btn hidden md:block text-[2.8rem] py-[1.4rem] px-[6rem] border-none rounded-[2rem] shadow-[0px_4px_10px_rgba(0,0,0,0.6)] bg-[#010202] text-white cursor-pointer no-underline transition-all duration-300 self-start">
                Submit
              </button>
            </div>
            <div className="flex flex-col mx-auto gap-[2.8rem]">
              <div className="getintouch-control">
                {/* Country selection dropdown with custom styles */}
                <Select
                  options={options}
                  value={country}
                  onChange={handleCountryChange}
                  styles={customStyles}
                  placeholder="Select Country"
                />
              </div>
              <div className="getintouch-control">
                <input
                  type="text"
                  className="bg-transparent border-2 border-black rounded-[1.4rem] text-[#212121] placeholder:text-black-60 focus:outline-none w-full text-[1.6rem] py-[1.2rem] px-[1rem] sm:px-[3.6rem] md:pl-[1.4rem] font-poppins"
                  name="city"
                  placeholder="City"
                  required
                />
              </div>
              <div className="getintouch-control">
                <textarea
                  className="bg-transparent h-[140px] border-2 border-black rounded-[1.4rem] text-[#212121] placeholder:text-black-60 focus:outline-none w-full text-[1.6rem] py-[1.2rem] px-[1rem] sm:px-[3.6rem] md:pl-[1.4rem] font-poppins"
                  rows="4"
                  name="message"
                  placeholder="Message"
                  required
                />
              </div>
              {/* Submit button for small screens (below 640px) */}
              <button className="getInTouch-btn block md:hidden text-[2.8rem] py-[1.4rem] px-[6rem] border-none rounded-[2rem] shadow-[0px_4px_10px_rgba(0,0,0,0.6)] bg-[#010202] text-white cursor-pointer no-underline transition-all duration-300 self-start">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Getintouch;
