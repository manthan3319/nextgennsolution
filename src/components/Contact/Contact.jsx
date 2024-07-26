import React from "react";
import MainCommanDiv from "../functions/Funcion";
import { contactUs } from "../../images/images";
const Contact = () => {
  return (
    <div>
      <div>
        <MainCommanDiv
          title="Encourage innovation with"
          subtitle={["NEXTGENN", "SOLUTION"]}
          description1="We Are Help To Grow Your Business. Increase Your Revenue Average Using Our Smart Solutions."
          description2="Thinking the high quality grow your brand."
          imgSrc={contactUs}
        />
      </div>

      <div  className="lg:max-w-[1440px] m-auto px-[50px] ">
        <div className="title text-center md:mt-[130px] mt-[50px]">
          <h1 className="text-nextblue font-Poppins md:text-[50px] text-[20px] font-extrabold border-b-[1px] inline-block border-b-nextlightblue border-none">
            CONTACT US
          </h1>
        </div>

        <div className="flex md:flex-row justify-center md:gap-[180px] md:mt-[25px] flex-col gap-[10px] mt-[25px] mb-[100px]">
            <div className="text-center contact_box md:w-[33%]">
                <p className="text-[55px] text-nextlightblue"><i class="fa fa-map-marker" aria-hidden="true"></i></p>
                <h1 className="mt-[10px] font-Poppins text-[18px]">SURAT,GUJARAT</h1>
            </div>

            <div className="text-center contact_box md:w-[33%]">
                <p className="text-[55px] text-nextlightblue"><i class="fa fa-comments-o" aria-hidden="true"></i></p>
                <h1 className="mt-[10px] font-Poppins text-[18px]">+91 94092 94081</h1>
            </div>

            <div className="text-center contact_box md:w-[33%]">
                <p className="text-[55px] text-nextlightblue"><i class="fa fa-envelope-o" aria-hidden="true"></i></p>
                <h1 className="mt-[10px] font-Poppins text-[18px]">nextgennsolution@gmail.com</h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
