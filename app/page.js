import SwiperSlider from "./components/SwipeSlider";
import { FaVideo, FaRegStar } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import Image from "next/image";
import { PiStudent } from "react-icons/pi";
import { RxPeople } from "react-icons/rx";
import { FaEarthAmericas } from "react-icons/fa6";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {

  const heroSlides = [
  {
    "id": 1,
    "title": "Ace The Test, Score Your Best",
    "subtitle": "Get Expert Guidance on IELTS, TOEFL, PTE, GRE, GMAT, SAT & more.",
    "backgroundImage": "/images/hero/hero-back-1.webp",
    "primaryButton": {
      "text": "Connect on Zoom",
      "icon": <FaVideo className="size-5 inline-block"/>,
      "link": "https://zoom.us/j/91022278457#success",
      "target": "_blank"
    },
    "secondaryButton": {
      "text": "Free Consultation",
      "icon": <MdSupportAgent className="size-5 inline-block"/>,
      "link": "/contact"
    }
  },
  {
    "id": 2,
    "title": "Master Every Exam with Confidence",
    "subtitle": "Personalized coaching, expert trainers, and proven strategies to help you achieve your target score.",
    "backgroundImage": "/images/hero/hero-back-2.webp",
    "primaryButton": {
      "text": "Connect on Zoom",
      "icon": <FaVideo className="size-5 inline-block"/>,
      "link": "https://zoom.us/j/91022278457#success",
      "target": "_blank"
    },
    "secondaryButton": {
      "text": "Free Consultation",
      "icon": <MdSupportAgent className="size-5 inline-block"/>,
      "link": "/contact"
    }
  },
  {
    "id": 3,
    "title": "Your Success Begins Here",
    "subtitle": "Prepare for global entrance exams with structured learning, mock tests, and one-on-one mentorship.",
    "backgroundImage": "/images/hero/hero-back-3.webp",
    "primaryButton": {
      "text": "Connect on Zoom",
      "icon": <FaVideo className="size-5 inline-block"/>,
      "link": "https://zoom.us/j/91022278457#success",
      "target": "_blank"
    },
    "secondaryButton": {
      "text": "Free Consultation",
      "icon": <MdSupportAgent className="size-5 inline-block"/>,
      "link": "/contact"
    }
  },
  {
    "id": 4,
    "title": "Reach Your Dream University Faster",
    "subtitle": "From test preparation to admissions and visa guidance, get complete support for your study abroad journey.",
    "backgroundImage": "/images/hero/hero-back-4.webp",
    "primaryButton": {
      "text": "Connect on Zoom",
      "icon": <FaVideo className="size-5 inline-block"/>,
      "link": "https://zoom.us/j/91022278457#success",
      "target": "_blank"
    },
    "secondaryButton": {
      "text": "Free Consultation",
      "icon": <MdSupportAgent className="size-5 inline-block"/>,
      "link": "/contact"
    }
  }
]

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
       {/* Hero Section */}
       <SwiperSlider heroSlides={heroSlides}/>
       <section className="mx-auto max-w-6xl">
            <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center space-y-5">
            <div className="mb-0">
                 <Image className="mx-auto" height={1000} width={800} src={'/images/aboutus/aboutus.webp'} alt={"About Indo European Study Abroad Consultants"} />
            </div>
              <div className="py-10 px-10">
              <div className="bg-secondary/10 text-secondary rounded-bl-full rounded-tr-full px-8 py-1 inline-block">
              <h2 className="text-base md:text-lg lg:text-xl font-semibold font-outfit">About Us</h2>
              </div>
              <h4 className="text-xl md:text-2xl lg:text-3xl fontl-bold text-primary font-outfit mt-5">Turn ambitions into admissions — it all starts with the Right Guidance</h4>
              <p className="text-sm md:text-md lg:text-base font-manrope mt-5">Get in touch with our expert counsellors to simplify the process, all the way from university applications to visa clearance</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-xl border border-primary/20 bg-white/60 backdrop-blur-xl shadow-lg px-6 py-5 transition-all duration-300 hover:bg-white/70">
                    <FaRegStar className="size-8 inline-block text-secondary"/>
                    <h6 className="text-xl lg:text-2xl font-bold text-primary">30+</h6>
                    <p className="text-xs lg:text-sm text-primary">Years of Experience</p>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-xl border border-primary/20 bg-white/60 backdrop-blur-xl shadow-lg px-6 py-5 transition-all duration-300 hover:bg-white/70">
                    <PiStudent className="size-8 inline-block text-secondary"/>
                    <h6 className="text-xl lg:text-2xl font-bold text-primary">2M+</h6>
                    <p className="text-xs lg:text-sm text-primary">Students Counselled</p>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-xl border border-primary/20 bg-white/60 backdrop-blur-xl shadow-lg px-6 py-5 transition-all duration-300 hover:bg-white/70">
                    <RxPeople className="size-8 inline-block text-secondary"/>
                    <h6 className="text-xl lg:text-2xl font-bold text-primary">150+</h6>
                    <p className="text-xs lg:text-sm text-primary">Expert Counsellors</p>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-xl border border-primary/20 bg-white/60 backdrop-blur-xl shadow-lg px-6 py-5 transition-all duration-300 hover:bg-white/70">
                    <FaEarthAmericas className="size-8 inline-block text-secondary"/>
                    <h6 className="text-xl lg:text-2xl font-bold text-primary">30+</h6>
                    <p className="text-xs lg:text-sm text-primary">Global Study Destinations</p>
                  </div>
              </div>
              <div className="mt-12 flex justify-end">
              <Link className="text-md py-2 px-4 rounded-full text-primary border border-primary hover:bg-primary hover:text-white transition-colors ease-in-out duration-500 inline-blocks lg:text-base font-manrope" href={'/about'}>Read More &nbsp;<FaArrowRightLong className="size-4 inline-block"/></Link>
              </div>
            </div>
            </div>
            </div>
       </section>
       <section className="">
         <div className="">

         </div>
       </section>
    </div>
  );
}
