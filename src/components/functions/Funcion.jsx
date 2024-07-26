// MainCommanDiv.js
import React from "react";
import { Link } from "react-router-dom";

const MainCommanDiv = ({
  title,
  subtitle,
  description1,
  description2,
  linkText,
  linkTo,
  imgSrc,
}) => {
  return (
    <div className="lg:max-w-[1440px] m-auto px-[50px]">
      <div className="md:flex md:flex-row md:items-center justify-between flex flex-col-reverse mt-[40px]">
        <div className="md:w-[40%] mt-[40px]">
          <h3 className="md:text-[30px] font-Poppins font-medium text-[20px]">
            {title}
          </h3>
          <h1 className="md:text-[45px] font-Poppins font-bold text-[40px] flex md:flex-row flex-col gap-y-[1px] ">
            <span className="md:mr-[15px] text-nextblue">{subtitle[0]}</span>
            <span className="text-nextlightblue">{subtitle[1]}</span>
          </h1>
          <p className="md:text-[18px] font-Poppins">{description1}</p>
          {description2 && (
            <p className="md:text-[18px] font-Poppins mt-[20px]">
              {description2}
            </p>
          )}
          <div className={`md:mt-[20px] mt-[10px] ${linkText ? "block" : "hidden"}`}>
            <Link
              to={linkTo}
              className="bg-nextblue py-[10px] px-[35px] inline-block rounded-[15px] font-Poppins text-white"
            >
              {linkText}
            </Link>
          </div>
        </div>
        <div className="md:w-[50%]">
          <img src={imgSrc} alt="img" className="w-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default MainCommanDiv;
