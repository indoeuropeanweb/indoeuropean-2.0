import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../components/Heading';
import Link from 'next/link';
import Image from 'next/image';
import { servicesPage } from '@/public/data/homedata';
import GlobalForm from '../components/GlobalForm';

const page = () => {
  return (
    <>
       <Breadcrumb title={'Explore Our Services'} imgUrl={'/images/services/services-1.webp'}/>
       <section className='max-w-6xl mx-auto'>
         <div className='py-12 px-10'>
            <Heading heading={'Comprehensive Study Abroad Services for Every Step of Your '} colorHeading={'Journey'}/>
            <p className='mt-10 font-manrope text-md lg:text-base'>At <Link className="font-semibold hover:underline" href="/">Indo European</Link>, we believe that studying abroad should be an exciting experience, not a
            stressful one. That's why we offer complete guidance to students who dream of pursuing higher
            education in top international destinations. From selecting the right university to settling into
            your new country, our experienced counsellors are with you at every stage.<br />
            Whether you're planning to study in Europe or other leading destinations, our personalized
            services are designed to make your admission process simple, transparent, and successful.
            </p>
            <div className='mt-5 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-5 justify-center items-center'>
            {servicesPage.map((service, index) => {
                const Icon = service.icon;
                return  <div key={service.id} className="group max-w-md overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-500 hover:-translate-y-2 hover:border-secondary hover:shadow-xl">
            <div className="relative rounded-2xl">
                <Image
                    className="rounded-2xl transition-transform duration-700 group-hover:scale-105"
                    height={250}
                    width={480}
                    src={service.img}
                    alt={service.title}
                />
                <div className="absolute -bottom-5 right-8 z-10 rounded-full bg-white p-2 shadow-lg transition-all duration-500 group-hover:-translate-y-2">
                <Icon className="inline-block size-14 rounded-full bg-secondary p-2 text-white transition-transform duration-500 group-hover:scale-110" />
                </div>
            </div>
            <div className="mt-8">
                <h4 className="font-Jakarta text-lg font-bold text-primary transition-colors duration-300 group-hover:text-secondary lg:text-xl">
                {service.title}
                </h4>
                <p className="mt-3 text-justify font-manropee text-sm font-semibold text-zinc-600 lg:text-md">
                 {service.description}
                </p>
            </div>
            </div>
            })}
            <div className='bg-primary/10 w-55 h-55 rounded-full absolute bottom-0 right-0 z-10' />
            <div className='bg-secondary/10 w-35 h-35 rounded-full absolute bottom-0 right-55 z-10' />
            </div>
         </div>
       </section>
      <section className='bg-linear-to-r from-secondary/15 to-primary/15 rounded-b-4xl'>
         <div className='max-w-6xl mx-auto'>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center py-12 px-10'>
              <div className='space-y-5'>
                  <h2 className='text-2xl lg:text-3xl text-primary font-bold font-Jakarta'>Why Choose <span className='text-secondary'>Indo European?</span></h2>
                  <p className='text-md lg:text-base font-manrope'>Choosing the right study abroad consultant can make all the difference. At <Link className='font-semibold hover:underline' href={'/'}>Indo European</Link>, we
                    combine years of experience with personalised support to help students achieve their international education goals. <br /> <br />
                    Our transparent process, expert guidance, and student-focused approach have helped thousands of aspiring students confidently begin their overseas education journey.</p>
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