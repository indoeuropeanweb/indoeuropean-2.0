import Link from "next/link"
import Breadcrumb from "../components/Breadcrumb"
import MyAccordion from "../components/MyAccordion"
import { FaArrowRightLong } from "react-icons/fa6"

const page = () => {

  const accordionData = [
  {
    "id": 1,
    "title": "I. Acceptance of Terms",
    "content": [
      "By visiting or using the Indo European website, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.",
      "If you are accessing the website on behalf of an organisation or institution, you confirm that you have the authority to accept these terms on its behalf."
    ]
  },
  {
    "id": 2,
    "title": "II. Use of Our Website",
    "content": [
      "Our website is intended to provide information about overseas education, university admissions, language test preparation, visa guidance, and related services.",
      "While using this website, you agree to:",
      {
        "type": "list",
        "items": [
          "Use the website only for lawful purposes.",
          "Provide accurate information when submitting enquiries or forms.",
          "Avoid any activity that may disrupt the website or its functionality.",
          "Refrain from attempting unauthorized access to our systems or data."
        ]
      },
      "Any misuse of the website may result in suspension or restriction of access without prior notice."
    ]
  },
  {
    "id": 3,
    "title": "III. Intellectual Property",
    "content": [
      "All content available on this website, including text, graphics, logos, images, videos, design elements, and other materials, is the property of Indo European unless otherwise stated.",
      "You may not copy, reproduce, modify, distribute, publish, or commercially use any website content without obtaining prior written permission from Indo European."
    ]
  },
  {
    "id": 4,
    "title": "IV. Third-Party Websites",
    "content": [
      "Our website may contain links to external websites for your convenience. These links do not imply endorsement of the information, products, or services offered by third parties.",
      "Indo European is not responsible for the availability, accuracy, security, or content of external websites. Users are encouraged to review the respective policies before interacting with any third-party platform."
    ]
  },
  {
    "id": 5,
    "title": "V. Privacy & Personal Information",
    "content": [
      "Your privacy is important to us. Any personal information collected through enquiry forms or other communication channels is handled in accordance with our Privacy Policy.",
      "By using our website, you consent to the collection and use of your information for admission counselling, communication, and service-related purposes."
    ]
  },
  {
    "id": 6,
    "title": "VI. Disclaimer of Liability",
    "content": [
      "Although we make every effort to provide accurate and updated information, Indo European does not guarantee that all website content will always be complete, error-free, or suitable for every individual situation.",
      "We shall not be held responsible for any direct, indirect, incidental, or consequential loss arising from the use of this website or reliance on the information provided.",
      "Students are advised to verify admission requirements, visa regulations, and university policies directly with the relevant institutions before making any final decisions."
    ]
  },
  {
    "id": 7,
    "title": "VII. Governing Law",
    "content": [
      "These Terms & Conditions shall be governed by the applicable laws of India. Any disputes arising from the use of this website or our services shall be subject to the jurisdiction of the competent courts in India.",
      "If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue to remain valid and effective."
    ]
  },
  {
    "id": 8,
    "title": "VIII. Changes to These Terms",
    "content": [
      "Indo European reserves the right to update, amend, or modify these Terms & Conditions at any time without prior notice.",
      "We encourage visitors to review this page periodically. Continued use of the website following any modifications will be considered acceptance of the updated Terms & Conditions."
    ]
  },
  {
    "id": 9,
    "title": "IX. Indemnification",
    "content": [
      "By using this website, you agree to indemnify and hold harmless Indo European, its management, employees, partners, and representatives from any claims, liabilities, damages, losses, or expenses resulting from your misuse of the website or violation of these Terms & Conditions."
    ]
  },
  {
    "id": 10,
    "title": "X. Contact Us",
    "content": [
      "If you have any questions regarding these Terms & Conditions or require further clarification, please feel free to contact our team."
    ]
  }
]

  return (
    <>
    <Breadcrumb title={'Terms & Conditions'} imgUrl={'/images/termsandconditions/termsandconditions.webp'}/>
    <section className='max-w-6xl mx-auto'>
      <div className='py-12 px-10'>
         <h2 className="text-2xl lg:text-3xl text-primary font-bold font-Jakarta text-center">Terms And Conditions</h2>
         <p className="text-md lg:text-base font-manrope text-center mt-5">Welcome to <Link className="font-semibold hover:underline" href="/">Indo European</Link>. These Terms &amp; Conditions govern your access to and use of our
          website, counselling services, and other related offerings. By accessing our website or using
          any of our services, you agree to comply with these terms. If you do not agree with any part of
          these Terms & Conditions, we recommend that you discontinue using our website and services.
          </p>
      </div>
    </section>
    <section className="max-w-6xl mx-auto">
       <div className="py-2 px-10">
         <div className="">
            {accordionData.map((accordion, index) => {
              return <MyAccordion key={accordion.id} id={accordion.id} title={accordion.title} content={accordion.content} />
            })}
         </div>
       </div>
    </section>
    <section className="max-w-6xl mx-auto">
      <div className="px-10 py-4 relative">
        <div className="bg-primary/10 absolute bottom-0 -left-22 w-60 h-60 rounded-full"/>
        <div className="bg-secondary/10 absolute bottom-0 -left-50 w-30 h-30 rounded-full"/>
        <div className="space-y-4 text-center">
          <h4 className="text-primary font-Jakarta font-bold text-lg lg:text-xl"><span className="text-primary">Indo European</span></h4>
          <span className="text-md lg:text-base font-bold font-manrope">Email: &nbsp;<Link className="hover:underline font-medium" href={'mailto:info@indoeuropean.in'}>info@indoeuropean.in</Link></span>
          <p className="text-md lg:text-base font-manrope my-4">Our team will be happy to assist you with any questions related to our services or website.</p>
          <Link className="hover:text-white transform hover:-translate-x-20 text-sm border hover:bg-primary transition-all duration-500 ease-in-out border-primary text-primary rounded-sm px-4 py-2 font-Jakarta font-semibold" href={'/contact'}>Contact Us &nbsp;<FaArrowRightLong className="inline-block size-4" /></Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default page