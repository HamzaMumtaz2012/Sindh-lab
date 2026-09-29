'use client';
import CountUp from 'react-countup';
import {
  FaBed,
  FaStore,
  FaHandshake,
  FaBriefcaseMedical,
} from "react-icons/fa";
import { useState } from 'react';

export default function Home() {
  const stats = [
    {
      icon: FaBed,
      number: 10,
      suffix: " million +",
      label: "Patients Served",
    },
    {
      icon: FaStore,
      number: 31,
      suffix: "",
      label: "Branches",
    },
    {
      icon: FaHandshake,
      number: 97,
      suffix: "",
      label: "Panel Companies",
    },
    {
      icon: FaBriefcaseMedical,
      number: 900,
      suffix: "+",
      label: "Different Tests",
    },
  ];

  const profileTests = [
    {
      text: 'Executive Screening Profile',
      url: '/test1.webp'
    },
    {
      text: 'Liver Function Profile',
      url: '/test2.webp'
    },
    {
      text: 'Infertility Profile',
      url: '/test3.webp'
    },
    {
      text: 'Weight Loss Profile',
      url: '/test4.webp'
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <main className="w-full">
        <section className="relative isolate overflow-hidden bg-[url('/hero-background.webp')] bg-cover bg-center bg-no-repeat">
          <div className="relative mx-auto grid min-h-[520px] max-w-7xl items-center gap-8 px-4 py-12 sm:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-16 xl:px-20">
            <div className="max-w-xl text-black">
              <p className="mb-4 text-base font-extrabold uppercase tracking-[0.2em] text-red-400 sm:text-lg">
                Trust That Continues
              </p>

              <h1 className="text-4xl font-bold uppercase leading-tight sm:text-5xl xl:text-[4rem] ">
                Serving Patients for Over 45 Years
              </h1>

              <p className="mt-6 max-w-lg text-lg text-white/90 sm:text-xl">
                Accurate, reliable and high-quality testing services.
              </p>
            </div>

            <div className="w-full max-w-xl ">
              <div className="div mx-auto flex min-h-[100px] w-full max-w-[450px] -translate-y-22  flex-col justify-center rounded-md border border-gray-500/70 bg-gray-500/60 px-4 py-4 shadow-[0_12px_24px_rgba(0,0,0,0.15)] backdrop-blur-[1px] sm:px-6">
                <h2 className="mb-4 text-center text-xl font-bold uppercase tracking-wide text-white sm:text-2xl font-bold">
                  View our services 
                </h2>

                <div className="flex items-center justify-center gap-4">
                  <p className="max-w-[180px] font-bold text-left text-2xl font-semibold uppercase tracking-[0.12em] text-black sm:text-xs">
                    Log into our site   
                  </p>

                  <button
                    type="button"
                    className="bg-[#cc1818] px-5 py-3 text-sm font-semibold uppercase text-white shadow-md transition-colors duration-200 hover:bg-[#b01414]"
                  >
                    Click here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="w-full bg-[#e31317] px-4 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="flex w-full flex-col items-center text-center text-white"
              >
                <Icon
                  size={58}
                  className="mb-4 sm:mb-6"
                />

                <div className="whitespace-nowrap text-3xl font-normal leading-none sm:text-5xl lg:text-6xl">
                  <CountUp
                    end={stat.number}
                    duration={2}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>

                <div className="mt-2 text-sm font-semibold leading-tight sm:text-base lg:text-lg">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

          <section className='py-20'>
        <h1 className='text-gray-600 text-3xl text-center font-semibold font-sans'>Explore Our Profile Tests </h1>
        <div className='mt-10 flex flex-wrap justify-center gap-4 px-4'>
          {profileTests.map((tests, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                className="relative flex h-60 w-full max-w-[22rem] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-md bg-cover bg-center bg-no-repeat p-6 text-white shadow-lg transition-all duration-300"
                style={{ 
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.85)), url('${tests.url}')` 
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                
                <div className={`flex flex-col items-center justify-center transition-transform duration-300 transform ${isHovered ? '-translate-y-4' : 'translate-y-0'}`}>
                  <h1 className='text-2xl font-extrabold text-center drop-shadow-md max-w-[90%]'>
                    {tests.text}
                  </h1>
                </div>

                
                <strong className={`absolute bottom-12 text-4xl transition-all duration-300 transform ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} text-red-700`}>
                  ^
                </strong>
              </div>
            )
          })}
        </div>
      </section>
          

    </>
  );
}
