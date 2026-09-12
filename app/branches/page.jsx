import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import BranchList from '../components/branches/BranchList'
import branches from '@/public/data/branches'

const page = () => {
  return (
    <div className="">
       <Breadcrumb title={'Our Branches'} imgUrl={'/images/branches/head-office-delhi.webp'}/>
       <div className="py-12 px-6">
         <BranchList branches={branches}/>
       </div>
    </div>
  )
}

export default page