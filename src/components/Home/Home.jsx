import React from 'react';
import { homebenner } from '../../images/images';
import { Link } from 'react-router-dom';
import { fadeIn } from 'react-animations'
const Home = () => {
  return (
    <div className='lg:max-w-[1440px] m-auto px-[50px] md:mt-[0px] mt-[100px]'>
        <div className='md:flex md:flex-row md:items-center justify-between flex flex-col-reverse mt-[40px]'>
            <div className='md:w-[40%] mt-[40px]'>
                <h3 className='md:text-[30px] font-Poppins font-medium text-[20px]'>Encourage innovation with</h3>
                <h1 className='md:text-[45px] font-Poppins font-bold text-[40px] flex md:flex-row flex-col gap-y-[1px] '><span className='md:mr-[15px] text-nextblue'>NEXTGENN</span><span className='text-nextlightblue'>SOLUTION</span></h1>
                <p className='md:text-[18px] font-Poppins'>A group of creative designers and software developers who work together to provide the best work possible and assist clients in turning their concepts into successful realities.</p>
               
                <div className='md:mt-[20px] mt-[10px]'>
                    <Link className='bg-nextblue py-[10px] px-[35px] inline-block rounded-[15px] font-Poppins text-white'>Get in touch </Link>
                </div>
            </div>

            <div className='md:w-[50%]' fadeIn>
                <img src={homebenner} alt='img' className='w-[100%]'/>
              
            </div>
        </div>
    </div>
  );
}

export default Home;
