import React from 'react'
import { font } from '@/app/Components/font/font'

const WhyChoose = () => {
  return (
    <div className={`${font.className} bg-background text-white p-12 flex flex-col justify-center items-center`}>
        <h1 className='text-3xl font-extrabold md:text-5xl'>Branding</h1>
        <p className='md:text-xl text-sm max-w-3xl pt-6 text-center'>Businesses should brand themselves since it impacts how potential customers see your company, raises brand recognition , and stimulates sales. The brand of your business gives it a competitive advantage and raises its value.</p>
        <p className='md:text-xl text-sm max-w-3xl pt-6 text-center'>Branding is crucial for encouraging internal and external stakeholders to build everlasting relationships with the company. Richard Branson believes that "Branding demands commitment; commitment to continual re-invention; striking chords with people to stir their emotions; and commitment to imagination."</p>
        <hr className='border-2 w-full border-blue-800 mt-20'/>
    </div>  
  )
}

export default WhyChoose