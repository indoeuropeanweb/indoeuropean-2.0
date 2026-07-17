'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import GlobalForm from '../components/GlobalForm';
import { 
  FaFacebook,
  FaInstagram, 
  FaYoutube,   
  FaUserGraduate,
  FaUniversity,
  FaFileAlt,
  FaPassport,
  FaAward,
  FaMoneyCheckAlt,
  FaLanguage,
  FaPlaneDeparture,
  FaRegBuilding 
} from "react-icons/fa";
import {MdArrowOutward} from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";

const page = () => {
    const [branchQuery, setBranchQuery] = useState('');
    const [filterBranches, setFilterBranches] = useState();

    const branches = [
        {
            "id": 1,
            "office": "New Delhi Office (Janakpuri)",
            "query": "new-delhi",
            "city": "New Delhi",
            "state": "Delhi",
            "address": "B3/172, Near Dharam Marg, Above Chaayos Cafe, Block B3, Janakpuri, New Delhi-110058.",
            "pincode": "110058",
            "enquiry": "/contact",
            "direction": "https://maps.google.com/?q=B3/172,+Near+Dharam+Marg,+Above+Chaayos+Cafe,+Block+B3,+Janakpuri,+New+Delhi+110058",
            "map":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21450.200220151026!2d77.091764!3d28.627559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05f1d6579fed%3A0x33f75f44700d6eca!2sIndo%20European%20-%20Language%20Centre!5e1!3m2!1sen!2sin!4v1784109689065!5m2!1sen!2sin"
        },
        {
            "id": 2,
            "office": "Chandigarh Office",
            "query": "chandigarh",
            "city": "Chandigarh",
            "state": "Punjab",
            "address": "SCO No. 64-65, 2nd Floor, Near Oyster Hotel, Sector 17A, Chandigarh, Punjab-160017.",
            "pincode": "160017",
            "enquiry": "/contact",
            "direction": "https://maps.google.com/?q=SCO+64-65,+Sector+17A,+Chandigarh+160017",
            "map": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10501.625228928193!2d76.787165!3d30.743633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0b8b7dd84f%3A0x23d21354b2606c2d!2sIndo%20European-%20Study%20Abroad%20Consultants%20in%20Chandigarh!5e1!3m2!1sen!2sin!4v1784109839279!5m2!1sen!2sin"
        },
        {
            "id": 3,
            "office": "Amritsar Office",
            "query": "amritsar",
            "city": "Amritsar",
            "state": "Punjab",
            "address": "1st Floor, Above Lookwell Bakery, Near Khalsa Women College, Nikah Singh Colony, Amritsar, Punjab-143001.",
            "pincode": "143001",
            "enquiry": "/contact",
            "direction": "https://maps.google.com/?q=Lookwell+Bakery,+Nikah+Singh+Colony,+Amritsar+143001",
            "map": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10403.397884546868!2d74.839431!3d31.633086999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919653b409017ab%3A0x44478ff66384d8a7!2sIndo%20European%20-%20Study%20Abroad%20Consultants%20in%20Amritsar%20(Punjab)!5e1!3m2!1sen!2sin!4v1784109880117!5m2!1sen!2sin"
        },
        {
            "id": 4,
            "office": "Ludhiana Office",
            "query": "ludhiana",
            "city": "Ludhiana",
            "state": "Punjab",
            "address": "2nd Floor, SCO-27, Adjacent to Park Plaza Hotel, Near Biryani by Kilo, Feroz Gandhi Market, Jila Kacheri Area, Model Gram, Ludhiana, Punjab-141001.",
            "pincode": "141001",
            "enquiry": "/contact",
            "direction": "https://maps.google.com/?q=SCO-27,+Feroz+Gandhi+Market,+Model+Gram,+Ludhiana+141001",
            "map": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10484.432983129009!2d75.832354!3d30.900972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83bc00000045%3A0xa121b869226db986!2sIndo%20European!5e1!3m2!1sen!2sin!4v1784109910432!5m2!1sen!2sins"
        },
        {
            "id": 5,
            "office": "Jalandhar Office",
            "query": "jalandhar",
            "city": "Jalandhar",
            "state": "Punjab",
            "address": "SCO 11-12, Basement, Axis Bank, Crystal Plaza, ITI College Road, Choti Baradari Part 1, Jalandhar, Punjab-144022.",
            "pincode": "144022",
            "enquiry": "/contact",
            "direction": "https://maps.google.com/?q=Crystal+Plaza,+ITI+College+Road,+Jalandhar+144022",
            "map": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10440.054424976117!2d75.596115!3d31.303818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b76134268f5%3A0x396b929afc8f5562!2sIndo%20European%20-%20Study%20Abroad%20Consultants%20in%20Jalandhar!5e1!3m2!1sen!2sin!4v1784109943646!5m2!1sen!2sin"
        },
        {
            "id": 6,
            "office": "Patiala Office",
            "query": "patiala",
            "city": "Patiala",
            "state": "Punjab",
            "address": "SCO#89, Second & Third Floor, New Leela Bhawan, Patiala, Punjab-147001.",
            "pincode": "147001",
            "enquiry": "/contact",
            "direction": "https://maps.google.com/?q=SCO+89,+New+Leela+Bhawan,+Patiala+147001",
            "map":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10545.883857484507!2d76.383443!3d30.335204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028c10c00006d%3A0xa4daf6061b1ab0fe!2sIndo%20European-%20Study%20Abroad%20Consultants%20in%20Patiala!5e1!3m2!1sen!2sin!4v1784109972562!5m2!1sen!2sin"
        }
    ]

    useEffect(() => {
    const newBranches = branches.filter(
        (branch) => branchQuery === '' || branch.query === branchQuery
    );

    setFilterBranches(newBranches);

    }, [branchQuery])


    const counsellingFeatures = [
        {
            icon: FaUserGraduate,
            title: "Free Study Abroad Counselling",
        },
        {
            icon: FaUniversity,
            title: "University & Course Selection",
        },
        {
            icon: FaFileAlt,
            title: "Admission Guidance",
        },
        {
            icon: FaPassport,
            title: "Student Visa Assistance",
        },
        {
            icon: FaAward,
            title: "Scholarship Information",
        },
        {
            icon: FaMoneyCheckAlt,
            title: "Education Loan Support",
        },
        {
            icon: FaLanguage,
            title: "IELTS & Interview Guidance",
        },
        {
            icon: FaPlaneDeparture,
            title: "Pre-Departure Assistance",
        },
        ];



  return (
    <>
      <Breadcrumb imgUrl={`/images/contact/contact-back.webp`} title='Turn Your Study Abroad Dreams Into Reality'/>
      <section className='mx-auto max-w-6xl mt-10'>
        <div className='py-12 px-10 shadow-lg shadow-zinc-400 rounded-4xl bg-primary/5'>
          <h2 className='text-2xl lg:text-3xl text-primary text-center font-Jakarta font-bold mb-4'><FiGlobe className='size-9 inline-block text-secondary' />&nbsp;&nbsp;Get in <span className='text-secondary'>Touch</span></h2>
          <p className='text-md lg:text-base text-center font-Jakarta mb-10'>Reach out to our team for expert assistance and clear answers to all your study abroad queries.</p>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5'>
             <div className=''>
             <div className='w-full aspect-video rounded-xl overflow-hidden'>
               <iframe className='w-full h-full rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.364761172088!2d77.09005236749175!3d28.63268771442888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bee270eea1%3A0xa4b0610ae05bae2d!2sIndo%20European%20%7C%20Study%20Abroad%20Consultants%20-%20Head%20Office!5e1!3m2!1sen!2sin!4v1784096766169!5m2!1sen!2sin" style={{border:'0'}} allowFullScreen loading="lazy" referrerPolicy=''></iframe>
             </div>
             <div className='space-y-3 mt-5'>
             <h4 className='text-lg lg:text-xl font-Jakarta font-semibold text-primary'><FaLocationDot className='size-5 inline-block'/>&nbsp;&nbsp;New Delhi (Head Office)</h4>
             <p className='text-md lg:text-base font-manrope'><span className='font-bold'>Address: </span> First Floor, 18/1 -A, Jail Road, Opposite Tilak Nagar Metro Station Gate no - 4, Above Sona Baker, New Delhi-110058.</p>
             <span className='inline-block font-medium'><IoCall className="inline-block size-5 text-secondary" />&nbsp;<Link className='text-base font-Jakarta' href={'tel:+91 9650133355'}>+91 9650133355</Link></span>
             <span className='ms-5 font-medium'><IoMdMail className="inline-block size-5 text-secondary" />&nbsp;<Link className='text-base font-Jakarta' href={'mailto:info@indoeuropean.in'}>info@indoeuropean.in</Link></span>
             <ul className='flex gap-3 mt-2'>
                <li><Link href="" className="" target='_blank'><FaFacebook className='size-6 inline-block text-secondary'/></Link></li>
                <li><Link href="" className="" target='_blank'><FaInstagram className='size-6 inline-block text-secondary'/></Link></li>
                <li><Link href="" className="" target='_blank'><FaYoutube className='size-7 inline-block text-secondary'/></Link></li>
             </ul>
             </div>
             </div>
          <div className='mx-auto lg:ms-auto relative z-1 w-full max-w-md rounded-xl border border-primary/10 bg-primary/10 p-8 backdrop-blur-4xl'>
             <GlobalForm />
          </div>
        </div>
        </div>
      </section>
      <section className='mx-auto max-w-6xl'>
        <div className='py-12 px-10'>
            <h2 className='text-2xl lg:text-3xl text-primary text-center font-Jakarta font-bold'><FaRegBuilding className='size-7 inline-block text-secondary'/>&nbsp;&nbsp;Our <span className='text-secondary'>Branches</span></h2>
            <p className='text-md lg:text-base text-center font-manrope mt-3'>Meet our experienced study abroad counsellors in person and discuss your plans in detail. We&#39;ll
                guide you through every stage of the admission process and help you choose the right
                university and destination for your future.</p>
            <div className='flex justify-end mt-5'>
                <select 
                value={branchQuery}
                onChange={(e) => setBranchQuery(e.target.value)}
                className='border border-zinc-400 rounded-md px-5 py-2'
                >
                    <option value=''>Select Place</option>
                    <option value='new-delhi'>New Delhi</option>
                    <option value='ludhiana'>Ludhiana</option>
                    <option value='chandigarh'>Chandigarh</option>
                    <option value='patiala'>Patiala</option>
                    <option value='amritsar'>Amritsar</option>
                    <option value='jalandhar'>Jalandhar</option>
                </select>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5 mt-5'>
                {filterBranches && filterBranches.map((branch, index) => {
                  return <div className='border-2 border-dotted border-secondary bg-primary/5 p-4 rounded-xl relative' key={branch.id}>
                        <div className="w-full aspect-video rounded-xl overflow-hidden">
                        <iframe
                            src={branch.map}
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        </div>
                       <div className='space-y-4 mt-3'>
                          <h4 className='text-lg lg:text-xl text-primary font-bold font-Jakarta'><FaLocationDot className='size-5 inline-block'/>&nbsp;&nbsp;{branch.office}</h4>
                          <p className='text-md lg:text-base font-manrope'><span className='font-bold'>Address: </span> {branch.address}</p>
                          <div className='flex justify-between items-center'>
                            <Link className='font-medium font-Jakarta' href={'tel:+919650133355'}><IoCall className='size-5 inline-block text-secondary'/>&nbsp;+91 9650133355</Link>
                            <Link className='font-medium font-Jakarta' href={'mailto:info@indoeuropean.in'}><IoMdMail className='size-5 inline-block text-secondary'/>&nbsp;info@indoeuropean.in</Link>
                          </div>
                       </div>
                       <Link href={branch.direction} target='_blank' className='absolute -top-2 -right-2 p-2 bg-secondary rounded-full'>
                         <MdArrowOutward className='text-white size-8'/>
                       </Link>
                  </div>
                })}
            </div>
        </div>
      </section>
      <section className='bg-linear-to-r from-secondary/10 to-primary/10 rounded-b-4xl'>
        <div className='py-12 px-10 max-w-6xl mx-auto'>
        <h2 className="text-3xl lg:text-4xl font-bold font-Jakarta text-center text-primary">
            Reach Out Us For {" "}
            <span className="text-secondary"> Queries</span>
        </h2>

        <p className="max-w-3xl mx-auto mt-5 text-center text-gray-600 leading-8 font-manrope">
            Planning to study in Europe? Connect with our experienced counsellors for
            personalized guidance based on your academic background, career goals, and
            preferred destination. From choosing the right university to securing your
            visa, we're here to support you at every step.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {counsellingFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
                <div
                key={index}
                className="group bg-white border border-secondary/10 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                    <Icon className="text-secondary text-2xl group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="mt-5 text-primary font-semibold font-Jakarta">
                    {item.title}
                </h3>
                </div>
            );
            })}
        </div>
        </div>
      </section>
    </>
  )
}

export default page