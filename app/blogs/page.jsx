
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '../components/Breadcrumb';
import { blogs } from '@/public/data/blogs';


const page = () => {
  return (
    <>
     <Breadcrumb imgUrl={'/images/blogs/blogs-back.jpg'} title={'Our Latest Blogs'}/>
     <section className='max-w-6xl mx-auto'>
       <div className='py-12 px-10'>
      <h2 className="text-2xl md:text-4xl font-Jakarta font-semibold text-primary text-center mt-5">Study Abroad  <span className='text-secondary'>Blogs & Resources</span></h2>
      <p className="text-base font-manrope mt-3 mb-10 text-center">Discover practical guides, admission tips, visa updates, and destination insights written by our experts. Whether you're just getting started or ready to apply, our blogs are here to support your study abroad journey.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link
            href={`/blogs/${blog.slug}`}
            key={blog.id}
            className="border rounded-xl overflow-hidden hover:scale-102 duration-500 ease-in-out"
          >
          <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
              width={480}
              height={320}
          />
          <div className="p-4">
            <h3 className="font-semibold font-Jakarta text-base md:text-xl">
              {blog.title}
            </h3>

              <div
                // href={`/blogs/${blog.slug}`}
                className="text-blue-600 mt-5 inline-block hover:underline"
              >
                Read More →
              </div>
              {/* <p className="font-roboto text-sm md:text-md text-end">{blog.publishDate}</p> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
     </section>
    </>
  )
}

export default page