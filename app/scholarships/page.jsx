
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../components/Heading'
import ScrollAnimate from '../components/ScrollAnimate';
import Card from '../components/Card';
import {
  FaSearch,
  FaClipboardCheck,
  FaFileAlt,
  FaFolderOpen,
  FaCalendarAlt,
} from "react-icons/fa";
import { CiPaperplane } from 'react-icons/ci';
import GlobalForm from '../components/GlobalForm';

const page = () => {
  const scholarshipTypes = [
  {
    id: 1,
    title: "Merit-Based Scholarships",
    description:
      "These awards recognise students who demonstrate strong academic performance, leadership qualities, extracurricular achievements, or other notable accomplishments. The amount of financial support can vary depending on the university or scholarship provider.",
    image: "/images/scholarships/content/merit-based.webp",
  },
  {
    id: 2,
    title: "Need-Based Financial Support",
    description:
      "Need-based scholarships are intended to assist students who require financial support to pursue higher education. Eligibility may depend on factors such as family income and the student's overall financial circumstances.",
    image: "/images/scholarships/content/financial.webp",
  },
  {
    id: 3,
    title: "University Scholarships",
    description:
      "Many international universities offer scholarships directly to eligible international students. These may be based on academic performance, programme choice, application strength, or specific university criteria.",
    image: "/images/scholarships/content/university.webp",
  },
  {
    id: 4,
    title: "Course & Programme Scholarships",
    description:
      "Some funding opportunities are connected to particular academic fields or programmes. Students pursuing areas such as engineering, technology, business, research, sustainability, or other specialised disciplines may find relevant scholarship options.",
    image: "/images/scholarships/content/courses.webp",
  },
  {
    id: 5,
    title: "Government & External Scholarships",
    description:
      "Governments, educational organisations, foundations, and international institutions also provide scholarships for students pursuing education abroad. These opportunities can have separate eligibility requirements and application deadlines.",
    image: "/images/scholarships/content/government-support.webp",
  },
];

const scholarshipApplicationTips = [
  {
    id: 1,
    title: "Start Your Research Early",
    description:
      "Look for scholarship opportunities as soon as you shortlist your preferred universities and courses. Early research gives you enough time to understand eligibility criteria and prepare a complete application.",
    image: "/images/scholarships/tips/research.webp",
    icon: FaSearch,
  },
  {
    id: 2,
    title: "Check Every Requirement",
    description:
      "Don't assume that good grades alone are enough. Some scholarships may consider academic performance, English language scores, leadership experience, personal statements, research interests, financial circumstances, or other criteria.",
    image: "/images/scholarships/tips/requirement.webp",
    icon: FaClipboardCheck,
  },
  {
    id: 3,
    title: "Build a Strong Application",
    description:
      "Your academic achievements matter, but your overall profile can also make a difference. Highlight relevant projects, achievements, extracurricular activities, leadership experience, work experience, or community involvement where applicable.",
    image: "/images/scholarships/tips/application.webp",
    icon: FaFileAlt,
  },
  {
    id: 4,
    title: "Prepare Your Documents Carefully",
    description:
      "Keep academic transcripts, certificates, recommendation letters, personal statements, financial documents, test scores, and other required paperwork ready according to the scholarship guidelines.",
    image: "/images/scholarships/tips/carefully.webp",
    icon: FaFolderOpen,
  },
  {
    id: 5,
    title: "Pay Attention to Deadlines",
    description:
      "Scholarship deadlines may be different from university admission deadlines. Missing the funding deadline could mean losing an opportunity even if you qualify, so maintain a clear application timeline.",
    image: "/images/scholarships/tips/attention-deadline.webp",
    icon: FaCalendarAlt,
  },
];

  return (
    <>
      <Breadcrumb title={'Scholarships'} imgUrl={'/images/scholarships/scholarships-cover.webp'} />
      <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
          <div className='relative'>
             <Heading heading={'Make Your International Education More '} colorHeading={'Affordable'} />
             <p className='text-md lg:text-base font-manrope mt-4 text-center'>Studying abroad can be a life-changing experience, but tuition fees and living expenses can
                make it financially challenging for many students. Scholarships can help reduce this burden and
                make international education more accessible.</p>
            <p className='text-md lg:text-base font-manrope mt-2 text-center'>At <Link className="font-semibold hover:underline" href={'/'}>Indo European</Link>, we help students explore scholarship opportunities based on their academic
                profile, chosen course, destination, and financial requirements. From university-funded awards
                to government and programme-specific scholarships, our counsellors help you understand your
                options and prepare a stronger application.</p>
            <div className='w-60 h-60 rounded-full bg-primary/10 absolute -bottom-20 left-10'/>
            <div className='w-20 h-20 rounded-full bg-secondary/10 absolute -bottom-20 left-0'/>
          </div>
        </div>
      </section>
      <section className='max-w-6xl mx-auto'>
         <div className='py-12 px-10'>
          <div className=''>
            <Heading heading={'Explore Different Scholarship '} colorHeading={'Opportunities'} />
            <p className='text-md lg:text-base font-manrope mt-4'>Some funding opportunities are connected to particular academic fields or programmes. Students pursuing areas such as engineering, technology, business, research, sustainability, or other specialised disciplines may find relevant scholarship options.</p>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {scholarshipTypes.map((item, index) => {
                return (<ScrollAnimate direction='down' key={item.id} className="my-5 flex flex-col hover:scale-105 duration-500 transition-all ease-in-out gap-4 rounded-2xl border border-primary">
                  <Image className="rounded-t-2xl aspect-video" height={360} width={420} src={item.image} alt={item.title} />
                  <div className="px-4 pb-4">
                    <h4 className="text-md lg:text-base font-semibold font-Jakarta">{item.title}</h4>
                    <p className="text-sm lg:text-md font-manrope mt-2">{item.description}</p>
                  </div>
                  {/* <button className="text-primary cursor-pointer text-end hover:text-secondary transition-all ease-in-out duration-500 inline-block rounded-2xl px-4 pb-4 mt-auto" href={`/services/${service.slug}`}>Read More &nbsp;<FaArrowRightLong className="size-4 inline-block" /></button> */}
                </ScrollAnimate>)
               })}
            </div>
          </div>
         </div>
      </section>
      <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
          <div className=''>
            <Heading heading={'How to Improve Your Scholarship '} colorHeading={'Chances'} />
            <p className='text-md lg:text-base font-manrope text-center mt-2'>Getting a scholarship can be competitive, so preparation should begin well before the deadline.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
               {scholarshipApplicationTips.map((item, index) => {
                const Icon = item.icon;
                return <Card id={item.id} key={item.id} title={item.title} description={item.description} image={item.image} Icon={Icon}/>
               })}
            </div>
          </div>
        </div>
      </section>
      <section className='bg-linear-to-r from-primary/10 to-secondary/10 rounded-4xl'>
         <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 py-12 px-10'>
            <ScrollAnimate direction='left' className=''>
            <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold'>Scholarships We Can Help You <span className='text-secondary'>Explore</span></h2>
            <p className='text-md lg:text-base font-manrope mt-4'>Depending on your destination and academic profile, you may find opportunities such as:</p>
            <ul className='space-y-2 my-2'>
                <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;University-specific scholarships</li>
                <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Government-funded scholarships</li>
                <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Merit scholarships</li>
                <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Need-based financial assistance</li>
                <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Research scholarships</li>
                <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Programme-specific funding</li>
                <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;International student scholarships</li>
                <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Partial and fully funded scholarship opportunities</li>
            </ul>
            <p className='text-md lg:text-base font-manrope mt-4'>Scholarship availability, eligibility, award amounts, and deadlines can change, so students should always verify the latest requirements with the respective university or scholarship provider.</p>
            </ScrollAnimate>
            <ScrollAnimate direction='right' className=''>
               <Image className='' height={360} width={360} src={'/images/scholarships/scholarship-1.png'} alt="Study " />
            </ScrollAnimate>
          </div>
         </div>
      </section>
      <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
           <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10'>
              <ScrollAnimate direction='left' className=''>
               <Image className='mx-auto border-2 border-dotted border-secondary rounded-full' height={360} width={360} src={'/images/scholarships/scholarship-2.png'} alt="Scholarships for Study Abroad" />
              </ScrollAnimate>
              <ScrollAnimate direction='right' className=''>
                <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold'>What Makes a Scholarship Application <span className='text-secondary'>Strong?</span></h2>
                <p className='text-md lg:text-base font-manrope my-2'>A successful scholarship application is about presenting your profile clearly and meeting every requirement. We can help you understand how to:</p>
                <ul className='space-y-2 mt-4'>
                  <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Identify scholarships relevant to your profile.</li>
                  <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Evaluate eligibility before applying.</li>
                  <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Organise supporting documents.</li>
                  <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Prepare a strong personal statement or scholarship essay.</li>
                  <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Present your academic and extracurricular achievements effectively.</li>
                  <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Plan applications around important deadlines.</li>
                  <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Understand scholarship terms and funding coverage.</li>
                </ul>
              </ScrollAnimate>
           </div>
        </div>
      </section>
      <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-b-4xl'>
       <div className='max-w-6xl mx-auto'>
        <div className='py-12 px-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10'>
         <div className=''>
            <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold'>Get Expert Guidance on Funding Your <span className='text-secondary'>Studies Abroad</span></h2>
            <p className='text-md lg:text-base font-manrope mt-4'>Finding the right scholarship can take time, especially when opportunities vary between countries, universities, and courses. At <Link className='font-semibold hover:underline' href={'/'}>Indo European</Link>, our counsellors help students explore suitable funding options alongside their university choices.</p>
            <p className='text-md lg:text-base font-manrope mt-2'>We can guide you through course selection, university selection, scholarship research, admission applications, and student visa preparation, giving you a more organised approach to your study abroad plans.</p>
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