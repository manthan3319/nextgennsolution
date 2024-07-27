import React from "react";
import { logo } from "../../images/images";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="lg:max-w-[1440px] m-auto px-[50px] py-[60px] ">
        <div className="flex justify-between flex-wrap md:items-start ">
          <div className="md:w-[30%] w-[100%] lg:w-[50%] xl:w-[30%]">
            <img src={logo} className="w-[200px]" />
            <p className="mt-[18px] text-white font-Poppins text-[18px]">
              A group of creative designers and software developers who work
              together to provide the best work possible and assist clients in
              turning their concepts into successful realities.
            </p>

            <div className="flex gap-[10px] mt-[25px]">
              <Link className="text-white text-[30px]">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </Link>
              <Link className="text-white text-[30px]">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </Link>
            </div>
          </div>

          <div className="about_us md:w-[20%] w-[100%] mt-[30px] lg:w-[50%] xl:w-[20%] ">
            <h1 className="text-white font-Poppins font-medium text-[22px]">
              About Us
            </h1>

            <div className="mt-[30px] flex flex-col gap-y-[10px]">
              <Link className="font-Poppins text-white text-[18px]">
                About Us
              </Link>
              <Link className="font-Poppins text-white text-[18px]">
                Services
              </Link>
              <Link className="font-Poppins text-white text-[18px]">
                Technology
              </Link>
            </div>
          </div>

          <div className="OurServices md:w-[20%] w-[100%] mt-[30px] lg:w-[50%] xl:w-[20%]">
            <h1 className="text-white font-Poppins font-medium text-[22px]">
              Our Services
            </h1>

            <div className="mt-[30px] flex flex-col gap-y-[10px]">
              <Link className="font-Poppins text-white text-[18px]">
                UI/UX Design
              </Link>
              <Link className="font-Poppins text-white text-[18px]">
                Web/App Design
              </Link>
              <Link className="font-Poppins text-white text-[18px]">
                Web Development
              </Link>
              <Link className="font-Poppins text-white text-[18px]">
                App Development
              </Link>
              <Link className="font-Poppins text-white text-[18px]">
                IT Services
              </Link>
              <Link className="font-Poppins text-white text-[18px]">
                Consulting
              </Link>
            </div>
          </div>

          <div className="ContactInformation md:w-[20%] w-[100%] mt-[30px] lg:w-[50%] xl:w-[20%]">
            <h1 className="text-white font-Poppins font-medium text-[20px]">
              Contact Information
            </h1>
            <div className="mt-[30px] flex flex-col gap-y-[10px]">
              <Link className="font-Poppins text-white text-[18px] flex 2xl:gap-[10px] 2xl:flex-row  xl:flex-col items-center xl:gap-[0] gap-[10px] flex-col lg:flex-row">
                <span>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </span>{" "}
                +91 94094 94081
              </Link>
              <Link className="font-Poppins text-white text-[18px] flex 2xl:gap-[10px] 2xl:flex-row  xl:flex-col  items-center xl:gap-[0] gap-[10px] flex-col lg:flex-row">
                <span>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </span>{" "}
                nextgennsolution@gmail.com
              </Link>
              <Link className="font-Poppins text-white text-[18px] flex 2xl:gap-[10px] 2xl:flex-row  xl:flex-col  items-center xl:gap-[0] gap-[10px] flex-col lg:flex-row">
                <span>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </span>{" "}
                Surat Gujarat
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_copy_right text-center py-[10px]">
        <p className="font-Poppins text-white md:text-[19px] text-[15px]">
          Copyright @2020{" "}
          <Link
            to="https://www.nextgennsolution.in/"
            className="border-b-[1px]"
          >
            NextgennSolution
          </Link>{" "}
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
