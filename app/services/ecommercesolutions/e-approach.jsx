import React from 'react'
import { font } from '@/app/Components/font/font'

const EApproach = () => {
  return (
    <div className={`${font.className} md:p-20 p-8 overflow-hidden space-y-8 md:space-y-0 md:space-x-8 text-white w-full flex justify-between items-center flex-col md:flex-row bg-zinc-900`}>
            <div>
                <img src='/approach.png' className='h-64 w-full'/>
            </div>
            <div>
                <h1 className='font-extrabold text-red-600 text-4xl'>
                E-Commerce Development Company In New York</h1>
                <p className='max-w-xl mt-4'>As part of our e-commerce website development services, LogoWeb USA builds any universal or one-of-a-kind features that clients may need for a smooth journey. In addition, we have the appropriate level of experience to do the task error-free, regardless of your business or technological model.</p>
            </div>
        </div>
  )
}

export default EApproach