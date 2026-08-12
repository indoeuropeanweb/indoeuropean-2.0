import Image from 'next/image'
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../components/Heading'
import CountrySwiper from '../components/CountrySwiper'

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
      <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
          <div className=''>
             <Heading heading={'Explore Popular Study '} colorHeading={'Destinations'} />
             <p className='text-center text-md lg:text-base mt-4 font-manrope'>From European education hubs to globally recognised destinations, students can explore a wide range of options depending on their goals.</p>
             <div className='w-full'>
               <CountrySwiper data={countryOptions}/>
             </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page