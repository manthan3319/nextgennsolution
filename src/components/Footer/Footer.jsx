import React from "react";
import { logo } from "../../images/images";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer py-[60px]">
      <div className="lg:max-w-[1440px] m-auto px-[50px] ">
        <div className="flex justify-between flex-wrap">
          <div className="md:w-[30%] w-[100%]">
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

          <div className="about_us md:w-[20%] w-[100%] mt-[30px]">
            <h1 className="text-white font-Poppins font-medium text-[22px]">About Us</h1>

            <div className="mt-[30px] flex flex-col gap-y-[10px]">
              <Link className="font-Poppins text-white text-[18px]">About Us</Link>
              <Link className="font-Poppins text-white text-[18px]">Services</Link>
              <Link className="font-Poppins text-white text-[18px]">Technology</Link>
            </div>
          </div>

          <div className="OurServices md:w-[20%] w-[100%] mt-[30px]">
            <h1 className="text-white font-Poppins font-medium text-[22px]">Our Services</h1>

            <div className="mt-[30px] flex flex-col gap-y-[10px]">
              <Link className="font-Poppins text-white text-[18px]">UI/UX Design</Link>
              <Link className="font-Poppins text-white text-[18px]">Web/App Design</Link>
              <Link className="font-Poppins text-white text-[18px]">Web Development</Link>
              <Link className="font-Poppins text-white text-[18px]">App Development</Link>
              <Link className="font-Poppins text-white text-[18px]">IT Services</Link>
              <Link className="font-Poppins text-white text-[18px]">Consulting</Link>
            </div>
          </div>

          <div className="ContactInformation md:w-[20%] w-[100%] mt-[30px]">
            <h1 className="text-white font-Poppins font-medium text-[22px]">Contact Information</h1>
            <div className="mt-[30px] flex flex-col gap-y-[10px]">
                <Link className="font-Poppins text-white text-[18px] flex gap-[10px]"><span><i class="fa fa-phone" aria-hidden="true"></i></span> +91 94094 94081</Link>
                <Link className="font-Poppins text-white text-[18px] flex gap-[10px]"><span><i class="fa fa-envelope-o" aria-hidden="true"></i></span> nextgennsolution@gmail.com</Link>
                <Link className="font-Poppins text-white text-[18px] flex gap-[10px]"><span><i class="fa fa-map-marker" aria-hidden="true"></i></span> Surat Gujarat</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
