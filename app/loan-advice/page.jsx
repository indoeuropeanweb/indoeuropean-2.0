
import Breadcrumb from '../components/Breadcrumb'
import Image from 'next/image'
import Link from 'next/link'
import Heading from '../components/Heading'
import ScrollAnimate from '../components/ScrollAnimate'
import { CiPaperplane } from 'react-icons/ci'
import {
  FaBalanceScale,
  FaFileAlt,
  FaClipboardCheck,
  FaTasks,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import Card from '../components/Card'
import GlobalForm from '../components/GlobalForm'

const page = () => {

    const educationLoanServices = [
  {
    id: 1,
    title: "Loan Comparison Support",
    description:
      "We help you understand different financing options and compare lenders based on factors such as eligibility, collateral, repayment terms, and other applicable conditions.",
    image: "/images/loan-advice/content/loan-comparison.webp",
    icon: FaBalanceScale,
  },
  {
    id: 2,
    title: "Documentation Guidance",
    description:
      "Education loan applications require accurate documentation. Our team helps you understand the documents generally required and ensures your application is prepared in an organised manner.",
    image: "/images/loan-advice/content/documentation-guidance.webp",
    icon: FaFileAlt,
  },
  {
    id: 3,
    title: "Application Assistance",
    description:
      "From creating your loan application to submitting the required information, we guide you through the process and help reduce unnecessary delays caused by incomplete documentation.",
    image: "/images/loan-advice/content/application-assistance.webp",
    icon: FaClipboardCheck,
  },
  {
    id: 4,
    title: "Application Tracking",
    description:
      "Once your application is submitted, we can help you stay informed about the progress and coordinate with the relevant lending partner when required.",
    image: "/images/loan-advice/content/application-tracking.webp",
    icon: FaTasks,
  },
  {
    id: 5,
    title: "Disbursement Guidance",
    description:
      "After loan approval, understanding the disbursement process is equally important. We assist students with the next steps and help them understand the requirements communicated by the lender.",
    image: "/images/loan-advice/content/disbursement-guidance.webp",
    icon: FaMoneyCheckAlt,
  },
];

const educationLoanProcess = [
  {
    id: 1,
    title: "Share Your Requirements",
    description:
      "Tell us about your university, course, destination, estimated expenses, and funding requirements.",
  },
  {
    id: 2,
    title: "Understand Your Options",
    description:
      "Our team helps you explore suitable loan categories and lending options.",
  },
  {
    id: 3,
    title: "Prepare Your Application",
    description:
      "We guide you through the required documentation and application formalities.",
  },
  {
    id: 4,
    title: "Connect with the Lender",
    description:
      "Your application is shared with the appropriate lending partner for further evaluation.",
  },
  {
    id: 5,
    title: "Move Towards Disbursement",
    description:
      "Once approved, we assist you in understanding the next steps involved in loan disbursement.",
  },
];

  return (
    <>
    <Breadcrumb title={'Student Loan Advice'} imgUrl={'/images/loan-advice/loan-advice-cover.webp'}/>
    <section className='max-w-6xl mx-auto'>
      <div className='py-12 px-10'>
        <div className='relative'>
         <Heading heading={'Make Your Study Abroad Plans Financially '} colorHeading={'Possible'} />
         <p className='text-md lg:text-base font-manrope mt-4 text-center'>Thinking about studying abroad is a fabulous way to grow, but managing your tuition fees, living
            expenses, accommodation, and travel costs can sometimes feel overwhelming. An education
            loan for studying abroad may assist students in arranging these expenses without putting an
            unnecessary financial burden on their families. At IndoEuropean, we assist learners in
            understanding their education loan options and connecting with appropriate lending partners.</p>
        <p className='text-md lg:text-base font-manrope mt-2 text-center'>We guide you through every important stage, from comparing loan types to preparing
            documents and completing the application process.</p>
        <div className='bg-primary/10 w-50 h-50 rounded-full absolute left-25 -bottom-20' />
        <div className='bg-secondary/10 w-25 h-25 rounded-full absolute left-0 -bottom-20' />
        </div>
      </div>
    </section>
    <section className='max-w-6xl mx-auto'>
     <div className='py-12 px-10'>
        <Heading heading={'Find an Education Loan That Fits '} colorHeading={'Your Needs'} />
        <p className='text-md lg:text-base font-Jakarta text-center mt-4'>When any student plans to study abroad, they all have different types of budgets. That’s why
        getting a loan should not be based on the amount alone. Things to consider before you decide
        include collateral requirements, interest rates, repayment period, processing charges, eligibility
        and overall loan terms. Our counselors help you understand these factors so you can explore
        financing options that match your study plans.</p>
       <div className='mt-10'>
        <h4 className='text-xl lg:text-2xl text-center font-manrope font-bold text-primary'>Secured or Unsecured Education Loan?</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-4">
        <ScrollAnimate direction="left" className="flex justify-center items-center gap-5 border-3 border-dotted border-secondary p-4 rounded-2xl">
        <div className="">
            <Image className="" height={450} width={450} src={'/images/loan-advice/icons/secure-icon.svg'} alt="Our Vision" />
        </div>
        <div className="space-y-1">
            <h4 className="text-md lg:text-base font-bold font-Jakarta">Secured Education Loans</h4>
            <p className="text-justify text-sm lg:text-md font-manrope">A secured education loan usually requires you to offer collateral like property or some other acceptable security. Lenders and borrower profiles are different and this type of loan can provide access to higher funding levels or different repayment terms.</p>
        </div>
        </ScrollAnimate>
        <ScrollAnimate direction="right" className="flex justify-center items-center gap-5 border-3 border-dotted border-secondary p-4 rounded-2xl">
        <div className="">
            <Image className="" height={450} width={450} src={'/images/loan-advice/icons/unsecure-icon.svg'} alt="Our Mission" />
        </div>
        <div className="space-y-1">
            <h4 className="text-md lg:text-base font-bold font-Jakarta">Unsecured Education Loans</h4>
            <p className="text-justify text-sm lg:text-md font-manrope">Unsecured education loans do not generally require property as collateral, making them an option for students who may not have suitable assets to pledge. Eligibility and loan terms depend on the lender's policies and the applicant's profile.</p>
        </div>
        </ScrollAnimate>
        </div>
        <p className='text-md lg:text-base font-Jakarta mt-4'>*Our team can help you to understand the differences and explore which option may be
appropriate for your circumstances.</p>
       </div>
     </div>
    </section>
    <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-4xl'>
      <div className='max-w-6xl mx-auto'>
       <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 py-12 px-10'>
         <ScrollAnimate direction='left' className=''>
           <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary'>What Can Your Education <span className='text-secondary'>Loan Cover?</span></h2>
           <p className='text-md lg:text-base font-manrope mt-4'>Depending on the lender and the approved loan terms, an overseas education loan can help
cover expenses like:</p>
        <ul className='space-y-2 my-5'>
           <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='text-secondary inline-block size-6'/>&nbsp;University tuition fees</li>
           <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='text-secondary inline-block size-6'/>&nbsp;Accommodation expenses</li>
           <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='text-secondary inline-block size-6'/>&nbsp;Living and maintenance costs</li>
           <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='text-secondary inline-block size-6'/>&nbsp;Travel expenses</li>
           <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='text-secondary inline-block size-6'/>&nbsp;Books and study materials</li>
           <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='text-secondary inline-block size-6'/>&nbsp;Examination and other academic charges</li>
           <li className='text-md text-base font-manrope font-semibold text-primary'><CiPaperplane className='text-secondary inline-block size-6'/>&nbsp;Insurance and other approved education-related expenses</li>
        </ul>
        <p className='text-md lg:text-base font-manrope mt-4'>The exact expenses covered vary by lender, university, course, and loan agreement.</p>
         </ScrollAnimate>
         <ScrollAnimate direction='right' className=''>
              <Image className='mx-auto' height={480} width={320} src={'/images/loan-advice/education-loan-advice.png'} alt={'get education loan with our experts'} />
         </ScrollAnimate>
       </div>
      </div>
    </section>
    <section className='max-w-6xl mx-auto'>
     <div className='py-12 px-10'>
      <Heading heading={'Our Education Loan '} colorHeading={'Assistance'} />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 mt-10'>
        {educationLoanServices.map((item, index) => {
            const Icon = item.icon;
            return <Card id={item.id} key={item.id} title={item.title} description={item.description} image={item.image} Icon={Icon} />
        })}
      </div>
     </div>   
    </section>
    <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-4xl'>
      <div className='max-w-6xl mx-auto'>
       <div className='py-12 px-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10'>
          <div className=''>
            <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary'>Connect with Trusted Lending <span className='text-secondary'>Partners</span></h2>
            <p className='text-md lg:text-base font-manrope mt-4'>Indo European works with a network of education finance providers to help students explore
                different <Link className="font-semibold hover:underline" href={'/'}>study abroad loan</Link> options. Depending on your profile and requirements, you may be
                able to explore financing from banks, non-banking financial companies, and specialised
                education loan providers.</p>
            <p className='mt-2 text-md lg:text-base font-manrope'>Loan availability, interest rates, processing fees, eligibility criteria, repayment terms, and
            approved amounts vary between lenders. Students should review the latest terms directly with
            the respective lender before accepting a loan.</p>
          </div>
          <div className='mx-auto lg:ms-auto relative z-1 w-full max-w-md rounded-xl border border-white/10 bg-black/10 p-8 backdrop-blur-4xl'>
           <GlobalForm />
          </div>
       </div>
      </div>
    </section>
    <section className='max-w-6xl mx-auto'>
     <div className='py-12 px-10'>
        <Heading heading={'A Simple Approach to Education '} colorHeading={'Financing'} />
        <p className='text-md lg:text-base font-manrope mt-5'>We aim to make the loan process easier to understand:</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center mt-10 relative'>
          {educationLoanProcess.map((point, index) => {
            return <ScrollAnimate direction='down' key={point.id}>
                    <div className="relative border border-secondary shadow-lg shadow-orange-100 py-4 px-4 rounded-full hover:-translate-y-3 duration-500 ease-in-out">
                    <div className="bg-secondary absolute -left-4 -top-4 flex justify-center items-center rounded-full w-15 h-15">
                    <span className='inline-block text-white font-bold text-lg lg:text-xl'>{point.id}</span>
                    </div>
                    <div className="ms-16">
                        <h6 className="text-md lg:text-base font-Jakarta font-bold text-primary">{point.title}</h6>
                        <p className="text-xs text-primary font-manrope mt-1">{point.description}</p>
                    </div>
                </div>
            </ScrollAnimate>
          })}
          <div className='w-60 h-60 rounded-full bg-primary/10 absolute -bottom-20 right-10'/>
          <div className='w-20 h-20 rounded-full bg-secondary/10 absolute -bottom-20 right-0'/>
        </div>
     </div>
    </section>
    <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-b-4xl'>
      <div className='max-w-6xl mx-auto'>
        <div className='py-12 px-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10'>
        <div className=''>
            <h2 className='text-primary text-2xl lg:text-3xl font-Jakarta font-bold'>Why Take Loan Guidance from <span className='text-secondary'>Indo European?</span></h2>
            <p className='mt-4 font-manrope text-md lg:text-base'>Choosing an education loan can be a major financial decision. Our role is to simplify the process
            and help students make informed choices rather than recommending a one-size-fits-all solution.</p>
            <p className='mt-2 font-manrope text-md lg:text-base'>With our study abroad experience, we understand the financial requirements associated with
            international education and can guide you alongside your <Link className='font-semibold hover:underline' href={'/course-selection'}>course selection</Link>, <Link className='font-semibold hover:underline' href={'/universitys-selection'}>university
            selection</Link>, <Link className='font-semibold hover:underline' href={'/contact'}>admission</Link>, <Link className='font-semibold hover:underline' href={'/scholarships'}>scholarship</Link>, and visa planning.</p>
            <p className='mt-2 font-manrope text-md lg:text-base'>Don't let uncertainty about finances stop you from exploring your international education goals.
With the right information and timely planning, you can understand your funding options and
prepare your study abroad finances more effectively.</p>
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