import Link from 'next/link'
import Image from 'next/image';
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../components/Heading'
import { CiPaperplane } from 'react-icons/ci';
import Card from '../components/Card';
import ScrollAnimate from '../components/ScrollAnimate';
import GlobalForm from '../components/GlobalForm';
import { franchiseBenefits } from '@/public/data/homedata';

const page = () => {

  return (
    <>
     <Breadcrumb title={'Partner Franchise'} imgUrl={'/images/partner-franchise/partner-franchise-cover.webp'}/>
     <section className='max-w-6xl mx-auto'>
       <div className='py-12 px-10'>
         <div className='relative'>
         <Heading heading={'Why Invest in an Indo European '} colorHeading={'Franchise?'} />
         <p className='text-md lg:text-base font-manrope text-center mt-4'>Starting a business becomes easier when you have the right partner. With <Link className='font-semibold hover:underline' href={'/'}>Indo European</Link>, you
          gain access to proven processes, experienced professionals, and a well-established network of
          international universities. Our team works closely with you to ensure your franchise is equipped
          for long-term success.</p>
          <div className='bg-primary/10 w-50 h-50 rounded-full absolute left-35 -bottom-20' />
          <div className='bg-secondary/10 w-25 h-25 rounded-full absolute left-0 -bottom-20' />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-5">
          {franchiseBenefits.map((item, index) => {
            const Icon = item.icon;
            return (
               <Card id={item.id} key={item.id} title={item.title} description={item.description} image={item.img} Icon={Icon}/>
            );
          })}
        </div>
       </div>
     </section>
     <section className='max-w-6xl mx-auto'>
       <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 py-12 px-10'>
         <ScrollAnimate direction='left' className=''>
              <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold'>Who Can Become a Franchise <span className='text-secondary'>Partner?</span></h2>
              <p className='mt-4 text-md lg:text-base font-manrope'>Our franchise opportunity is ideal for:</p>
              <ul className='space-y-2 mt-2'>
                <li className='text-md lg:text-base text-manrope flex items-center font-semibold'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Education Consultants</li>
                <li className='text-md lg:text-base text-manrope flex items-center font-semibold'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Business Owners</li>
                <li className='text-md lg:text-base text-manrope flex items-center font-semibold'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Entrepreneurs</li>
                <li className='text-md lg:text-base text-manrope flex items-center font-semibold'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Coaching Institute Owners</li>
                <li className='text-md lg:text-base text-manrope flex items-center font-semibold'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Career Counsellors</li>
                <li className='text-md lg:text-base text-manrope flex items-center font-semibold'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Professionals Looking to Enter the Overseas Education Industry</li>
              </ul>
              <p className='mt-4 text-md lg:text-base font-manrope'>No matter your background, if you're passionate about helping students achieve their global
                education goals, we'd love to partner with you.</p>
         </ScrollAnimate>
         <ScrollAnimate direction='right' className=''>
           <Image className="rounded-2xl" width={480} height={540} src={'/images/partner-franchise/partner-franchise-2.webp'} alt="Partner Franchise" />
         </ScrollAnimate>
       </div>
     </section>
     <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-b-4xl'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center py-12 px-10'>
           <div className=''>
             <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold'>Advantages of Joining Our Franchise <span className='text-secondary'>Network</span></h2>
             <ul className='space-y-2 mt-5'>
              <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Established and trusted study abroad brand.</li>
              <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Access to leading international universities.</li>
              <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;End-to-end admission and visa support.</li>
              <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Comprehensive franchise training.</li>
              <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Marketing and promotional assistance.</li>
              <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Dedicated relationship manager.</li>
              <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Scalable business model with long-term growth opportunities.</li>
             </ul>
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