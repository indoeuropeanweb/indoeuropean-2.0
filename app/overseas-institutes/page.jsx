import React from 'react'
import Link from 'next/link'
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../components/Heading'
import { institutionalPartnerBenefits } from '@/public/data/homedata'
import ScrollAnimate from '../components/ScrollAnimate'
import Card from '../components/Card'
import {
  FaUniversity,
  FaSchool,
  FaGraduationCap,
  FaLanguage,
  FaBookOpen,
  FaTools,
  FaGlobe,
  FaUserGraduate,
  FaChartBar,
  FaComments,
  FaChartLine
} from "react-icons/fa";
import GlobalForm from '../components/GlobalForm'

const page = () => {

const institutionalRecruitmentBenefits = [
  {
    id: 1,
    title: "Quality Student Recruitment",
    description:
      "Connect with motivated students who meet your academic requirements and are genuinely interested in pursuing international education.",
    icon: FaUserGraduate,
  },
  {
    id: 2,
    title: "Market Expertise",
    description:
      "Benefit from our understanding of Indian student preferences, admission trends, and regional recruitment opportunities.",
    icon: FaChartBar,
  },
  {
    id: 3,
    title: "Transparent Communication",
    description:
      "Receive timely updates, accurate application management, and professional coordination throughout the recruitment process.",
    icon: FaComments,
  },
  {
    id: 4,
    title: "Long-Term Institutional Growth",
    description:
      "Our focus extends beyond admissions—we work towards building sustainable partnerships that contribute to your institution's long-term international recruitment goals.",
    icon: FaChartLine,
  },
];

const institutionTypes = [
  {
    id: 1,
    title: "Universities",
    icon: FaUniversity,
  },
  {
    id: 2,
    title: "Colleges",
    icon: FaSchool,
  },
  {
    id: 3,
    title: "Higher Education Institutions",
    icon: FaGraduationCap,
  },
  {
    id: 4,
    title: "Language Schools",
    icon: FaLanguage,
  },
  {
    id: 5,
    title: "Pathway & Foundation Providers",
    icon: FaBookOpen,
  },
  {
    id: 6,
    title: "Vocational & Technical Institutes",
    icon: FaTools,
  },
  {
    id: 7,
    title: "International Education Groups",
    icon: FaGlobe,
  },
];

  return (
    <>
     <Breadcrumb title={'Overseas Institutes'} imgUrl={'/images/overseas-institutes/overseas-institutes-cover.webp'} />
     <section className='max-w-6xl mx-auto'>
       <div className='py-12 px-10'>
         <div className=''>
             <Heading heading={'Connect with Qualified Indian Students Through a Trusted '} colorHeading={'Recruitment Partner'} />
             <p className='text-md lg:text-base font-manrope text-center mt-4'>India is one of the world's fastest-growing destinations for international student recruitment. At
                <Link className="font-semibold hover:underline" href={'/'}>Indo European</Link>, we help overseas universities, colleges, and educational institutions connect
                with ambitious students seeking quality global education.</p> 
                <p className='text-md lg:text-base font-manrope text-center mt-2'>With over 20 years of experience in overseas education counselling, we have built a strong
                reputation for ethical student recruitment, transparent admission processes, and long-term
                institutional partnerships. Our goal is to help international institutes expand their presence in
                India while enrolling students who are academically prepared and career-focused.</p>
                <div className='bg-primary/10 w-50 h-50 rounded-full absolute bottom-0 left-10'/>
                <div className='bg-secondary/10 w-30 h-30 rounded-full absolute bottom-0 left-0'/>
             <div className='mt-10'>
                <Heading heading={'Why Partner with '} colorHeading={'Indo European?'} />
                <p className='text-md lg:text-base font-manrope text-center mt-4'>It takes local knowledge, trustworthy advice, and a well-established network to recruit students
                from a diversified market like India. Our skilled staff collaborates directly with foreign universities
                to create efficient recruiting plans, raise student interest, and streamline the admissions process
                from inquiry to enrollment.</p>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 mt-10'>
                 {institutionalPartnerBenefits.map((item, index) => {
                    const Icon = item.icon;
                    return <Card id={item.id} key={item.id} title={item.title} description={item.description} image={item.image} Icon={Icon} />
                 })}
                </div>
             </div>
        </div>
       </div>
     </section>
           <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
          <Heading heading={'Benefits of Partnering with '} colorHeading={'Us'}/>
          <div className='grid grid-cols-1 lg:grid-cols-2 justify-center gap-8 mt-10'>
            {institutionalRecruitmentBenefits.map((item, index) => {
                const Icon = item.icon;
                return <ScrollAnimate key={item.id} direction='down'>
                <div className="relative border border-secondary shadow-lg shadow-orange-100 py-4 px-4 rounded-full hover:-translate-y-3 duration-500 ease-in-out">
                <div className="bg-secondary absolute -left-4 -top-4 flex justify-center items-center rounded-full p-5">
                <Icon className="inline-block size-8 text-white" />
                </div>
                <div className="ms-16">
                    <h6 className="text-md lg:text-base font-Jakarta font-bold text-primary">{item.title}</h6>
                    <p className="text-xs text-primary font-manrope mt-1">{item.description}</p>
                </div>
            </div>
            </ScrollAnimate>
            })}
          </div>
        </div>
      </section>
      <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
            <Heading heading={'Institutions We Collaborate '} colorHeading={'With'}/>
            <p className='text-center text-md lg:text-base font-manrope mt-5'>We welcome partnerships with:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {institutionTypes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <ScrollAnimate
                    direction='down'
                    key={index}
                    className="group bg-white border border-secondary/10 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                        <Icon className="text-secondary text-2xl group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="mt-5 text-primary font-semibold font-Jakarta">
                        {item.title}
                    </h3>
                    </ScrollAnimate>
                );
                })}
            </div>
         </div>
      </section>
      <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-b-4xl'>
        <div className='py-12 px-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5'>
         <div className=''>
            <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary'>Let's Build Global Success <span className='text-secondary'>Together</span></h2>
            <p className='text-md lg:text-base font-manrope mt-5'>Every successful international partnership begins with a shared commitment to student success.
            By collaborating with <Link className='font-semibold hover:underline' href={'/'}>Indo European</Link>, your institution gains a trusted recruitment partner with
            the experience, network, and dedication to support your international enrolment goals.</p>
            <p className='text-md lg:text-base font-manrope mt-3'>Together, we can create meaningful educational opportunities, strengthen your presence in
            India, and help more students achieve their dream of studying abroad.</p>
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