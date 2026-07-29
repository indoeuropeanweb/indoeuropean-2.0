import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '../components/Breadcrumb';
import { FaVideo, FaRegCircleCheck } from 'react-icons/fa6';
import CoachingOptions from '../components/coaching/CoachingOptions';
import { ielts, pte, toefl, duolingo, coachingPoints } from '@/public/data/homedata';
import GlobalForm from '../components/GlobalForm';
import ScrollAnimate from '../components/ScrollAnimate';

const page = () => {

  const coachingData = [
    {
      id: 1,
      title: "IELTS",
      data: ielts
    },
    {
      id: 2,
      title: "PTE Academic",
      data: pte
    },
    {
      id: 3,
      title: "TOEFL",
      data: toefl
    },
    {
      id: 4,
      title: "Duolingo English Test",
      data: duolingo
    }
  ]

  return (
    <>
      <Breadcrumb title={'Coaching'} imgUrl={'/images/coaching/cover/coaching-1.webp'}/>
      <section className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 py-12 px-10'>
           <ScrollAnimate className='relative space-y-8' direction='left'>
              <h2 className='text-2xl lg:text-3xl text-primary font-bold font-Jakarta'>Get Ready to Study Abroad with Expert Test <span className='text-secondary'>Preparation</span></h2>
              <p className='text-md lg:text-base font-manrope mt-10'>A strong English proficiency score is an important step towards studying at international universities. At <span className='font-bold'>Indo European</span>, we provide professional coaching for globally recognised English language exams, helping students improve their communication skills and achieve competitive scores. Our experienced trainers, practical learning approach, and regular practice sessions ensure you're fully prepared for exam day.</p>
              <Link className="text-sm lg:text-md rounded-full px-10 py-3 border border-blue-400 space-x-5 z-2 relative cursor-pointer text-white bg-blue-400 font-Jakarta font-semibold" href="https://zoom.us/j/91022278457#success" target='_blank'><span className='px-2.5 py-2.5 rounded-full bg-blue-400 inline-block absolute -left-3 bottom-0 border border-white shadow-4xl shadow-blue-400 zoom-icon'><FaVideo className='text-white size-6 inline-block'/></span>Join Online Classes Now</Link>
              <div className="rounded-full w-60 h-60 bg-primary/10 absolute -bottom-30 -left-10 z-1"/>
              <div className="rounded-full w-25 h-25 bg-secondary/10 absolute -bottom-20 left-47 z-1"/>
           </ScrollAnimate>
           <ScrollAnimate className='' direction='right'>
               <Image className="mx-auto" height={540} width={540} src={'/images/coaching/coaching-3.png'} alt="Coaching for Study Abroad" />
           </ScrollAnimate>
        </div>
      </section>
      {
        coachingData.map((item, index) => {
          return <CoachingOptions title={item.title} data={item.data} key={item.id}/>
        })
      }
      <section className='max-w-6xl mx-auto'>
        <div className='px-10 py-12'>
          <h2 className='text-2xl lg:text-3xl text-primary font-bold font-Jakarta text-center'>Why Prepare with <span className='text-secondary'>Indo European?</span></h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
  <ScrollAnimate className="relative" direction='left'>
    <Image
      src="/images/coaching/study-abroad-girl.png"
      width={800}
      height={1200}
      alt="Indo European Study Abroad Consultancy"
      className="relative z-10"
    />

    <Image
      src="/images/coaching/arrows-2.png"
      width={320}
      height={650}
      alt="Arrow z-1"
      className="absolute bottom-0 -right-10"
    />
  </ScrollAnimate>
<ScrollAnimate className="space-y-8" direction='right'>
  {coachingPoints.map((item, index) => {

    return (
      <div
        key={index}
        className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-2 transition-all duration-300 hover:border-primary hover:shadow-lg"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white transition-transform duration-300 group-hover:scale-110">
          <FaRegCircleCheck className='size-8 text-primary'/>
        </div>

        <div className="flex-1 relative">
          <h3 className="text-sm lg:text-md font-semibold text-zinc-100 absolute -top-10 -right-2 bg-primary p-2 rounded-md">
            {item.title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            {item.description}
          </p>
        </div>
      </div>
    );
  })}
</ScrollAnimate>
</div>
        </div>
      </section>
      <section className='bg-linear-to-r from-secondary/15 to-primary/15 rounded-b-4xl'>
         <div className='max-w-6xl mx-auto'>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center py-12 px-10'>
              <div className='space-y-5'>
                  <h2 className='text-2xl lg:text-3xl text-primary font-bold font-Jakarta'>Start Your Preparation <span className='text-secondary'>Today</span></h2>
                  <p className='text-md lg:text-base font-manrope'>Take the first step towards achieving your dream of studying abroad with confidence. Join Indo European's English Language Test Preparation programmes and receive expert guidance for IELTS, PTE Academic, TOEFL, and the Duolingo English Test through structured lessons, personalised mentoring, and proven learning strategies.<br /><br />
  Our experienced trainers focus on improving your language skills, exam techniques, and confidence through regular practice sessions, mock tests, and individual feedback. Whether you choose classroom coaching or online learning, we help you build the skills needed to achieve your target score and strengthen your university application.<br /><br />
  Begin your preparation today with Indo European and move one step closer to securing admission to your preferred international university.</p>
              </div>
              <div className=''>
                <div className='mx-auto lg:ms-auto relative z-1 w-full max-w-md rounded-xl border border-white/10 bg-black/10 p-8 backdrop-blur-4xl'>
                  <GlobalForm />
                </div>
              </div>
           </div>
         </div>
      </section>
    </>
  )
}

export default page