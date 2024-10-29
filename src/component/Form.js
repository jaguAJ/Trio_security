import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Form() {
  // const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const fd = new FormData(event.target);
  //   const acquisitionChannel = fd.getAll("acquisition");
  //   const data = Object.fromEntries(fd.entries());
  //   data.acquisition = acquisitionChannel;

  //   if (data.password !== data["confirm-password"]) {
  //     setPasswordsAreNotEqual(true);
  //     return;
  //   }

  //   console.log(data);
  //   event.target.reset();
  // }

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
        title: "Thank you! You’re now part of our newsletter family",
        showConfirmButton: false,
        timer: 3000,
      });
      event.target.reset();
    }
  };

  return (
    <div
      className="flex flex-col gap-6 future w-auto mx-auto md:max-w-[130rem] min-h-[26rem]
    bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/da6c50f677e24abf6def59296faaffd0610d061fbf5e3df5699040652a0c1337')]
     bg-center bg-contain  bg-no-repeat
    p-[2rem] md:p-[3rem] 
    transform bg-sub-mobile"
    >
      <h2 className="text-white text-center mt-[1.5rem] mb-[2rem] sm:mt-[4rem] sm:mb-[2rem] md:mt-[2rem] md:mb-[4rem]  lg:mb-[3.8rem] font-[600] text-[22px] md:text-[38px] sm:text-[3.8rem] leading-[94%] md:leading-[114%] font-poppins">
        Subscribe to our newsletter
      </h2>

      {/* Centering the form */}
      <div className="flex justify-center">
        <form
          onSubmit={onSubmit}
          className="subscribe-form text-white w-full max-w-[65%] mx-auto md:px-0 px-16"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-[1.4rem] sm:gap-[1.8rem]">
            <input
              className="control  md:self-center w-auto sm:w-auto input md:w-full text-white rounded-[9px] py-[0.6rem] md:py-[0.8rem] px-[0.8rem] md:px-[1rem] bg-[#2b2b2b] border border-[#c8b7b7] font-poppins font-[300] text-[14px] sm:text-[15px] leading-[1.4rem] focus:outline-none"
              type="text"
              id="first-name"
              name="name"
              placeholder="First Name"
              required
            />

            <input
              className="control  md:self-center w-auto md:w-full text-white rounded-[9px] py-[0.6rem] md:py-[0.8rem] px-[0.8rem] md:px-[1rem] bg-[#2b2b2b] border border-[#c8b7b7] font-poppins font-[300] text-[14px] sm:text-[15px] leading-[1.4rem] focus:outline-none"
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
              required
            />

            <button
              type="submit"
              to="/congrats"
              className=" md:self-center w-auto md:w-[50%] py-[1rem] px-[1.2rem] sm:py-[1.2rem] sm:px-[3.8rem] border-none rounded-[1.4rem] md:rounded-[0.8rem] bg-white text-black text-[1.4rem sm:text-[1.6rem] no-underline shadow-[inset_4px_4px_4px_#00000040,inset_-4px_-4px_4px_#00000040] cursor-pointer transition-[0.3s] hover:bg-[#252525] hover:text-white hover:shadow-[0px_4px_10px_0px_rgba(255,255,255,0.6)] whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
