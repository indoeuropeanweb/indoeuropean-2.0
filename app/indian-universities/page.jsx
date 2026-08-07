import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '../components/Breadcrumb'
import Card from '../components/Card';
import GlobalForm from '../components/GlobalForm';
import { FaCircleCheck } from 'react-icons/fa6';
import { CiPaperplane } from 'react-icons/ci';
import {
  FaGlobe,
  FaUniversity,
  FaPlaneDeparture,
  FaAward,
  FaHandshake,
  FaHeadset,
} from "react-icons/fa";
import ScrollAnimate from '../components/ScrollAnimate';

const page = () => {

const universityPartnerBenefits = [
    {
        id: 1,
        title: "Create International Learning Pathways",
        description:
        "Give your students access to globally recognised universities and international study opportunities. Through our extensive network of overseas institutions, your university can introduce students to international degree programmes, exchange opportunities, and higher education pathways that support their future ambitions.",
        image: "/images/indian-universities/content/1.webp",
        icon: FaGlobe,
    },
    {
        id: 2,
        title: "Expand Your Global Academic Network",
        description:
        "Collaborating with Indo European enables your institution to establish valuable connections with international universities and educational organisations. These partnerships encourage academic cooperation, knowledge sharing, and long-term institutional growth.",
        image: "/images/indian-universities/content/2.webp",
        icon: FaUniversity,
    },
    {
        id: 3,
        title: "Student Mobility & Overseas Education Support",
        description:
        "We work closely with universities to guide students through every stage of their international education journey. From course selection and university applications to visa assistance and pre-departure guidance, our experts provide comprehensive support that simplifies the study abroad process.",
        image: "/images/indian-universities/content/3.webp",
        icon: FaPlaneDeparture,
    },
    {
        id: 4,
        title: "Strengthen Institutional Recognition",
        description:
        "International collaborations enhance a university's reputation and demonstrate its commitment to providing students with global learning opportunities. Partnering with Indo European helps institutions build credibility while expanding their academic reach beyond national boundaries.",
        image: "/images/indian-universities/content/4.webp",
        icon: FaAward,
    },
    {
        id: 5,
        title: "Academic & Industry Collaboration",
        description:
        "Our partnerships go beyond student admissions. We encourage collaboration in academic initiatives, research engagement, industry interactions, faculty development programmes, and international educational activities that contribute to institutional excellence.",
        image: "/images/indian-universities/content/5.webp",
        icon: FaHandshake,
    },
    {
        id: 6,
        title: "Dedicated Support for University Teams",
        description:
        "Our experienced professionals work alongside university representatives to ensure smooth communication, efficient admission coordination, and timely assistance whenever required. We believe successful partnerships are built through consistent support and transparent collaboration.",
        image: "/images/indian-universities/content/6.webp",
        icon: FaHeadset,
    },
];

  return (
    <>
     <Breadcrumb title={'Indian Universities'} imgUrl={'/images/indian-universities/indian-universities-cover.webp'} />
     <section className='max-w-6xl mx-auto'>
      <div className='py-12 px-10'>
         <div className='relative'>
              <h2 className='text-2xl lg:text-3xl text-primary font-Jakarta font-bold text-center'>Connect Your Institution with Global Education <span className='text-secondary'>Opportunities</span></h2>
              <p className='text-md lg:text-base font-manrope text-center mt-4'>Higher education is becoming increasingly international, and universities are looking for
                meaningful collaborations that create value for students and faculty alike. Indo European
                partners with Indian universities to build strong academic relationships, expand international
                opportunities, and support students who aspire to pursue global education.</p>
              <p className='text-md lg:text-base font-manrope text-center mt-4'>Our partnership model is designed to help institutions strengthen their international presence
                while providing students with better academic pathways and career prospects.</p>
                <div className='bg-primary/10 w-50 h-50 rounded-full absolute left-35 -bottom-20' />
          <div className='bg-secondary/10 w-25 h-25 rounded-full absolute left-0 -bottom-20' />
         </div>
         <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center mt-5'>
            {universityPartnerBenefits.map((item, index) => {
                const Icon = item.icon;
                return <Card id={item.id} key={item.id} title={item.title} description={item.description} image={item.image} Icon={Icon} />
            })}
         </div>
      </div>
     </section>
     <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-4xl'>
        <div className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center mt-10'>
          <ScrollAnimate direction='left' className=''>
             <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold mt-4'>Benefits of Partnering with <span className='text-secondary'>Indo European</span></h2>
           <ul className='space-y-2 my-4'>
            <li className='text-md lg:text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Access to an extensive international university network.</li>
            <li className='text-md lg:text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Global education opportunities for students.</li>
            <li className='text-md lg:text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Professional admission and counselling support.</li>
            <li className='text-md lg:text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Assistance with international collaborations.</li>
            <li className='text-md lg:text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Student-focused overseas education guidance.</li>
            <li className='text-md lg:text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Long-term institutional partnership approach.</li>
           </ul>
          </ScrollAnimate>
          <ScrollAnimate direction='right' className=''>
            <Image className="mx-auto" height={540} width={250} src={'/images/indian-universities/indian-universities-1.png'} alt="Benefits of Partnering with Indo European" />
          </ScrollAnimate>
          </div>
        </div>
        </div>
     </section>
     <section className='max-w-6xl mx-auto'>
       <div className='py-12 px-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10'>
        <ScrollAnimate direction='left' className=''>
           <Image className='rounded-2xl' height={240} width={300} src={'/images/indian-universities/indian-universities-2.png'} alt="Partner With Us" />
         </ScrollAnimate>
         <ScrollAnimate direction='right' className=''>
           <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold'>Who Can <span className='text-secondary'>Partner With Us?</span></h2>
           <p className='text-md lg:text-base font-manrope mt-2'>Our partnership programme is suitable for:</p>
           <ul className='space-y-2 my-4'>
            <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Public & Private Universities</li>
            <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Deemed Universities</li>
            <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Colleges & Higher Education Institutions</li>
            <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Academic Groups</li>
            <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Educational Trusts</li>
            <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='inline-block size-6 text-secondary'/>&nbsp;Institutions Expanding Their Global Outreach</li>
           </ul>
         </ScrollAnimate>
       </div>
       </div>
     </section>
     <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-b-4xl'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center py-12 px-10'>
            <div className=''>
               <h2 className='text-2xl lg:text-3xl text-primary font-Jakarta font-bold'>Let's Build Global Opportunities <span className='text-secondary'>Together</span></h2>  
               <p className='text-md lg:text-base font-manrope my-4'>At <Link className="font-semibold hover:underline" href="/">Indo European</Link>,we believe every successful partnership begins with a shared vision for
                quality education. By working together, we can create international opportunities that benefit
                students, strengthen institutions, and encourage academic excellence across borders.</p>
                <p className='text-md lg:text-base font-manrope'>If your institution is looking to expand its global presence and provide students with international
learning opportunities, our team is ready to collaborate with you.</p>
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