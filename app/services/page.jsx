import Breadcrumb from '../components/Breadcrumb'
import Heading from '../components/Heading';
import Link from 'next/link';
import { servicesPage } from '@/public/data/homedata';
import GlobalForm from '../components/GlobalForm';
import Card from '../components/Card';

const page = () => {
  return (
    <>
       <Breadcrumb title={'Explore Our Services'} imgUrl={'/images/services/services-1.webp'}/>
       <section className='max-w-6xl mx-auto'>
         <div className='py-12 px-10'>
            <Heading heading={'Comprehensive Study Abroad Services for Every Step of Your '} colorHeading={'Journey'}/>
            <p className='mt-5 mb-10 font-manrope text-md lg:text-base text-center'>At <Link className="font-semibold hover:underline" href="/">Indo European</Link>, we believe that studying abroad should be an exciting experience, not a
            stressful one. That's why we offer complete guidance to students who dream of pursuing higher
            education in top international destinations. From selecting the right university to settling into
            your new country, our experienced counsellors are with you at every stage.
            </p>
            <div className='mt-5 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-5 justify-center items-center'>
            {servicesPage.map((service, index) => {
                const Icon = service.icon;
                return <Card key={service.id} id={service.id} title={service.title} description={service.description} image={service.img} Icon={Icon} />
            })}
            <div className='bg-primary/10 w-60 h-60 rounded-full absolute bottom-0 right-0 z-10' />
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