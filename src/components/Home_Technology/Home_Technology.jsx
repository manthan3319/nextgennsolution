import React from "react";
import {
  angular,
  backend,
  bootstrap,
  css,
  Ftechnology,
  html,
  js,
  laravel,
  nextjs,
  node,
  php,
  react,
  tailwind,
  wordpress,
} from "../../images/images";

const Home_Technology = () => {
  const technologies = [
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: bootstrap, alt: "Bootstrap" },
    { src: tailwind, alt: "Tailwind" },
    { src: js, alt: "JavaScript" },
    { src: react, alt: "React" },
    { src: angular, alt: "Angular" },
    { src: nextjs, alt: "Next.js" },
  ];

  const technologies2 = [
    { src: node, alt: "NODE" },
    { src: php, alt: "php" },
    { src: wordpress, alt: "wordpress" },
    { src: laravel, alt: "laravel" }
  ];

  return (
    <div className="lg:max-w-[1440px] m-auto px-[50px]">
      <div className="title text-center md:mt-[130px] mt-[50px]">
        <h1 className="text-nextblue font-Poppins md:text-[50px] text-[30px] font-extrabold border-b-[1px] inline-block border-b-nextlightblue">
          OUR TECHNOLOGY
        </h1>
      </div>

      <div className="flex md:flex-row md:mt-[70px] items-center flex-col mt-[35px]">
        <div className="md:w-[50%]">
          <img src={Ftechnology} className="md:w-[80%] w-[100%]" alt="Technology Image" />
        </div>

        <div className="md:w-[50%] flex flex-wrap gap-[50px] justify-center items-center md:mt-[0px] mt-[25px]">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="md:w-[15%] min-h-[100px] border-[1px] p-[10px] m-auto flex w-[41%] sm:w-[33%]"
            >
              <img src={tech.src} alt={tech.alt} className="md:w-[100px] m-auto w-[100%] sm:w-[100px]" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex md:flex-row md:mt-[70px] items-center mt-[80px] flex-col-reverse">
        <div className="md:w-[50%] flex flex-wrap gap-[50px] justify-center items-center md:mt-[0px] mt-[50px]">
          {technologies2.map((tech, index) => (
             <div
             key={index}
             className="md:w-[15%] min-h-[100px] border-[1px] p-[10px] m-auto flex w-[41%] sm:w-[33%]"
           >
             <img src={tech.src} alt={tech.alt} className="md:w-[100px] m-auto w-[100%] sm:w-[100px]" />
           </div>
          ))}
        </div>
        <div className="md:w-[50%]">
          <img src={backend} className="w-[80%] m-auto" alt="Technology Image" />
        </div>
      </div>
    </div>
  );
};

export default Home_Technology;
