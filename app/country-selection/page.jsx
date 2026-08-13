import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../components/Heading'
import CountrySwiper from '../components/CountrySwiper'
import {
  FaBriefcase,
  FaMoneyBillWave,
  FaUserGraduate,
  FaGlobe,
  FaUniversity,
  FaPassport,
  FaUsers,
} from "react-icons/fa";
import Card from '../components/Card';
import { CiPaperplane } from "react-icons/ci";
import GlobalForm from '../components/GlobalForm'

const page = () => {
const countryOptions = [
  {
    id: 1,
    country: "Australia",
    link: "/destinations/study-in-australia",
    image: "/images/country-selection/countries/australia.webp"
  },
  {
    id: 2,
    country: "Canada",
    link: "/destinations/study-in-canada",
    image: "/images/country-selection/countries/canada.webp"
  },
  {
    id: 3,
    country: "Denmark",
    link: "/destinations/study-in-denmark",
    image: "/images/country-selection/countries/denmark.webp"
  },
  {
    id: 4,
    country: "Finland",
    link: "/destinations/study-in-finland",
    image: "/images/country-selection/countries/finland.webp"
  },
  {
    id: 5,
    country: "France",
    link: "/destinations/study-in-france",
    image: "/images/country-selection/countries/france.webp"
  },
  {
    id: 6,
    country: "Germany",
    link: "/destinations/study-in-germany",
    image: "/images/country-selection/countries/germany.webp"
  },
  {
    id: 7,
    country: "Ireland",
    link: "/destinations/study-in-ireland",
    image: "/images/country-selection/countries/ireland.webp"
  },
  {
    id: 8,
    country: "Latvia",
    link: "/destinations/study-in-latvia",
    image: "/images/country-selection/countries/latvia.webp"
  },
  {
    id: 9,
    country: "Lithuania",
    link: "/destinations/study-in-lithuania",
    image: "/images/country-selection/countries/lithuania.webp"
  },
  {
    id: 10,
    country: "New Zealand",
    link: "/destinations/study-in-new-zealand",
    image: "/images/country-selection/countries/new-Zealand.webp"
  },
  {
    id: 11,
    country: "Singapore",
    link: "/destinations/study-in-singapore",
    image: "/images/country-selection/countries/singapore.webp"
  },
  {
    id: 12,
    country: "Sweden",
    link: "/destinations/study-in-sweden",
    image: "/images/country-selection/countries/sweden.webp"
  },
  {
    id: 13,
    country: "United Kingdom",
    link: "/destinations/study-in-united-kingdom",
    image: "/images/country-selection/countries/uk.webp"
  },
  {
    id: 14,
    country: "United States",
    link: "/destinations/study-in-usa",
    image: "/images/country-selection/countries/usa.webp"
  }
]

  const countrySelectionFactors = [
  {
    id: 1,
    title: "Start With Your Career Plan",
    description:
      "Your destination should support the career you want to build. Some countries may offer stronger opportunities for particular industries, research areas, or professional fields. We help you connect your career goals with suitable study destinations.",
    image: "/images/country-selection/content/career.webp",
    icon: FaBriefcase,
  },
  {
    id: 2,
    title: "Understand the Total Cost",
    description:
      "Don't look at tuition fees alone. Consider accommodation, food, transportation, health insurance, visa expenses, and other everyday costs before finalising your destination. We help you compare the overall financial requirements of different countries.",
    image: "/images/country-selection/content/cost.webp",
    icon: FaMoneyBillWave,
  },
  {
    id: 3,
    title: "Look Beyond the Degree",
    description:
      "Your journey doesn't necessarily end when you receive your qualification. Consider internship opportunities, employment prospects, industry exposure, and available post-study options when comparing countries.",
    image: "/images/country-selection/content/beyond-degree.webp",
    icon: FaUserGraduate,
  },
  {
    id: 4,
    title: "Consider Language & Lifestyle",
    description:
      "Think about the language used in your programme and your comfort with the local culture and lifestyle. A destination where you can adapt comfortably can make your overall international experience much more rewarding.",
    image: "/images/country-selection/content/language-and-lifestyle.webp",
    icon: FaGlobe,
  },
  {
    id: 5,
    title: "Check University Options",
    description:
      "A country may look attractive, but what matters is whether it offers suitable universities and programmes for your profile. We help you explore institutions based on your course, academic qualifications, budget, and career plans.",
    image: "/images/country-selection/content/university-options.webp",
    icon: FaUniversity,
  },
  {
    id: 6,
    title: "Understand Visa Requirements",
    description:
      "Every destination has its own student visa rules, documentation requirements, and financial criteria. Understanding these requirements early can help you plan your application more effectively.",
    image: "/images/country-selection/content/visa-requirements.webp",
    icon: FaPassport,
  },
  {
    id: 7,
    title: "Think About Student Life",
    description:
      "Your experience abroad extends beyond the classroom. Safety, public transport, accommodation, healthcare, student communities, climate, and overall quality of life are important factors when choosing where to live and study.",
    image: "/images/country-selection/content/student-life.webp",
    icon: FaUsers,
  },
];

  return (
    <>
      <Breadcrumb title={'Country Selection'} imgUrl={'/images/country-selection/country-selection-cover.webp'} />
      <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
          <div className='relative'>
             <Heading heading={'Find a Study Destination That Fits Your '} colorHeading={'Future'} />
             <p className='text-md lg:text-base font-manrope my-4 text-center'>The most important planned decision of your life is to choose the right destination for your
                studies. Tuition fees, career opportunities, living expenses, lifestyle, language, visa rules and
                post study plannings are few factors which may impact your experience.</p>
            <p className='text-md lg:text-base font-manrope text-center'>Indo European helps students to differentiate between study countries in terms of their
                academic profile, financial condition, career preferences etc. We want to help you choose a
                country where your education and future can take the right direction.</p>
              <div className='w-60 h-60 rounded-full bg-primary/10 absolute -bottom-20 left-10'/>
              <div className='w-20 h-20 rounded-full bg-secondary/10 absolute -bottom-20 left-0'/>
          </div>
        </div>
      </section>
      <section className='bg-linear-to-r from-primary/10 to-secondary/10 rounded-4xl mt-12'>
        <div className='max-w-6xl mx-auto'>
          <div className='py-12 px-10'>
             <Heading heading={'Explore Popular Study '} colorHeading={'Destinations'} />
             <p className='text-center text-md lg:text-base mt-4 font-manrope'>From European education hubs to globally recognised destinations, students can explore a wide range of options depending on their goals.</p>
             <div className='w-full'>
               <CountrySwiper data={countryOptions}/>
             </div>
          </div>
        </div>
      </section>
      <section className='max-w-6xl mx-auto'>
         <div className='py-12 px-10'>
          <Heading heading={'What Should You Consider Before Opting for '} colorHeading={'Any Country?'} />
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 mt-10'>
             {countrySelectionFactors.map((item, index) => {
              const Icon = item.icon;
              return <Card id={item.id} key={item.id} title={item.title} description={item.description} image={item.image} Icon={Icon} />
             })}
           </div>
         </div>
      </section>
      <section className='bg-linear-to-r from-primary/10 to-secondary/10 rounded-4xl'>
       <div className='max-w-6xl mx-auto'>
         <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5 py-12 px-10'>
           <div className=''>
              <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary'>How Indo European Helps You <span className='text-secondary'>Decide?</span></h2>
              <p className='text-md lg:text-base font-manrope mt-4'>Choosing between several countries can be confusing, especially when every destination
                seems to offer something different. Our counsellors take the time to understand your profile and
                help you compare suitable options instead of recommending a destination based on a one-size-
                fits-all approach.</p>
              <p className='text-md lg:text-base font-manrope mt-4'>We can assist you with:</p>
              <ul className='my-2 spac-y-2'>
                <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Profile assessment and career counselling</li>
                <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Country comparison based on your requirements</li>
                <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Course and university recommendations</li>
                <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Tuition fee and living cost guidance</li>
                <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Scholarship and funding information</li>
                <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Admission requirement evaluation</li>
                <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Student visa guidance</li>
                <li className='text-md lg:text-base font-manrope font-semibold'><CiPaperplane className='size-6 inline-block text-secondary'/>&nbsp;Pre-departure and accommodation support</li>
              </ul>
           </div>
           <div className=''>
                 <Image className='' width={500} height={500} src={'/images/country-selection/indo-hep.svg'} alt="Indo European Study Abroad Consultants - Help" />
           </div>
         </div>
       </div>
      </section>
      <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
         <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5'>
            <div className=''>
              <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary'>Your Country, Your Goals, Your <span className='text-secondary'>Choice</span></h2>
              <p className='text-md lg:text-base font-manrope mt-4'>There is no single best country to <Link className='font-semibold hover:underline' href={'/'}>study abroad for every student</Link>. The right choice depends
                on what you want to study, what you can invest, where you see yourself working, and the kind
                of student life you want to experience.</p>
                <p className='text-md lg:text-base font-manrope mt-2'>With the right information and professional guidance, you can make that decision with greater clarity.</p>
              <h4 className='text-md lg:text-base font-bold text-primary font-manrope mt-4'>*Make Your First Decision a Well-Informed One</h4>
              <p className='text-md lg:text-base font-manrope mt-2'>Tell us about your academic background, preferred course, budget, and career plans. Our
                experienced study abroad counsellors can help you explore destinations that align with your
                goals and take the next step towards your international education journey.</p>
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