import React from 'react';
import MainCommanDiv from '../functions/Funcion';
import { servicebanner } from '../../images/images';
import Home_Services from '../Home_Services/Home_Services';
import Home_Technology from '../Home_Technology/Home_Technology';
const Services = () => {
  return (
    <div>
      <div>
        <MainCommanDiv
          title="Encourage innovation with"
          subtitle={["NEXTGENN", "SOLUTION"]}
          description1="A group of creative designers and software developers who work together to provide the best work possible and assist clients in turning their concepts into successful realities."
          description2="Make your company wealthy by using CloseDigit's effective tool to assist users in finding solutions to create something truly wonderful."
          linkText="Contact Us"
          linkTo="/contact"
          imgSrc={servicebanner}
        />
      </div>

      <div>
        <Home_Services/>
      </div>

      <div className="mb-[100px]">
        <Home_Technology/>
      </div>
    </div>
  );
}

export default Services;
