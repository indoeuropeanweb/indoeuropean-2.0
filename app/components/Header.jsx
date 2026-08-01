"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMoneyCheck, FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({
  destinations: false,
  europe: false,
  services: false,
  });
  const [query, setQuery] = useState("");
  // const [open, setOpen] = useState(false);

    const toggleMenu = (menu) => {
      setOpenMenus((prev) => ({
        ...prev,
        [menu]: !prev[menu],
      }));
    };

  const courses = [
  {
    id: 1,
    title: "Bachelor of Computer Science",
    university: "University of Europe",
    slug: "/courses/bachelor-computer-science",
  },
  {
    id: 2,
    title: "MBA",
    university: "Berlin Business School",
    slug: "/courses/mba",
  },
  {
    id: 3,
    title: "Mechanical Engineering",
    university: "Riga Technical University",
    slug: "/courses/mechanical-engineering",
  },
];

  return (
    <header className="relative z-2">
    <div className="justify-between items-center bg-primary px-5 hidden lg:flex">
        <div className="">
            <Link
                  href="/events"
                  className="relative cursor-pointer zoom-icon w-full inline-flex items-center justify-center overflow-hidden rounded-sm px-3 py-1 text-sm font-semibold font-Jakarta text-white transition-colors duration-500 before:absolute before:inset-0 before:bg-primary before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-x-100"
                >
              <span className="relative z-1">
               <Image className="" height={36} width={180} src={'/images/aboutus/icons/Upcoming-Events.png'} alt="Upcoming Events" />
              </span>
            </Link>
        </div>
        <div className="w-90">
          <input 
            value={query}
            onChange={e => setQuery(e.target.value)}
            name="query"
            className="outline text-sm w-full bg-white rounded-full px-4 py-1 outline-zinc-400 border-0" 
            placeholder="Search Courses" />
        </div>
        <div className="grid grid-cols-2 gap-2 justify-center items-center">
             <div className="">
                <Link className="text-white text-sm flex justify-center items-center gap-2 font-Jakarta" href="tel:+919650133355"><MdOutlinePhoneIphone className="size-5 inline-block"/>&nbsp;+91 9650133355</Link>
             </div>
             <ul className="flex justify-center items-center gap-3 px-3 py-3">
               <li><Link className="" href={''}><FaInstagram className="text-white size-5 inline-block" /></Link></li>
               <li><Link className="" href={''}><FaTwitter className="text-white size-5 inline-block" /></Link></li>
               <li><Link className="" href={''}><FaFacebook className="text-white size-5 inline-block" /></Link></li>
               <li><Link className="" href={''}><FaYoutube className="text-white size-5 inline-block" /></Link></li>
               <li><Link className="" href={''}><FaLinkedin className="text-white size-5 inline-block" /></Link></li>
             </ul>
        </div>
    </div>
    <div className="flex justify-between items-center px-5 py-3">
       <div className="">
          <Link className="" href={'/'}><Image className="" src={'/images/logos/IE-Logo.png'} height={320} width={180} alt="Indo European Study Abroad Consultancy"/></Link>
       </div>
      <ul className="lg:flex justify-center items-center gap-5 hidden">
              <li className="font-Jakarta"><Link className="text-md lg:text-base font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-1 after:w-18 after:rounded-full after:bg-linear-to-r after:from-secondary after:to-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-500 after:ease-in-out hover:after:origin-right hover:after:scale-x-100" href={'/about'}>About Us</Link></li>
              <li className="relative group">
                <span className="text-md lg:text-base font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-1 after:w-22 after:rounded-full after:bg-linear-to-r after:from-secondary after:to-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-500 after:ease-in-out hover:after:origin-right hover:after:scale-x-100">Destinations&nbsp;<MdKeyboardArrowDown className="size-4 inline-block group-hover:rotate-180 transition-all duration-300 ease-in-out"/></span>
                <ul className="absolute z-2 p-5 grid grid-cols-1 md:grid-cols-2 space-x-4 space-y-4 top-12 left-0 rounded-md bg-white w-120 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <li className="font-Jakarta"><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-sm lg:text-md" href="/destinations/study-in-australia"><Image className="rounded-full w-5 h-5" src={'/images/flags/australia.svg'} width={5} height={5} alt="study in australia"/>&nbsp;&nbsp;Study in Australia</Link></li>
                    <li className="font-Jakarta"><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-sm lg:text-md" href="/destinations/study-in-canada"><Image className="rounded-full w-5 h-5" src={'/images/flags/canada.svg'} width={5} height={5} alt="study in canada"/>&nbsp;&nbsp;Study in Canada</Link></li>
                    <li className="font-Jakarta"><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-sm lg:text-md" href="/destinations/study-in-new-zealand"><Image className="rounded-full w-5 h-5" src={'/images/flags/new-zealand.svg'} width={5} height={5} alt="study in new zealand"/>&nbsp;&nbsp;Study in New Zealand</Link></li>
                    <li className="font-Jakarta"><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-sm lg:text-md" href="/destinations/study-in-singapore"><Image className="rounded-full w-5 h-5" src={'/images/flags/singapore.svg'} width={5} height={5} alt="study in singapore"/>&nbsp;&nbsp;Study in Singapore</Link></li>
                    <li className="font-Jakarta"><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-sm lg:text-md" href="/destinations/study-in-uk"><Image className="rounded-full w-5 h-5" src={'/images/flags/uk.jpg'} width={5} height={5} alt="study in uk"/>&nbsp;&nbsp;Study in UK</Link></li>
                    <li className="font-Jakarta"><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-sm lg:text-md" href="/destinations/study-in-usa"><Image className="rounded-full w-5 h-5" src={'/images/flags/usa.jpg'} width={5} height={5} alt="study in usa"/>&nbsp;&nbsp;Study in USA</Link></li>
                    <li className="font-Jakarta"><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-sm lg:text-md" href="/destinations/study-in-ireland"><Image className="rounded-full w-5 h-5" src={'/images/flags/ireland.svg'} width={5} height={5} alt="study in ireland"/>&nbsp;&nbsp;Study in Ireland</Link></li>
                    <li className="font-Jakarta relative group/europe"><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-sm lg:text-md" href="/destinations/study-in-ireland"><Image className="rounded-full w-5 h-5" src={'/images/flags/europe.svg'} width={5} height={5} alt="study in europe"/>&nbsp;&nbsp;Study in Europe &nbsp;<MdKeyboardArrowDown className="size-4 inline-block group-hover/europe:rotate-180 transition-all duration-300 ease-in-out"/></Link>
                    <ul className="absolute z-5 p-5 grid grid-cols-1 md:grid-cols-2 space-x-4 space-y-4 top-12 left-0 rounded-md bg-white w-120 shadow-xl opacity-0 invisible group-hover/europe:opacity-100 group-hover/europe:visible transition-all duration-300 ease-in-out">
                      <li className="font-Jakarta"><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-sm lg:text-md" href="/destinations/study-in-germany"><Image className="rounded-full w-5 h-5" src={'/images/flags/germany.svg'} width={5} height={5} alt="study in germany"/>&nbsp;&nbsp;Study in Germany</Link></li>
                      <li className="font-Jakarta"><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-sm lg:text-md" href="/destinations/study-in-denmark"><Image className="rounded-full w-5 h-5" src={'/images/flags/denmark.svg'} width={5} height={5} alt="study in denmark"/>&nbsp;&nbsp;Study in Denmark</Link></li>
                      <li className="font-Jakarta"><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-sm lg:text-md" href="/destinations/study-in-finland"><Image className="rounded-full w-5 h-5" src={'/images/flags/finland.svg'} width={5} height={5} alt="study in finland"/>&nbsp;&nbsp;Study in Finland</Link></li>
                      <li className="font-Jakarta"><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-sm lg:text-md" href="/destinations/study-in-latvia"><Image className="rounded-full w-5 h-5" src={'/images/flags/latvia.svg'} width={5} height={5} alt="study in latvia"/>&nbsp;&nbsp;Study in Latvia</Link></li>
                      <li className="font-Jakarta"><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-sm lg:text-md" href="/destinations/study-in-lithuania"><Image className="rounded-full w-5 h-5" src={'/images/flags/lithuania.jpg'} width={5} height={5} alt="study in lithuania"/>&nbsp;&nbsp;Study in Lithuania</Link></li>
                      <li className="font-Jakarta"><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-sm lg:text-md" href="/destinations/study-in-france"><Image className="rounded-full w-5 h-5" src={'/images/flags/france.jpg'} width={5} height={5} alt="study in france"/>&nbsp;&nbsp;Study in France</Link></li>
                      <li className="font-Jakarta"><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-sm lg:text-md" href="/destinations/study-in-sweden"><Image className="rounded-full w-5 h-5" src={'/images/flags/sweden.svg'} width={5} height={5} alt="study in sweden"/>&nbsp;&nbsp;Study in Sweden</Link></li>
                    </ul>
                    </li>
                </ul>
              </li>
              <li className="relative group">
                <Link className="" href={'/services'}><span className="text-md lg:text-base font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-1 after:w-14 after:rounded-full after:bg-linear-to-r after:from-secondary after:to-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-500 after:ease-in-out hover:after:origin-right hover:after:scale-x-100">Services</span></Link>
                {/* <ul className="absolute z-2 p-5 grid grid-cols-1 md:grid-cols-2 space-x-4 space-y-4 top-12 left-0 rounded-md bg-white w-120 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <li className="hover:bg-primary/5 border-s-2 border-white hover:border-primary p-2 transition-colors duration-300 ease-in-out rounded-md font-Jakarta"><Link className="" href="/services/admission">Admission<span className="text-xs block">Expert guidance for hassle-free university admissions.</span></Link></li>
                    <li className="hover:bg-primary/5 border-s-2 border-white hover:border-primary p-2 transition-colors duration-300 ease-in-out rounded-md font-Jakarta"><Link className="" href="/services/visa">Visa<span className="text-xs block">Expert visa guidance for a smooth approval process.</span></Link></li>
                    <li className="hover:bg-primary/5 border-s-2 border-white hover:border-primary p-2 transition-colors duration-300 ease-in-out rounded-md font-Jakarta"><Link className="" href="/services/accommodation">Accommodation<span className="text-xs block">Step-by-step guidance from application to admission.</span></Link></li>
                    <li className="hover:bg-primary/5 border-s-2 border-white hover:border-primary p-2 transition-colors duration-300 ease-in-out rounded-md font-Jakarta"><Link className="" href="/services/education-loan">Education Loan<span className="text-xs block">Affordable loan solutions for your study abroad plans.</span></Link></li>
                </ul> */}
              </li>
              <li className="font-Jakarta font-semibold"><Link className="text-md lg:text-base font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-1 after:w-10 after:rounded-full after:bg-linear-to-r after:from-secondary after:to-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-500 after:ease-in-out hover:after:origin-right hover:after:scale-x-100" href={'/blogs'}>Blogs</Link></li>
              <li className="font-Jakarta font-semibold"><Link className="text-md lg:text-base font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-1 after:w-22 after:rounded-full after:bg-linear-to-r after:from-secondary after:to-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-500 after:ease-in-out hover:after:origin-right hover:after:scale-x-100" href={'/contact'}>Contact Us</Link></li>
      </ul>
      <div className=""> 
        <Link
          href="https://zoom.us/j/91022278457#success"
          target="_blank"
          className="hidden lg:block">
          <Image className="zoom-icon" height={50} width={200} src={'/images/logos/zoom-icon.png'} alt="zoom icon to connect with experts" />
        </Link>
        <RiMenu3Fill
          className="size-8 cursor-pointer lg:hidden block"
          onClick={() => setIsOpen(true)}
          />
      </div>
        <div
      className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-xl z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
      <div className="flex justify-between items-center p-5">
          <Link className="" href={'https://zoom.us/j/91022278457#success'} target="_blank">
          <Image
              src="/images/logos/zoom-icon.png"
              className="zoom-icon"
              width={150}
              height={50}
              alt="Logo"
          />
          </Link>
          <IoClose
              className="size-8 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
          />
      </div>

  <nav className="p-5 text-white bg-primary h-full">
    <Link
      href="/about"
      className="block py-4 font-Jakarta text-lg font-semibold"
    >
      About Us
    </Link>
    <div className="py-4">
      <button
        onClick={() => toggleMenu("destinations")}
        className="w-full flex justify-between items-center"
      >
        <span className="font-Jakarta text-lg font-semibold">
          Destinations
        </span>

        <MdKeyboardArrowDown
          className={`transition-transform duration-300 ${
            openMenus.destinations ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          openMenus.destinations
            ? "grid-rows-[1fr] pb-4"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-2 mt-3">
            <Link href="/destinations/study-in-australia" className="flex items-center p-2">
              <Image
                src="/images/flags/australia.svg"
                alt="Australia"
                width={20}
                height={20}
                className="rounded-full mr-2"
              />
              Study in Australia
            </Link>
            <Link href="/destinations/study-in-canada" className="flex items-center p-2">
              <Image
                src="/images/flags/canada.svg"
                alt="Canada"
                width={20}
                height={20}
                className="rounded-full mr-2"
              />
              Study in Canada
            </Link>
            <Link href="/destinations/study-in-new-zealand" className="flex items-center p-2">
              <Image
                src="/images/flags/new-zealand.svg"
                alt="New Zealand"
                width={20}
                height={20}
                className="rounded-full mr-2"
              />
              Study in New Zealand
            </Link>
            <Link href="/destinations/study-in-singapore" className="flex items-center p-2">
              <Image
                src="/images/flags/singapore.svg"
                alt="Singapore"
                width={20}
                height={20}
                className="rounded-full mr-2"
              />
              Study in Singapore
            </Link>
            <Link href="/destinations/study-in-uk" className="flex items-center p-2">
              <Image
                src="/images/flags/UK.jpg"
                alt="UK"
                width={20}
                height={20}
                className="rounded-full mr-2"
              />
              Study in UK
            </Link>
            <Link href="/destinations/study-in-usa" className="flex items-center p-2">
              <Image
                src="/images/flags/usa.jpg"
                alt="USA"
                width={20}
                height={20}
                className="rounded-full mr-2"
              />
              Study in USA
            </Link>
            <Link href="/destinations/study-in-ireland" className="flex items-center p-2">
              <Image
                src="/images/flags/ireland.svg"
                alt="Ireland"
                width={20}
                height={20}
                className="rounded-full mr-2"
              />
              Study in Ireland
            </Link>
            <div className="">
              <button
                onClick={() => toggleMenu("europe")}
                className="w-full flex items-center p-2 font-Jakarta"
              >
                <Image className="rounded-full mr-2" width={20} height={20} src={'/images/flags/europe.svg'} alt="study in europe" />
                <span>Study in Europe</span>&nbsp;&nbsp;
                <MdKeyboardArrowDown
                  className={`transition-transform duration-300 ${
                    openMenus.europe ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ${
                  openMenus.europe
                    ? "grid-rows-[1fr] mt-2"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-2 pl-2">
                    <Link href="/destinations/study-in-germany" className="flex items-center p-2">
                      <Image
                        src="/images/flags/germany.svg"
                        alt="Germany"
                        width={20}
                        height={20}
                        className="rounded-full mr-2"
                      />
                      Study in Germany
                    </Link>
                    <Link href="/destinations/study-in-denmark" className="flex items-center p-2">
                      <Image
                        src="/images/flags/denmark.svg"
                        alt="Denmark"
                        width={20}
                        height={20}
                        className="rounded-full mr-2"
                      />
                      Study in Denmark
                    </Link>
                    <Link href="/destinations/study-in-finland" className="flex items-center p-2">
                      <Image
                        src="/images/flags/finland.svg"
                        alt="Finland"
                        width={20}
                        height={20}
                        className="rounded-full mr-2"
                      />
                      Study in Finland
                    </Link>
                    <Link href="/destinations/study-in-latvia" className="flex items-center p-2">
                      <Image
                        src="/images/flags/latvia.svg"
                        alt="Latvia"
                        width={20}
                        height={20}
                        className="rounded-full mr-2"
                      />
                      Study in Latvia
                    </Link>
                    <Link href="/destinations/study-in-lithuania" className="flex items-center p-2">
                      <Image
                        src="/images/flags/lithuania.jpg"
                        alt="Lithuania"
                        width={20}
                        height={20}
                        className="rounded-full mr-2"
                      />
                      Study in Lithuania
                    </Link>
                    <Link href="/destinations/study-in-france" className="flex items-center p-2">
                      <Image
                        src="/images/flags/france.jpg"
                        alt="France"
                        width={20}
                        height={20}
                        className="rounded-full mr-2"
                      />
                      Study in France
                    </Link>
                    <Link href="/destinations/study-in-sweden" className="flex items-center p-2">
                      <Image
                        src="/images/flags/sweden.svg"
                        alt="Sweden"
                        width={20}
                        height={20}
                        className="rounded-full mr-2"
                      />
                      Study in Sweden
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="">
      <button
        onClick={() => toggleMenu("services")}
        className="w-full flex justify-between items-center py-4"
      >
        <span className="font-Jakarta text-lg font-semibold">Services</span>
        <MdKeyboardArrowDown
          className={`transition-transform duration-300 ${
            openMenus.services ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 overflow-hidden ${
          openMenus.services
            ? "grid-rows-[1fr] pb-4"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden grid grid-cols-1 gap-3">
          <li className="hover:bg-primary/5 border-s-2 border-white hover:border-primary p-2 transition-colors duration-300 ease-in-out rounded-md font-Jakarta"><Link className="" href="/services/admission">Admission<span className="text-xs block">Expert guidance for hassle-free university admissions.</span></Link></li>
          <li className="hover:bg-primary/5 border-s-2 border-white hover:border-primary p-2 transition-colors duration-300 ease-in-out rounded-md font-Jakarta"><Link className="" href="/services/visa">Visa<span className="text-xs block">Expert visa guidance for a smooth approval process.</span></Link></li>
          <li className="hover:bg-primary/5 border-s-2 border-white hover:border-primary p-2 transition-colors duration-300 ease-in-out rounded-md font-Jakarta"><Link className="" href="/services/accommodation">Accommodation<span className="text-xs block">Step-by-step guidance from application to admission.</span></Link></li>
          <li className="hover:bg-primary/5 border-s-2 border-white hover:border-primary p-2 transition-colors duration-300 ease-in-out rounded-md font-Jakarta"><Link className="" href="/services/education-loan">Education Loan<span className="text-xs block">Affordable loan solutions for your study abroad plans.</span></Link></li>
        </div>
      </div>
    </div>

    <div className="">
      <Link
        href="/blogs"
        className="block py-4 font-Jakarta text-lg font-semibold"
      >
        Blogs
      </Link>
    </div>

    <Link
      href="/contact"
      className="block py-4 font-Jakarta text-lg font-semibold"
    >
      Contact Us
    </Link>
        <Link
          href="https://zoom.us/j/91022278457#success"
          target="_blank"
          className="relative mt-10 border border-white inline-flex items-center justify-center overflow-hidden rounded-sm bg-linear-to-r from-secondary to-primary w-full text-md py-2 font-semibold font-Jakarta text-white transition-colors duration-500 before:absolute before:inset-0 before:bg-primary before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-x-100">
          <span className="relative z-10">
            Get Free Consultation
          </span>
        </Link>
        <div className="grid grid-cols-1 mt-8 space-y-8 justify-center items-center">
             <ul className="flex justify-center items-center gap-3 mx-auto">
               <li><Link className="" href={''}><FaInstagram className="text-white size-5 inline-block" /></Link></li>
               <li><Link className="" href={''}><FaTwitter className="text-white size-5 inline-block" /></Link></li>
               <li><Link className="" href={''}><FaFacebook className="text-white size-5 inline-block" /></Link></li>
               <li><Link className="" href={''}><FaYoutube className="text-white size-5 inline-block" /></Link></li>
               <li><Link className="" href={''}><FaLinkedin className="text-white size-5 inline-block" /></Link></li>
             </ul>
          <div className="grid grid-cols-2 gap-4">
                <Link className="text-white text-xs flex justify-center items-center gap-2 font-Jakarta" href=""><FaMoneyCheck className="size-5 inline-block"/>&nbsp;Online Payment</Link>
                <Link className="text-white text-xs flex justify-center items-center gap-2 font-Jakarta" href=""><MdOutlinePhoneIphone className="size-5 inline-block"/>&nbsp;+91 9650133355</Link>
          </div>
        </div>
  </nav>
  </div>
    </div>
    {/* <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
       <div className="md:grid grid-cols-4 flex justify-between items-center gap-5 py-4">
        <div className="col-span-1 flex">
          <div className="me-auto">
            <ul className="lg:flex items-center gap-5 hidden">
                <li><FaMobileAlt className="size-3 inline-block"/>&nbsp;<Link className="text-xs md:text-sm" href="tel:+919650133355">+91 9650133355</Link></li>
                <li><MdOutlinePayments className="size-3 inline-block"/>&nbsp;<Link className="text-xs md:text-sm" href="https://payment.indoeuropean.in/payment-link.aspx">Pay Online</Link></li>
            </ul>
            <Link className="mt-5 min-w-20 md:min-w-30" href={'/'}><Image className="min-w-20 md:min-w-30 lg:w-55" height={45} width={200} src={"/images/logos/IE-Logo.png"} alt="Indo European Study Abroad Consultancy"/></Link>
        </div>
        </div>
        <div className='col-span-2 flex justify-center items-center flex-col'>
            <div className="flex items-center border border-primary/50 rounded-lg p-2 w-full mb-0">
                <CiSearch className="size-6 inline-block"/>&nbsp;<input className="w-full outline-0 rounded-md text-sm" placeholder="Search Courses, Universities and Country"/>
            </div>
             <ul className="lg:flex justify-center items-center gap-5 hidden lg:mt-5">
              <li className=""><Link className="text-md lg:text-base" href={'/about'}>About Us</Link></li>
              <li className="relative group">
                <span className="cursor-pointer text-md lg:text-base">Destinations&nbsp;<MdKeyboardArrowDown className="size-4 inline-block group-hover:rotate-180 transition-all duration-300 ease-in-out"/></span>
                <ul className="absolute z-2 p-5 grid grid-cols-1 md:grid-cols-2 space-x-4 space-y-4 top-12 left-0 rounded-md bg-white w-120 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <li className=""><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-base lg:text-base" href="/destinations/study-in-latvia"><Image className="rounded-full w-5 h-5" src={'/images/flags/latvia.jpg'} width={5} height={5} alt="study in latvia"/>&nbsp;Study in Latvia</Link></li>
                    <li className=""><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-base lg:text-base" href="/destinations/study-in-latvia"><Image className="rounded-full w-5 h-5" src={'/images/flags/lithuania.jpg'} width={5} height={5} alt="study in latvia"/>&nbsp;Study in Lithuania</Link></li>
                    <li className=""><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-base lg:text-base" href="/destinations/study-in-latvia"><Image className="rounded-full w-5 h-5" src={'/images/flags/germany.jpg'} width={5} height={5} alt="study in latvia"/>&nbsp;Study in Germany</Link></li>
                    <li className=""><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-base lg:text-base" href="/destinations/study-in-latvia"><Image className="rounded-full w-5 h-5" src={'/images/flags/uk.jpg'} width={5} height={5} alt="study in latvia"/>&nbsp;Study in UK</Link></li>
                    <li className=""><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-base lg:text-base" href="/destinations/study-in-latvia"><Image className="rounded-full w-5 h-5" src={'/images/flags/australia.jpg'} width={5} height={5} alt="study in latvia"/>&nbsp;Study in Australia</Link></li>
                    <li className=""><Link className="flex items-center hover:bg-primary/5 border-s-2 border-white hover:border-primary transition-colors duration-300 ease-in-out rounded-md px-2 py-2 text-base lg:text-base" href="/destinations/study-in-latvia"><Image className="rounded-full w-5 h-5" src={'/images/flags/usa.jpg'} width={5} height={5} alt="study in latvia"/>&nbsp;Study in USA</Link></li>
                </ul>
              </li>
              <li className="relative group">
                <span className="cursor-pointer text-md lg:text-base">Services&nbsp;<MdKeyboardArrowDown className="size-4 inline-block group-hover:rotate-180 transition-all duration-300 ease-in-out"/></span>
                <ul className="absolute z-2 p-5 grid grid-cols-1 md:grid-cols-2 space-x-4 space-y-4 top-12 left-0 rounded-md bg-white w-120 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <li className="hover:bg-primary/5 border-s-2 border-white hover:border-primary p-2 transition-colors duration-300 ease-in-out rounded-md"><Link className="" href="/services/admission">Admission<span className="text-xs block">Expert guidance for hassle-free university admissions.</span></Link></li>
                    <li className="hover:bg-primary/5 border-s-2 border-white hover:border-primary p-2 transition-colors duration-300 ease-in-out rounded-md"><Link className="" href="/services/visa">Visa<span className="text-xs block">Expert visa guidance for a smooth approval process.</span></Link></li>
                    <li className="hover:bg-primary/5 border-s-2 border-white hover:border-primary p-2 transition-colors duration-300 ease-in-out rounded-md"><Link className="" href="/services/accommodation">Accommodation<span className="text-xs block">Step-by-step guidance from application to admission.</span></Link></li>
                    <li className="hover:bg-primary/5 border-s-2 border-white hover:border-primary p-2 transition-colors duration-300 ease-in-out rounded-md"><Link className="" href="/services/education-loan">Education Loan<span className="text-xs block">Affordable loan solutions for your study abroad plans.</span></Link></li>
                </ul>
              </li>
              <li className=""><Link className="text-md lg:text-base" href={'/blogs'}>Blogs</Link></li>
              <li className=""><Link className="text-md lg:text-base" href={'/contact'}>Contact Us</Link></li>
             </ul>
        </div>
        <div className="col-span-1 flex">
            <Link className="hidden lg:block ms-auto" href={'https://zoom.us/j/91022278457#success'} target="_blank"><Image width={100} height={60} className="" src={'/images/logos/zoom.png'} alt="join via zoom icon"/></Link>
            <div className="block lg:hidden ms-auto">
              <RiMenu3Fill onClick={() => setIsOpen(!isOpen)} className="size-8" />
            </div>
        </div>
       </div>
    </div> */}
    {/* <div
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
        <Link
          href="/blogs"
          className="block py-4"
        >
          Blogs
        </Link>
      </div>

      <Link
        href="/contact"
        className="block py-4"
      >
        Contact Us
      </Link>
    </nav>
    </div> */}
    </header>
  )
}

export default Header