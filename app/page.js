import Image from "next/image";
import Link from "next/link";
import {FaArrowRightLong } from "react-icons/fa6";
import HeroSlider from "./components/HeroSlider";
import Marquee from "react-fast-marquee";
import { FiExternalLink } from "react-icons/fi";
import Reviews from "./components/Reviews";
import Heading from "./components/Heading";
import CourseCard from "./components/CourseCard";
import { services, flags, universitiesLogos } from "@/public/data/homedata";
import { blogs } from "@/public/data/blogs";


export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
       <HeroSlider />
       <section className="max-w-6xl mx-auto">
          <div className="py-10 px-10">
                <Heading heading={'Why Students Trust '} colorHeading={'Us ?'}/>
                <p className="text-base lg:text-lg font-monorope text-justify mt-5 lg:text-center">We simplify every step of your study abroad journey with expert counselling, university admissions, visa guidance, scholarships, and dedicated support from start to finish.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5">
                  {services.map((service, index) => {
                   return   <Link href={service.link} key={service.id} className="px-5 py-5 space-y-3 bg-linear-to-b from-primary/10 to-secondary/10 rounded-md hover:scale-105 duration-500 transition-transform ease-in-out">
                     <Image className="rounded-full mx-auto" height={60} width={60} src={service.image} alt="career counselling"/>
                     <h6 className="text-lg lg:text-xl font-semibold text-center">{service.title}</h6>
                     <p className="text-sm lg:text-md text-center">{service.subtitle}</p>
                  </Link>
                  })}
            </div>
          </div>
       </section>
      <section className="py-12 bg-linear-to-r from-primary/10 to-secondary/10 w-full">
          <Heading heading={'Our Partner '} colorHeading={'Universities'}/>
          <div className="mt-10 space-y-5 max-w-4xl mx-auto overflow-hidden">
             <Marquee speed={50} pauseOnHover>
                 {universitiesLogos.map((universities, index) => {
                  return <Image className="mx-5 h-20 w-auto shrink-0 rounded-md" height={80} width={125} src={universities.img_url} alt="University" key={index}/>
                 })}
             </Marquee>
             <Marquee speed={50} direction="right" pauseOnHover>
                 {universitiesLogos.reverse().map((universities, index) => {
                  return <Image className="mx-5 h-20 w-auto shrink-0 rounded-md" height={80} width={125} src={universities.img_url} alt="University" key={index}/>
                 })}
             </Marquee>
          </div>
      </section>
      <section className="max-w-6xl mx-auto">
       <div className="py-12 overflow-hidden px-10">
          <Heading heading={'Explore International Degree '} colorHeading={'Programs'} />
          <div className="py-12 overflow-hidden">
            <CourseCard />
          </div>
          <div className="mt-10 text-end">
              <Link className="font-semibold ms-auto text-sm lg:text-md text-white bg-primary py-3 px-4 rounded-md hover:bg-primary/90 transition-all ease-in-out duration-500" href={'/courses'}>Explore Courses&nbsp;<FiExternalLink className="inline-block" /></Link>
          </div>
       </div>
      </section>
      <section className="py-12 bg-linear-to-r from-primary/10 to-secondary/10 w-full">
        <Heading heading={"Choose Among Top Study "} colorHeading={'Destinations'}/>
        <div className="mt-10 overflow-hidden max-w-6xl mx-auto px-5">
          <Marquee speed={50} pauseOnHover gradient={false}>
            {flags.map((flag, index) => (
              <div
                key={index}
                className="relative group mx-3 overflow-hidden rounded-lg"
              >
                <Image
                  src={flag.image}
                  alt={flag.alt}
                  width={250}
                  height={150}
                  className="rounded-lg h-37.5 transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <Link
                  href={flag.url}
                  className="absolute inset-0 flex items-center justify-center
                            bg-black/30 opacity-0
                            group-hover:opacity-100
                            transition-opacity duration-500"
                >
                  <h4
                    className="font-Jakarta text-2xl font-semibold text-white
                              transform translate-y-3
                              group-hover:translate-y-0
                              transition-transform duration-500"
                  >
                    {flag.text}
                  </h4>
                </Link>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
      <section className="max-w-6xl mx-auto">
        <div className="py-12">
          <Heading heading={"Hear From Our "} colorHeading={"Students"}/>
          <Reviews />
        </div>
      </section>
      <section className="w-full bg-linear-to-r from-primary/10 to-secondary/10 py-16 rounded-b-4xl">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-center justify-between">
            <Heading heading={"Our Latest "} colorHeading={'Blogs'}/>
            <Link
              href="/blogs"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/90"
            >
              More Blogs
              <FiExternalLink className="ml-2 inline-block" />
            </Link>
          </div>

<div className="grid gap-6 lg:grid-cols-2 lg:h-150">
  <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md">
    <Image
      src={blogs[0].image}
      alt={blogs[0].title}
      width={540}
      height={360}
      className="h-60 w-full object-cover"
    />

    <div className="flex flex-1 flex-col p-6">
      <span className="mb-3 text-sm font-medium text-gray-500">
        {blogs[0].date}
      </span>

      <h3 className="font-Jakarta text-lg md:text-xl lg:text-2xl font-bold text-primary">
        {blogs[0].title}
      </h3>

      <p className="mt-4 flex-1 text-sm md:text-md lg:text-lg font-manrope leading-7 text-gray-600">
        {blogs[0].description.slice(0, 310)}{"..."}
      </p>

      <Link
        href={`/blogs/${blogs[0].slug}`}
        className="mt-4 inline-flex w-fit text-sm md:text-md lg:text-lg items-center rounded-md bg-primary px-4 py-2 text-white transition hover:bg-primary/90"
      >
        Read More
        <FaArrowRightLong className="ml-2" />
      </Link>
    </div>
  </div>
  <div className="flex h-full flex-col gap-6">
    {blogs.slice(1, 3).map((blog) => (
      <div
        key={blog.id}
        className="flex flex-1 overflow-hidden rounded-xl bg-white shadow-md"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          width={280}
          height={250}
          className="w-[40%] object-cover"
        />

        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            <span className="text-sm font-medium text-gray-500">
              {blog.date}
            </span>

            <h4 className="mt-2 font-Jakarta text-sm md:text-lg lg:text-xl font-bold text-primary">
              {blog.title}
            </h4>

            <p className="mt-3 text-xs md:text-sm leading-6 text-gray-600 line-clamp-3">
              {blog.description.slice(0, 150)}{"..."}
            </p>
          </div>

          <Link
            href={`/blogs/${blog.slug}`}
            className="mt-4 inline-flex items-center font-semibold text-primary transition hover:text-secondary"
          >
            Read More
            <FaArrowRightLong className="ml-2" />
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>
       {/* <SwiperSlider heroSlides={heroSlides}/> */}
        {/* <section className="bg-secondary/2 bg-blur shadow-md shadow-[#ccc] py-10 max-w-6xl w-full rounded-2xl">
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            <div className="flex justify-center items-center gap-3">
               <span className="border border-secondary w-12 h-12 flex justify-center items-center rounded-full"><FaEarthAsia className="size-5 inline-block text-secondary"/></span>
               <div className="space-y-1">
               <h5 className="text-xl lg:text-2xl font-bold text-primary text-center"><CountNum start={0} end={41} delay={0} duration={5}/>+</h5>
               <p className="text-sm lg:text-md text-primary font-semibold">Countries</p>
               </div>
            </div>
            <div className="flex justify-center items-center gap-3">
               <span className="border border-secondary w-12 h-12 flex justify-center items-center rounded-full"><FaUniversity className="size-5 inline-block text-secondary"/></span>
               <div className="space-y-1">
               <h5 className="text-xl lg:text-2xl font-bold text-primary text-center"><CountNum start={0} end={126} delay={0} duration={5}/>+</h5>
               <p className="text-sm lg:text-md text-primary font-semibold">Universities</p>
               </div>
            </div>
            <div className="flex justify-center items-center gap-3">
               <span className="border border-secondary w-12 h-12 flex justify-center items-center rounded-full"><FaBookReader className="size-5 inline-block text-secondary"/></span>
               <div className="space-y-1">
               <h5 className="text-xl lg:text-2xl font-bold text-primary text-center"><CountNum start={0} end={18} delay={0} duration={5}/>K+</h5>
               <p className="text-sm lg:text-md text-primary font-semibold">Courses</p>
               </div>
            </div>
            <div className="flex justify-center items-center gap-3">
               <span className="border border-secondary w-12 h-12 flex justify-center items-center rounded-full"><PiStudent className="size-6 inline-block text-secondary"/></span>
               <div className="space-y-1">
                <h5 className="text-xl lg:text-2xl font-bold text-primary text-center"><CountNum start={0} end={510} delay={0} duration={5}/>K+</h5>
                <p className="text-sm lg:text-md text-primary font-semibold">Student Assisted</p>
               </div>
            </div>
         </div>
       </section> */}
       {/* <section className="mx-auto max-w-6xl">
            <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center space-y-5">
            <div className="mb-0 flex justify-center items-center">
                 <Image className="mx-auto" height={600} width={480} src={'/images/aboutus/aboutus-1.png'} alt={"About Indo European Study Abroad Consultants"} />
            </div>
              <div className="py-10 px-10">
              <div className="bg-secondary/10 text-secondary rounded-bl-full rounded-tr-full px-8 py-1 inline-block">
              <h4 className="text-base md:text-lg lg:text-xl font-semibold font-outfit">About Us</h4>
              </div>
              <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary font-outfit mt-5">Turn ambitions into admissions — it all starts with the Right Guidance</h4>
              <p className="text-sm md:text-md lg:text-base font-manrope mt-5">Get in touch with our expert counsellors to simplify the process, all the way from university applications to visa clearance</p>
              <ul className="my-5 space-y-3">
                <li className="font-semibold flex items-center gap-1"><MdOutlineDoubleArrow className="size-6 inline-block text-secondary"/>&nbsp;20+ Years of Excellence in global education consultancy.</li>
                <li className="font-semibold flex items-center gap-1"><MdOutlineDoubleArrow className="size-6 inline-block text-secondary"/>&nbsp;Trusted by Thousands of Indian Students for overseas education guidance.</li>
                <li className="font-semibold flex items-center gap-1"><MdOutlineDoubleArrow className="size-6 inline-block text-secondary"/>&nbsp;Strong Partnerships with prestigious international universities.</li>
                <li className="font-semibold flex items-center gap-1"><MdOutlineDoubleArrow className="size-6 inline-block text-secondary"/>&nbsp;Expert Admission Guidance for top study destinations worldwide.</li>
                <li className="font-semibold flex items-center gap-1"><MdOutlineDoubleArrow className="size-6 inline-block text-secondary"/>&nbsp;Personalized Career & Education Counseling for every student.</li>
              </ul> 
              <div className="mt-12 flex justify-end">
              <Link className="text-sm py-2 px-4 rounded-full text-primary border border-primary hover:bg-primary hover:text-white transition-colors ease-in-out duration-500 inline-blocks lg:text-md font-manrope" href={'/about'}>Read More &nbsp;<FaArrowRightLong className="size-4 inline-block"/></Link>
              </div>
            </div>
            </div>
            </div>
       </section> */}
       {/* <section className="">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-2xl lg:text-4xl font-semibold font-outline mt-5">Our Services</h2>
            <p className="text-center text-lg lg:text-xl font-manrope mt-3">Everything you need for a successful study abroad journey—under one roof. From choosing the right university to securing your visa, our experienced team provides personalized guidance at every stage.</p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 space-x-5 justify-center items-center">
              <div className="border-2 border-primary/10 px-3 py-3 relative max-w-90">
                 <span className="rounded-b-full rounded-t-10 w-12 h-12 shadow-sm shadow-primary/50 border border-primary flex justify-center items-center absolute left-1/2 -top-5 bg-primary"><FaUserGraduate className="size-6 inline-block text-white" /></span>
                 <h4 className="text-lg lg:text-xl font-semibold font-outline mt-10">Career Counseling</h4>
                 <h6 className="mt-2 text-md lg:text-base font-monrope">Find the right path for your future.</h6>
                 <ul className="my-2">
                   <li className="text-md text-justify lg:text-base flex items-center gap-2"><FaRegStar className="size-5 inline-block text-secondary" />Personalized career and study abroad counseling</li>
                   <li className="text-md text-justify lg:text-base flex items-center gap-2"><FaRegStar className="size-5 inline-block text-secondary" />University and course selection based on your goals</li>
                   <li className="text-md text-justify lg:text-base flex items-center gap-2"><FaRegStar className="size-5 inline-block text-secondary" />One-on-one guidance from experienced advisors</li>
                   <li className="text-md text-justify lg:text-base flex items-center gap-2"><FaRegStar className="size-5 inline-block text-secondary" />Expert advice on global education opportunities</li>
                 </ul>
              </div>
              <div className="border-2 border-primary/10 px-3 py-3 relative max-w-90">
                 <span className="rounded-b-full rounded-t-10 w-12 h-12 shadow-sm shadow-primary/50 border border-primary flex justify-center items-center absolute left-1/2 -top-5 bg-primary"><FaUserGraduate className="size-6 inline-block text-white" /></span>
                 <h4 className="text-lg lg:text-xl font-semibold font-outline mt-10">Career Counseling</h4>
                 <h6 className="mt-2 text-md lg:text-base font-monrope">Find the right path for your future.</h6>
                 <ul className="my-2">
                   <li className="text-md text-justify lg:text-base flex items-center gap-2"><FaRegStar className="size-5 inline-block text-secondary" />Personalized career and study abroad counseling</li>
                   <li className="text-md text-justify lg:text-base flex items-center gap-2"><FaRegStar className="size-5 inline-block text-secondary" />University and course selection based on your goals</li>
                   <li className="text-md text-justify lg:text-base flex items-center gap-2"><FaRegStar className="size-5 inline-block text-secondary" />One-on-one guidance from experienced advisors</li>
                   <li className="text-md text-justify lg:text-base flex items-center gap-2"><FaRegStar className="size-5 inline-block text-secondary" />Expert advice on global education opportunities</li>
                 </ul>
              </div>
              <div className="border-2 border-primary/10 px-3 py-3 relative max-w-90">
                 <span className="rounded-b-full rounded-t-10 w-12 h-12 shadow-sm shadow-primary/50 border border-primary flex justify-center items-center absolute left-1/2 -top-5 bg-primary"><FaUserGraduate className="size-6 inline-block text-white" /></span>
                 <h4 className="text-lg lg:text-xl font-semibold font-outline mt-10">Career Counseling</h4>
                 <h6 className="mt-2 text-md lg:text-base font-monrope">Find the right path for your future.</h6>
                 <ul className="my-2">
                   <li className="text-md text-justify lg:text-base flex items-center gap-2"><FaRegStar className="size-5 inline-block text-secondary" />Personalized career and study abroad counseling</li>
                   <li className="text-md text-justify lg:text-base flex items-center gap-2"><FaRegStar className="size-5 inline-block text-secondary" />University and course selection based on your goals</li>
                   <li className="text-md text-justify lg:text-base flex items-center gap-2"><FaRegStar className="size-5 inline-block text-secondary" />One-on-one guidance from experienced advisors</li>
                   <li className="text-md text-justify lg:text-base flex items-center gap-2"><FaRegStar className="size-5 inline-block text-secondary" />Expert advice on global education opportunities</li>
                 </ul>
              </div>
              <div className="border-2 border-primary/10 px-3 py-3 relative max-w-90">
                 <span className="rounded-b-full rounded-t-10 w-12 h-12 shadow-sm shadow-primary/50 border border-primary flex justify-center items-center absolute left-1/2 -top-5 bg-primary"><FaUserGraduate className="size-6 inline-block text-white" /></span>
                 <h4 className="text-lg lg:text-xl font-semibold font-outline mt-10">Career Counseling</h4>
                 <h6 className="mt-2 text-md lg:text-base font-monrope">Find the right path for your future.</h6>
                 <ul className="my-2">
                   <li className="text-md text-justify lg:text-base flex items-center gap-2"><FaRegStar className="size-5 inline-block text-secondary" />Personalized career and study abroad counseling</li>
                   <li className="text-md text-justify lg:text-base flex items-center gap-2"><FaRegStar className="size-5 inline-block text-secondary" />University and course selection based on your goals</li>
                   <li className="text-md text-justify lg:text-base flex items-center gap-2"><FaRegStar className="size-5 inline-block text-secondary" />One-on-one guidance from experienced advisors</li>
                   <li className="text-md text-justify lg:text-base flex items-center gap-2"><FaRegStar className="size-5 inline-block text-secondary" />Expert advice on global education opportunities</li>
                 </ul>
              </div>
            </div>
          </div>
       </section> */}
    </div>
  );
}
