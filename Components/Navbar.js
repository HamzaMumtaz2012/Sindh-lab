'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';

const Navbar = () => {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/articles', label: 'Articles' },
    { href: '/branches', label: 'Branches' },
    { href: '/contact', label: 'Contact' },
  ]
  const [announcementText, setAnnouncementText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnnouncementText((prev) => !prev);
    }, 3000);

    return () => clearTimeout(timer);
  }, [announcementText]);
  return (
    <>
    <div className="relative flex min-h-14 items-center justify-center overflow-hidden bg-[#8f8f8f] px-4 py-3 text-center text-xs font-semibold text-white sm:text-sm">
        <span
          className={`absolute inset-0 flex items-center justify-center px-4 transition-opacity duration-700 ${
            !announcementText ? 'opacity-100' : 'opacity-0 invisible'
          }`}
        >
          SINDLAB CONSULTANT CLINICS now Open @ Hilal-e-Ahmer branch and Khayaban-e-Seher branch. Call 0315 7222 333 to book an appointment
        </span>

        <span
          className={`absolute inset-0 flex items-center justify-center px-4 transition-opacity duration-700 ${
            announcementText ? 'opacity-100' : 'opacity-0 invisible'
          }`}
        >
          PRO-DENTAL CLINIC timings: Mon - Sat: 10:30 am - 1:30 pm @ HILAL-E-AHMER Branch
        </span>
      </div>

      <header className="w-full bg-white px-4 py-5 sm:px-6 lg:px-8 lg:py-10 xl:px-14">
        <div className="mx-auto flex max-w-[1700px] flex-wrap items-center justify-between gap-5">
          <div className="flex shrink-0 items-center gap-4">
            <img src="/logo.webp" alt="Sindlab logo" className="h-[60px] w-auto object-contain xl:h-[80px]" />
          </div>

          <div className="order-3 flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:order-none lg:w-auto lg:flex-1 xl:gap-8">
            <div className="flex items-start gap-3">
              <span className="mt-1 flex h-7 w-7 items-center justify-center text-[#2d2d2d]">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
                  <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Zm0-8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                </svg>
              </span>
              <div className="flex min-w-0 flex-col leading-tight">
                <span className="text-[0.9rem] font-bold text-[#1b1b1b]">Visit Us:</span>
                <span className="text-sm font-bold text-red-500 xl:text-[1.1rem]">
                  D.M.C Society, Tariq Road, Karachi
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 flex h-7 w-7 items-center justify-center text-[#2d2d2d]">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
                  <path d="M7 4h3l1.3 5.2-2 1.8a14.7 14.7 0 0 0 7.9 7.9l1.8-2L20 14v3a2 2 0 0 1-2 2A16 16 0 0 1 5 6a2 2 0 0 1 2-2Z" />
                </svg>
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-[0.9rem] font-bold text-[#1b1b1b]">Call Us:</span>
                <span className="break-all text-sm font-bold text-red-500 xl:text-[1.1rem]">
                  (021) 3455 7771-3
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 flex h-7 w-7 items-center justify-center text-[#2d2d2d]">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
                  <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Zm2.2-.5 6.8 5.3L19.8 7H6.2Zm13.3 2.1-6.5 5.1a1.5 1.5 0 0 1-1.8 0L5.5 9.1v7.4c0 .3.2.5.5.5h11.9c.3 0 .5-.2.5-.5v-7.4Z" />
                </svg>
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-[0.9rem] font-bold text-[#1b1b1b]">Email Us:</span>
                <span className="text-[0.9rem] font-bold text-red-500 xl:text-[1.1rem]">
                  info@sindlab.com.pk
                </span>
              </div>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <Link href="/branches" className="hidden rounded-sm bg-red-500 px-4 py-3 text-sm font-semibold text-white sm:block">
              OUR BRANCHES
            </Link>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-gray-300 text-2xl text-gray-800 lg:hidden"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <span aria-hidden="true">{mobileMenuOpen ? '×' : '☰'}</span>
            </button>
          </div>
        </div>
      </header>
      <nav id="primary-navigation" className={`w-full bg-red-600 text-white ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
        <ul className='mx-auto flex w-full max-w-7xl flex-col items-stretch list-none lg:flex-row lg:items-center lg:justify-center'>
          {links.map(({ href, label }) => {
            const isActive = pathname === href

            return (
              <li key={href} className='text-lg font-sans font-medium'>
                <Link
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`tracking-wide font-semibold block px-5 py-3 text-center transition-colors lg:px-10 ${
                    isActive ? 'bg-red-500/80' : 'hover:bg-red-500/40'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      </>
  )
}

export default Navbar      
