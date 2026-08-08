import React from 'react'
import Link from 'next/link'
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../components/Heading'
import ScrollAnimate from '../components/ScrollAnimate'
import GlobalForm from '../components/GlobalForm';
import { FaArrowRightLong } from "react-icons/fa6";
import { courseCategories, courseSelectionPoints } from '@/public/data/homedata'

const page = () => {

  return (
    <>
      <Breadcrumb title={'Course Selection'} imgUrl={'/images/course-selection/course-selection-cover.webp'}/>
      <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
          <div className='relative'>
              <Heading heading={'Choose the Right Course for a Successful '} colorHeading={'Global Career'} />
              <p className='text-center text-md lg:text-base font-manrope mt-5'>Selecting the right course is one of the most important decisions in your study abroad journey.
                At <Link className="font-semibold hover:underline" href="/">Indo European</Link>, we help students identify programmes that match their academic
                background, career ambitions, interests, and future job opportunities. Our experienced
                counsellors provide personalised guidance to ensure you choose a course that supports both
                your educational goals and long-term career success.</p>
                <p className='text-md lg:text-base font-manrope text-center mt-2'>With access to leading universities across Europe and other popular study destinations, we help
                you make informed decisions with confidence</p>
              <div className='w-60 h-60 rounded-full bg-primary/10 absolute -bottom-20 left-10'/>
              <div className='w-20 h-20 rounded-full bg-secondary/10 absolute -bottom-20 left-0'/>
          </div>
          <div className='mt-10'>
             <Heading heading={'Popular Courses to '} colorHeading={'Study Abroad'}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {courseCategories.map((item, index) => {
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
        <div className='my-5 text-end'>
          <Link className='py-2 px-4 rounded-md border border-primary text-primary hover:bg-primary hover:text-white mt-12 transition-all duration-500 ease-in-out' href={'/course-finder'}>Search Course &nbsp;<FaArrowRightLong className='size-5 inline-block'/></Link>
        </div>
        </div>
        </div> 
      </section>
      <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
         <Heading heading={'How We Help You Choose the '} colorHeading={'Right Course'} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
              {courseSelectionPoints.map((point, index) => {
                const Icon = point.icon
                return <ScrollAnimate direction='down' key={point.id}>
                          <div className="relative border border-secondary shadow-lg shadow-secondary py-4 px-4 rounded-full hover:-translate-y-3 duration-500 ease-in-out">
                          <div className="bg-secondary absolute -left-4 -top-4 flex justify-center items-center rounded-full p-5">
                          <Icon className="inline-block size-8 text-white" />
                          </div>
                          <div className="ms-16">
                              <h6 className="text-md lg:text-base font-Jakarta font-bold text-primary">{point.title}</h6>
                              <p className="text-xs text-primary font-manrope mt-1">{point.description}</p>
                          </div>
                      </div>
                      </ScrollAnimate>
              })}
          </div>
        </div>
      </section>
      <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-b-4xl'>
        <div className='max-w-6xl mx-auto'>
         <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5 py-12 px-10'>
           <div className=''>
              <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold'>Begin Your Study Abroad Journey <span className='text-secondary'>Today</span></h2>
              <p className='text-md lg:text-base font-manrope mt-5'>Choosing the right course is the foundation of a successful international career. Let <Link className='font-semibold hover:underline' href={'/'}>Indo
                European</Link> help you explore the best study options, compare universities, and select a
                programme that aligns perfectly with your ambitions. With expert guidance and personalised
                support, your dream of studying abroad starts here.</p>
           </div>
           <div className='mx-auto lg:ms-auto relative z-1 w-full max-w-md rounded-xl border border-white/10 bg-black/10 p-8 backdrop-blur-4xl'>
              <GlobalForm />
            </div>
         </div>
        </div>
      </section>
    </>
  )
}

export default page