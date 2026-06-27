"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlinePayments, MdKeyboardArrowDown } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (menu) => {
  setOpenMenu(openMenu === menu ? "" : menu);
  };

  return (
    <header className="">
    <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
       <div className="flex justify-center items-center gap-10 py-4">
       <div className='hidden lg:block'>
         <div className="grid grid-cols-2">
            <ul className="flex items-center gap-5">
                <li><FaMobileAlt className="size-4 inline-block"/>&nbsp;<Link className="text-sm md:text-md" href="tel:+919650133355">+91 9650133355</Link></li>
                <li><MdOutlinePayments className="size-4 inline-block"/>&nbsp;<Link className="text-sm md:text-md" href="https://payment.indoeuropean.in/payment-link.aspx">Pay Online</Link></li>
            </ul>
            <div className="flex items-center border border-primary/50 rounded-lg p-2">
                <CiSearch className="size-6 inline-block"/>&nbsp;<input className="w-full outline-0 rounded-md text-sm" placeholder="Search Courses, Universities and Country"/>
            </div>
        </div>
        <div className='flex justify-center items-center gap-10 mt-2'>
             <Link className="" href={'/'}><Image className="" height={60} width={160} src={"/images/logos/IE-Logo.png"} alt="Indo European Study Abroad Consultancy"/></Link>
             <ul className="flex justify-center items-center gap-5">
              <li className=""><Link className="" href={'/about'}>About Us</Link></li>
              <li className="relative group">
                <span className="cursor-pointer">Destinations&nbsp;<MdKeyboardArrowDown className="size-4 inline-block group-hover:rotate-180 transition-all duration-300 ease-in-out"/></span>
                <ul className="absolute p-5 grid grid-cols-1 md:grid-cols-2 space-x-4 space-y-4 top-12 left-0 rounded-md bg-white w-120 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <li className=""><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-base lg:text-base" href="/destinations/study-in-latvia"><Image className="rounded-full w-5 h-5" src={'/images/flags/latvia.jpg'} width={5} height={5} alt="study in latvia"/>&nbsp;Study in Latvia</Link></li>
                    <li className=""><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-base lg:text-base" href="/destinations/study-in-latvia"><Image className="rounded-full w-5 h-5" src={'/images/flags/lithuania.jpg'} width={5} height={5} alt="study in latvia"/>&nbsp;Study in Lithuania</Link></li>
                    <li className=""><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-base lg:text-base" href="/destinations/study-in-latvia"><Image className="rounded-full w-5 h-5" src={'/images/flags/germany.jpg'} width={5} height={5} alt="study in latvia"/>&nbsp;Study in Germany</Link></li>
                    <li className=""><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-base lg:text-base" href="/destinations/study-in-latvia"><Image className="rounded-full w-5 h-5" src={'/images/flags/uk.jpg'} width={5} height={5} alt="study in latvia"/>&nbsp;Study in UK</Link></li>
                    <li className=""><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-base lg:text-base" href="/destinations/study-in-latvia"><Image className="rounded-full w-5 h-5" src={'/images/flags/australia.jpg'} width={5} height={5} alt="study in latvia"/>&nbsp;Study in Australia</Link></li>
                    <li className=""><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-base lg:text-base" href="/destinations/study-in-latvia"><Image className="rounded-full w-5 h-5" src={'/images/flags/usa.jpg'} width={5} height={5} alt="study in latvia"/>&nbsp;Study in USA</Link></li>
                </ul>
              </li>
              <li className="relative group">
                <span className="cursor-pointer">Services&nbsp;<MdKeyboardArrowDown className="size-4 inline-block group-hover:rotate-180 transition-all duration-300 ease-in-out"/></span>
                <ul className="absolute p-5 grid grid-cols-1 md:grid-cols-2 space-x-4 space-y-4 top-12 left-0 rounded-md bg-white w-120 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <li className="hover:bg-primary/5 border-s-2 border-white hover:border-primary p-2 transition-colors duration-300 ease-in-out rounded-md"><Link className="" href="/services/admission">Admission<span className="text-xs block">Expert guidance for hassle-free university admissions.</span></Link></li>
                    <li className="hover:bg-primary/5 border-s-2 border-white hover:border-primary p-2 transition-colors duration-300 ease-in-out rounded-md"><Link className="" href="/services/visa">Visa<span className="text-xs block">Expert visa guidance for a smooth approval process.</span></Link></li>
                    <li className="hover:bg-primary/5 border-s-2 border-white hover:border-primary p-2 transition-colors duration-300 ease-in-out rounded-md"><Link className="" href="/services/accommodation">Accommodation<span className="text-xs block">Step-by-step guidance from application to admission.</span></Link></li>
                    <li className="hover:bg-primary/5 border-s-2 border-white hover:border-primary p-2 transition-colors duration-300 ease-in-out rounded-md"><Link className="" href="/services/education-loan">Education Loan<span className="text-xs block">Affordable loan solutions for your study abroad plans.</span></Link></li>
                </ul>
              </li>
              <li className="relative group">
                <span className="cursor-pointer">Blogs&nbsp;<MdKeyboardArrowDown className="size-4 inline-block group-hover:rotate-180 transition-all duration-300 ease-in-out"/></span>
                <ul className="absolute p-5 grid grid-cols-1 md:grid-cols-2 space-x-4 space-y-4 top-12 left-0 rounded-md bg-white w-120 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <li className=""><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2" href="/blogs">Latest Blogs</Link></li>
                    <li className=""><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2" href="/blogs">Visa Guides</Link></li>
                    <li className=""><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2" href="/blogs">Student Life</Link></li>
                </ul>
              </li>
              <li className=""><Link className="" href={'/contact'}>Contact Us</Link></li>
             </ul>
          </div>
       </div>
       <div className="grid grid-cols-2 lg:hidden">
         <Link className="" href={'/'}><Image className="" height={60} width={160} src={"/images/logos/IE-Logo.png"} alt="Indo European Study Abroad Consultancy"/></Link>
         <div className="flex items-center border border-primary/50 rounded-lg p-2">
            <CiSearch className="size-6 inline-block"/>&nbsp;<input className="w-full outline-0 rounded-md text-sm" placeholder="Search Courses, Universities and Country"/>
         </div>
       </div>
       <div className="">
          <Link className="hidden lg:block" href={'https://zoom.us/j/91022278457#success'} target="_blank"><Image width={100} height={60} className="" src={'/images/logos/zoom.png'} alt="join via zoom icon"/></Link>
          <div className="block lg:hidden">
             <RiMenu3Fill onClick={() => setIsOpen(!isOpen)} className="size-10" />
          </div>
       </div>
       </div>
    </div>
<div
    className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-xl z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
    }`}>
    <div className="flex justify-between items-center p-5">
        <Image
            src="/images/logos/IE-Logo.png"
            width={120}
            height={40}
            alt="Logo"
        />

        <IoClose
            className="size-8 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        />
    </div>

<nav className="p-5">
  <Link
    href="/about"
    className="block py-4"
  >
    About Us
  </Link>
  <div className="">
    <button
      onClick={() => toggleMenu("destinations")}
      className="w-full flex justify-between items-center py-4"
    >
      <span>Destinations</span>
      <MdKeyboardArrowDown
        className={`transition-transform duration-300 ${
          openMenu === "destinations" ? "rotate-180" : ""
        }`}
      />
    </button>

    <div
      className={`grid transition-all duration-300 overflow-hidden ${
        openMenu === "destinations"
          ? "grid-rows-[1fr] pb-4"
          : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 gap-3">
          <Link href="/destinations/study-in-latvia" className="flex items-center p-2">
          <Image className="w-5 h-5 rounded-full inline-block" width={5} height={5} src={'/images/flags/latvia.jpg'} alt=""/>&nbsp;
           Study in Latvia
          </Link>
          <Link href="/destinations/study-in-latvia" className="flex items-center p-2">
          <Image className="w-5 h-5 rounded-full inline-block" width={5} height={5} src={'/images/flags/lithuania.jpg'} alt=""/>&nbsp;
           Study in Lithuania
          </Link>
          <Link href="/destinations/study-in-latvia" className="flex items-center p-2">
          <Image className="w-5 h-5 rounded-full inline-block" width={5} height={5} src={'/images/flags/germany.jpg'} alt=""/>&nbsp;
           Study in Germany
          </Link>
          <Link href="/destinations/study-in-latvia" className="flex items-center p-2">
          <Image className="w-5 h-5 rounded-full inline-block" width={5} height={5} src={'/images/flags/australia.jpg'} alt=""/>&nbsp;
           Study in Australia
          </Link>
          <Link href="/destinations/study-in-latvia" className="flex items-center p-2">
          <Image className="w-5 h-5 rounded-full inline-block" width={5} height={5} src={'/images/flags/UK.jpg'} alt=""/>&nbsp;
           Study in UK
          </Link>
          <Link href="/destinations/study-in-latvia" className="flex items-center p-2">
          <Image className="w-5 h-5 rounded-full inline-block" width={5} height={5} src={'/images/flags/USA.jpg'} alt=""/>&nbsp;
           Study in USA
          </Link>
        </div>
      </div>
    </div>
  </div>

  <div className="">
    <button
      onClick={() => toggleMenu("services")}
      className="w-full flex justify-between items-center py-4"
    >
      <span>Services</span>
      <MdKeyboardArrowDown
        className={`transition-transform duration-300 ${
          openMenu === "services" ? "rotate-180" : ""
        }`}
      />
    </button>

    <div
      className={`grid transition-all duration-300 overflow-hidden ${
        openMenu === "services"
          ? "grid-rows-[1fr] pb-4"
          : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden grid grid-cols-2 gap-3">
        <Link href="/services/admission">Admission</Link>
        <Link href="/services/visa">Visa</Link>
        <Link href="/services/accommodation">Accommodation</Link>
        <Link href="/services/education-loan">Education Loan</Link>
      </div>
    </div>
  </div>

  <div className="">
    <button
      onClick={() => toggleMenu("blogs")}
      className="w-full flex justify-between items-center py-4"
    >
      <span>Blogs</span>
      <MdKeyboardArrowDown
        className={`transition-transform duration-300 ${
          openMenu === "blogs" ? "rotate-180" : ""
        }`}
      />
    </button>

    <div
      className={`grid transition-all duration-300 overflow-hidden ${
        openMenu === "blogs"
          ? "grid-rows-[1fr] pb-4"
          : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden grid gap-3">
        <Link href="/blogs">Latest Blogs</Link>
        <Link href="/visa-guides">Visa Guides</Link>
        <Link href="/student-life">Student Life</Link>
      </div>
    </div>
  </div>

  <Link
    href="/contact"
    className="block py-4"
  >
    Contact Us
  </Link>
</nav>
</div>
    </header>
  )
}

export default Header