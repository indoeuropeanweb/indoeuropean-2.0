import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import BranchList from '../components/branches/BranchList'
import branches from '@/public/data/branches'

const page = () => {
  return (
    <div className="">
       <Breadcrumb title={'Our Branches'} imgUrl={'/images/branches/head-office-delhi.webp'}/>
       <div className="py-12 px-6 max-w-6xl mx-auto relative">
         <BranchList branches={branches}/>
         <div className="rounded-full w-60 h-60 bg-primary/10 absolute -bottom-30 -left-10 z-1"/>
         <div className="rounded-full w-25 h-25 bg-secondary/10 absolute -bottom-20 left-47 z-1"/>
       </div>
    </div>
  )
}

export default page