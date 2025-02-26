import React from 'react'
import { font } from '@/app/Components/font/font'

const EApproach = () => {
  return (
    <div className={`${font.className} md:p-20 p-8 overflow-hidden space-y-8 md:space-y-0 md:space-x-8 text-white w-full flex justify-between items-center flex-col md:flex-row bg-zinc-900`}>
            <div>
                <img src='/approachlogo.png' className='h-auto w-full'/>
            </div>
            <div>
                <h1 className='font-extrabold text-4xl'>
                Brand Identity Development Agency</h1>
                <p className='max-w-xl mt-4'>LogoWeb USA is a leading brand identity development agency dedicated to helping businesses establish a strong and consistent brand image. From logo design to color palettes and typography, we work closely with our clients to comprehend their unique values and goals and develop a brand identity that perfectly captures their essence. Our experienced designers and branding experts are equipped with the knowledge and tools to create a cohesive and impactful brand identity that will set you apart in your industry. Trust us to help you define and communicate your brand to the world.</p>
            </div>
        </div>
  )
}

export default EApproach