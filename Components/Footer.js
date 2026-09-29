import Link from 'next/link';
import {
  FaFacebookF,
  FaHome,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';
import { MdEmail, MdPhoneAndroid } from 'react-icons/md';

const usefulLinks = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Tests', '/tests'],
  ['Services', '/services'],
  ['Branches', '/branches'],
  ['Articles', '/articles'],
  ['Contact', '/contact'],
];

function ContactRow({ icon: Icon, children, className = '' }) {
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      <Icon className="mt-1 h-4 w-4 shrink-0 text-[#e31317]" aria-hidden="true" />
      <div>{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full text-white">
      <div className="bg-[#595959] px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-[1350px] gap-12 md:grid-cols-2 lg:grid-cols-[1.05fr_0.55fr_1.05fr_1.2fr] lg:gap-10">
          <section aria-label="About Sindlab" className="max-w-[320px]">
            <img
              src="/logo.webp"
              alt="Sindlab Diagnostics"
              className="h-[82px] w-[280px] object-contain object-left"
            />
            <p className="mt-7 text-[17px] leading-[1.8] text-white/90">
              Sindlab is a leader in providing quality lab testing and diagnostics services
            </p>
            <div className="mt-7 flex items-start gap-8">
              <div className="relative flex h-[112px] w-[150px] items-center justify-center text-[#f49a36]">
                <span
                  className="text-[96px] font-black leading-none"
                  style={{ WebkitTextStroke: '2px #f49a36', color: 'transparent' }}
                  aria-label="45"
                >
                  45
                </span>
                <span className="absolute left-[73px] top-[45px] bg-[#595959] px-1 text-[8px] font-bold uppercase tracking-[0.16em]">
                  Years
                </span>
                <span className="absolute bottom-0 right-0 text-[9px] font-semibold tracking-[0.12em] text-white/90">
                  of Service
                </span>
              </div>
              <div className="flex gap-6 pt-2">
                <a
                  href="https://www.facebook.com/sindlab"
                  aria-label="Sindlab on Facebook"
                  className="text-white transition-colors hover:text-[#e31317]"
                >
                  <FaFacebookF size={29} />
                </a>
                <a
                  href="https://www.instagram.com/sindlabpakistan"
                  aria-label="Sindlab on Instagram"
                  className="text-white transition-colors hover:text-[#e31317]"
                >
                  <FaInstagram size={29} />
                </a>
              </div>
            </div>
          </section>

          <nav aria-label="Useful links">
            <h2 className="mb-7 text-[20px] font-bold">Useful links</h2>
            <ul className="space-y-4">
              {usefulLinks.map(([label, href]) => (
                <li key={label}>
                  <Link className="text-[17px] font-medium transition-colors hover:text-[#ff7777]" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section>
            <h2 className="mb-3 text-[20px] font-bold">Working Hours - Main Lab</h2>
            <div className="flex justify-between gap-3 text-[16px] leading-7">
              <span>Mon - Sat:</span>
              <span className="whitespace-nowrap">8:00 a.m - 9:00 p.m</span>
            </div>
            <div className="flex justify-between gap-3 text-[16px] leading-7">
              <span>Sunday:</span>
              <span className="whitespace-nowrap">8:00 a.m - 2:00 p.m</span>
            </div>
            <p className="mt-4 text-[16px] leading-[1.8]">
              <strong className="underline">Note:</strong> All Sindlab locations are closed on Friday from 1:00 pm to 2:30 pm for Jumma Prayers
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[20px] font-bold">Contact Information</h2>
            <div className="space-y-7 text-[16px] leading-[1.8]">
              <ContactRow icon={FaMapMarkerAlt}>
                Z-74, D.M.C Society, Tariq Road, Karachi - 74800
              </ContactRow>
              <ContactRow icon={FaPhone}>
                <a href="tel:+922134557771" className="font-bold hover:text-[#ff7777]">(021) 3455 7771-3</a> Main laboratory
              </ContactRow>
              <ContactRow icon={MdPhoneAndroid}>
                <a href="tel:+923183157772" className="font-bold hover:text-[#ff7777]">0318 315 7772</a> 24/7 Ashfaq Mem. Branch
              </ContactRow>
              <ContactRow icon={MdPhoneAndroid}>
                <a href="tel:+923157222333" className="font-bold hover:text-[#ff7777]">0315 7222 333</a> 24/7 Hilal-e-Ahmer Branch
              </ContactRow>
              <ContactRow icon={FaHome}>
                <a href="tel:+923204557772" className="font-bold hover:text-[#ff7777]">0320 455 7772</a> Home Collection
              </ContactRow>
              <ContactRow icon={MdEmail}>
                <a href="mailto:info@sindlab.com.pk" className="font-bold hover:text-[#ff7777]">info@sindlab.com.pk</a>
              </ContactRow>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pl-8 font-bold">
                <a href="https://www.facebook.com/sindlab" className="hover:text-[#ff7777]">
                  <FaFacebookF className="mr-3 inline text-[#e31317]" aria-hidden="true" />sindlab
                </a>
                <a href="https://www.instagram.com/sindlabpakistan" className="hover:text-[#ff7777]">
                  <FaInstagram className="mr-3 inline text-[#e31317]" aria-hidden="true" />sindlabpakistan
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="flex min-h-[68px] flex-wrap items-center justify-center gap-x-1 bg-white px-4 py-4 text-center text-[16px] text-[#e31317]">
        <span>© 2024 Sindlab Diagnostics | All Rights Reserved | Powered by</span>
        <a href="https://lynxtech.pk" className="text-[#969696] hover:text-[#e31317]">Lynx Tech</a>
      </div>
    </footer>
  );
}