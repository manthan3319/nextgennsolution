import React from "react";
import Home from "../Home/Home";
import Home_abount from "../Home_abount/Home_abount";
import Home_Services from "../Home_Services/Home_Services";
import Home_solution from "../Home_solution/Home_solution";
import Home_project_mind from "../Home_project_mind/Home_project_mind";
import Home_Technology from "../Home_Technology/Home_Technology";
import { whatsapp } from "../../images/images";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <Home />
      <Home_abount />
      <Home_Services />
      <Home_Technology />
      <Home_solution />
      <Home_project_mind />
      <div className="whatshapp_img">
        <Link to="https://wa.me/919409294081"><img src={whatsapp} alt="whatshapp" className="w-[93px]" /></Link>
      </div>
    </div>
  );
};

export default Dashboard;
