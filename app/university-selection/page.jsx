import Link from 'next/link'
import Image from 'next/image';
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../components/Heading'
import {
  FaUserCheck,
  FaUniversity,
  FaBalanceScale,
  FaClipboardCheck,
  FaGraduationCap,
  FaBriefcase,
  FaMoneyBillWave,
  FaUsers,
  FaUserTie,
  FaGlobe,
  FaComments,
  FaHandsHelping,
} from "react-icons/fa";
import Card from '../components/Card';
import ScrollAnimate from '../components/ScrollAnimate';
import GlobalForm from '../components/GlobalForm';

const page = () => {
const universitySelectionProcess = [
  {
    id: 1,
    title: "Personalised Profile Evaluation",
    description: "Every student has different academic achievements, interests, and career goals. We begin by understanding your complete profile before recommending universities that are best suited to your aspirations.",
    icon: FaUserCheck,
  },
  {
    id: 2,
    title: "University Shortlisting",
    description: "Based on your qualifications, preferred country, budget, and course, we prepare a customized list of universities that offer the best opportunities for your future.",
    icon: FaUniversity,
  },
  {
    id: 3,
    title: "Compare Your Options",
    description: "We help you compare universities based on academic reputation, tuition fees, scholarships, internship opportunities, campus facilities, graduate employability, and post-study career prospects so you can make an informed choice.",
    icon: FaBalanceScale,
  },
  {
    id: 4,
    title: "Admission Eligibility Review",
    description: "Every university has different admission requirements. Our experts review your academic qualifications, English language proficiency, and supporting documents to ensure you meet the eligibility criteria before applying.",
    icon: FaClipboardCheck,
  },
];

const universitySelectionBenefits = [
  {
    id: 1,
    title: "Academic Excellence",
    description:
      "We recommend universities known for quality education, experienced faculty, modern learning facilities, and globally recognised qualifications.",
    image: "/images/university-selection/content/1.webp",
    icon: FaGraduationCap,
  },
  {
    id: 2,
    title: "Career Opportunities",
    description:
      "Our counsellors help you identify institutions that provide strong industry exposure, internships, placement support, and excellent graduate employment outcomes.",
    image: "/images/university-selection/content/2.webp",
    icon: FaBriefcase,
  },
  {
    id: 3,
    title: "Budget & Scholarships",
    description:
      "Finding the right university also means finding one that fits your financial plan. We guide you towards institutions offering affordable tuition fees, scholarships, and financial aid opportunities whenever available.",
    image: "/images/university-selection/content/3.webp",
    icon: FaMoneyBillWave,
  },
  {
    id: 4,
    title: "Student Life & Campus Environment",
    description:
      "A positive learning environment plays an important role in your overall experience. We help you choose universities that offer excellent student support services, multicultural campuses, and a safe learning atmosphere.",
    image: "/images/university-selection/content/4.webp",
    icon: FaUsers,
  },
];

const universitySelectionWhyChooseUs = [
  {
    id: 1,
    title: "Experienced Education Counsellors",
    description:
      "Our team provides personalised recommendations based on your academic profile, career plans, and future goals.",
    icon: FaUserTie,
  },
  {
    id: 2,
    title: "Wide University Network",
    description:
      "Get access to a broad range of universities across Europe and other leading international study destinations, giving you more options to choose from.",
    icon: FaGlobe,
  },
  {
    id: 3,
    title: "Transparent Guidance",
    description:
      "We provide honest advice and help you compare universities objectively, ensuring you select the institution that is truly right for you.",
    icon: FaComments,
  },
  {
    id: 4,
    title: "End-to-End Admission Support",
    description:
      "From university selection and application submission to visa guidance and pre-departure assistance, our experts remain with you throughout your study abroad journey.",
    icon: FaHandsHelping,
  },
];

  return (
    <>
     <Breadcrumb title={'University Selection'} imgUrl={'/images/university-selection/university-selection-cover.webp'} />
     <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
         <div className='relative'>
           <Heading heading={'Find the Right University for Your Academic & Career '} colorHeading={'Goals'} />
           <p className='text-center text-md lg:text-base font-manrope mt-4'>Selecting the right university is one of the most important decisions in your study abroad
            journey. The university you choose influences your education, career opportunities, learning
            environment, and future growth. At <Link className="font-semibold hover:underline" href={'/'}>Indo European</Link>, we help students identify universities that
            best match their academic profile, career aspirations, budget, and preferred study destination.</p>
            <p className='text-center text-md lg:text-base font-manrope mt-2'>Our knowledgeable counselors make the process of choosing a university easy, stress-free, and
            informed thanks to their extensive network of internationally recognized universities and years of
            experience in overseas education counseling.</p>
            <div className='w-60 h-60 rounded-full bg-primary/10 absolute -bottom-20 left-10'/>
            <div className='w-20 h-20 rounded-full bg-secondary/10 absolute -bottom-20 left-0'/>
         </div>
        </div>
     </section>
     <section className='max-w-6xl mx-auto'>
       <div className='py-12 px-10'>
         <div className=''>
            <Heading heading={'Why University Selection '} colorHeading={'Matters'} />
            <p className='text-center text-md lg:text-base font-manrope mt-4'>Choosing a university is about much more than rankings. Every institution offers different
            programmes, teaching methods, research opportunities, tuition fees, campus facilities, and
            career prospects. Our counselors carefully evaluate every aspect to help you make a confident
            decision that supports your future ambitions.</p>
         </div>
         <div className='py-12'>
            <Heading heading={'Our University Selection '} colorHeading={'Process'} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12'>
              {universitySelectionProcess.map((item, index) => {
                const Icon = item.icon;
                return <ScrollAnimate direction='left' className='relative group transition-all duration-500 hover:-translate-y-2 hover:border-secondary hover:shadow-xl border border-secondary p-2 rounded-md space-y-2 flex items-center flex-col' key={item.id}>
                        <span className='text-2xl absolute -top-4 -left-4 font-bold text-secondary bg-white rounded-full border border-secondary w-10 h-10 flex justify-center items-center'>{item.id}</span>
                        <div className='bg-secondary p-4 rounded-full inline-block'><Icon className="size-8 inline-block text-white"/></div>
                        <h4 className='text-md lg:text-lg font-Jakarta text-center font-bold text-primary group-hover:text-secondary transition-all duration-500 ease-in-out'>{item.title}</h4>
                        <p className='text-sm lg:text-md font-manrope text-center'>{item.description}</p>  
                    </ScrollAnimate>
                })}
            </div>
         </div>
       </div>
     </section>
     <section className='max-w-6xl mx-auto'>
       <div className='py-12 px-10'>
         <div className=''>
            <Heading heading={'Factors We Consider While Selecting '} colorHeading={'Universities'} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
              {universitySelectionBenefits.map((item, index) => {
                const Icon = item.icon;
                return <Card id={item.id} key={item.id} title={item.title} description={item.description} image={item.image} Icon={Icon} />
              })}
            </div>
         </div>
       </div>
     </section>
     <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
          <Heading heading={'Why Choose Indo European for '} colorHeading={'University Selection?'} />
          <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5 mt-10'>
            <div className='space-y-5'>
               {universitySelectionWhyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return <ScrollAnimate key={item.id} direction='down'>
                      <div className="relative border border-secondary shadow-lg shadow-orange-100 py-4 px-4 rounded-full hover:-translate-y-3 duration-500 ease-in-out">
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
            <div className=''>
               <Image className="" width={480} height={540} src={'/images/university-selection/portrait-girl.png'} alt={'University Selection Girl Image'}/>
            </div>
          </div>
        </div>
     </section>
     <section className='bg-linear-to-r from-secondary/10 to-primary/10'>
       <div className='max-w-6xl mx-auto'>
         <div className='py-12 px-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10'>
            <div className=''>
               <h2 className='text-primary font-Jakarta text-2xl lg:text-3xl font-bold'>Start Your Global Education <span className='text-secondary'>Journey</span></h2>
               <p className='text-md lg:text-base font-manrope mt-5'>The right university can shape your future and open doors to exciting international opportunities.
                Let <Link className='font-semibold hover:underline' href={'/'}>Indo European</Link> help you shortlist the best universities, understand your options, and make
                informed decisions with confidence. Start your study abroad journey with expert university
                selection guidance tailored to your ambitions.</p>
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