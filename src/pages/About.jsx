import React from "react";
// import backgroundImage from "../../assets/images/about us.jpg"
import Image1 from "../../public/assets/images/image1.svg";
import Image2 from "../../public/assets/images/image2.svg";
import Image4 from "../../public/assets/images/image4.jpg";
import aboutus4 from "../../public/assets/images/aboutus4.png";
import { VscEye } from "react-icons/vsc";
import { LuGoal } from "react-icons/lu";
import { RiTeamLine } from "react-icons/ri";
import Aboutcard from "../components/aboutcard/Aboutcard";

function About() {
  return (
    <>
      {/* hero sction  */}
      <section className=" relative h-96  py-5  ">
        <img
          className="absolute w-full h-full rounded-lg object-cover opacity-25 z-0 "
          src={aboutus4}
        />

        <div className="relative flex flex-col top-32 justify-center p-10 align-middle h-full z-10 bg-opacity-20 text-black py-10 px-6 md:px-12 text-center">
          <h2 className="text-4xl font-extrabold  text-blue-700 -mt-48">
            About <span className="text-orange-400">Us</span>
          </h2>

          <p className="text-2xl font-bold p-5 text-slate-600 hover:text-orange-400 max-w-3xl mx-auto md:mt-4 md:text-lg">
            We are a creative and innovative company focused on delivering the
            best digital experiences. Our team is dedicated to creating
            solutions that make a difference and help businesses grow.
          </p>
        </div>
      </section>

      {/* Second secrtion of about us  */}

      <div className=" h-full w-full placeholder: pt-1  px-10 flex">
        <div className=" h-full pt-20 mt-5 p-1 ">
          <p className="leading-8 tracking-wide font-semibold text-balance text-center text-slate-500 hover:text-blue-500 text-lg md:mt-4 md:text-lg">
            Devcons Software Solutions Pvt Ltd is a software company that
            specializes in providing custom software development and IT
            consulting services. Based in India, the company has a team of
            skilled software
            <br /> developers, engineers, and designers who work together to
            create high-quality software products and
            <br /> services for clients .
          </p>

          <br />
          <p className="leading-8 tracking-wide font-semibold text-balance text-center text-slate-500 hover:text-blue-500 text-lg md:mt-4 md:text-lg">
            {" "}
            From sleek mobile apps and intuitive web interfaces to robust
            enterprise applications and data-driven business intelligence
            platforms, Devcons' portfolio showcases their versatility and
            commitment to exceeding client expectations. Devcons goes beyond
            just code; they understand the business landscape and build
            strategic partnerships with clients, offering ongoing support.
          </p>
        </div>

        <div className="container w-full -ml-10 py-5 pt-28 mr-10">
          <div className="grid grid-cols-2 gap-4">
            {/* Large Image on the Left */}
            <img
              src={Image4}
              alt="Large Image"
              className="rounded-lg object-cover h-full shadow-lg"
            />

            {/* Right Side - Two Stacked Images */}

            <div className="flex flex-col space-y-4">
              <img
                src={Image2}
                alt="Top Right Image"
                className="rounded-lg object-cover h-1/2 shadow-lg"
              />
              <img
                src={Image1}
                alt="Bottom Right Image"
                className="rounded-lg object-cover h-1/2 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section third for our team */}

      <h1 className="text-4xl font-bold pt-10 p-5 text-center text-blue-500">
        Our <span className="text-orange-400">Team</span>
      </h1>
      <p className="absolute text-center text-balance leading-10 font-semibold hover:text-slate-500 ">
        At Devcon's Software Solutions pvt. Ltd., we believe in the power of
        collaboration and the strength of our team. Each member brings a unique
        set of skills, expertise, and personality to our organization,
        contributing to our collective success.
      </p>

      <div className="h-full w-full  flex justify-between align-middle p-10 pt-28">
        <div className="w-80 h-96 rounded-lg border bg-slate-300 shadow-lg ">
          {/* insert image here */}
          <img
            src={Image2}
            alt="Top Right Image"
            className="rounded-lg object-cover h-72 shadow-lg "
          />
          <hr className="bg-slate-500  p-1" />
        </div>

        <div className="w-80 h-96 rounded-lg border bg-slate-300 shadow-lg ">
          {/* insert image here */}
          <img
            src={Image2}
            alt="Top Right Image"
            className="rounded-lg object-cover h-72 shadow-lg "
          />
          <hr className="bg-slate-500  p-1" />
        </div>

        <div className="w-80 h-96 rounded-lg border bg-slate-300 shadow-lg ">
          {/* insert image here */}
          <img
            src={Image2}
            alt="Top Right Image"
            className="rounded-lg object-cover h-72 shadow-lg "
          />
          <hr className="bg-slate-500  p-1" />
        </div>

        <div className="w-80 h-96 rounded-lg border bg-slate-300 shadow-lg ">
          {/* insert image here */}
          <img
            src={Image2}
            alt="Top Right Image"
            className="rounded-lg object-cover h-72 shadow-lg "
          />
          <hr className="bg-slate-500  p-1" />
        </div>
      </div>

      {/* fourth section for our vision and mission */}
      <Aboutcard />
    </>
  );
}

export default About;
