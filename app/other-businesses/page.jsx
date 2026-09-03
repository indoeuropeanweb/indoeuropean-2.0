import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../components/Heading'
import { corporatePartnerBenefits, partnershipBenefits } from '@/public/data/homedata'
import Card from '../components/Card'
import { CiPaperplane } from 'react-icons/ci'
import GlobalForm from '../components/GlobalForm'
import ScrollAnimate from '../components/ScrollAnimate'

const page = () => {
  return (
    <>
     <Breadcrumb title={'Other Businesses'} imgUrl={'/images/other-businesses/other-businesses-cover.webp'}/>
     <section className='max-w-6xl mx-auto'>
       <div className='py-12 px-10'>
          <div className='relative'>
          <Heading heading={'Grow Your Business Through Strategic '} colorHeading={'Collaboration'} />
          <p className='text-md lg:text-base font-manrope text-center mt-4'>Success is built on meaningful partnerships. At <Link className="font-semibold hover:underline" href="/">Indo European</Link>, we collaborate with businesses that want to expand their services, reach new audiences, and create additional value for their customers. Whether you're an education-related business or operate in a complementary industry, our partnership program is designed to help both organisations achieve sustainable growth.</p>
          <p className='text-md lg:text-base font-manrope text-center mt-4'>By combining your expertise with our experience in international education, we create opportunities that benefit businesses, students, and institutions alike.</p>
          <div className='w-60 h-60 rounded-full bg-primary/10 absolute -bottom-20 left-10'/>
          <div className='w-20 h-20 rounded-full bg-secondary/10 absolute -bottom-20 left-0'/>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 mt-10'>
            {corporatePartnerBenefits.map((item, index) => {
              const Icon = item.icon;
              return <Card id={item.id} key={item.id} title={item.title} description={item.description} image={item.image} Icon={Icon} />
            })}
          </div>
       </div>
     </section>
     <section className='max-w-6xl mx-auto'>
       <div className='py-12 px-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 mt-10'>
             <ScrollAnimate direction='left' className=''>
              <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold'>Who Can Partner With <span className='text-secondary'>Us?</span></h2>
              <p className='text-md lg:text-base font-manrope mt-2'>Our partnership program is suitable for a wide range of businesses, including:</p>
              <ul className='my-4'>
                <li className='text-md lg:text-base font-semibold font-manrope text-primary'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp; Travel & Tour Companies</li>
                <li className='text-md lg:text-base font-semibold font-manrope text-primary'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp; Education Technology Providers</li>
                <li className='text-md lg:text-base font-semibold font-manrope text-primary'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp; Financial & Loan Consultants</li>
                <li className='text-md lg:text-base font-semibold font-manrope text-primary'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp; Visa & Documentation Services</li>
                <li className='text-md lg:text-base font-semibold font-manrope text-primary'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp; Insurance Providers</li>
                <li className='text-md lg:text-base font-semibold font-manrope text-primary'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp; HR & Recruitment Firms</li>
                <li className='text-md lg:text-base font-semibold font-manrope text-primary'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp; Training & Skill Development Companies</li>
                <li className='text-md lg:text-base font-semibold font-manrope text-primary'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp; Digital Marketing & Business Consultants</li>
                <li className='text-md lg:text-base font-semibold font-manrope text-primary'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp; Entrepreneurs Looking to Expand Their Services</li>
              </ul>
              <p className='text-md lg:text-base font-manrope'>If your business complements the overseas education industry, we'd be happy to explore collaboration opportunities with you.</p>
             </ScrollAnimate>
             <ScrollAnimate direction='right' className=''>
                <Image className="" height={540} width={480} src={'/images/other-businesses/other-businesses-5.png'} alt="Who Can Partner With Us"/>
             </ScrollAnimate>
          </div>
       </div>
     </section>
     <section className='max-w-6xl mx-auto'>
       <div className='py-12 px-10'>
         <div className='relative'>
              <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold text-center'>Why Businesses Choose <span className='text-secondary'>Indo European</span></h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 mt-5'>
               {partnershipBenefits.map((item, index) => {
                const Icon = item.icon;
                 return <Card id={item.id} key={item.id} title={item.title} description={item.description} image={item.image} Icon={Icon} />
               })}
              </div>
              <div className='bg-primary/10 h-50 w-50 rounded-full absolute right-0 bottom-0'/>
              <div className='bg-secondary/10 h-30 w-30 rounded-full absolute right-0 bottom-0'/>
         </div>
       </div>
     </section>
     <section className='bg-linear-to-r from-secondary/10 to-primary/10'>
       <div className='max-w-6xl mx-auto'>
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center mt-5 py-12 px-10'>
          <div className=''>
              <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold'>Let's Build Something Bigger <span className='text-secondary'>Together</span></h2>
              <p className='text-md lg:text-base font-manrope mt-4'>Great partnerships create greater opportunities. If you're looking to expand your business, offer additional value to your clients, or enter the growing overseas education sector, <Link className='font-semibold hover:underline' href={'/'}>Indo European</Link> is ready to collaborate with you.</p>
              <p className='text-md lg:text-base font-manrope mt-4'>Let's connect, explore possibilities, and build a partnership that creates lasting success for both businesses.</p>
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