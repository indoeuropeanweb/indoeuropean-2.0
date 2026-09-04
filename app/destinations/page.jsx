import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../components/Heading'
import Image from 'next/image';
import Link from 'next/link';
import { CiPaperplane } from "react-icons/ci";
import GlobalForm from '../components/GlobalForm';

const page = () => {

  const countries = [
  {
    id: 1,
    title: "Austria",
    image: "/images/flags/europe/austria.png",
    link: "/destinations/study-in-austria"
  },
  {
    id: 2,
    title: "Bulgaria",
    image: "/images/flags/europe/bulgaria.png",
    link: "/destinations/study-in-bulgaria"
  },
  {
    id: 3,
    title: "Czech Republic",
    image: "/images/flags/europe/czech-republic.png",
    link: "/destinations/study-in-czech-republic"
  },
  {
    id: 4,
    title: "Denmark",
    image: "/images/flags/europe/denmark.png",
    link: "/destinations/study-in-denmark"
  },
  {
    id: 5,
    title: "Estonia",
    image: "/images/flags/europe/estonia.png",
    link: "/destinations/study-in-estonia"
  },
  {
    id: 6,
    title: "Finland",
    image: "/images/flags/europe/finland.png",
    link: "/destinations/study-in-finland"
  },
  {
    id: 7,
    title: "France",
    image: "/images/flags/europe/france.png",
    link: "/destinations/study-in-france"
  },
  {
    id: 8,
    title: "Germany",
    image: "/images/flags/europe/germany.png",
    link: "/destinations/study-in-germany"
  },
  {
    id: 9,
    title: "Greece",
    image: "/images/flags/europe/greece.png",
    link: "/destinations/study-in-greece"
  },
  {
    id: 10,
    title: "Hungary",
    image: "/images/flags/europe/hungary.png",
    link: "/destinations/study-in-hungary"
  },
  {
    id: 11,
    title: "Ireland",
    image: "/images/flags/europe/ireland.png",
    link: "/destinations/study-in-ireland"
  },
  {
    id: 12,
    title: "Italy",
    image: "/images/flags/europe/italy.png",
    link: "/destinations/study-in-italy"
  },
  {
    id: 13,
    title: "Latvia",
    image: "/images/flags/europe/latvia.png",
    link: "/destinations/study-in-latvia"
  },
  {
    id: 14,
    title: "Lithuania",
    image: "/images/flags/europe/lithuania.png",
    link: "/destinations/study-in-lithuania"
  },
  {
    id: 15,
    title: "Malta",
    image: "/images/flags/europe/malta.png",
    link: "/destinations/study-in-malta"
  },
  {
    id: 16,
    title: "Netherlands",
    image: "/images/flags/europe/netherlands.png",
    link: "/destinations/study-in-netherlands"
  },
  {
    id: 17,
    title: "Norway",
    image: "/images/flags/europe/norway.png",
    link: "/destinations/study-in-norway"
  },
  {
    id: 18,
    title: "Spain",
    image: "/images/flags/europe/spain.png",
    link: "/destinations/study-in-spain"
  },
  {
    id: 19,
    title: "Sweden",
    image: "/images/flags/europe/sweden.png",
    link: "/destinations/study-in-sweden"
  },
];

const destinations = [
  {
    id: 1,
    title: "Australia",
    image: "/images/flags/australia.webp",
    link: "/destinations/study-in-australia",
  },
  {
    id: 2,
    title: "Canada",
    image: "/images/flags/canada.webp",
    link: "/destinations/study-in-canada",
  },
  {
    id: 3,
    title: "New Zealand",
    image: "/images/flags/new-zealand.webp",
    link: "/destinations/study-in-new-zealand",
  },
  {
    id: 4,
    title: "Singapore",
    image: "/images/flags/singapore.webp",
    link: "/destinations/study-in-singapore",
  },
  {
    id: 5,
    title: "United Kingdom",
    image: "/images/flags/uk.webp",
    link: "/destinations/study-in-uk",
  },
  {
    id: 6,
    title: "United States",
    image: "/images/flags/usa.webp",
    link: "/destinations/study-in-usa",
  },
  {
    id: 7,
    title: "Mauritius",
    image: "/images/flags/mauritius.webp",
    link: "/destinations/study-in-mauritius",
  },
];

  return (
    <>
      <Breadcrumb imgUrl={'/images/destinations/destinations-back.webp'} title={'Explore Study Abroad Destinations'}/>
      <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
           <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary text-center'>Choose Your Destination, Shape Your <span className='text-secondary'>Future</span></h2>
           <p className='text-md lg:text-base font-manrope text-center mt-5'>Choosing the right country for higher education is an important decision for Indian students.
            Every destination offers different courses, universities, tuition fees, admission requirements, career opportunities and student experiences.</p>
           <p className='text-md lg:text-base font-manrope text-center mt-2'>Indo-European helps students explore suitable study destinations based on their academic
            background, preferred course, budget and future career goals. From Europe to other popular international destinations, students can compare their options and plan their education journey with confidence.</p>
           <div className='grid grid-cols-1 lg:grid-cols-2 space-y-3 space-x-3 mt-12'>
               <div className=''>
                    <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary'>Why Choose an International Destination for Your  <span className='text-secondary'>Studies?</span></h2>
                    <p className='text-md lg:text-base font-manrope mt-5'>Studying abroad offers students the opportunity to gain an internationally recognised qualification while experiencing a new education system and culture. Depending on the destination, students can benefit from:</p>
                    <ul className='mt-5 space-y-2'>
                      <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;Globally recognised universities and degrees</li>
                      <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;Diverse courses and specialisations</li>
                      <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;English-taught programmes</li>
                      <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;Practical and research-based learning</li>
                      <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;Scholarships and funding opportunities</li>
                      <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;Multicultural student communities</li>
                      <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;International career exposure</li>
                      <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;Personal and professional development</li>
                    </ul>
               </div>
               <div className=''>
                     <Image className="mx-auto" height={540} width={480} src={"/images/destinations/content/destination-1.png"} alt={"International Destination for Your Study"} />
               </div>
           </div>
           <div className='mt-12'>
               <div className=''>
               <Heading heading={"European Destinations for "} colorHeading={"Indian Students"} />
               <p className='text-md lg:text-base font-manrope mt-5 text-center'>Europe remains a popular choice for Indian students looking for quality education, diverse courses and international exposure. Different countries offer different academic systems, tuition fees, living costs and career opportunities, allowing students to choose according to their needs.</p>
               </div>
               <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center items-center gap-10 mt-12'>
                {countries.map((item, index) => {
                  return <Link className='flex justify-center items-center flex-col gap-5' key={item.id} href={item.link}>
                         <Image className='shadow-2xl border border-primary shadow-zinc-400 rounded-md hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer' height={80} width={120} src={item.image} alt={item.title}/>
                         <span className='text-sm lg:text-md font-Jakarta font-semibold'>{item.title}</span>
                  </Link>
                })}
               </div>
               <p className="text-md lg:text-base font-manrope mt-5">Explore individual destination guides to learn more about <Link className='font-semibold hover:underline' href={'/university-selection'}>universities</Link>, <Link className='font-semibold hover:underline' href={'/course-finder'}>courses</Link>, tuition fees, <Link className='font-semibold hover:underline' href={'/services'}>admission requirements</Link>, <Link className='font-semibold hover:underline' href={'/scholarships'}>scholarships</Link>, student visas, living costs and <Link className='font-semibold hover:underline' href={'/services'}>career opportunities</Link>.</p>
           </div>
           <div className='mt-12 relative'>
               <div className=''>
               <Heading heading={"Discover More Global Study "} colorHeading={"Destinations"} />
               <p className='text-md lg:text-base font-manrope mt-5 text-center'>Europe is not the only option for students planning higher education abroad. <Link className='font-semibold hover:underline' href={'/'}>Indo-European</Link> also helps students explore other popular international destinations, each offering its own education system, course options, lifestyle and career pathways.</p>
               </div>
               <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center items-center gap-10 mt-12'>
                {destinations.map((item, index) => {
                  return <Link className='flex justify-center items-center flex-col gap-5' key={item.id} href={item.link}>
                         <Image className='shadow-2xl shadow-zinc-400 border border-primary rounded-md hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer' height={80} width={120} src={item.image} alt={item.title}/>
                         <span className='text-sm lg:text-md font-Jakarta font-semibold'>{item.title}</span>
                  </Link>
                })}
               </div>
               <p className="text-md lg:text-base font-manrope mt-5">Students can compare these destinations based on their preferred course, budget, eligibility, career plans and lifestyle preferences.</p>
              <div className="rounded-full w-60 h-60 bg-primary/10 absolute -bottom-30 -right-10 z-1"/>
              <div className="rounded-full w-25 h-25 bg-secondary/10 absolute -bottom-10 right-47 z-1"/>
           </div>
           <div className='mt-12 grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
             <div className=''> 
              <Image className='' width={480} height={360} src={'/images/destinations/content/destination-2.png'} alt="Study Abroad Destinations" />
             </div>
             <div className=''>
                <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary'>Plan Your Study Abroad Journey with  <span className='text-secondary'>Confidence</span></h2>
                <p className='text-md lg:text-base font-manrope mt-4'>Before selecting a destination, students should consider factors such as:</p>
                <ul className='mt-8'>
                  <li className='text-md lg:text-base font-semibold font-manrope'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;&nbsp;Course and university options</li>
                  <li className='text-md lg:text-base font-semibold font-manrope'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;&nbsp;Tuition fees and living costs</li>
                  <li className='text-md lg:text-base font-semibold font-manrope'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;&nbsp;Academic eligibility</li>
                  <li className='text-md lg:text-base font-semibold font-manrope'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;&nbsp;English-language requirements</li>
                  <li className='text-md lg:text-base font-semibold font-manrope'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;&nbsp;Scholarships and financial support</li>
                  <li className='text-md lg:text-base font-semibold font-manrope'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;&nbsp;Student visa requirements</li>
                  <li className='text-md lg:text-base font-semibold font-manrope'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;&nbsp;Work and post-study opportunities</li>
                  <li className='text-md lg:text-base font-semibold font-manrope'><CiPaperplane className='inline-block size-5 text-secondary'/>&nbsp;&nbsp;Climate, lifestyle and location</li>
                </ul>
                <p className='text-md lg:text-base font-manrope mt-5'>Comparing these factors can help students make a practical decision based on both their education plans and future goals.</p>
             </div>
           </div>
        </div>
      </section>
      <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-b-4xl'>
          <div className='py-12 px-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10'>
          <div className=''>
            <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold'>Experience Life Beyond the <span className='text-secondary'>Classroom</span></h2>
            <p className='mt-8 text-md lg:text-base font-manrope'>Studying abroad is also an opportunity to experience a new culture and lifestyle. Students can meet people from different backgrounds, explore local traditions and cuisines, participate in cultural activities and become part of an international community.</p>
            <p className='mt-4 text-md lg:text-base font-manrope'>Climate and lifestyle also vary across destinations. Northern European countries generally have colder winters, while countries such as Spain, Italy and Malta offer warmer climates. Australia, Canada and New Zealand also have diverse climates depending on the region.</p>
            <p className='mt-4 text-md lg:text-base font-manrope'>This international experience can help students develop independence, adaptability, communication skills and a broader global perspective.</p>
          </div>
        <div className='mx-auto lg:ms-auto relative z-1 w-full max-w-md rounded-xl border border-white/10 bg-black/10 p-8 backdrop-blur-4xl'>
            <GlobalForm />
        </div>
        </div>
      </section>
    </>
  )
}

export default page