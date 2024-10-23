import React from "react";
// import Card from "../components/card/Card";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import deloitee from "../../public/assets/images/deloitee.png";
import tcs from "../../public/assets/images/tcs.png";
import contrywide from "../../public/assets/images/contrywide.png";
import Google from "../../public/assets/images/Google.png";
import oracle from "../../public/assets/images/oracle.png";
import motorola from "../../public/assets/images/motorola.png";
import HSBC from "../../public/assets/images/HSBC.png";
import Accesshealthacer from "../../public/assets/images/Accesshealthacer.png";
import MentorGraphics from "../../public/assets/images/Mentor Graphics.png";
import intrergraph from "../../public/assets/images/intrergraph.png";
import { VscEye } from "react-icons/vsc";
import { LuGoal } from "react-icons/lu";
import { RiTeamLine } from "react-icons/ri";
import Aboutcard from "../components/aboutcard/Aboutcard";

const Home = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
  ];

  // Home.js

  return (
    <>
      {/* This is hero section */}

      <div className="bg-white flex flex-col md:flex-row items-center justify-center h-screen px-4">
        <div className="flex-1 text-center md:text-left md:mr-8 flex flex-col justify-center ml-36">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-blue-600">Devcons</span> Software Solutions:
            Your Tech Partner
          </h1>
          <p className="text-lg mb-8">
            At Devcons Software Solutions, we create tech solutions that drive
            success. Let’s turn your ideas into impactful digital experiences.
          </p>
          <div className="flex justify-center md:justify-start mb-4">
            <Link to="/services">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md mr-4 hover:bg-blue-700">
                <a href="">Explore Services</a>
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-[#FF8D21] text-white px-6 py-3 rounded-md hover:bg-[#FF7B00]">
                Let's Connect
              </button>
            </Link>
          </div>
          <div className="flex justify-center md:justify-start">
            <div className="flex flex-col items-center mx-4">
              <h2 className="text-2xl font-bold">Our Team</h2>
              <p className="text-4xl text-blue-600">25+</p>
            </div>
            <div className="flex flex-col items-center mx-4">
              <h2 className="text-2xl font-bold">Check Reviews</h2>
              <p className="text-4xl text-blue-600">150+</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
          <img
            src="/assets/images/banner_img.png"
            alt="Your Illustration"
            className="max-w-xs md:max-w-md lg:max-w-lg rounded-xl  "
          />
        </div>
      </div>
      {/* Hero Section Ended */}

      {/* <h1 className="font-bold text-4xl text-center p-10 ">Features</h1> */}

      <section className="flex flex-col md:flex-row items-center  py-12 mb-10 px-6 md:px-12">
        {/* image left side */}
        <div className="md:w-1/2 mb-8 md:mb-0 -ml-1 p-10">
          <img
            src="/src/assets/whoweare.jpg"
            className="w-full h-auto rounded hover:shadow-orange-400 shadow-md transition-transform  hover:-translate-y-1 hover:scale-110 delay-150 "
          ></img>
        </div>

        {/*right side content */}

        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We Offer Wide Range of Features
          </h2>

          <p className="text-gray-600 font-medium mb-6">
            Explore our user-friendly interface, responsive design, fast
            performance, and secure platform. Offering tailored solutions for
            your business needs
          </p>

          <div className="space-y-9">
            {/* Development */}
            <div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-bold hover:bg-orange-300 p-1">
                  Development
                </span>
                <span className="text-gray-700">85%</span>
              </div>

              <div className="w-full bg-gray-300 rounded-full h-2">
                {/* <span className="border-solid border-4 border-red-500 right-96 ml-96 h-5 w-5 rounded-full transform -translate-x-1/2 absolute "></span> */}
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-bold hover:bg-orange-300 p-1">
                  Custom Solutions
                </span>
                <span className="text-gray-700">65%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>

            {/* Marketing */}
            <div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-bold hover:bg-orange-300 p-1">
                  SEO Optimization
                </span>
                <span className="text-gray-700">90%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            {/* Branding */}
            <div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-bold hover:bg-orange-300 p-1">
                  Scalability
                </span>
                <span className="text-gray-700">75%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            {/* Fast Deployment */}
            <div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-bold hover:bg-orange-300 p-1">
                  Fast Deployment
                </span>
                <span className="text-gray-700">85%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            {/* Ongoing support */}

            <div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-bold hover:bg-orange-300 p-1">
                  Ongoing Support
                </span>
                <span className="text-gray-700">90%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Our Clients section started */}

      <div className="mt-20 mb-24">
        <h2 className="text-4xl pb-10 flex justify-center font-extrabold gap-3 text-blue-500">
          {" "}
          Our
          <span className="text-orange-400">Clients</span>
        </h2>
        <Slider {...settings}>
          <div className=" p-10 sm:p-6 lg:p-10">
            <h3 className=" text-slate-600 bg-orange-200 h-28 w-52 flex justify-center rounded-md  ">
              <img src={deloitee} />
            </h3>
          </div>

          <div className=" p-10 sm:p-6 lg:p-10">
            <h3 className="text-slate-600 bg-orange-200 h-28 w-52 flex justify-center rounded-md ">
              <img src={tcs} />
            </h3>
          </div>

          <div className=" p-10 sm:p-6 lg:p-10">
            <h3 className="text-slate-600 bg-orange-200 h-28 w-52 flex justify-center rounded-md ">
              <img src={contrywide} />
            </h3>
          </div>

          <div className=" p-10 sm:p-6 lg:p-10">
            <h3 className="text-slate-600 bg-orange-200 h-28 w-52 flex justify-center rounded-md ">
              <img src={oracle} />
            </h3>
          </div>

          <div className=" p-10 sm:p-6 lg:p-10">
            <h3 className="text-slate-600 bg-orange-200 h-28 w-52 flex justify-center rounded-md ">
              <img src={motorola} />
            </h3>
          </div>

          <div className=" p-10 sm:p-6 lg:p-10">
            <h3 className="text-slate-600 bg-orange-200 h-28 w-52 flex justify-center rounded-md ">
              <img src={HSBC} />
            </h3>
          </div>
          <div className=" p-10 sm:p-6 lg:p-10">
            <h3 className="text-slate-600 bg-orange-200 h-28 w-52 flex justify-center rounded-md ">
              <img src={Accesshealthacer} />
            </h3>
          </div>

          <div className=" p-10 sm:p-6 lg:p-10">
            <h3 className="text-slate-600 bg-orange-200 h-28 w-52 flex justify-center rounded-md ">
              <img src={intrergraph} />
            </h3>
          </div>

          <div className=" p-10 sm:p-6 lg:p-10">
            <h3 className="text-slate-600 bg-orange-200 h-28 w-52 flex justify-center rounded-md ">
              <img src={Google} />
            </h3>
          </div>

          <div className=" p-10 sm:p-6 lg:p-10">
            <h3 className="text-slate-600 bg-orange-200 h-28 w-52 flex justify-center rounded-md ">
              <img src={MentorGraphics} />
            </h3>
          </div>
        </Slider>
      </div>
         


         {/* fourth section for our vision and mission */}

      <Aboutcard />


    </>
  );
};

export default Home;
