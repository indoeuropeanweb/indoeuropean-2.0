import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../components/Heading'
import Image from 'next/image';
import { CiPaperplane } from "react-icons/ci";

const page = () => {

  const countries = [
  {
    id: 1,
    title: "Austria",
    image: "/images/flags/europe/austria.png",
  },
  {
    id: 2,
    title: "Bulgaria",
    image: "/images/flags/europe/bulgaria.png",
  },
  {
    id: 3,
    title: "Czech Republic",
    image: "/images/flags/europe/czech-republic.png",
  },
  {
    id: 4,
    title: "Denmark",
    image: "/images/flags/europe/denmark.png",
  },
  {
    id: 5,
    title: "Estonia",
    image: "/images/flags/europe/estonia.png",
  },
  {
    id: 6,
    title: "Finland",
    image: "/images/flags/europe/finland.png",
  },
  {
    id: 7,
    title: "France",
    image: "/images/flags/europe/france.png",
  },
  {
    id: 8,
    title: "Germany",
    image: "/images/flags/europe/germany.png",
  },
  {
    id: 9,
    title: "Greece",
    image: "/images/flags/europe/greece.png",
  },
  {
    id: 10,
    title: "Hungary",
    image: "/images/flags/europe/hungary.png",
  },
  {
    id: 11,
    title: "Ireland",
    image: "/images/flags/europe/ireland.png",
  },
  {
    id: 12,
    title: "Italy",
    image: "/images/flags/europe/italy.png",
  },
  {
    id: 13,
    title: "Latvia",
    image: "/images/flags/europe/latvia.png",
  },
  {
    id: 14,
    title: "Lithuania",
    image: "/images/flags/europe/lithuania.png",
  },
  {
    id: 15,
    title: "Malta",
    image: "/images/flags/europe/malta.png",
  },
  {
    id: 16,
    title: "Netherlands",
    image: "/images/flags/europe/netherlands.png",
  },
  {
    id: 17,
    title: "Norway",
    image: "/images/flags/europe/norway.png",
  },
  {
    id: 18,
    title: "Spain",
    image: "/images/flags/europe/spain.png",
  },
  {
    id: 19,
    title: "Sweden",
    image: "/images/flags/europe/sweden.png",
  },
];

  return (
    <>
      <Breadcrumb imgUrl={'/images/destinations/destinations-back.webp'} title={'Explore European Study Abroad Destinations'}/>
      <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
           <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary text-center'>Explore European Destinations for <span className='text-secondary'>Higher Education</span></h2>
           <p className='text-md lg:text-base font-manrope text-center mt-5'>Europe is a popular destination for Indian students seeking quality education, internationally recognised degrees and global career opportunities. With a wide range of universities, courses and study options, students can choose a destination that matches their academic background, budget and future goals.</p>
           <div className='grid grid-cols-1 lg:grid-cols-2 space-y-3 space-x-3 mt-12'>
               <div className=''>
                    <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary'>Why Choose Europe for <span className='text-secondary'>Higher Education?</span></h2>
                    <p className='text-md lg:text-base font-manrope mt-5'>European countries offer diverse education systems and excellent opportunities for international students. Some key advantages include:</p>
                    <ul className='mt-5 space-y-2'>
                      <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;Globally recognised universities and degrees</li>
                      <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;Wide range of courses and specialisations</li>
                      <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;English-taught programmes</li>
                      <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;Multicultural student environment</li>
                      <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;Scholarship and funding opportunities</li>
                      <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;International career exposure</li>
                      <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;Opportunities to experience different cultures</li>
                    </ul>
               </div>
               <div className=''>
                     <Image className="mx-auto" height={540} width={480} src={"/images/destinations/content/destination-1.png"} alt={"Study Aborad Destinations for Europe"} />
               </div>
           </div>
           <div className='mt-12'>
               <div className=''>
               <Heading heading={"Explore Our European "} colorHeading={"Destinations"} />
               <p className='text-md lg:text-base font-manrope mt-5 text-center'>Explore our destination guides to learn about universities, courses, admission requirements, tuition fees, visa processes and career opportunities in each country.</p>
               </div>
               <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-10 mt-12'>
                {countries.map((item, index) => {
                  return <div className='flex justify-center items-center flex-col gap-5' key={item.id}>
                         <Image className='rounded-md hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer' height={80} width={120} src={item.image} alt={item.title}/>
                         <span className='text-sm lg:text-md font-Jakarta font-semibold'>{item.title}</span>
                  </div>
                })}
               </div>
           </div>
        </div>
      </section>
    </>
  )
}

export default page