import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../components/Heading'
import ScrollAnimate from '../components/ScrollAnimate'
import Card from '../components/Card'
import { FaVideo } from 'react-icons/fa6'
import {
  FaHeadphones,
  FaBookOpen,
  FaPenAlt,
  FaMicrophone,
  FaSearch,
  FaBullseye,
  FaBookReader,
  FaLightbulb,
  FaTrophy,
  FaClock,
  FaBook,
  FaQuestionCircle,
  FaGraduationCap,
  FaUniversity,
  FaClipboardCheck,
  FaPassport,
  FaHome,
  FaChevronRight,
  FaGlobe,
  FaUserCheck,
  FaPencilAlt,
} from "react-icons/fa";
import GlobalForm from '../components/GlobalForm'

const page = () => {

const ieltsTrainingModules = [
  {
    id: 1,
    title: "Listening",
    description:
      "Learn how to identify key information, follow conversations, understand different accents, and manage different question formats through regular listening practice.",
    icon: FaHeadphones,
  },
  {
    id: 2,
    title: "Reading",
    description:
      "Develop techniques such as skimming, scanning, identifying keywords, understanding context, and managing time effectively across reading passages.",
    icon: FaBookOpen,
  },
  {
    id: 3,
    title: "Writing",
    description:
      "Build stronger responses for IELTS Writing Task 1 and Task 2 with guidance on structure, coherence, vocabulary, grammar, and presenting ideas clearly.",
    icon: FaPenAlt,
  },
  {
    id: 4,
    title: "Speaking",
    description:
      "Improve fluency, pronunciation, vocabulary, and confidence through guided speaking practice and feedback on your responses.",
    icon: FaMicrophone,
  },
];

const ieltsPreparationSteps = [
  {
    id: 1,
    title: "Understand Your Starting Point",
    description:
      "We begin by understanding your current English proficiency and identifying the areas that require more attention.",
    icon: FaSearch,
  },
  {
    id: 2,
    title: "Set a Realistic Target",
    description:
      "Your target band should be based on your university requirements, destination, current level, and preparation timeline.",
    icon: FaBullseye,
  },
  {
    id: 3,
    title: "Practise With Purpose",
    description:
      "Regular exercises, section-wise practice, and exam-style questions help you become familiar with the IELTS format and improve your approach.",
    icon: FaBookReader,
  },
  {
    id: 4,
    title: "Learn From Your Mistakes",
    description:
      "Feedback helps you understand recurring errors and work specifically on areas that are holding back your performance.",
    icon: FaLightbulb,
  },
  {
    id: 5,
    title: "Build Exam Confidence",
    description:
      "Mock tests and timed practice help you manage pressure, improve time management, and approach the IELTS exam with greater confidence.",
    icon: FaTrophy,
  },
];

const ieltsSkills = [
  {
    title: "Time Management",
    icon: FaClock,
  },
  {
    title: "Vocabulary & Grammar",
    icon: FaBook,
  },
  {
    title: "Reading Accuracy",
    icon: FaBookOpen,
  },
  {
    title: "Listening Comprehension",
    icon: FaHeadphones,
  },
  {
    title: "Writing Structure",
    icon: FaPenAlt,
  },
  {
    title: "Speaking Fluency",
    icon: FaMicrophone,
  },
  {
    title: "Common Question Patterns",
    icon: FaQuestionCircle,
  },
  {
    title: "Exam-Taking Strategies",
    icon: FaLightbulb,
  },
];

const ieltsWhoShouldPrepare = [
  {
    id: 1,
    title: "Students Planning to Study Abroad",
    description:
      "If you're planning to apply to universities overseas, we can help you understand the role of English-language proficiency in your admission process.",
    image: "/images/ielts-coaching/content/planning-to-study-abroad.webp",
  },
  {
    id: 2,
    title: "First-Time Test Takers",
    description:
      "New to IELTS? Structured preparation can help you understand the exam pattern, question types, assessment areas, and preparation strategy.",
    image: "/images/ielts-coaching/content/first-time-test-takers.webp",
  },
  {
    id: 3,
    title: "Students Improving Their Band Score",
    description:
      "If you've already taken IELTS and want to work towards a better score, targeted preparation can help you focus on your weaker areas.",
    image: "/images/ielts-coaching/content/improve-band-score.webp",
  },
  {
    id: 4,
    title: "Students With a Specific Deadline",
    description:
      "Planning your university application around a fixed intake? We can help you understand how to organise your IELTS preparation around your application timeline.",
    image: "/images/ielts-coaching/content/specific-deadline.webp",
  },
];

const ieltsProcessSteps = [
  {
    id: 1,
    title: "IELTS Preparation",
    icon: FaBookOpen
  },
  {
    id: 2,
    title: "Course Selection",
    icon: FaGraduationCap
  },
  {
    id: 3,
    title: "University Selection",
    icon: FaUniversity
  },
  {
    id: 4,
    title: "Admission Guidance",
    icon: FaClipboardCheck
  },
  {
    id: 5,
    title: "Visa Assistance",
    icon: FaPassport
  },
  {
    id: 6,
    title: "Accommodation & Pre-Departure Support",
    icon: FaHome
  }
];

const ieltsWhyChooseUs = [
  {
    id: 1,
    title: "Overseas Education Experience",
    description:
      "Indo European brings extensive experience in the international education sector, allowing students to connect their English-language preparation with their broader study abroad plans.",
    image: "/images/ielts-coaching/content-2/overseas-education-experience.webp",
    icon: FaGlobe,
  },
  {
    id: 2,
    title: "Personalised Guidance",
    description:
      "Your preparation should reflect your starting level and target. We focus on understanding individual requirements rather than following exactly the same approach for every learner.",
    image: "/images/ielts-coaching/content-2/personal-guidance.webp",
    icon: FaUserCheck,
  },
  {
    id: 3,
    title: "Focus on All Four Skills",
    description:
      "Listening, Reading, Writing, and Speaking all contribute to your IELTS performance. Our preparation covers the complete test rather than focusing only on one section.",
    image: "/images/ielts-coaching/content-2/focus-on-skills.webp",
    icon: FaGraduationCap,
  },
  {
    id: 4,
    title: "Regular Practice",
    description:
      "Consistent practice is an important part of preparation. Practice exercises and mock tests help students become more comfortable with the exam format.",
    image: "/images/ielts-coaching/content-2/regular-practice.webp",
    icon: FaPencilAlt,
  },
  {
    id: 5,
    title: "Study Abroad Support",
    description:
      "Once your language preparation is aligned with your goals, our wider overseas education services can help you explore suitable courses, universities, destinations, and admission pathways.",
    image: "/images/ielts-coaching/content-2/study-abroad-support.webp",
    icon: FaUniversity,
  },
];

  return (
    <>
     <Breadcrumb title={'IELTS Coaching in Delhi'} imgUrl={'/images/ielts-coaching/ielts-coaching-cover.webp'}/>
     <section className='max-w-6xl mx-auto'>
       <div className='py-12 px-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10'>
         <ScrollAnimate direction='left' className='relative'>
           <div className='mb-6'>
           <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold'>Prepare with the Right Guidance. Aim for Your Target <span className='text-secondary'>Band</span></h2>
           <p className='text-md lg:text-base font-manrope mt-4'>Nowadays, most students are willing to study abroad, and an IELTS score plays an important
            role in this journey. Indo-European IELTS coaching is designed to help students acquire the
            language skills and confidence needed and exam strategies to tackle the test with better
            preparation.</p>
            <p className='text-md lg:text-base font-manrope mt-2'>
            We believe in structured learning, regular practice, and personalized guidance over one-size-
            fits-all preparation. We use a structured approach to assist you in knowing your current level
            and practicing all four sections of the IELTS.
            </p>
            </div>
           <Link className="text-sm lg:text-md rounded-full px-10 py-3 border border-blue-400 space-x-5 z-2 relative cursor-pointer text-white bg-blue-400 font-Jakarta font-semibold" href="https://zoom.us/j/91022278457#success" target='_blank'><span className='px-2.5 py-2.5 rounded-full bg-blue-400 inline-block absolute -left-3 bottom-0 border border-white shadow-4xl shadow-blue-400 zoom-icon'><FaVideo className='text-white size-6 inline-block'/></span>Book a Free Counselling Session</Link>
            <div className="rounded-full w-60 h-60 bg-primary/10 absolute -bottom-30 -left-10 z-1"/>
            <div className="rounded-full w-25 h-25 bg-secondary/10 absolute -bottom-20 left-47 z-1"/>
         </ScrollAnimate>
         <ScrollAnimate direction='right' className=''>
            <Image className="mx-auto ielts-rotate" height={380} width={380} src={'/images/ielts-coaching/ielts-coaching-1.png'} alt="ELTS Coaching"/>
         </ScrollAnimate>
        </div>
       </div>
     </section>
     <section className='max-w-6xl mx-auto'>
      <div className='py-12 px-10'>
        <Heading heading={'What Does Our IELTS Training '} colorHeading={'Cover?'} />
        <p className='text-md lg:text-base font-manrope text-center mt-4'>IELTS assesses four key language skills. Our preparation focuses on each section while also helping you develop the overall English proficiency required for effective communication.</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center mt-10'>
         {ieltsTrainingModules.map((point, index) => {
            const Icon = point.icon;
            return  <ScrollAnimate direction='down' key={point.id}>
                    <div className="relative border border-secondary shadow-lg shadow-orange-100 py-4 px-4 rounded-full hover:-translate-y-3 duration-500 ease-in-out">
                    <div className="bg-secondary absolute -left-4 -top-4 flex justify-center items-center rounded-full w-15 h-15">
                    <Icon className='inline-block size-6 text-white'/>
                    </div>
                    <div className="ms-16">
                        <h6 className="text-md lg:text-base font-Jakarta font-bold text-primary">{point.title}</h6>
                        <p className="text-xs text-primary font-manrope mt-1">{point.description}</p>
                    </div>
                </div>
        </ScrollAnimate>
         })}
        </div>
      </div>
     </section>
     {/* <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-4xl'>
       <div className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
        <Heading heading={'A Practical Approach to IELTS '} colorHeading={'Preparation'} />
        <p className='text-md lg:text-base font-manrope text-center mt-4'>We believe effective preparation is about more than completing study material. Students need to understand their mistakes, practise consistently, and know where they need improvement.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center mt-10'>
           {ieltsPreparationSteps.map((item, index) => {
            const Icon = item.icon;
            return <ScrollAnimate direction='left' className='relative group transition-all duration-500 hover:-translate-y-2 hover:border-secondary hover:shadow-xl border border-secondary px-3 py-5 rounded-md bg-white space-y-2 flex items-center flex-col' key={item.id}>
                <span className='text-2xl absolute -top-4 -left-4 font-bold text-secondary bg-white rounded-full border border-secondary w-10 h-10 flex justify-center items-center'>{item.id}</span>
                <div className='bg-secondary p-4 rounded-full inline-block'><Icon className="size-8 inline-block text-white"/></div>
                <h4 className='text-md lg:text-lg font-Jakarta text-center font-bold text-primary group-hover:text-secondary transition-all duration-500 ease-in-out'>{item.title}</h4>
                <p className='text-sm lg:text-md font-manrope text-center'>{item.description}</p>  
            </ScrollAnimate>
           })}
        </div>
        </div>
       </div>
     </section> */}
     <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-4xl'>
        <div className='max-w-6xl mx-auto'>
       <div className='py-12 px-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5'>
        <ScrollAnimate direction='left' className=''>
           <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold'>IELTS Mock Tests & Performance <span className='text-secondary'>Feedback</span></h2>
           <p className='text-md lg:text-base font-manrope mt-4'>Knowing the test format is important, but understanding your performance is equally valuable.
            Our preparation approach can include IELTS mock tests and practice sessions that help you
            become familiar with exam conditions and identify areas for improvement.</p>
           <p className='text-md lg:text-base font-manrope mt-2'>Depending on the section, feedback can help you work on:</p>
           <ul className='space-y-2 mt-4'>
            {ieltsSkills.map((item, index) => {
              const Icon = item.icon;
              return <li className='text-md lg:text-base font-manrope font-semibold text-primary' key={index}><Icon className='inline-block size-5 text-secondary me-3'/>&nbsp;{item.title}</li>
            })}
           </ul>
           <p className='text-md lg:text-base font-Jakarta mt-4'>The objective is not simply to complete more tests, but to use practice to improve your
preparation.</p>
        </ScrollAnimate>
        <ScrollAnimate direction='right' className=''>
           <Image className='mx-auto' height={480} width={360} src={'/images/ielts-coaching/ielts-coaching-2.png'} alt="IELTS Classes for Study Abroad" />
        </ScrollAnimate>
        </div>
       </div>
     </section>
     <section className='max-w-6xl mx-auto'>
       <div className='py-12 px-10'>
        <Heading heading={'Who Can Benefit From Our '} colorHeading={'IELTS Classes?'} />
        <p className='text-md lg:text-base font-manrope mt-4 text-center'>Our IELTS preparation is suitable for students at different stages of their study abroad planning.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-10'>
           {ieltsWhoShouldPrepare.map((service, index) => {
            return (<ScrollAnimate direction="down" key={service.id} className="my-5 flex flex-col hover:scale-105 duration-500 transition-all ease-in-out gap-4 rounded-2xl border border-primary">
                <Image className="rounded-t-2xl aspect-video" height={360} width={420} src={service.image} alt={service.title} />
                <div className="px-4 py-4">
                    <h4 className="text-md lg:text-base font-semibold font-Jakarta">{service.title}</h4>
                    <p className="text-sm lg:text-md font-manrope mt-3">{service.description}</p>
                </div>
                {/*<button className="text-primary cursor-pointer text-end hover:text-secondary transition-all ease-in-out duration-500 inline-block rounded-2xl px-4 pb-4 mt-auto" href={`/services/${service.slug}`}>Read More &nbsp;<FaArrowRightLong className="size-4 inline-block" /></button> */}
            </ScrollAnimate>)
           })}
        </div>
       </div>
     </section>
     <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-4xl'>
       <div className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
              <Heading heading={'Academic IELTS or General '} colorHeading={'Training?'} />
              <p className='text-md lg:text-base font-manrope mt-4'>Choosing the right IELTS test depends on your purpose.</p>
              <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 mt-10'>
               <div className='bg-secondary/5 backdrop-blur-4xl p-4 rounded-lg border border-secondary hover:-translate-y-2 transition-all duration-500 ease-in-out'>
                  <h4 className='text-lg lg:text-xl font-Jakarta font-bold text-primary'>IELTS Academic</h4>
                  <p className='text-sm lg:text-md font-manrope mt-4'>IELTS Academic is generally associated with higher education and professional registration in
many contexts.</p>
               </div>
               <div className='bg-secondary/5 backdrop-blur-4xl p-4 rounded-lg border border-secondary hover:-translate-y-2 transition-all duration-500 ease-in-out'>
                  <h4 className='text-lg lg:text-xl font-Jakarta font-bold text-primary'>IELTS General Training</h4>
                  <p className='text-sm lg:text-md font-manrope mt-4'>IELTS General Training is commonly used for migration, work-related purposes, and certain
training or education pathways.</p>
               </div>
              </div>
              <p className='text-md lg:text-base font-manrope mt-4'>The appropriate test depends on the requirements of your university, organisation, visa route, or
other relevant authority. Always check the latest official requirements before booking your test.</p>
        </div>
       </div>
     </section>
     <section className='max-w-6xl mx-auto'>
      <div className='py-12 px-10'>
          <div className=''>
            <Heading heading={'Your IELTS Preparation Can Be Part of a Bigger '} colorHeading={'Plan'} />
            <p className='text-md lg:text-base font-manrope mt-4'>For students planning to study abroad, IELTS is often just one part of the overall process.</p>
            <p className='text-md lg:text-base font-manrope mt-2'>At <Link className='font-semibold hover:underline' href={'/'}>Indo European</Link>, students can receive guidance across different stages of their international
              education journey, including:</p>
          <div className="relative w-full py-8 lg:py-12">
            <div
              className="absolute
                top-16.75
                left-[8.33%]
                right-[8.33%]
                hidden
                h-0.5
                bg-secondary
                md:block
                lg:top-20.75"
            />
            <ul
              className="relative
                z-10
                flex
                flex-col
                gap-8
                md:flex-row
                md:items-start
                md:justify-between
                md:gap-2
                lg:gap-4
                xl:gap-8"
            >
              {ieltsProcessSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <li
                    key={step.id}
                    className="relative
                      flex
                      items-center
                      gap-4
                      md:flex-1
                      md:flex-col
                      md:items-center
                      md:gap-4"
                  >
                  <div
                      className="relative
                        z-10
                        flex
                        h-14
                        w-14
                        min-h-14
                        min-w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border-4
                        border-white
                        bg-secondary
                        shadow-lg
                        transition-all
                        duration-300
                        hover:scale-110
                        sm:h-16
                        sm:w-16
                        sm:min-h-16
                        sm:min-w-16
                        lg:h-18
                        lg:w-18
                        lg:min-h-18
                        lg:min-w-18"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-white sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                    </div>

                    <h5
                      className="
                        max-w-55
                        text-left
                        text-sm
                        font-semibold
                        leading-snug
                        font-Jakarta
                        sm:text-base
                        md:text-center
                        lg:text-[15px]
                        xl:text-base
                      "
                    >
                    {step.title}
                    </h5>

                    {index < ieltsProcessSteps.length - 1 && (
                      <FaChevronRight
                        className="
                          absolute
                          -right-3.5
                          top-7
                          z-20
                          hidden
                          h-4
                          w-4
                          text-secondary
                          md:block
                          lg:-right-3
                        "
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
            <p className='text-md lg:text-base font-manrope'>This allows students to approach their overseas education plans more systematically instead of
treating language preparation and university applications as completely separate processes.</p>
          </div>
      </div>
      </section>
      <section className='max-w-6xl mx-auto'>
         <div className='py-12 px-10'>
          <Heading heading={'Why Choose Indo European for IELTS '} colorHeading={'Preparation?'} />
           <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mt-10'>
             {ieltsWhyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return <Card id={item.id} key={item.id} title={item.title} description={item.description} image={item.image} Icon={Icon}/>
             })}
            <div className="rounded-full w-60 h-60 bg-primary/10 absolute bottom-10 -right-10 z-1"/>
            <div className="rounded-full w-25 h-25 bg-secondary/10 absolute bottom-10 right-47 z-1"/>
           </div>
         </div>
      </section>
      <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-b-4xl'>
         <div className='max-w-6xl max-auto'>
           <div className='py-12 px-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10'>
            <div className=''>
              <h2 className='text-primary text-2xl lg:text-3xl font-bold font-Jakarta'>More Than Just IELTS <span className='text-secondary'>Classes</span></h2>
              <p className='text-md lg:text-base font-manrope mt-4'>Choosing an <Link className='font-semibold hover:underline' href={"/contact"}>IELTS coaching centre in Delhi</Link> is not only about finding a place to practise
                English. It's about finding guidance that understands why you're taking the test in the first place.</p>
                <p className='text-md lg:text-base font-manrope mt-2'>If your goal is international education, your IELTS preparation should fit into your larger
                academic and career plan. That's where our experience in overseas education can add value to
                your preparation journey.</p>
            </div>
            <div className='mx-auto lg:ms-auto relative z-1 w-full max-w-md rounded-xl border border-white/10 bg-black/10 p-8 backdrop-blur-4xls'>
               <GlobalForm />
            </div>
           </div>
         </div>
      </section>
    </>
  )
}

export default page