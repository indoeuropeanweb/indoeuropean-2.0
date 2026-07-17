import React from 'react'

const Heading = ({heading, colorHeading}) => {
  return (
    <h2 className='text-primary text-center text-2xl lg:text-3xl font-bold font-Jakarta'>{heading} <span className='text-secondary'>{colorHeading}</span></h2>
  )
}

export default Heading