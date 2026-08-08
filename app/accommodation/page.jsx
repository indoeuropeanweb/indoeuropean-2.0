import Link from 'next/link'
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../components/Heading'
import Card from '../components/Card';
import ScrollAnimate from '../components/ScrollAnimate';
import GlobalForm from '../components/GlobalForm';
import { accommodationCards, accommodationFeatures } from '@/public/data/homedata';

const page = () => {

  return (
    <>
      <Breadcrumb title={'Accommodation Assistance'} imgUrl={'/images/accommodation/accommodation-cover.webp'} />
      <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10 relative'>
           <div className='relative'>
           <Heading heading={'Helping You Find the Right Place to Call '} colorHeading={'Home'}/>
           <p className='text-md lg:text-base font-manrope mt-6 text-center'>Moving to a new country is an exciting experience, and having the right accommodation makes the transition much easier. At <Link className="font-semibold hover:underline" href="/">Indo European</Link>, we understand that students need a safe, comfortable, and affordable place to live while pursuing their education abroad. Our accommodation assistance service is designed to help you find suitable housing options before you arrive, allowing you to focus on your studies with complete peace of mind.</p>
           <p className='text-md lg:text-base font-manrope mt-2 text-center'>Whether you prefer university-managed residences or private accommodation, our experienced team provides the guidance and support you need to make the right choice.</p>
           <div className='w-60 h-60 rounded-full bg-primary/10 absolute bottom-0 left-10'/>
           <div className='w-20 h-20 rounded-full bg-secondary/10 absolute bottom-0 left-0'/>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8'>
               {accommodationCards.map((item, index) => {
                const Icon = item.icon;
                return <Card key={item.id} id={item.id} title={item.title} description={item.description} image={item.image} Icon={Icon} />
               })}
           </div>
        </div>
      </section>
      <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
          <Heading heading={'Why Choose Indo European for Accommodation '} colorHeading={'Assistance?'}/>
          <div className='grid grid-cols-1 lg:grid-cols-2 justify-center gap-8 mt-10'>
            {accommodationFeatures.map((item, index) => {
                const Icon = item.icon;
                return <ScrollAnimate key={item.id} direction='down'>
                <div className="relative border border-secondary shadow-lg shadow-secondary py-4 px-4 rounded-full hover:-translate-y-3 duration-500 ease-in-out">
                <div className="bg-secondary absolute -left-4 -top-4 flex justify-center items-center rounded-full p-5">
                <Icon className="inline-block size-8 text-white" />
                </div>
                <div className="ms-16">
                    <h6 className="text-md lg:text-base font-Jakarta font-bold text-primary">{item.title}</h6>
                    <p className="text-xs text-primary font-manrope mt-1">{item.description}</p>
                </div>
            </div>
            </ScrollAnimate>
            })}
          </div>
        </div>
      </section>
      <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-4xl'>
        <div className='max-w-6xl mx-auto'>
          <div className='py-12 px-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className=''>
               <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary'>Start Your Study Abroad Journey with <span className='text-secondary'>Confidence</span></h2>
               <p className='text-justify text-md lg:text-base font-manrope mt-10'>Finding the right accommodation is an essential part of a successful study abroad experience. With Indo European's <Link className='font-semibold hover:underline' href={'/accommodation'}>Accommodation Assistance</Link>, you receive expert guidance in choosing a safe, convenient, and budget-friendly place to live, allowing you to begin your international education journey with confidence and peace of mind.<br /><br />Let <Link className='font-semibold hover:underline' href={'/'}>Indo European</Link> help you find the perfect student accommodation while you focus on achieving your academic goals.</p>
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