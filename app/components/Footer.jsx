import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-primary'>
     <div className='max-w-6xl mx-auto'>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 px-5'>
           <div className='col-span-1 px-4'>
              <Image className="" height={55} width={140} src="/images/logos/logo-dark.webp" alt="Indo European Study Abroad Consultants"/>
               <p className='mt-5 text-justify text-white'>Indo European is a trusted study abroad consultancy based in Delhi, helping students achieve their international education goals with expert guidance on admissions, visas, and university selection.</p>
              <Image className='mt-4' width={120} height={160} src={'/images/logos/icef-agency.png'} alt="ICEF AGENCY" />
           </div>
           <div className='col-span-1 px-4'>
              <h4 className='text-md lg:text-base font-semibold uppercase text-white'>Company</h4>
              <ul className='mt-3 space-y-3'>
                <li className=''><Link className='text-md md:text-base hover:underline cursor-pointer text-white' href={'/about'}>About Us</Link></li>
                <li className=''><Link className='text-md md:text-base hover:underline cursor-pointer text-white' href={'/careers'}>Careers</Link></li>
                <li className=''><Link className='text-md md:text-base hover:underline cursor-pointer text-white' href={'/blogs'}>Blogs</Link></li>
                <li className=''><Link className='text-md md:text-base hover:underline cursor-pointer text-white' href={'/events'}>Events</Link></li>
                <li className=''><Link className='text-md md:text-base hover:underline cursor-pointer text-white' href={'/contact'}>Contact Us</Link></li>
                <li className=''><Link className='text-md md:text-base hover:underline cursor-pointer text-white' href={'/services'}>Services</Link></li>
                <li className=''><Link className='text-md md:text-base hover:underline cursor-pointer text-white' href={'/terms-and-conditions'}>Terms &amp; Conditions</Link></li>
              </ul>
           </div>
           <div className='col-span-1 px-4'>
              <h4 className='text-md lg:text-base font-semibold uppercase text-white'>Services for Students</h4>
              <ul className='mt-3 space-y-3'>
                  <li className=''><Link className='text-md md:text-base hover:underline cursror-pointer text-white' href={'/counselling'}>Counselling</Link></li>
                  <li className=''><Link className='text-md md:text-base hover:underline cursror-pointer text-white' href={'/test-preparation'}>Test Preparation</Link></li>
                  <li className=''><Link className='text-md md:text-base hover:underline cursror-pointer text-white' href={'/scholarships'}>Scholarships</Link></li>
                  <li className=''><Link className='text-md md:text-base hover:underline cursror-pointer text-white' href={'/accommodation'}>Accommodation</Link></li>
                  <li className=''><Link className='text-md md:text-base hover:underline cursror-pointer text-white' href={'/student-loan-advice'}>Student Loan Advice</Link></li>
                  <li className=''><Link className='text-md md:text-base hover:underline cursror-pointer text-white' href={'/courses'}>Course Selection</Link></li>
              </ul>
           </div>
           <div className='col-span-1 px-4'>
              <h4 className='text-md lg:text-base font-semibold uppercase text-white'>STUDY DESTINATIONS</h4>
              <ul className='mt-3 space-y-3'>
                <li className=''><Link className='text-md md:text-base hover:underline cursror-pointer text-white' href={'/destinations/study-in-latvia'}>Study in Latvia</Link></li>
                <li className=''><Link className='text-md md:text-base hover:underline cursror-pointer text-white' href={'/destinations/study-in-lithuania'}>Study in Lithuania</Link></li>
                <li className=''><Link className='text-md md:text-base hover:underline cursror-pointer text-white' href={'/destinations/study-in-germany'}>Study in Germany</Link></li>
                <li className=''><Link className='text-md md:text-base hover:underline cursror-pointer text-white' href={'/destinations/study-in-uk'}>Study in UK</Link></li>
                <li className=''><Link className='text-md md:text-base hover:underline cursror-pointer text-white' href={'/destinations/study-in-new-zealand'}>Study in New Zealand</Link></li>
                <li className=''><Link className='text-md md:text-base hover:underline cursror-pointer text-white' href={'/destinations/study-in-australia'}>Study in Australia</Link></li>
                <li className=''><Link className='text-md md:text-base hover:underline cursror-pointer text-white' href={'/destinations/study-in-usa'}>Study in USA</Link></li>
              </ul>
           </div>
       </div>
       <div className='text-center py-4 border-t border-white'>
         <p className='text-white text-sm lg:text-md'>Copyright {year} <Link className='text-secondary' href={'/'}>Indo European Study Abroad Consultant</Link>. All Rights Reserved</p>
       </div>
     </div>
    </footer>
  )
}

export default Footer