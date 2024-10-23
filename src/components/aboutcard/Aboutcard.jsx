import React from "react";
import { VscEye } from "react-icons/vsc"; // Vision icon
import { LuGoal } from "react-icons/lu"; // Mission icon
import { RiTeamLine } from "react-icons/ri"; // Values icon

const Card = ({ title, icon: Icon, content, highlight }) => {
  return (
    <div className="relative flex flex-col items-center rounded-full bg-slate-300 hover:bg-blue-500 transition-transform hover:-translate-y-1 hover:scale-110 h-80 w-80 sm:h-96 sm:w-96 p-5">
      <h1 className="text-slate-600 text-center font-bold text-xl sm:text-2xl">
        Our <span className="text-orange-400">{highlight}</span>
      </h1>
      <Icon className="text-white size-24 sm:size-32 mt-2" />
      <p className="text-slate-600 font-bold text-center hover:text-orange-400 p-5">
        {content}
      </p>
    </div>
  );
};

const Aboutcard = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-5 p-5 pt-20 pb-20">
      <Card
        title="Vision"
        icon={VscEye}
        content="Transforming the digital landscape through innovative software solutions that redefine the way individuals and organizations engage with technology, fostering efficiency, empowerment, and sustainable growth for the future is our vision."
        highlight="Vision"
      />
      <Card
        title="Mission"
        icon={LuGoal}
        content="Empowering businesses & individuals worldwide by delivering cutting-edge software solutions that enhance productivity, streamline processes, and drive digital transformation, while prioritizing security, reliability, and customer satisfaction as the cornerstone of our mission."
        highlight="Mission"
      />
      <Card
        title="Values"
        icon={RiTeamLine}
        content="Devcons Software Solutions Pvt. Ltd. is driven by a commitment to innovation, integrity, customer satisfaction, collaboration, and excellence while embracing adaptability and social responsibility as core values."
        highlight="Values"
      />
    </div>
  );
};

export default Aboutcard;
