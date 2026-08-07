import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb'
import Card from '../components/Card';
import GlobalForm from '../components/GlobalForm';
import ScrollAnimate from '../components/ScrollAnimate';
import { CiPaperplane } from "react-icons/ci";
import { coachingPartnerBenefits } from '@/public/data/homedata';

const page = () => {

  return (
    <>
     <Breadcrumb title={'Coaching Centres'} imgUrl={'/images/coaching-centres/coaching-centres-cover.webp'} /> 
     <section className='max-w-6xl mx-auto'>
       <div className='py-12 px-10'>
         <div className='relative'>
          <h2 className='text-2xl lg:text-3xl text-primary font-Jakarta font-bold text-center'>Why Collaborate with <span className='text-secondary'>Indo European?</span></h2>
          <p className='text-md lg:text-base text-center mt-4'>A successful partnership gives your coaching centre access to professional guidance,
            international education expertise and end-to-end support. Let's partner up to help students
            achieve their study abroad dreams and elevate your institute's standing in the education
            industry.</p>
            <div className='bg-primary/10 w-50 h-50 rounded-full absolute left-35 -bottom-20' />
            <div className='bg-secondary/10 w-25 h-25 rounded-full absolute left-0 -bottom-20' />
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 mt-10'>
            {coachingPartnerBenefits.map((item, index) => {
                const Icon = item.icon;
                return <Card id={item.id} key={item.id} title={item.title} description={item.description} image={item.image} Icon={Icon}/>
            })}
         </div>
       </div>
     </section>
     <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-4xl'>
        <div className='max-w-6xl mx-auto'>
        <div className='py-12 px-10 grid grid-cols-1 lg:grid-cols-2'>
          <ScrollAnimate direction='left' className=''>
             <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold mt-4'>End-to-End <span className='text-secondary'>Student Assistance</span></h2>
             <p className='text-md lg:text-base font-manrope mt-3'>Your students receive complete guidance throughout their overseas education journey,
including:</p>
           <ul className='space-y-2 my-4'>
            <li className='text-md lg:text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Career Counselling</li>
            <li className='text-md lg:text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Course & University Selection</li>
            <li className='text-md lg:text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Admission Application Support</li>
            <li className='text-md lg:text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Student Visa Assistance</li>
            <li className='text-md lg:text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Scholarship Guidance</li>
            <li className='text-md lg:text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Pre-Departure Support</li>
           </ul>
           <p className='text-md lg:text-base font-manrope mt-3'>This allows your coaching centre to offer comprehensive services without the need to manage
every stage independently.</p>
          </ScrollAnimate>
          <ScrollAnimate direction='right' className=''>
            <Image className="" height={480} width={540} src={'/images/coaching-centres/coaching-centres-1.png'} alt="End to End Student Assistance" />
          </ScrollAnimate>
        </div>
        </div>
     </section>
     <section className='max-w-6xl mx-auto'>
       <div className='py-12 px-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10'>
        <ScrollAnimate direction='left' className=''>
           <Image className='rounded-2xl' height={480} width={540} src={'/images/coaching-centres/coaching-centres-2.webp'} alt="Partner With Us" />
         </ScrollAnimate>
         <ScrollAnimate direction='right' className=''>
           <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold'>Who Can <span className='text-secondary'>Partner With Us?</span></h2>
           <p className='text-md lg:text-base font-manrope mt-2'>Our Coaching Centre Partnership Program is suitable for:</p>
           <ul className='space-y-2 my-4'>
            <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;IELTS & PTE Coaching Centres</li>
            <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;English Language Training Institutes</li>
            <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Competitive Exam Coaching Institutes</li>
            <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Spoken English Academies</li>
            <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Skill Development Centres</li>
            <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Education & Career Guidance Institutes</li>
           </ul>
           <p className='text-md lg:text-base font-manrope'>Whether your institute is newly established or well-established, our partnership model is
designed to help you grow with confidence.</p>
         </ScrollAnimate>
       </div>
     </section>
     <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-b-4xl'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center py-12 px-10'>
            <div className=''>
               <h2 className='text-2xl lg:text-3xl text-primary font-Jakarta font-bold'>Together, Let's Create More Student <span className='text-secondary'>Success Stories</span></h2>  
               <p className='text-md lg:text-base font-manrope my-4'>At <Link className="font-semibold hover:underline" href="/">Indo European</Link>, we believe successful partnerships are built on trust, transparency, and
                shared growth. By combining your local expertise with our international education network, we
                can create better opportunities for students while helping your coaching centre expand its
                services and reputation.</p>
                <p className='text-md lg:text-base font-manrope font-semibold'><span className='text-2xl'>*</span> Partner with Indo European today and take your coaching centre to the next level.</p>
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