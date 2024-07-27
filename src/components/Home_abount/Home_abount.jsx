import React from 'react';
import { about_us, bulletcircle } from '../../images/images';

const Home_abount = () => {
  return (
    <div className='lg:max-w-[1440px] m-auto px-[50px] '>
            <div className='title text-center md:mt-[130px] mt-[50px]'>
                    <h1 className='text-nextblue font-Poppins md:text-[50px] text-[30px] font-extrabold border-b-[1px] inline-block border-b-nextlightblue'>ABOUT US</h1>
            </div>

            <div className='md:flex md:mt-[20px] items-center'>
                <div animation="zoomIn" className='md:w-[50%]'>
                    <img src={about_us} alt='img' className='w-[85%] m-auto'/> 
                </div>

                <div className='md:w-[50%]'>
                    <h1 className='md:text-[30px] mb-[15px] font-Poppins text-[20px]'><span className='text-nextlightblue'>Our mission</span> is to make your business better through technology.</h1>
                    <p className='text-[16px] font-Poppins mb-[15px]'>A team of Creative Minds designing best Apps and Website for the World. An effective tool for your customers to uncover solutions for creating something amazing.</p>
                    <p className='text-[16px] font-Poppins mb-[15px]'>Our team collaborates closely with the client to ensure that the product they are developing not only succeeds but also leaves a positive user experience by being simple to use and considering the needs of its consumers.</p>
                    <p className='text-[16px] font-Poppins mb-[15px]'>Every aspect of company, including business models, procedures, and consumer relationships, is being disrupted by digital. Our digital solutions are focused on giving you the technology to truly "With digital" as well as a transformation plan. We assist your company objectives and take care of all your business technologies, from site design and development to setting up and maintaining your brand's digital presence.</p>
                    <p className='flex text-[16px] font-Poppins items-center gap-[5px] mb-[5px]'><span><img src={bulletcircle}/></span>Deliver Exclusive design</p>
                    <p className='flex text-[16px] font-Poppins items-center gap-[5px] mb-[5px]'><span><img src={bulletcircle}/></span>Best development</p>
                    <p className='flex text-[16px] font-Poppins items-center gap-[5px]'><span><img src={bulletcircle}/></span>We Provide Awesome Services</p>
                </div>
            </div>
    </div>  
  );
}

export default Home_abount;
