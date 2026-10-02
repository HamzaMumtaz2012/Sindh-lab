import React from 'react'
import PageBanner from '../../Components/PageBanner'

const page = () => {
  
  return (
    <>
    <PageBanner title="About Us" image="/about.png" />
    <div className='mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-20'>
      <div className="text-base font-sans leading-8 sm:text-lg">
        <p>
<span className='font-bold text-gray-500'> Welcome to Sindlab </span> - a pioneer in clinical diagnostics with a legacy spanning over four decades

Since our inception, we've been dedicated to delivering accurate and reliable results to patients across Pakistan

Sindlab offers a comprehensive array of clinical laboratory services, as well as radiology, ultrasound, consultant clinics and dental services at select diagnostic locations

Commitment to quality has always been our focus and we monitor our testing through internal controls and participation in proficiency programs

We believe in providing the highest level of service and continuous improvement of our work to meet customer expectations

Sindlab is ISO <span className='font-bold text-gray-500'>9001:2015</span> certified for quality management systems</p>
      </div>
      <div>
        <img className='h-auto max-h-[420px] w-full object-cover' src="/aboutTwo.webp" alt="Sindlab diagnostic services" />
      </div>
    </div>
  </>
  )
}

export const metadata = {
  title: 'About - Sindlab Diagnostics',
  description: 'About page',
};

export default page