
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className=''>
     <div className='max-w-6xl mx-auto'>
        <div className='flex justify-between flex-col sm:flex-row space-y-5 items-center px-5 border-b border-[#ccc] mt-5 rounded-md'>
              <Link className='' href={'/'}><Image className="rounded-sm" height={60} width={180} src="/images/logos/logo-dark.webp" alt="Indo European Study Abroad Consultants"/></Link>
              <ul className="flex justify-center items-center gap-5 mb-8 md:mb-0">
               <li><Link className="" href={'https://www.instagram.com/indo_european'}><FaInstagram className="text-primary size-5 inline-block" /></Link></li>
               <li><Link className="" href={'https://twitter.com/indo_european'}><FaTwitter className="text-primary size-5 inline-block" /></Link></li>
               <li><Link className="" href={'https://www.facebook.com/Indoeuropean.in'}><FaFacebook className="text-primary size-5 inline-block" /></Link></li>
               <li><Link className="" href={'https://www.youtube.com/IEESIndoEuropean'}><FaYoutube className="text-primary size-5 inline-block" /></Link></li>
               <li><Link className="" href={'https://www.linkedin.com/company/indo-european-study-abroad-consultants/'}><FaLinkedin className="text-primary size-5 inline-block" /></Link></li>
             </ul>
           </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-15 px-5 border-t-2 border-zinc-300">
          <div className="lg:col-span-3">
            <h2 className="font-Jakarta text-xl lg:text-2xl font-semibold text-primary">
              About Us
            </h2>
            <p className="font-monrope text-sm lg:text-base text-primary mt-3">
              With 20+ years of experience, <Link className='font-semibold hover:underline' href={'/'}>Indo European</Link> helps students achieve their global education goals with trusted guidance, top university admissions, visa support, and personalised assistance.
            </p>
          </div>

          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="relative text-sm lg:text-base font-bold uppercase text-primary after:absolute after:left-0 after:-bottom-1.5 after:h-1 after:w-20 after:rounded-full after:bg-linear-to-r after:from-secondary after:to-primary after:content-['']">
                Useful Links
              </h4>
              <ul className="mt-4 space-y-3">
                <li><Link href="/" className="font-semibold text-sm lg:text-base text-primary hover:underline">Home</Link></li>
                <li><Link href="/about" className="font-semibold text-sm lg:text-base text-primary hover:underline">About Us</Link></li>
                <li><Link href="/services" className="font-semibold text-sm lg:text-base text-primary hover:underline">Services</Link></li>
                <li><Link href="/collaborate" className="font-semibold text-sm lg:text-base text-primary hover:underline">Collaborate</Link></li>
                <li><Link href="/coaching" className="font-semibold text-sm lg:text-base text-primary hover:underline">Coaching</Link></li>
                <li><Link href="/contact" className="font-semibold text-sm lg:text-base text-primary hover:underline">Contact Us</Link></li>
                <li><Link href="/terms-and-conditions" className="font-semibold text-sm lg:text-base text-primary hover:underline">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="relative text-sm lg:text-base font-bold uppercase text-primary after:absolute after:left-0 after:-bottom-1.5 after:h-1 after:w-20 after:rounded-full after:bg-linear-to-r after:from-secondary after:to-primary after:content-['']">
                Assistance
              </h4>
              <ul className="mt-4 space-y-3">
                <li><Link href="/accommodation" className="font-semibold text-sm lg:text-base text-primary hover:underline">Accommodation</Link></li>
                <li><Link href="/course-selection" className="font-semibold text-sm lg:text-base text-primary hover:underline">Course Selection</Link></li>
                <li><Link href="/university-selection" className="font-semibold text-sm lg:text-base text-primary hover:underline">University Selection</Link></li>
                <li><Link href="/country-selection" className="font-semibold text-sm lg:text-base text-primary hover:underline">Country Selection</Link></li>
                <li><Link href="/scholarships" className="font-semibold text-sm lg:text-base text-primary hover:underline">Scholarships</Link></li>
                <li><Link href="/coaching-centres" className="font-semibold text-sm lg:text-base text-primary hover:underline">Coaching Centres</Link></li>
                <li><Link href="/loan-advice" className="font-semibold text-sm lg:text-base text-primary hover:underline">Student Loan Advice</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="relative text-sm lg:text-base font-bold uppercase text-primary after:absolute after:left-0 after:-bottom-1.5 after:h-1 after:w-20 after:rounded-full after:bg-linear-to-r after:from-secondary after:to-primary after:content-['']">
                Partnership
              </h4>
              <ul className="mt-4 space-y-3">
                <li><Link href="/associate-agents" className="font-semibold text-sm lg:text-base text-primary hover:underline">Associate Agents</Link></li>
                <li><Link href="/partner-franchise" className="font-semibold text-sm lg:text-base text-primary hover:underline">Partner Franchise</Link></li>
                <li><Link href="/indian-universities" className="font-semibold text-sm lg:text-base text-primary hover:underline">Indian Universities</Link></li>
                <li><Link href="/other-businesses" className="font-semibold text-sm lg:text-base text-primary hover:underline">Other Businesses</Link></li>
                <li><Link href="/overseas-institutes" className="font-semibold text-sm lg:text-base text-primary hover:underline">Overseas Institutes</Link></li>
              </ul>
            </div> 
            <div>
              <h4 className="relative text-sm lg:text-base font-bold uppercase text-primary after:absolute after:left-0 after:-bottom-1.5 after:h-1 after:w-20 after:rounded-full after:bg-linear-to-r after:from-secondary after:to-primary after:content-['']">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-3">
                <li><Link href="https://crm.indoeuropean.in" target="_blank" className="font-semibold text-sm lg:text-base text-primary hover:underline">CRM Login</Link></li>
                <li><Link href="https://payment.indoeuropean.in/payment-link.aspx" className="font-semibold text-sm lg:text-base text-primary hover:underline">Pay Online</Link></li>
                <li><Link href="/courses-finder" className="font-semibold text-sm lg:text-base text-primary hover:underline">Course Finder</Link></li>
                <li><Link href="/ielts-coaching" className="font-semibold text-sm lg:text-base text-primary hover:underline">IELTS Coaching</Link></li>
                {/* <li><Link href="/coaching" className="font-semibold text-sm lg:text-base text-primary hover:underline">Coaching</Link></li> */}
                <li><Link href="/contact" className="font-semibold text-sm lg:text-base text-primary hover:underline">Free Counselling</Link></li>
                <li><Link href="/events" className="font-semibold text-sm lg:text-base text-primary hover:underline">Events</Link></li>
                <li><Link href="/blogs" className="font-semibold text-sm lg:text-base text-primary hover:underline">Blogs</Link></li>
              </ul>
            </div>
          </div>
        </div>
     </div>
       <div className='text-center py-4 border-t border-white bg-primary relative'>
         <Image className='absolute left-10 top-2' height={180} width={110} src={'/images/logos/icef-agency.png'} alt="ICEF Agency"/>
         <h4 className="text-lg text-white lg:text-xl font-Jakarta relative font-semibold after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:bg-secondary after:w-15 after:h-1">Our Branches</h4>
          <ul className='flex justify-center items-center gap-2 py-5 text-white flex-wrap'>
             <li className='text-white'>New Delhi</li> |
             <li className='text-white'>Chandigarh</li> | 
             <li className='text-white'>Jalandhar</li> |
             <li className='text-white'>Ludhiana</li> |
             <li className='text-white'>Amritsar</li> |
             <li className='text-white'>Patiala</li> 
          </ul>
         <p className='text-white text-sm lg:text-md'>Copyright {year} <Link className='text-secondary' href={'/'}>Indo European Study Abroad Consultant</Link>. All Rights Reserved</p>
       </div>
    </footer>
  )
}

export default Footer