import React from "react";
import { bloackchain, clone, gamedeveloper, ico, marketing, mlm, token, webdevelopment } from "../../images/images";

const services = [
  {
    id: 1,
    title: "Web/App Development",
    description: "Creating user-friendly websites and apps for optimal digital experiences and functionality.",
    image: webdevelopment,
  },
  {
    id: 1,
    title: "Game Development",
    description: "Transforming ideas into immersive games, delivering competitive edge in mobile gaming.",
    image: gamedeveloper,
  },
  {
    id: 1,
    title: "Blockchain Development",
    description: "Building decentralized applications and systems using blockchain technology for secure transactions.",
    image: bloackchain,
  },
  {
    id: 1,
    title: "Token & Coin Development",
    description: "Revolutionary blockchain currency empowering global transactions with unparalleled security and efficiency.",
    image: token,
  },
  {
    id: 1,
    title: "Digital Marketing",
    description: "Top core team professionals drive success with effective digital marketing strategy and quality SEO packages.",
    image: marketing,
  },
  {
    id: 1,
    title: "ICO Marketing",
    description: "Drive ICO success with targeted marketing strategies tailored to maximize visibility and investor engagement.",
    image: ico,
  },
  {
    id: 1,
    title: "MLM Development",
    description: "Creating a network-based sales model involving recruitment and layered commissions system.",
    image: mlm,
  },
  {
    id: 1,
    title: "Clone",
    description: "Customized, pre-built project solutions for efficient development needs. Tailored services available.",
    image: clone,
  },
];

const Home_Services = () => {
  return (
    <div className="lg:max-w-[1440px] m-auto px-[50px] ">
      <div className="title text-center md:mt-[130px] mt-[50px]">
        <h1 className="text-nextblue font-Poppins md:text-[50px] text-[20px] font-extrabold border-b-[1px] inline-block border-b-nextlightblue border-none">
          We Provide Awesome Services
        </h1>
      </div>

      <div className="flex flex-wrap justify-center md:mt-[100px] mt-[30px]">
        {services.map((service) => (
          <div key={service.id} className="md:w-[25%] w-[100%] text-center mb-[50px] px-[20px]">
            <div className="mb-[15px]">
              <img src={service.image} className="w-[100px] m-auto" alt={service.title} />
            </div>
            <div>
              <h1 className="text-[20px] font-Poppins font-bold">{service.title}</h1>
              <p className="mt-[10px] font-Poppins text-nextgrey text-[16px]">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home_Services;
