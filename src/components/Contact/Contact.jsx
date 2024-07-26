import React from 'react';
import MainCommanDiv from '../functions/Funcion';
import { contactUs } from '../../images/images';
const Contact = () => {
  return (
    <div>
       <div>
        <MainCommanDiv
          title="Encourage innovation with"
          subtitle={["NEXTGENN", "SOLUTION"]}
          description1="We Are Help To Grow Your Business. Increase Your Revenue Average Using Our Smart Solutions."
          description2="Thinking the high quality grow your brand."
        //   linkText="Contact Us"
        //   linkTo="/contact"
          imgSrc={contactUs}
        />
      </div>
    </div>
  );
}

export default Contact;
