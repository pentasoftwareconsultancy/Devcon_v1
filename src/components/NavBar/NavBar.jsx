import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      className={`w-full h-[10%] fixed shadow-md top-0 z-50 lg:px-32 transition-all duration-300 ${
        isScrolled ? "bg-blue-500 shadow-lg" : " bg-white"
      }`}
    >
      <nav className="p-4 md:px-32 lg:px-48">

        <div className="flex justify-between items-center px-4">

          <div className="font-bold size-10 -m-28 ">
            <img
              src={
                isScrolled
                  ? "/assets/images/White.png" 
                  : "/assets/images/mainlogo.png" 
              }
              alt="Logo"
             
            />
          </div>

    <div className="pt-3">

          <ul
            className={` hidden xl:flex items-center font-semibold gap-6 text-base ml-28  ${
              isScrolled ? "text-white" : "text-black"
            }`}
            >
            <Link to="/">
              <li className="hover:text-blue-400 duration-300">Home</li>
            </Link>

            <Link to="/about">
              <li className="hover:text-blue-400 duration-300">About</li>
            </Link>

            <Link to="/services">
              <li className="hover:text-blue-400 duration-300">Services</li>
            </Link>

            <Link to="/ushealthcare">
              <li className="hover:text-blue-400 duration-300">UsHealthcare</li>
            </Link>

            <Link to="/careers">
              <li className="hover:text-blue-400 duration-300">Careers</li>
            </Link>

            <Link to="/contact">
              <li className="hover:text-blue-400 duration-300">Contact</li>
            </Link>
          </ul>

                </div>
         
          <div className="m-">

            <ul className="flex gap-4 ps-0 mb-0 list-unstyled mr-26">
              <li>
                <a
                  href="/"
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
              {/* <li>
                <a
                  href="https://x.com/adproduction_in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li> */}
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="size-8"
                    src="/assets/images/insta3.png"
                    alt="Instagram"
                    />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="size-8"
                    src="/assets/images/youtube.png"
                    alt="Youtube"
                    />
                </a>
              </li>
            </ul>
          </div>

        <i className="bx bx-menu xl:hidden block text-3xl cursor-pointer items-end z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
          

        <div
  className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transition-all transform  ${
    isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
  }`}
  style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
>
  

          
          <li key="home" className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Home</li>

          <li key="services" className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Services</li>

          <li key="careers" className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Careers</li>

          <li key="about" className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">About</li>

          <li key="contact" className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Contact</li>

          <li key="ushelathcare" className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">UsHealthcare</li>
          
          </div>
     
        </div>


 
        
      </nav>
    </div>
  );
};

export default NavBar;
