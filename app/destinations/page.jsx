import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

const page = () => {
  return (
    <>
      <Breadcrumb imgUrl={'/images/destinations/destinations-back.webp'} title={'Explore Study Abroad Destinations'}/>
      <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
           <h2 className='text-2xl lg:text-3xl font-Jakarta font-bold text-primary text-center'>Explore Destinations for your Study Abroad <span className='text-secondary'>Journey</span></h2>
           <p className='text-md lg:text-base font-manrope text-center mt-5'>Explore top study destinations offering quality education, diverse cultures, and exciting career opportunities. Compare universities, tuition fees, and student life to find the perfect fit for your goals. Begin your study abroad journey with confidence and take the first step toward a successful global future.</p>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-3 space-x-3'>
               
           </div>
        </div>
      </section>
    </>
  )
}

export default page