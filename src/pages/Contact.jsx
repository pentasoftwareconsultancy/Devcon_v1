import React from "react";
import backgrounVideo from "../assets/contactus.mp4";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const center = [18.596607664817395, 73.80479457271767]; // Set the initial center of the map (lat, lng)

function Contact() {
  return (
    <>
      {/* Video Background Section */}

      <div className="relative w-full h-2/4 pt-14 py-5">
        {/* Applied properties to video to autoplay and loop */}

        <video
          className="absolute w-full h-full rounded-lg object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src={backgrounVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Text Section */}

        <div className="relative flex flex-col justify-center p-10  align-middle  h-fullz-10 bg-opacity-50 pt-20 mt-10 ">
          <h1 className="font-extrabold text-4xl text-center text-blue-700 p-6">
            Contact <span className="text-orange-400">With US</span> 
          </h1>

          <p className=" text-center text-2xl text-slate-600 font-semibold top-0 hover:text-orange-400">
            Have questions or need assistance? <br />
            Reach out to our team for any inquiries or support.
            <br /> We're here to help you with all your service needs,
            <br /> from web development to digital marketing.
          </p>
        </div>
      </div>

      <div className="w-full pt-10 flex flex-col lg:flex-row ">
        <div className="lg:w-1/2 h-96 w-2/4 ml-28">
          <h1 className="text-xl font-bold mb-4 pt-10 ml-20">
            Keep in Touch With us
          </h1>

          <ul className="space-y-6  p-5">
            <li className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600">
                <CiLocationOn className="text-2xl text-white" />
              </div>
              <span className="w-56 text-wrap">
                Office No. 4-B, Second Floor, Ganesham Commercial -A, Survey No.
                21/18-21/24, BRTS Road, Pimple Saudagar, Pune- 411027
              </span>
            </li>

            <li className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600">
                <FiPhoneCall className="text-2xl hover:b text-white" />
              </div>
              <span>+91 9112100663</span>
            </li>

            <li className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600">
                <MdOutlineMailOutline className="text-2xl text-white" />
              </div>
              <span>hr@devconsoftware.com</span>
            </li>
          </ul>
        </div>

        {/* Form Section */}

        <div className="lg:w-1/2 p-1 ">
          <h1 className="text-2xl w-full pl-10 font-bold pt-5 m-4">
            Get In touch with us
          </h1>

          <div className="lg:w-1/2 pl-10">
            <form className="space-y-4  ">
              {/* Name */}
              <div>
                {/* <label className='block text-white text-sm font-semibold mb-2'>
                Name
              </label> */}
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Email */}
              <div>
                {/* <label className='block text-white text-sm font-semibold mb-2'>
                Email
              </label> */}
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Subject */}
              <div>
                {/* <label className='block text-white text-sm font-semibold mb-2'>
                Subject
              </label> */}
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Message */}
              <div>
                {/* <label className='block text-white text-sm font-semibold mb-2'>
                Message
              </label> */}
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none  focus:ring-orange-500"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}

      <div
        className="sticky pt-10 mb-10"
        style={{ height: "60vh", width: "100%" }}
      >
        <MapContainer
          className="border rounded-md focus:outline-none  focus:ring-orange-500 p-1 mt-2"
          center={center}
          zoom={50}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            <Popup>
              <>Devcons Software Solution Pvt, Ltd</>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default Contact;
