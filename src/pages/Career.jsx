import React from "react";
import { IoSearchCircleOutline } from "react-icons/io5";
import { VscGitStashApply } from "react-icons/vsc";
import { PiMicrosoftTeamsLogoLight } from "react-icons/pi";
import Careerwith from "../../public/assets/images/careerwith1.jpg";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaPrayingHands } from "react-icons/fa";
import { RiBringToFront } from "react-icons/ri";

export const Career = () => {
  return (



    <>
      <div className="h-screen w-full overflow-hidden">
        <img src={Careerwith} className="h-full w-full " />
      </div>

      <div
        className="bg-cover bg-center relative top-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHRvZ2V0aGVyfGVufDB8fDB8fHww)",
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

        {/* Main content */}

        <div className="relative z-10 text-center py-11 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-500">
            Work <span className="text-orange-400">With Us</span>
          </h1>
          <p className="text-md text-balance sm:text-lg text-gray-200 mt-4 max-w-3xl mx-auto">
            Explore diverse roles matching your expertise and ambitions. Elevate
            your career with us, where innovation meets opportunity.
          </p>
        </div>

        {/* Cards Section */}

        <div className="relative z-10  max-w-5xl mx-auto md:grid-cols-3 gap-8 py-10 px-4 sm:px-6 lg:px-8">
          {/* Card 1 */}
          <div className="flex flex-col  items-center md:items-start text-center md:text-left space-y-4">
            <div className="text-blue-500 text-5xl ">
              {/* <i className="fas fa-search"><IoSearchCircleOutline /></i>{" "} */}
              <IoSearchCircleOutline />
              {/* Replace with appropriate icon library */}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Explore Opportunities
            </h3>
            <p className="text-gray-200 text-sm sm:text-base text-balance">
              Browse through our current job listings spanning diverse fields
              and positions, offering opportunities for growth and impact.Find
              the perfect match for your skills and aspirations to begin your
              journey with us
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="text-blue-500 text-5xl">
              <i className="fas fa-paper-plane"></i> <VscGitStashApply />
              {/* Replace with appropriate icon */}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Apply with Ease
            </h3>
            <p className="text-gray-200 text-sm sm:text-base text-balance">
              Submit your application effortlessly through our user-friendly
              platform, where you can showcase your qualifications and
              enthusiasm. for joining our team. We value your unique talents and
              are excited to learn more about how you can contribute to our
              mission.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="text-blue-500 text-5xl">
              <i className="fas fa-users"></i> <PiMicrosoftTeamsLogoLight />
              {/* Replace with appropriate icon */}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Join Our Team
            </h3>
            <p className="text-gray-200 text-sm sm:text-base text-balance">
              Take the next step in your career by becoming part of our vibrant
              community, where collaboration, innovation, and success
              thrive.Join us in shaping the future as we work together towards
              our shared goals and success.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-500">
            Career <span className="text-orange-400">Growth Opportunities</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join our team and unlock endless possibilities for professional
            development and career advancement. We believe in fostering talent
            and providing opportunities for growth within our dynamic
            organization.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-8">
          {/* Card 1: Connected */}
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-900 text-6xl mb-4">
              <i className="fas fa-users"></i>
              <MdConnectWithoutContact /> {/* Replace with your chosen icon */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Connected</h3>
            <p className="mt-2 text-gray-600">
              We come together wherever we are across time zones, regions,
              offices, and screens.
            </p>
          </div>

          {/* Card 2: Inclusive */}
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-900 text-6xl mb-4">
              <i className="fas fa-handshake"></i> <FaPrayingHands />
              {/* Replace with your chosen icon */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Inclusive</h3>
            <p className="mt-2 text-gray-600">
              Our teams reflect the rich diversity of our world, with equitable
              access to opportunity for everyone.
            </p>
          </div>

          {/* Card 3: Flexible */}
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-900 text-6xl  mb-4">
              <i className="fas fa-clock"></i>
              <RiBringToFront />
              {/* Replace with your chosen icon */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Flexible</h3>
            <p className="mt-2 text-gray-600">
              We believe in your freedom to work when and how you work best, to
              help us all thrive.
            </p>
          </div>
        </div>
      </div>
      {/* Intership Section */}


      <div className="h-full w-full  py-10">

        <h1 className="font-bold text-blue-500 text-center text-4xl p-1">
          Internship <span className="text-orange-400">Opportunity</span>
        </h1>

        <p className="text-balance text-center text-slate-600 font-medium p-5"> 
          Kickstart Your Career with Our Internship Program,<br/>And Explore Exciting
          Internship Opportunities and Gain Valuable Experience with Our
          Internship programmes.
        </p>


      </div>


    </>
  );
};

export default Career;
