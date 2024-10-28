import React from "react";
import ae from "../tech/ae.png";
import aws from "../tech/aws.png";
import cloud from "../tech/cloud.png";
import figlogo from "../tech/figlogo.png";
import Figma from "../tech/Figma.png";
import github from "../tech/github.png";
import Mongo from "../tech/Mongo Db.png";
import mysql from "../tech/MySQL Logo.png";
import mongodb from "../tech/mongoDB.png";
import photoshop from "../tech/photoshop.png";
import react from "../tech/react.png";
import shopify from "../tech/Shopify.png";
import shopifyi from "../tech/shopifyi.png";
import wordpress from "../tech/wordpress.png";
import xd from "../tech/xd.png";

const Tools = () => {
  return (
    <section className="max-w-full mx-auto mb-[8rem]">
      <h2
        className="text-center text-[#052033] font-poppins font-medium text-[34px] md:text-[54px] leading-[68px] mb-6 md:mb-[12rem]"
        style={{ fontFamily: "'Poppins-Medium', Helvetica" }}
      >
        Tools &amp; Technologies
      </h2>

      <div className="w-full h-[386px] sm:h-[600px] lg:h-[305px] bg-[#FAFAFA] shadow-[0px_-4px_10px_#00000040,0px_4px_10px_#00000040] ">
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-full px-4 lg:px-20 mx-auto gap-10 sm:gap-14 lg:gap-[10rem] align-middle pt-12">
          <div className="flex flex-col gap-y-10 sm:gap-y-16 lg:gap-y-[4.5rem]">
            <div className="flex flex-wrap gap-[3rem] sm:gap-[6rem] lg:gap-[10.5rem] justify-center">
              <img
                className="w-[46px] md:w-[93px] h-[50px] md:h-[101px]"
                alt="Icon react original"
                src={react}
              />
              <img
                className="w-[55px] md:w-[111px] h-[50px] md:h-[101px]"
                alt="Icon wordpress"
                src={wordpress}
              />
              <img
                className="w-[50px] md:w-[101px] h-[50px] md:h-[101px]"
                alt="Icon github original"
                src={github}
              />
              <img
                className=" w-[69px] md:w-[138px] h-[50px] md:h-[101px]"
                alt="Icon google cloud"
                src={cloud}
              />
            </div>

            <div className="flex gap-2 flex-row sm:gap-16 lg:gap-[6rem] justify-center items-center">
              <div className="w-[117px] md:w-[234px] h-[50px] md:h-[101px]">
                <img
                  className="w-[42px] md:w-[91px] h-[50px]  md:h-[101px] inline-block "
                  alt="Icon shopify"
                  src={shopifyi}
                />
                <img
                  className="w-[60px] md:w-[127px] h-5 md:h-10 inline-block"
                  alt="Shopify"
                  src={shopify}
                />
              </div>

              <div className="flex items-center lg:gap-2 w-[105px] lg:w-[213px] h-[81px] justify-center">
                <img
                  className="w-[46px] sm:w-[78px] lg:w-[92px] h-[40px] md:h-[81px]"
                  alt="Mongo db"
                  src={Mongo}
                />
                <img
                  className="w-[64px] sm:w-[120px] lg:w-[136px] h-[15px] md:h-[31px]"
                  alt="Mongo DB"
                  src={mongodb}
                />
              </div>

              <img
                className="w-[80px] md:w-[135px] h-[40px] md:h-[86px] pl-6 md:pl-0"
                alt="Icon AWS"
                src={aws}
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-10 lg:gap-y-[4.5rem]">
            <div className="flex flex-wrap gap-8 md:gap-16 justify-center">
              <img
                className="w-[50px] md:w-[100px] h-[50px] md:h-[100px]"
                alt="Adobe after effects"
                src={ae}
              />
              <img
                className="w-[50px] md:w-[100px] h-[50px] md:h-[100px]"
                alt="Adobe XD"
                src={xd}
              />
              <img
                className="w-[50px] md:w-[100px] h-[50px] md:h-[100px]"
                alt="Adobe photoshop"
                src={photoshop}
              />
            </div>

            <div className="flex gap-8 justify-center items-center flex-row">
              <div className="w-[86px] md:w-[173px] h-[45px] md:h-[91px]">
                <img
                  className="w-[25px] md:w-[50px] h-[40px] md:h-[81px] inline-block"
                  alt="figma logo"
                  src={figlogo}
                />
                <img
                  className="w-[54px] md:w-[105px] h-[21px] md:h-[42px] inline-block"
                  alt="Figma"
                  src={Figma}
                />
              </div>

              <img
                className="w-[85px] h-[60px] md:w-[190px] md:h-[120px]"
                alt="Mysql logo"
                src={mysql}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
