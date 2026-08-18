import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../components/Heading'

const page = () => {
  return (
    <>
     <Breadcrumb title={"Events"} imgUrl={"/images/events/events-cover.webp"}/>
     <section className='max-w-6xl mx-auto'>
         <div className='py-12 px-10 relative'>
           <Heading heading={'Explore Our Study Abroad '} colorHeading={'Events'} />
           <p className='text-md lg:text-base font-manrope mt-4 text-center'>Attend our study abroad events, workshops, education fairs and university interactions designed to help you take the next step toward your international education goals. Meet with university representatives and experienced study abroad experts to explore academic options, get your questions answered and receive valuable tips to confidently plan your study abroad journey.</p>
            <div className="rounded-full w-60 h-60 bg-primary/10 absolute -bottom-30 -left-10 z-1"/>
            <div className="rounded-full w-25 h-25 bg-secondary/10 absolute -bottom-20 left-47 z-1"/>
         </div>
     </section>
     <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
         <div className=''>
            <h4 className='text-md lg:text-base text-secondary font-Jakarta text-center font-semibold'>Currently, No Events Subscribe us For Future Updates !</h4>
         </div>
        </div>
     </section>
    </>
  )
}

export default page