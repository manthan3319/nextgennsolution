import React from "react";
import MainCommanDiv from "../functions/Funcion";
import { aboutus1 } from "../../images/images";
import Home_abount from "../Home_abount/Home_abount";
import Home_solution from "../Home_solution/Home_solution";

const Abount_Us = () => {
  return (
    <div >
      <div>
        <MainCommanDiv
          title="Encourage innovation with"
          subtitle={["NEXTGENN", "SOLUTION"]}
          description1="A group of creative designers and software developers who work together to provide the best work possible and assist clients in turning their concepts into successful realities."
          description2="Make your company wealthy by using CloseDigit's effective tool to assist users in finding solutions to create something truly wonderful."
          linkText="Contact Us"
          linkTo="/contact"
          imgSrc={aboutus1}
        />
      </div>
      <div>
        <Home_abount/>
      </div>

      <div className="mb-[100px]">
        <Home_solution/>
      </div>
    </div>
  );
};

export default Abount_Us;
