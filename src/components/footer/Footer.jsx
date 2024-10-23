import React from 'react'
import { Link } from 'react-router-dom';
// import { GrInstagram } from "react-icons/gr";


function Footer() {
  return (
    <>
    
    <div className='relative  mt-1 left-0 overflow-hidden w-full bg-blue-500 hover:bg-blue-900  '>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
           <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
         </svg>
       <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pl-20 '>

      <div className='flex flex-col gap-5'>

           <h1 className='text-3xl text-white font-dancing1 hover:text-orange-400 p-1' >Devcons Software Solution Pvt ltd.</h1>
           <p className=' text-orange-200'>Welcome to Devcons Software Solutions Pvt. Ltd. ! We are a team of highly skilled and experienced software developers dedicated to providing innovative solutions to help our clients achieve their business goals.</p>
       </div>

       <div className='flex flex-col gap-5'> 
        <h2 className='text-3xl text-white pl-14 hover:text-orange-400 font-bold '>Resources</h2>
        <ul className='gap-5 pl-20 inline-block relative cursor-pointer transition-all '>
        <Link to="/">
              <li className="text-orange-200 hover:text-orange-400 hover:translate-x-5 duration-300 ">Home</li>
            </Link>

            <Link to="/careers">
              <li className=" text-orange-200 hover:text-orange-400 hover:translate-x-5 duration-300">Careers</li>
            </Link>

            <Link to="/services">
              <li className="text-orange-200 hover:text-orange-400 hover:translate-x-5 duration-300">Services</li>
            </Link>

            <Link to="/about">
              <li className="text-orange-200 hover:text-orange-400  hover:translate-x-5 duration-300">About</li>
            </Link>

            <Link to="/ushealthcare">
              <li className="text-orange-200 hover:text-orange-400 hover:translate-x-5 duration-300">UsHealthcare</li>
            </Link>

            <Link to="/contact">
              <li className="text-orange-200 hover:text-orange-400 hover:translate-x-5 duration-300">Contact</li>
            </Link>
        </ul>

        

      </div>
      <div className='flex flex-col gap-5'>

           <h1 className='text-3xl text-white  hover:text-orange-400 ' >Contact Us</h1>
           <p className=' text-orange-200 pl-1'>Office No. 4-B,
           Ganesham Commercial - A,
           Survey No. 21/18-21/24 BRTS Road,
           Pimple Saudagar,
           Pune- 411027</p>
           <h1 className='text-orange-200 pl-1'>Phone:+919112100663</h1>
           <h1 className='text-orange-200 pl-1' >Email: hr@devconsoftware.com</h1>

       </div>

       <div className='flex flex-col gap-5'>
          
          <ul className="ps-10 pl-20  list-unstyled ">

              <li className='p-3'>
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
              
              <li className='p-3'>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="size-8"
                    src="
                    /assets/images/insta3.png"
                    alt="Instagram"
                    />
                    {/* <GrInstagram  style={{color:"red"}}/> */}
                </a>
              </li>
              <li className='p-3'>
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
       </div>
           
   
   </div>

    </>
  )
}

export default Footer;