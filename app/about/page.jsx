import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";
import { FaArrowRightLong } from "react-icons/fa6";
import { servicesData, whyChooseUsData } from "@/public/data/homedata";
import ScrollAnimate from "../components/ScrollAnimate";
import GlobalForm from "../components/GlobalForm";


const page = () => {

  const backgroundImage = {
    backgroundImage: 'url(/images/aboutus/about-bottom-back.png), linear-gradient(to top, rgba(21, 9, 88, 0.25), rgba(245, 130, 32, 0.25))',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }


  return (
    <>
     <Breadcrumb imgUrl={`/images/aboutus/aboutus-back.webp`} title='Your Journey to Global Education Starts Here'/>
     <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-12 px-10">
          <div className="space-y-3 relative">
           <h2 className="text-lg lg:text-xl font-semibold text-secondary/75 font-Jakarta">About Indo European Study Abroad Consultants</h2>
           <h4 className="text-xl md:text-2xl font-bold text-primary font-Jakarta">Helping Indian Students Study Abroad with Confidence</h4>
           <p className="text-sm lg:text-md font-manrope text-justify">Choosing to study abroad is one of the most important decisions in a student's life. From selecting the right university to securing a student visa, every step requires expert guidance and careful planning. At Indo European Study Abroad Consultants, we are committed to making this journey simple, transparent, and successful for every student.<br /><br />
            With over 20+ years of experience in international education counselling, Indo European has earned a reputation as one of the trusted study abroad consultants in India. We have helped thousands of students pursue higher education at leading universities across Europe by providing honest advice, personalized counselling, and complete admission support.<br /><br />
            Whether you dream of studying in Germany, Latvia, Lithuania, Finland, Poland, Hungary, Sweden, Denmark, the Netherlands, France, or other European destinations, our experienced counselors guide you through every stage of the admission process with confidence.
           </p>
           <div className="rounded-full w-60 h-60 bg-primary/10 absolute -bottom-25 -left-10"/>
           <div className="rounded-full w-25 h-25 bg-secondary/10 absolute -bottom-20 left-40"/>
           </div>
           <div className=""> 
              <Image className="ms-auto" height={240} width={360} src={'/images/aboutus/left-section.png'} alt="Indo European Study Abroad COnsultancy" />
           </div>
        </div>
     </section>
     <section className="">
      <div className="py-12 px-10 mx-auto max-w-6xl">
         <h2 className="text-center font-bold text-2xl lg:text-3xl text-primary font-Jakarta">Who We <span className="text-secondary">Are ?</span></h2>
         <p className="text-center text-sm lg:text-md font-manrope mt-5">Indo European Study Abroad Consultants is an education consultancy dedicated to helping Indian students achieve their global education goals. We believe that every student deserves access to world-class education, regardless of their background.</p>
         <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-4">
          <ScrollAnimate direction="left" className="flex justify-center items-center gap-5 border-3 border-dotted border-secondary p-4 rounded-2xl">
            <div className="">
              <Image className="" height={450} width={450} src={'/images/aboutus/icons/vision-icon.svg'} alt="Our Vision" />
            </div>
            <div className="space-y-1">
              <h4 className="text-md lg:text-base font-bold font-Jakarta">Our Vision</h4>
              <p className="text-justify text-sm lg:text-md font-manrope">Our vision is to become one of India's most trusted study abroad consultants by connecting ambitious students with globally recognized universities while maintaining the highest standards of transparency, professionalism, and student satisfaction.</p>
            </div>
          </ScrollAnimate>
          <ScrollAnimate direction="right" className="flex justify-center items-center gap-5 border-3 border-dotted border-secondary p-4 rounded-2xl">
            <div className="">
              <Image className="" height={450} width={450} src={'/images/aboutus/icons/mission-icon.svg'} alt="Our Mission" />
            </div>
            <div className="space-y-1">
              <h4 className="text-md lg:text-base font-bold font-Jakarta">Our Mission</h4>
              <p className="text-justify text-sm lg:text-md font-manrope">Our mission is to make international education accessible through honest counselling, professional guidance, and complete support. We aim to help students make informed decisions that lead to successful academic and professional careers abroad.</p>
            </div>
          </ScrollAnimate>
         </div>
      </div>
     </section>
     <section className="py-12 px-10">
         <div className="max-w-6xl mx-auto">
          <h2 className="text-center font-bold text-2xl lg:text-3xl text-primary font-Jakarta">Our Study Abroad <span className="text-secondary">Services</span></h2>
          <p className="text-center text-sm lg:text-md font-manrope mt-5">We offer complete end-to-end assistance so students can focus on achieving their academic goals while we manage the complexities of the admission process.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
            {servicesData.map((service, index) => {
              return (<ScrollAnimate direction="down" key={service.id} className="my-5 flex flex-col hover:scale-105 duration-500 transition-all ease-in-out gap-4 rounded-2xl border border-primary">
                <Image className="rounded-t-2xl aspect-video" height={360} width={420} src={service.image} alt={service.alt} />
                <div className="px-4">
                  <h4 className="text-md lg:text-base font-semibold font-Jakarta">{service.title}</h4>
                  <p className="text-sm lg:text-md font-manrope mt-3">{service.description}</p>
                </div>
                {/* <button className="text-primary cursor-pointer text-end hover:text-secondary transition-all ease-in-out duration-500 inline-block rounded-2xl px-4 pb-4 mt-auto" href={`/services/${service.slug}`}>Read More &nbsp;<FaArrowRightLong className="size-4 inline-block" /></button> */}
            </ScrollAnimate>)
            })}
          </div>
         </div>
     </section>
     <section className="py-12 px-10">
         <div className="max-w-6xl mx-auto relative">
          <div className="absolute -top-25 right-5 w-25 h-25 rounded-full bg-secondary/10"/>
          <div className="absolute -top-25 right-15 w-50 h-50 rounded-full bg-primary/10"/>
          <h2 className="text-center font-bold text-2xl lg:text-3xl text-primary font-Jakarta">Why Choose Indo European Study Abroad <span className="text-secondary">Consultants? </span></h2>
          <p className="text-center text-sm lg:text-md font-manrope mt-5">Students and parents choose Indo European because of our commitment to quality, transparency, and student success.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-8 mt-10">
            {whyChooseUsData.map((item, index) => {
              const Icon = item.icon;

              return <ScrollAnimate direction="down" key={item.id}>
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
         </div>
     </section>
     <section className="rounded-t-4xl" style={backgroundImage}>
      <div className="max-w-6xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-12 px-10">
            <div className="">
              <h2 className="font-bold text-2xl lg:text-3xl text-primary font-Jakarta">Begin Your Study Abroad Journey <span className="text-secondary">Today</span></h2>
              <p className="mt-5 text-justify font-manrope">
              Are you looking for trusted study abroad consultants to study abroad? Indo European is there to help you.
              <br />
              <br />
              Book your free study abroad counselling session today and get expert guidance to choose the right university, admissions, scholarships, student visa, education loans, accommodation and everything else you need for a successful international education journey.
              <br />
              <br />
              The right guidance is the first step towards making your dream of studying abroad a reality. Indo European is there to guide you at every step. 
              </p>
            </div>
            <div className="">
              <div className="mx-auto lg:ms-auto relative z-1 w-full max-w-md rounded-xl border border-white/20 bg-black/20 p-8 backdrop-blur-4xl">
                <GlobalForm />
              </div>
            </div>
         </div>
      </div>
     </section>
    </>
  )
}

export default page