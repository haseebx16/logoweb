import React from 'react'
import { font } from './font/font'

const OurExpertise = () => {
  return (
    <div className={`${font.className} md:p-20 p-8 overflow-hidden space-y-8 md:space-y-0 md:space-x-8 text-white w-full flex justify-between items-center flex-col md:flex-row bg-zinc-900`}>
        <div>
            <h1 className='font-extrabold text-5xl'>Our Expertise</h1>
            <p className='max-w-2xl mt-4'>Our brand experts, web designers, and e-commerce managers with extensive operational expertise in digital performance and marketing. With data analytics, our expertise becomes more evident. Additionally, our team of digital experts uses data as input for the mill to deliver our partners’ brands in front of their intended audience.</p>
        </div>
        <div>
            <img src='/our-expertise.jpg' className='h-80 w-auto'/>
        </div>
    </div>
  )
}

export default OurExpertise