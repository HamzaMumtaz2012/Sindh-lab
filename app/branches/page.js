import React from 'react'

const page = () => {
    const branches = [
        {
            text: "PECHUS"
        },
        {
            text: "DHA & CLIFTON" 
        },
        {
            text: "GULSHAN-E-IQBAL"
        },
        {
            text: "NAZIMABAD"
        },
        {
            text: "GULISTAN-E-JOHAR"
        },
        {
            text: "NORTH-KARACHI"
        },
        {
            text: "SADDAR "
        },
        {
            text: "LYARI"
        },
        {
            text: "KORANGI" 
        },
        {
            text: "MALIR" 
        },
    ]
  return (
    <>
       <div 
  className=" py-60 flex flex-col justify-center relative px-50 " 

>

      <h1 className='text-red-700 text-5xl absolute bottom-40 font-bold text-gray-600'>Branches</h1>
      <samp className='text-xl absolute bottom-28 font-medium ml-0.5 text-gray-500'>Home &gt; Branches</samp>
    </div>
    <div className='text-center'>
        <samp className='text-gray-600 text-3xl font-medium font-sans'>Find a Branch </samp>
        <div className='my-10'>
            
        {
branches.map((branch , index)=>{
    return(
<div className='relative mx-auto flex w-[60vw] items-center justify-center bg-red-600 py-3 text-white mt-2' key={index}>

            <span className='absolute left-4 text-2xl text-gray-600 bg-white px-2 '>&#43;</span>
            <span>{branch.text}</span>
            </div>
    )
})
        }
        </div>
    </div>
    </>
  )
}

export const metadata = {
  title: 'Branches - Sindlab Diagnostics',
  description: 'Branches page',
};

export default page 