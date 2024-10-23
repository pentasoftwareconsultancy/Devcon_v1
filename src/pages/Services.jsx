import React from "react";
import Card from "../components/card/Card";

const Services = () => {
  return (
    <>
      <div className="h-screen w-full  py-20 pb-4">
        {/* <h1 className="font-bold md:text-3xl translate-x-1/2 translate-y-1/2 mr-32 mb-6 md:mb-8 text-red-200 ">Our Services</h1> */}

        <div className="h-1/2 md: bg-cover bg-center flex items-center justify-center">
          {/* <img 
              src="/public/assets/images/servicesmain.jpg" 
              alt="" /> */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-4 md:p-6 text-center max-w-[90%] md:max-w-[60%]">
              <h2 className="text-2xl text-blue-500 md:text-4xl font-bold">
                Professional <span className="text-orange-400"> Services</span>
              </h2>

              <p className="mt-3 md:mt-4 md:text-lg text-2xl font-medium text-slate-500">
                We offer a range of professional services including web
                development, graphic design, Android development, and digital
                marketing. Our team delivers tailored solutions that help
                businesses grow, leveraging the latest technologies and design
                trends to ensure your digital success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Card />
    </>
  );
};

export default Services;
