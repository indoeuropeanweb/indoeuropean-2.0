import React from 'react'

const CoachingOptions = ({title, data}) => {
  return (
      <section className='max-w-6xl mx-auto'>
         <div className='py-12 px-10'>
             <h2 className='text-2xl lg:text-3xl text-primary font-bold font-Jakarta'>{title} <span className='text-secondary'>Peparation</span></h2>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                 {data.map((item, index) => {
                  const Icon = item.icon;
                  return <div className='space-y-2 shadow-2xl shadow-orange-100 border border-primary rounded-md px-3 py-3 hover:-translate-y-2 hover:bg-secondary group transition-all ease-in-out duration-500' key={item.id}>
                         <Icon className='size-12 text-white group-hover:text-secondary group-hover:bg-white p-3 bg-secondary rounded-full transition-all ease-in-out duration-500'/>
                         <h4 className='text-md lg:text-base text-primary font-Jakarta font-semibold group-hover:text-white transition-all ease-in-out duration-500'>{item.title}</h4>
                         <p className='text-sm lg:text-md font-manrope group-hover:text-white transition-all ease-in-out duration-500'>{item.description}</p>
                  </div>
                 })}
             </div>
         </div>
      </section>
  )
}

export default CoachingOptions