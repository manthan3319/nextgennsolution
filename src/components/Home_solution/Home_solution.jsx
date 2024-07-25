import React from "react";
import { creating_services } from "../../images/images";

const Home_solution = () => {
  const services = [
    "Design",
    "Development",
    "Data Handling",
    "Management",
    "Consulting",
    "Customization",
    "Managed IT Service",
    "Discovery & Strategy",
  ];

  return (
    <div className="lg:max-w-[1440px] m-auto px-[50px] ">
      <div className="title text-center md:mt-[130px] mt-[50px]">
        <h1 className="text-nextblue font-Poppins md:text-[50px] font-extrabold text-[25px] border-none border-b-[1px] inline-block border-b-nextlightblue">
          We Provide Awesome Services
        </h1>
      </div>

      <div className="flex md:mt-[80px] items-center mt-[20px] md:flex-row flex-col-reverse">
        <div className="md:w-[50%]">
          <h1 className="md:text-[25px] mb-[15px] font-Poppins">
            <span className="text-nextlightblue">Our passion</span> to work hard
            and deliver excellent results. It could solve your customers and
            develop innovation.
          </h1>

          <div className="flex flex-wrap mt-[10px]">
            {services.map((service, index) => (
              <div className="solution_features md:w-[50%] w-[100%] bg-nextgrey mb-[10px] md:mb-[0px]  md:bg-white text-white md:text-black">
                <p
                  key={index}
                  className=" py-[11px] border-l-[3px] rounded-r-[50px] border-l-nextblue md:mb-[15px] pl-[5px] font-Poppins "
                >
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-[50%]">
          <img
            src={creating_services}
            className="w-[100%]"
            alt="Creating Services"
          />
        </div>
      </div>
    </div>
  );
};

export default Home_solution;
