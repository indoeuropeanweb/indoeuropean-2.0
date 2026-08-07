import Image from 'next/image';
import Breadcrumb from '../components/Breadcrumb'
import Card from '../components/Card'
import ScrollAnimate from '../components/ScrollAnimate';
import GlobalForm from '../components/GlobalForm';
import { CiPaperplane } from 'react-icons/ci';
import {
  FaGlobe,
  FaFileAlt,
  FaPassport,
  FaGraduationCap,
  FaBullhorn,
  FaUserTie,
} from "react-icons/fa";

const page = () => {

const associatePartnerBenefits = [
  {
    id: 1,
    title: "Global University Network",
    description:
      "Offer your students admission opportunities at leading universities across Europe and other popular international study destinations. With a diverse portfolio of institutions and programmes, you can cater to students from different academic backgrounds and career goals.",
    image: "/images/associate-agents/content/1.webp",
    icon: FaGlobe,
  },
  {
    id: 2,
    title: "Complete Admission Assistance",
    description:
      "Our admission experts assist with university shortlisting, application processing, document verification, and communication with universities. This ensures every application is handled efficiently and professionally.",
    image: "/images/associate-agents/content/2.webp",
    icon: FaFileAlt,
  },
  {
    id: 3,
    title: "Student Visa Support",
    description:
      "Visa procedures can often be complex. Our dedicated team provides guidance on documentation, application requirements, and the overall visa process, helping students complete their journey smoothly.",
    image: "/images/associate-agents/content/3.webp",
    icon: FaPassport,
  },
  {
    id: 4,
    title: "Training & Knowledge Support",
    description:
      "Stay informed with regular updates on university admissions, changing visa policies, scholarships, and new study opportunities. We equip our partners with the latest information to serve students more effectively.",
    image: "/images/associate-agents/content/4.webp",
    icon: FaGraduationCap,
  },
  {
    id: 5,
    title: "Marketing Assistance",
    description:
      "Grow your business with the help of promotional resources, branding support, and marketing guidance. We work closely with our partners to help them attract more students and build a stronger presence in the overseas education sector.",
    image: "/images/associate-agents/content/5.webp",
    icon: FaBullhorn,
  },
  {
    id: 6,
    title: "Dedicated Partner Manager",
    description:
      "Every associate partner receives personalised assistance from our experienced team. Whether you need support with applications, student queries, or university communication, we're always ready to help.",
    image: "/images/associate-agents/content/6.webp",
    icon: FaUserTie,
  },
];

  return (
    <>
     <Breadcrumb title={'Associate Agents'} imgUrl={'/images/associate-agents/associate-agents-cover.webp'} />
     <section className='max-w-6xl mx-auto'>
       <div className='py-12 px-10'>
          <div className='relative'>
             <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold text-center'>Why Become an <span className='text-secondary'>Associate Agent?</span></h2>
             <p className='text-center text-md lg:text-base mt-4'>Partnering with Indo European allows you to strengthen your education consultancy by offering
              reliable overseas education solutions. Our experienced team supports you throughout the
              admission process, enabling you to deliver professional services with confidence.</p>
             <div className='bg-primary/10 w-50 h-50 rounded-full absolute left-35 -bottom-20' />
          <div className='bg-secondary/10 w-25 h-25 rounded-full absolute left-0 -bottom-20' />
          </div>
          <div className='mt-10'>
              <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold text-center'>What You'll Receive as <span className='text-secondary'>Our Partner</span></h2>
              <div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center mt-5 gap-10'>
                 {associatePartnerBenefits.map((item, index) => {
                  const Icon = item.icon;
                  return <Card id={item.id} key={item.id} title={item.title} description={item.description} image={item.image} Icon={Icon}/>
                 })}
              </div>
          </div>
       </div>
     </section>
     <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-4xl'>
       <div className='max-w-6xl mx-auto'>
         <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 mt-10 py-12 px-10'>
            <ScrollAnimate direction='left' className=''>
               <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary'>Who Can <span className='text-secondary'>Join?</span></h2>
               <p className='text-md lg:text-base font-manrope mt-2'>Our Associate Agent Program is ideal for:</p>
               <ul className='space-y-2 my-4'>
                <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Education Consultants</li>
                <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Overseas Education Advisors</li>
                <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Career Counselling Centres</li>
                <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Coaching Institutes</li>
                <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Educational Service Providers</li>
                <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Entrepreneurs interested in the study abroad industry</li>
               </ul>
               <p className='text-md lg:text-base font-manrope mt-2'>If you're passionate about helping students build successful international careers, we'd love to
work with you.</p>
            </ScrollAnimate>
            <ScrollAnimate direction='right' className=''>
              <Image className="" width={360} height={480} src={'/images/associate-agents/join-us.png'} alt="Join Us at Indo European" />
            </ScrollAnimate>
         </div>
       </div>
     </section>
          <section className='max-w-6xl mx-auto'>
            <div className='py-12 px-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10'>
             <ScrollAnimate direction='left' className=''>
                <Image className='rounded-2xl' height={480} width={540} src={'/images/associate-agents/partnership-process.png'} alt="Our Partnership Process" />
              </ScrollAnimate>
              <ScrollAnimate direction='right' className=''>
                <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold'>Our Partnership <span className='text-secondary'>Process</span></h2>
                <p className='text-md lg:text-base font-manrope mt-2'>Getting started is simple.</p>
                <ul className='space-y-2 my-4'>
                 <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Submit your partnership enquiry.</li>
                 <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Connect with our team for a discussion.</li>
                 <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Complete the onboarding process.</li>
                 <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Start referring students and receive complete operational support.</li>
                 <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Grow your business with continuous guidance from Indo European.</li>
                </ul>
              </ScrollAnimate>
            </div>
          </section>
               <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-b-4xl'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center py-12 px-10'>
            <div className=''>
               <h2 className='text-2xl lg:text-3xl text-primary font-Jakarta font-bold'>Build a Successful Partnership with <span className='text-secondary'>Indo European</span></h2>  
               <p className='text-md lg:text-base font-manrope my-4'>We believe that strong partnerships create better opportunities for students and long-term
                growth for our associates. By joining the Indo European network, you gain more than just
                university access—you gain a dedicated team committed to your success.</p>
                <p className='text-md lg:text-base font-manrope'> Let's work together to help students achieve their global education goals while expanding your
                business with confidence.</p>
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