import React from 'react'
import PageBanner from '../../Components/PageBanner'

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
            <PageBanner title="Branches" />
    <div className='text-center'>
                <h2 className='text-gray-600 text-2xl font-medium font-sans sm:text-3xl'>Find a Branch</h2>
                <div className='mx-auto my-8 grid w-full max-w-5xl grid-cols-1 gap-2 px-5 sm:px-8 md:grid-cols-2'>
            
        {
branches.map((branch , index)=>{
    return(
<div className='relative flex min-h-12 items-center justify-center bg-red-600 px-10 py-3 text-white' key={index}>

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