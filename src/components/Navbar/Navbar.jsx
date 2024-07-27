import React from "react";
import { logo } from "../../images/images";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
const Navbar = () => {
  const NavbarItems = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/about",
      name: "About Us",
    },
    {
      id: 3,
      path: "/services",
      name: "Services",
    },
    {
      id: 4,
      path: "/technology",
      name: "Technology",
    },
  ];
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="lg:max-w-[1440px] m-auto px-[50px] py-[10px]">
        <div className="md:block hidden">
          <div className="flex justify-between items-center ">
            <div>
              <Link to="/">
                <img src={logo} alt="logo" className="w-[180px]" />
              </Link>
            </div>
            <div>
              <ul className="flex gap-[80px]">
                {NavbarItems.map((item) => (
                  <li key={item.id} className="font-Poppins font-semibold">
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Link
                to="/contact"
                className="bg-nextblue py-[10px] px-[15px] font-Poppins text-white rounded-[5px] font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden block fixed w-[100%] bg-white top-0 p-[18px] border-b-[2px] mb-[5px]">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="logo" className="w-[140px]" />
          </div>
          <div>
            <button
              onClick={toggleDrawer}
              className="text-[29px] text-nextblue"
            >
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="bla bla bla"
        >
          <div>
            <div className="border-b-[1px] pb-[10px]"> 
              <img src={logo} alt="logo" className="w-[140px] m-auto" />
            </div>
            <div className="p-[15px] py-[25px]">
              <ul className="flex flex-col gap-[10px]">
                {NavbarItems.map((item) => (
                  <li
                    key={item.id}
                    className="font-Poppins font-semibold text-black"
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-[20px] ">
              <Link
                to="/contact"
                className="bg-nextlightblue py-[10px] px-[15px] font-Poppins text-black rounded-[5px] font-semibold rounded-l-[0px]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
