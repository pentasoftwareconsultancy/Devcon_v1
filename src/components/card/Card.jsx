import React from 'react'


function Card() {


  const data =[{image:'/assets/images/web-development.webp' , name:"Website Design/Development", description:"We create custom, responsive websites that are fast, secure,& tailored to your business needs.Utilizing the latest technologies & best practices, our team specializes in creating user-friendly interfaces, seamless integrations."},
    {image:'https://plus.unsplash.com/premium_photo-1690297853326-e127726588ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFuZHJvaWR8ZW58MHx8MHx8fDA%3D', name:"Android Development",description:"Our team specializes in creating feature-rich, high-performance Android applications tailored to your business needs. From concept to deployment, we focus on delivering intuitive user interfaces, seamless functionality, and optimal performance."},
    {image:'https://plus.unsplash.com/premium_photo-1683872921964-25348002a392?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D', name:"Digital Marketing",description:"Boost your online presence with tailored strategies like SEO, social media marketing, and PPC. We drive traffic, enhance visibility, and increase conversions to help your business thrive in the digital world."},
    {image:'https://media.istockphoto.com/id/1394355488/photo/quality-control-certification-and-standardization-iso-certification-and-quality-management.webp?a=1&b=1&s=612x612&w=0&k=20&c=Cxmb4BFj3Pko1pFApbuLWST132ThTXuQy-6PcRchjE0=',name:"Product Management", description:"We guide your product from concept to launch, focusing on strategy, market alignment, and delivering a user-centered experience that drives business growth."},
    {image:'https://images.unsplash.com/photo-1596658591534-591d75e2f2f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW90JTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D', name:"IOT Services", description:"We provide end-to-end IoT solutions that connect devices, gather real-time data. From hardware integration to data analytics, our IoT services enhance automation, efficiency,& innovation for businesses across various industries"},
    {image:"https://media.istockphoto.com/id/1946532072/photo/outsourcing.webp?a=1&b=1&s=612x612&w=0&k=20&c=EjP6ExTOk5r6D326sfsYQhxhG0Q0yD-Wr8_Oy_mONSA=", name:"Outsourcing",description:" By leveraging our expert team, you can reduce costs, increase efficiency, and scale your operations without the burden of managing additional in-house resources."},
    {image:"https://www.devconsoftware.com/assets/img/POWER-BI.png", name:"Power BI", description:"Our expert services help you transform raw data into interactive, easy-to-understand visualizations and dashboards. Power BI empowers your business to make data-driven decisions, improve operational efficiency."},
    {image:"https://www.devconsoftware.com/assets/img/salse-force.jpeg",name:"Sales Force",description:"Streamline your business operations with Salesforce, the world’s leading CRM platform. Our Salesforce services help you manage customer relationships, automate processes, and drive sales growth. "},
    {image:"https://www.devconsoftware.com/assets/img/cloud-computing.jpeg",name:"Cloud Computing",description:"Leverage secure, scalable cloud solutions to improve flexibility and efficiency. We offer cloud migration, optimization, and cloud-native development. Streamline operations and reduce infrastructure costs with our tailored services."}
  ]


  return (
    
    /*this is full screen div*/

    <div  className='w-full h-full mt-5 flex flex-wrap items-center justify-center  gap-10'>
    
      
    {data.map((elem, index) => (
        <div key={index} className='w-96 h-2/3 bg-sky-100  rounded-lg  overflow:hidden max-w-sm '>
          
        <div className='w-full h-56 bg-zinc-500  transition ease-in-out hover:-translate-y-1 hover:scale-110 delay-150 rounded-lg'>

         <img 
           className='w-full h-full object-fill rounded-lg
         ' src={elem.image} 
         
           alt="" />

        </div>

        <div className='w-full h-1/2 px-3 py-4'>

           <h1 className='font-bold text-xl mt-1 hover:text-slate-600'>{elem.name}</h1>
           <p className='text-base mt-3 font-normal mb-3 w-fit'>{elem.description}</p>
         
              <hr className="w-full h-1 bg-slate-300 mt-3 rounded px-1 mb-1 hover:bg-slate-500"/>
        
             <i className="ri-star-fill text-amber-500 p-2 hover:text-amber-600"></i>
             <i className="ri-star-fill text-amber-500 p-2 hover:text-amber-600"></i>
             <i className="ri-star-fill text-amber-500 p-2 hover:text-amber-600"></i>
             <i className="ri-star-fill text-amber-500 p-2 hover:text-amber-600"></i>

        </div>

     </div>
     
      ))}
    
       
       
    </div>
  );
}

export default Card;