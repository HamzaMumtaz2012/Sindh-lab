import React from 'react';

const page = () => {
  return (
  <>
      <div 
  className=" py-60 flex flex-col justify-center relative px-50 " 

>

      <h1 className='text-red-700 text-5xl absolute bottom-40 font-bold text-gray-600'>Contact</h1>
      <samp className='text-xl absolute bottom-28 font-medium ml-0.5 text-gray-500'>Home &gt; Contact</samp>
    </div>
    
    <div className="min-h-screen bg-[#f5f5f5] text-[#222b45] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex justify-center">
          <div className="text-[16px] sm:text-[18px] font-medium text-gray-500 tracking-wide text-center">
            For Inquiries / Suggestions / Complaints Please Use <br />
            the Form Below
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-16 lg:gap-24">
          <div className="w-full lg:w-[42%]">
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-[#1e293b] mb-8">
              Sindlab
            </h1>

            <div className="space-y-8 text-[#1e293b]">
              <div>
                <div className="flex items-center gap-2 text-base font-bold uppercase tracking-wide mb-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500"></span>
                  <span>Address</span>
                </div>
                <p className="text-lg leading-7 text-gray-700">Sindlab (Pvt) Ltd.</p>
                <p className="text-lg leading-7 text-gray-700">Z-74, D.M.C.H Society</p>
                <p className="text-lg leading-7 text-gray-700">Tariq Road, Karachi. 74800</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-base font-bold uppercase tracking-wide mb-2">
                  <span className="inline-block h-3 w-3 rounded-sm bg-red-500"></span>
                  <span>Email</span>
                </div>
                <p className="text-lg leading-7 text-gray-700">info@sindlab.com.pk</p>
                <p className="text-lg leading-7 text-gray-700">careers@sindlab.com.pk</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-base font-bold uppercase tracking-wide mb-2">
                  <span className="inline-block h-3 w-3 rounded-full bg-red-500"></span>
                  <span>Phone</span>
                </div>
                <p className="text-lg leading-7 text-gray-700">(021) 3455 7771</p>
                <p className="text-lg leading-7 text-gray-700">(021) 3455 7772</p>
                <p className="text-lg leading-7 text-gray-700">(021) 3455 7773</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-base font-bold uppercase tracking-wide mb-2">
                  <span className="inline-block h-3 w-3 rounded-sm border border-red-500 bg-red-500"></span>
                  <span>Home Collection</span>
                </div>
                <p className="text-lg leading-7 text-gray-700">0320 455 7772</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-base font-bold uppercase tracking-wide mb-2">
                  <span className="inline-block h-3 w-3 rounded-sm border border-red-500 bg-red-500"></span>
                  <span>24 / 7 Helplines</span>
                </div>
                <p className="text-lg leading-7 text-gray-700">0315 7222 333</p>
                <p className="text-lg leading-7 text-gray-700">0318 315 7772</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[50%]">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-300 bg-transparent px-4 py-3 text-lg text-gray-700 placeholder:text-gray-400 outline-none focus:border-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 bg-transparent px-4 py-3 text-lg text-gray-700 placeholder:text-gray-400 outline-none focus:border-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 bg-transparent px-4 py-3 text-lg text-gray-700 placeholder:text-gray-400 outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 bg-transparent px-4 py-3 text-lg text-gray-700 placeholder:text-gray-400 outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 bg-transparent px-4 py-3 text-lg text-gray-700 placeholder:text-gray-400 outline-none focus:border-gray-500 resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-[#d94a43] hover:bg-[#c73f39] text-white text-xl font-semibold px-10 py-4 rounded-md shadow-md transition duration-200"
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export const metadata = {
  title: 'Contact - Sindlab Diagnostics',
  description: 'Contact page',
};

export default page;