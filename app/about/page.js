import React from 'react'

const page = () => {
  return (
    <>
    <div 
  className="bg-cover bg-center py-60 flex flex-col justify-center relative px-50 " 
  style={{ backgroundImage: "url('/about.png')" }}
>

      <h1 className='text-red-700 text-5xl absolute bottom-40 font-bold text-gray-600'>About Us </h1>
      <samp className='text-xl absolute bottom-28 font-medium ml-0.5 text-gray-500'>Home &gt; About</samp>
    </div>
    <div className='flex justify-center items-center py-20'>
      <div className="first w-full mx-20 text-xl font-sans tracking-wider clip leading-10 ">
        <p>
<span className='font-bold text-gray-500'> Welcome to Sindlab </span> - a pioneer in clinical diagnostics with a legacy spanning over four decades

Since our inception, we've been dedicated to delivering accurate and reliable results to patients across Pakistan

Sindlab offers a comprehensive array of clinical laboratory services, as well as radiology, ultrasound, consultant clinics and dental services at select diagnostic locations

Commitment to quality has always been our focus and we monitor our testing through internal controls and participation in proficiency programs

We believe in providing the highest level of service and continuous improvement of our work to meet customer expectations

Sindlab is ISO <span className='font-bold text-gray-500'>9001:2015</span> certified for quality management systems</p>
      </div>
      <div className="second w-full">
        <img className='h-90' src="aboutTwo.webp" alt="" />
      </div>
    </div>
  </>
  )
}

export default page