import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../components/Heading'
import { CiPaperplane } from "react-icons/ci";
import GlobalForm from '../components/GlobalForm'
import ScrollAnimate from '../components/ScrollAnimate'

const page = () => {
  return (
    <>
       <Breadcrumb title={'Collaborate With Indo European'} imgUrl={'/images/collaborate/collaborate-cover.webp'} />
       <section className='max-w-6xl mx-auto'>
         <div className='py-12 px-10'>
            <Heading heading={"Let's Create Global Education Opportunities "} colorHeading={'Together'}/>
            <p className='text-md lg:text-base font-manrope mt-5 text-center'>At <Link className="font-semibold hover:underline" href="/">Indo European</Link>, we believe that successful partnerships open doors to greater opportunities
            for students and organisations alike. We welcome collaborations with educational institutions,
            consultants, universities, training centres, and business partners who share our vision of making
            international education more accessible.
            </p>
         </div>
       </section>
       <section className='bg-linear-to-r from-primary/10 to-secondary/10 rounded-tl-4xl rounded-br-4xl'>
          <div className='max-w-6xl mx-auto'>
            <div className='py-12 px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center'>
              <ScrollAnimate direction='left' className=''>
                  <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary'>Become Our Recruitment <span className='text-secondary'>Partner</span></h2>
                  <p className='text-md lg:text-base text-justify mt-4'>Support students in achieving their study abroad dreams while expanding your own network.</p>
                  <ul className='mt-8 space-y-5 font-manrope text-md lg:text-base'>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Access a wide portfolio of internationally recognised universities.</li>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Receive dedicated support for admissions and application processing.</li>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Get expert assistance with visa documentation and compliance.</li>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Build lasting relationships backed by professional guidance.</li>
                  </ul>
              </ScrollAnimate>
              <ScrollAnimate direction='right' className=''>
                 <Image className="mx-auto" height={540} width={320} src={'/images/collaborate/content/collaborate-1.png'} alt="Become Our Recruitment Partner" />
              </ScrollAnimate>
            </div>
          </div>
       </section>
          <section className='max-w-6xl mx-auto'>
            <div className='py-12 px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center'>
              <ScrollAnimate direction='left' className=''>
                 <Image className="mx-auto" height={480} width={280} src={'/images/collaborate/content/collaborate-2.png'} alt="Open a Indo European Franchise" />
              </ScrollAnimate>
              <ScrollAnimate className=''>
                  <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary'>Open an Indo European <span className='text-secondary'>Franchise</span></h2>
                  <p className='text-md lg:text-base text-justify mt-4'>Take your study abroad business to the next level with a trusted education brand.</p>
                  <ul className='mt-8 space-y-5 font-manrope text-md lg:text-base'>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Operate with a proven business model and expert mentorship.</li>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Receive complete training and operational support.</li>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Benefit from marketing assistance and brand recognition.</li>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Help students with end-to-end overseas admission services.</li>
                  </ul>
              </ScrollAnimate>
            </div>
          </section>
        <section className='bg-linear-to-r from-primary/10 to-secondary/10 rounded-tl-4xl rounded-br-4xl'>
          <div className='max-w-6xl mx-auto'>
            <div className='py-12 px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center'>
              <ScrollAnimate direction='left' className=''>
                  <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary'>Partner With <span className='text-secondary'>Universities & Colleges</span></h2>
                  <p className='text-md lg:text-base text-justify mt-4'>Work with us to create better international education opportunities for students.</p>
                  <ul className='mt-8 space-y-5 font-manrope text-md lg:text-base'>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Strengthen international student recruitment.</li>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Build long-term academic partnerships.</li>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Streamline communication throughout the admission process.</li>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Connect with motivated students seeking global education.</li>
                  </ul>
              </ScrollAnimate>
              <ScrollAnimate direction='right' className=''>
                 <Image className="mx-auto" height={540} width={320} src={'/images/collaborate/content/collaborate-3.png'} alt="Partner With Universities & Colleges" />
              </ScrollAnimate>
            </div>
          </div>
       </section>
       <section className='max-w-6xl mx-auto'>
            <div className='py-12 px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center'>
              <ScrollAnimate direction='left' className=''>
                 <Image className="mx-auto" height={480} width={280} src={'/images/collaborate/content/collaborate-4.png'} alt="Corporate & Business Partnerships" />
              </ScrollAnimate>
              <ScrollAnimate direction='right' className=''>
                  <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary'>Collaborate With Schools & <span className='text-secondary'>Coaching Centres</span></h2>
                  <p className='text-md lg:text-base text-justify mt-4'>Enhance your student support by offering overseas education guidance.</p>
                  <ul className='mt-8 space-y-5 font-manrope text-md lg:text-base'>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Introduce international education counselling to your students.</li>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Offer guidance for admissions, visas, and language tests.</li>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Provide students with trusted university options.</li>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Deliver additional value through expert consultation.</li>
                  </ul>
              </ScrollAnimate>
            </div>
          </section>
          <section className='bg-linear-to-r from-primary/10 to-secondary/10 rounded-tl-4xl rounded-br-4xl'>
          <div className='max-w-6xl mx-auto'>
            <div className='py-12 px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center'>
              <ScrollAnimate direction='left' className=''>
                  <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary'>Corporate & Business <span className='text-secondary'>Partnerships</span></h2>
                  <p className='text-md lg:text-base text-justify mt-4'>Join hands with Indo European to create mutually beneficial business opportunities.</p>
                  <ul className='mt-8 space-y-5 font-manrope text-md lg:text-base'>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Expand your service portfolio with study abroad solutions.</li>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Offer reliable overseas education support to your clients.</li>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Receive continuous partner assistance and promotional support.</li>
                    <li className='flex'><CiPaperplane className='inline-block size-6 text-secondary shrink-0'/>&nbsp;Build sustainable growth through strategic collaboration.</li>
                  </ul>
              </ScrollAnimate>
              <ScrollAnimate direction='right' className=''>
                 <Image className="mx-auto" height={600} width={360} src={'/images/collaborate/content/collaborate-5.png'} alt="Corporate & Business Partnerships" />
              </ScrollAnimate>
            </div>
          </div>
       </section>
       <section className='max-w-6xl mx-auto'>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 py-12 px-10 justify-center items-center'>
               <div className=''>
                <h2 className='text-2xl lg:text-3xl text-primary font-Jakarta font-bold'>Why Partner With <span className='text-secondary'>Indo European?</span></h2>
                <p className='text-sm lg:text-md font-manrope mt-5'>If you're interested in collaborating with Indo European, we&#39;d love to hear from you. Get in
                  touch with our team to explore partnership opportunities and discover how we can achieve more
                  together.<br /><br />Our experienced team, transparent approach, and extensive university network make us a
                  reliable partner in international education. We focus on creating partnerships that benefit both
                  organisations and students, ensuring quality guidance, smooth processes, and long-term
                  success.</p>
                </div>  
                <div className=''>
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