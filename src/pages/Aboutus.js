// Aboutus.js
import React from "react";
import ai from "../service/ai.png";
import br from "../service/br.png";
import dg from "../service/dg.png";
import ma from "../service/ma.png";
import softdev from "../service/softdev.png";
import webdev from "../service/webdev.png";
import websiteuiux from "../service/websiteuiux.png";
import ecom from "../service/ecom.png";
import Card from "../component/Card";
import Footer from "../component/Footer";
import MainNavigation from "../component/MainNavigation";
const Aboutus = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between serviceBg">
      <MainNavigation />
      <div className="">
        <section className="max-w-full md:max-w-[120rem] px-[1.8rem] mx-auto pt-[9.6rem] relative ">
          <h2 className="text-[#0400B8] text-4xl md:text-6xl font-poppins font-medium leading-[2.8125rem] break-words mb-12 md:mb-28">
            About Us
          </h2>
          <div className="max-w-full md:max-w-[120rem] mx-auto block md:flex gap-4 md:gap-40 relative mb-28 md:mb-48">
            <div>
              <p className="text-[#1a1a1a] text-[14px] md:text-[28px] font-poppins font-medium leading-[20px] md:leading-[4.625rem] mb-6">
                Trio Security delivers affordable websites with 24/7 support for
                businesses of all sizes. Our focus on customer care and
                personalized service sets us apart.
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-[12px] md:text-[23px] font-poppins font-medium leading-[18px] md:leading-[4.625rem]">
                Our mission at Trio Security empowers growing businesses with
                advanced technology typically reserved for large enterprises. We
                provide innovative solutions to boost sales and adapt to new
                challenges. Our focus on strong, positive client relationships
                ensures lasting success.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="w-full mx-auto min-h-full lg:h-[1200px] mb-32 z-10 ">
            <h2 className="text-[#0400B8] text-4xl md:text-6xl font-poppins font-medium leading-[2.8125rem] break-words mb-16 md:mb-0 ">
              Our Services
            </h2>

            <div className="mx-auto grid grid-cols-2 lg:block gap-6 z-10">
              <div className="grid grid-cols-1 justify-self-center lg:justify-self-start md:relative gap-6">
                <Card
                  icon={webdev}
                  title="Website Development"
                  description="We create custom websites tailored to client needs, using the latest technology through WordPress or custom coding."
                  hoverContent={[
                    "Web Application Development",
                    "AI & ML - Python, TensorFlow",
                    "MEAN/MERN Stack Development",
                    "Blockchain Development",
                    "IoT Applications",
                    "Big Data Services",
                  ]}
                  top="160px"
                  left="50px"
                />
                <Card
                  icon={br}
                  title="Branding"
                  description="We offer logo design, business cards, graphic design, and content writing to fulfill your vision."
                  hoverContent={[
                    "Logo & Brand Identity",
                    "Graphic Design",
                    "Package Design",
                    "Infographics Design",
                    "Print Design",
                    "Creative Copy Writing",
                  ]}
                  top="592px"
                  left="50px"
                />
                <Card
                  icon={ma}
                  title="Mobile App UI/UX"
                  description="We craft distinctive designs that enhance the quality and user experience of your mobile app."
                  hoverContent={[
                    "User Research Development",
                    "Wireframing & Prototyping",
                    "Visual Design (UI Design)",
                    "User Experience (UX) Design",
                    "Interaction & Animation Design",
                    "Responsive Design",
                  ]}
                  top="314px"
                  left="342px"
                />
                <Card
                  icon={ai}
                  title="AI/ML Development"
                  description="Our team excels in developing AI/ML solutions with precision, innovation, and scalability."
                  hoverContent={[
                    "Machine Learning Model Development",
                    "AI-Powered Data Analysis",
                    "Natural Language Processing (NLP) Solutions",
                    "Computer Vision Application",
                  ]}
                  top="746px"
                  left="342px"
                />
              </div>
              <div className="grid grid-cols-1 relative gap-y-8 mt-[7.4rem] md:mt-0">
                <Card
                  icon={dg}
                  title="Digital Marketing"
                  description="Our team will analyze your website traffic and implement strategies to increase it."
                  hoverContent={[
                    "Influencer Marketing",
                    "Search Engine Optimization(SEO)",
                    "Social Media Marketing",
                    "Email Marketing",
                    "Analytics Consultation",
                  ]}
                  top="160px"
                  left="640px"
                />
                <Card
                  icon={websiteuiux}
                  title="Website UI/UX"
                  description="Our team creates stunning designs for your website, including animations and more."
                  hoverContent={[
                    "Responsive Web Design",
                    "User Journey Mapping",
                    "Interactive Prototyping",
                    "Website Accessibility Optimization",
                    "UI/UX Audits & Enhancements",
                  ]}
                  top="592px"
                  left="640px"
                />
                <Card
                  icon={ecom}
                  title="E-commerce Website"
                  description="We offer user-friendly websites built on Shopify for creating online stores."
                  hoverContent={[
                    "Custom E-commerce Website Design",
                    "Shopping Cart & Checkout Optimization",
                    "Product Management System Integration",
                    "Payment Gateway Integration",
                    "E-commerce Performance Optimization",
                  ]}
                  top="314px"
                  left="930px"
                />
                <Card
                  icon={softdev}
                  title="Software Development"
                  description="Our team scales your application to meet all client requirements and develops system software."
                  hoverContent={[
                    "Custom Software Development",
                    "API Development & Integration",
                    "Software Architecture Design",
                    "Cloud-based App Development",
                    "Software Maintenance & Support",
                  ]}
                  top="746px"
                  left="930px"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
