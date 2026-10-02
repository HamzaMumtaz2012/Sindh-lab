'use client';
import CountUp from 'react-countup';
import {
  FaBed,
  FaStore,
  FaHandshake,
  FaBriefcaseMedical,
} from "react-icons/fa";

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

  return (
    <main className="w-full">
      <section className="relative isolate flex min-h-[540px] items-center overflow-hidden bg-[url('/hero-background.webp')] bg-cover bg-[center_42%] sm:min-h-[600px] lg:min-h-[660px]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-red-300 sm:text-sm">
              Trusted diagnostics in Karachi
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-7xl">
              Serving patients for over 45 years
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Accurate, reliable and high-quality testing services, with care you can count on.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/branches"
                className="inline-flex min-h-12 items-center justify-center bg-red-600 px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-red-700"
              >
                Find a branch
              </a>
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center border border-white/80 px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-white hover:text-gray-900"
              >
                Book an appointment
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-full bg-red-600" />
      </section>

      <section aria-label="Sindlab at a glance" className="bg-[#e31317] px-5 py-10 text-white sm:px-8 sm:py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-9 sm:gap-y-12 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div key={stat.label} className="flex min-w-0 flex-col items-center text-center pl-25">
                <Icon className="mb-3 h-7 w-7 sm:mb-4 sm:h-9 sm:w-9" aria-hidden="true" />
                <div className="whitespace-nowrap text-3xl font-semibold leading-none sm:text-5xl">
                  <CountUp
                    end={stat.number}
                    duration={2}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <p className="mt-2 text-xs font-semibold leading-snug sm:text-base">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Care, made clear</p>
              <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">Explore our profile tests</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-gray-600 sm:text-base">
              Find the right starting point for your health screening and diagnostic needs.
            </p>
          </div>

          <div className="flex flex-wrap pt-12 flex-1 items-center justify-center w-full gap-5 rounded-xl py-0">
            {profileTests.map((test) => (
              <article
                key={test.text}
                className="group relative isolate flex aspect-[4/3] min-h-[220px] items-end overflow-hidden rounded-sm bg-gray-800 bg-cover bg-center p-5 text-white sm:min-h-[250px]"
                style={{ backgroundImage: `url('${test.url}')` }}
              >
                <div className="absolute inset-0  bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-colors group-hover:from-black/90" />
                <h3 className="max-w-[18rem] text-xl font-bold  drop-shadow sm:text-2xl">
                  {test.text}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
