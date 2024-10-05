import React from "react";

// Home.js
const Home = () => {
  return (
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
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md mr-4 hover:bg-blue-700">
            Explore Services
          </button>
          <button className="bg-[#FF8D21] text-white px-6 py-3 rounded-md hover:bg-[#FF7B00]">
            Let's Connect
          </button>
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
        {/* Add your image here */}
        <img
          src="/assets/images/banner_img.png" // Replace with your actual image URL
          alt="Your Illustration"
          className="max-w-xs md:max-w-md lg:max-w-lg rounded-lg"
        />
      </div>
    </div>
  );
};

export default Home;
