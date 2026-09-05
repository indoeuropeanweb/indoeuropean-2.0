
import Breadcrumb from '../components/Breadcrumb';
import { blogs } from '@/public/data/blogs';
import BlogList from '../components/blogs/BlogList';

const page = () => {

  return (
    <>
     <Breadcrumb imgUrl={'/images/blogs/blogs-back.jpg'} title={'Our Latest Blogs'}/>
     <section className='max-w-6xl mx-auto'>
       <div className='py-12 px-10'>
      <h2 className="text-2xl md:text-4xl font-Jakarta font-semibold text-primary text-center mt-5">Study Abroad  <span className='text-secondary'>Blogs & Resources</span></h2>
      <p className="text-base font-manrope mt-3 mb-10 text-center">Discover practical guides, admission tips, visa updates, and destination insights written by our experts. Whether you're just getting started or ready to apply, our blogs are here to support your study abroad journey.</p>
       <div className="relative">
       <BlogList blogs={blogs}/>
       <div className="rounded-full w-60 h-60 bg-primary/10 absolute -bottom-30 -left-10 z-1"/>
       <div className="rounded-full w-25 h-25 bg-secondary/10 absolute -bottom-20 left-47 z-1"/>
       </div>
     </div>
     </section>
    </>
  )
}

export default page