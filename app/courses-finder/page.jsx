"use client";
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../components/Heading'
import fetchCourses from '@/utils/fetchCourses'
import CourseCard from '../components/courses/CourseCard';

const page = () => {
  
  const data = fetchCourses();
  console.log(data);

  return (
    <>
     <Breadcrumb title={'Study Abroad Courses'} imgUrl={'/images/courses/course-finder/course-finder.webp'} />
     <section className='max-w-6xl max-auto'>
        <div className='py-12 px-10 relative'>
           <Heading heading={'Your Goals. The Right Course. A Smarter '} colorHeading={'Future.'} />
           <p className='text-md lg:text-base font-manrope mt-4 text-center'>Not sure which course fits your ambitions? Our Course Finder helps you discover study
            programmes that align with your interests, academic profile, and career plans. Explore the right
            opportunities and turn your study abroad goals into a clear direction.</p>
        <div className="rounded-full w-60 h-60 bg-primary/10 absolute -bottom-30 -left-10 z-1"/>
        <div className="rounded-full w-25 h-25 bg-secondary/10 absolute -bottom-20 left-47 z-1"/>
        <div className='max-w-6xl mx-auto'>
           <div className='py-12 px-10'>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <input className='' placeholder='Search Courses'/>
             </div>
           </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           <CourseCard />
        </div>
        </div>
     </section>
    </>
  )
}

export default page