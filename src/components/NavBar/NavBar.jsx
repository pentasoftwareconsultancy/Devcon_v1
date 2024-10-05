import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-[10%] fixed shadow-md top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-blue-500 shadow-lg" : " bg-white"
      }`}
    >
      <nav className="p-4">
        <div className="flex justify-between items-center px-4">

          <div className="font-bold size-10 ml-5">
            <img
              src={
                isScrolled
                  ? "/assets/images/White.png" 
                  : "/assets/images/black.png" 
              }
              alt="Logo"
            
            />
          </div>

    <div className=" pt-3">

          <ul
            className={`flex font-semibold gap-6  ${
              isScrolled ? "text-white" : "text-black"
            }`}
            >
            <Link to="/">
              <li className="hover:text-blue-400 duration-300">Home</li>
            </Link>

            <Link to="/careers">
              <li className="hover:text-blue-400 duration-300">Careers</li>
            </Link>

            <Link to="/services">
              <li className="hover:text-blue-400 duration-300">Services</li>
            </Link>

            <Link to="/about">
              <li className="hover:text-blue-400 duration-300">About</li>
            </Link>

            <Link to="/ushealthcare">
              <li className="hover:text-blue-400 duration-300">UsHealthcare</li>
            </Link>

            <Link to="/contact">
              <li className="hover:text-blue-400 duration-300">Contact</li>
            </Link>
          </ul>

                </div>
         
          <div>
            <ul className="flex gap-4 ps-0 mb-0 list-unstyled">
              <li>
                <a
                  href="https://wa.link/ay3n4b"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <img
                    className="size-8"
                    src="/assets/images/WhatsApp.svg"
                    alt="WhatsApp"
                    />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/adproduction_in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/adproduction.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/avranil-das/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
