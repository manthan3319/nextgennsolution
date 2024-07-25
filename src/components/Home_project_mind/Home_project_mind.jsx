import React from "react";
import { Link } from "react-router-dom";

const Home_project_mind = () => {
  return (
    <div className="mind_project md:mt-[100px]">
      <div className="bg-black bg-opacity-50 p-10 w-[100%]">
        <div className="text-center py-[50px]">
          <div className="md:w-[60%] m-auto">
            <h1 className="font-Poppins md:text-[35px] text-white font-bold text-[30px]">
              Have a project in mind?
            </h1>
            <p className="mt-[15px] text-white font-Poppins font-light md:w-[70%] m-auto text-[17px] w-[100%]">
              To choose your next move, stay current with our in-depth topics,
              continuing trends, tool and technology comparisons, and newest
              concepts. Our advisers on innovation and change identify the best
              approach for your business model.
            </p>
            <div className="md:mt-[20px] mt-[30px]">
              <Link className="bg-nextblue py-[10px] px-[35px] inline-block rounded-[15px] font-Poppins text-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_project_mind;
