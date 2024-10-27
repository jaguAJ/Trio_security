import insta from "../assets/insta.png";
import Linkin from "../assets/LinkedIn.png";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <footer className="pt-[4rem] sm:pt-[8rem] pb-[6rem] border-t border-gray-200 bg-[#e6e6e6]">
        <div className="bg-[#e6e6e6] grid sm:grid-cols-[2fr_2fr] md:grid-cols-[2fr_1.5fr_1.5fr_1.5fr] max-w-[120rem] mx-auto px-[1rem] md:gap-x-[6.4rem] gap-y-[5rem] md:gap-y-[9.6rem] font-medium">
          {/* TRIO SECURITY Section: Order 3 on small screens */}
          <div className="flex flex-col text-center md:text-start md:justify-self-start">
            <Link
              className="mb-[3.2rem] no-underline text-[#000] tracking-[3px] font-bold text-[16px] leading-[10px] sm:leading-[30px] whitespace-nowrap"
              to="/"
            >
              <span className="text-logo ">/</span>TRIO SECURITY
            </Link>
            <span className="text-[#6f6c90] text-[1.6rem] leading-6 font-semibold mb-[4rem]">
              Enlight your vision to our service
            </span>
            <ul className="flex text-center justify-center sm:justify-start gap-[2rem] md:gap-[2.4rem]">
              <li>
                <a href="#">
                  <img
                    src={Linkin}
                    className="h-[2.4rem] w-[2.4rem]"
                    alt="LinkedIn logo"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={github}
                    className="h-[2.4rem] w-[2.4rem]"
                    alt="GitHub logo"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={insta}
                    className="h-[2.4rem] w-[2.4rem]"
                    alt="Instagram logo"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src={twitter}
                    className="h-[2.4rem] w-[2.4rem]"
                    alt="Twitter logo"
                  />
                </a>
              </li>
            </ul>
          </div>
          <hr className="block sm:hidden border-[#C5C5C5] border-[1px] my-4" />
          {/* COMPANY Section: Order 1 on small screens */}
          <nav className="hidden sm:block md:order-none">
            <p className="text-[#040404] text-[1.8rem] font-semibold mb-[4rem] ">
              COMPANY
            </p>
            <ul className="space-y-[2.4rem]">
              <li>
                <Link
                  to="/ourservice"
                  className="text-[#303030] text-[1.6rem] no-underline transition-colors duration-300 hover:text-[#2a2828]"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/GetInTouch"
                  className="text-[#303030] text-[1.6rem] no-underline transition-colors duration-300 hover:text-[#2a2828]"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  to="/ourservice"
                  className="text-[#303030] text-[1.6rem] no-underline transition-colors duration-300 hover:text-[#2a2828]"
                >
                  Our Services
                </Link>
              </li>

              <li>
                <a
                  href="https://risingblogs.in/"
                  className="text-[#303030] text-[1.6rem] no-underline transition-colors duration-300 hover:text-[#2a2828]"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          {/* SUPPORT Section: Order 2 on small screens */}
          <nav className="hidden sm:block md:order-none justify-self-center md:justify-self-start">
            <p className="text-[#040404] text-[1.8rem] font-semibold mb-[4rem]  pt-2 md:pt-0">
              SUPPORT
            </p>
            <ul className="space-y-[2.4rem]">
              <li>
                <a
                  href="#"
                  className="text-[#303030] text-[1.6rem] no-underline transition-colors duration-300 hover:text-[#2a2828]"
                >
                  Getting started
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#303030] text-[1.6rem] no-underline transition-colors duration-300 hover:text-[#2a2828]"
                >
                  Help center
                </a>
              </li>

              <li>
                <a
                  href="/GetInTouch"
                  className="text-[#303030] text-[1.6rem] no-underline transition-colors duration-300 hover:text-[#2a2828]"
                >
                  Chat support
                </a>
              </li>
            </ul>
          </nav>

          {/* CONTACT US Section: Order 4 on small screens */}
          <nav className="pl-[4rem] sm:pl-0">
            <p className="text-[#040404] text-[1.8rem] font-semibold mb-[4rem]">
              CONTACT US
            </p>
            <ul className="space-y-[2.4rem]">
              <li>
                <a
                  className="flex items-center gap-6 text-[#303030] text-[1.6rem] no-underline transition-colors duration-300 hover:text-[#2a2828]"
                  href="mailto:trio_secure@outlook.com"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-[#6f6c90]"
                  />
                  trio_secure@outlook.com
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-6 text-[#303030] text-[1.6rem] no-underline transition-colors duration-300 hover:text-[#2a2828]"
                  href="tel:+91 9361232859"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-[#6f6c90]" />
                  +91 9361232859
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-6 text-[#303030] text-[1.6rem] no-underline transition-colors duration-300 hover:text-[#2a2828]"
                  href="tel:+91 9840870739"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-[#6f6c90]" />
                  +91 9840870739
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>

      <p className="text-[1.4rem] leading-6 text-[#020202] mt-auto ">
        &copy; <span className="year">2024</span> TrioSecurity.com | All rights
        reserved.
      </p>
    </>
  );
}

export default Footer;
