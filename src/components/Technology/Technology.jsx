import React from 'react';
import MainCommanDiv from '../functions/Funcion';
import { technologyBanner } from '../../images/images';
import Home_Technology from '../Home_Technology/Home_Technology';
const Technology = () => {
  return (
    <div>
       <div>
        <MainCommanDiv
          title="Encourage innovation with"
          subtitle={["NEXTGENN", "SOLUTION"]}
          description1="Business issue solving is ingrained in our DNA. Frontend Army also possesses the necessary technical know-how to make this happen. Your software development project needs the necessary resources, and we have them. You have the idea. We have the resources."
        //   description2="Make your company wealthy by using CloseDigit's effective tool to assist users in finding solutions to create something truly wonderful."
          linkText="Contact Us"
          linkTo="/contact"
          imgSrc={technologyBanner}
        />
      </div>

      <div className='mb-[100px]'>
        <Home_Technology/>
      </div>
    </div>
  );
}

export default Technology;
